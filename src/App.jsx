import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import pati_data from './components/patistore.json';
import Products from './components/Products';

const App = () => {
  const [text, onChangeText] = React.useState('Ara.. ');
  const renderPati = ({item}) => <Products pati={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={pati_data}
        renderItem={renderPati}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 50,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#cd5c5c',
    padding: 5,
  },
  input: {
    height: 40,
    margin: 10,
    backgroundColor: '#f8f8ff',
    color: '#dcdcdc',
    padding: 10,
    borderRadius: 5,
  },
});

export default App;
