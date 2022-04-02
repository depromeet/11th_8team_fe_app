import * as React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#61sfd" />
      <WebView source={{uri: 'https://sulsul-fe.vercel.app/'}} />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
