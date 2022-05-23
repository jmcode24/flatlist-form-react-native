import React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import Flatlist from './src/component/FlatlistRender';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Flatlist />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;