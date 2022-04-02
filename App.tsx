import * as React from 'react';
import {StyleSheet, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#61sfd" />
      <ScrollView style={styles.scrollView}>
        <WebView
          source={{uri: 'https://kscode.vercel.app/'}}
          style={styles.webview}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    height: 875,
  },
  scrollView: {
    flexGrow: 1,
  },
});
