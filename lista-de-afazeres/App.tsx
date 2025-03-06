import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import Lista from './components/Lista';

const App = () => {
  const tarefasManha = [
    '1. Lavar as roupas sujas',
    '2. Lavar e guardar a louça',
    '3. Limpar a pia da cozinha',
    '4. Preparar o almoço',
    '5. Colocar as roupas no varal',
  ];

  const tarefasTarde = [
    '1. Limpar a mesa da cozinha',
    '2. Varrer e passar o pano nos cômodos da casa',
    '3. Lavar e guardar a louça',
    '4. Limpar a pia da cozinha',
    '5. Tirar as roupas do varal',
  ];

  const tarefasNoite = [
    '1. Levar o cachorro para passear',
    '2. Limpar os calçados utilizados durante o dia',
    '3. Preparar o jantar',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.tituloPrincipal}>Lista de Afazeres Domésticos</Text>
        <Lista titulo="Manhã" atividades={tarefasManha} />
        <Lista titulo="Tarde" atividades={tarefasTarde} />
        <Lista titulo="Noite" atividades={tarefasNoite} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  tituloPrincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;