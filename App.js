import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, StatusBar } from 'react-native';

export default function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState('');

  const solveQuadratic = () => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      setResult('Vui lòng nhập đầy đủ và chính xác các hệ số.');
      return;
    }

    const discriminant = bNum * bNum - 4 * aNum * cNum;

    if (discriminant > 0) {
      const root1 = (-bNum + Math.sqrt(discriminant)) / (2 * aNum);
      const root2 = (-bNum - Math.sqrt(discriminant)) / (2 * aNum);
      setResult(`Nghiệm của phương trình là: x1 = ${root1}, x2 = ${root2}`);
    } else if (discriminant === 0) {
      const root = -bNum / (2 * aNum);
      setResult(`Phương trình có nghiệm kép: x = ${root}`);
    } else {
      setResult('Phương trình vô nghiệm.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số a"
        keyboardType="numeric"
        onChangeText={setA}
        value={a}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số b"
        keyboardType="numeric"
        onChangeText={setB}
        value={b}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số c"
        keyboardType="numeric"
        onChangeText={setC}
        value={c}
      />
      <Button title="Giải phương trình" onPress={solveQuadratic} />
      <Text style={styles.result}>{result}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});