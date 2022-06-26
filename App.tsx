import * as React from 'react';
import {useEffect} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import SplashScreen from 'react-native-splash-screen';

const screen = Dimensions.get('screen');

const SPLASH_DELAY = 500;

function App() {
  useEffect(() => {
    const splashTimeoutId = setTimeout(() => {
      SplashScreen.hide();
    }, SPLASH_DELAY);

    return () => clearTimeout(splashTimeoutId);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <WebView source={{uri: 'https://beerair.kr/'}} style={styles.webview} />
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
