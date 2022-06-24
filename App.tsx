import * as React from 'react';
import {StyleSheet, SafeAreaView, StatusBar, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';

const screen = Dimensions.get('screen');

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <WebView source={{uri: 'https://beerair.ml/'}} style={styles.webview} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  webview: {
    height: screen.height,
  },
  scrollView: {
    flexGrow: 1,
  },
});

export default App;
