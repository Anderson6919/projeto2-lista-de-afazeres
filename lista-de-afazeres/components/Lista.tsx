import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Lista = ({ titulo, atividades }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      {atividades.map((atividade, index) => (
        <Text key={index} style={styles.atividade}>{atividade}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,

  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  atividade: {
    fontSize: 16,
    marginBottom: 3,
  },
});

export default Lista;