import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

const AddDebitScreen = () => {
    const navigation = useNavigation()


  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');

  const handleAddDebit = () => {
    if (!descricao || !valor || !categoria || !dataVencimento) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    dataDebito = {
        descricao,
        valor,
        categoria,
        dataVencimento
    }
    // Lógica para processar a inserção do débito
    console.log('Descrição:', descricao);
    console.log('Valor:', valor);
    console.log('Categoria:', categoria);
    console.log('Data Vencimento:', dataVencimento);
    // Implemente a lógica de inserção do débito aqui

    Alert.alert('Sucessfull', 'Débito inserido com sucesso.')

    // Resetar os campos após a inserção (ou você pode navegar para outra tela, etc.)
    setDescricao('');
    setValor('');
    setCategoria('');
    setDataVencimento('');
    navigation.navigate('Home')
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Text style={styles.title}>Adicionar Débito</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Compras no mercado"
            value={descricao}
            onChangeText={(text) => setDescricao(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Valor</Text>
          <TextInput
            style={styles.input}
            placeholder="R$ 0,00"
            keyboardType="numeric"
            value={valor}
            onChangeText={(text) => setValor(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Categoria</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Alimentação"
            value={categoria}
            onChangeText={(text) => setCategoria(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Data Vencimento</Text>
          <TextInput
            style={styles.input}
            data={dataVencimento}
            mode="date"
            format="DD/MM/YYYY"
            placeholder="DD/MM/AAAA"
            value={dataVencimento}
            onChangeText={(text) => setDataVencimento(text)}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleAddDebit}>
          <Text style={styles.buttonText}>Adicionar Débito</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#38a69d',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddDebitScreen;