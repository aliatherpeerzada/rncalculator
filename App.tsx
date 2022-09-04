import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Switch, SafeAreaView } from 'react-native';
import Button from './src/components/Button';
import MyKeyboard from './src/components/MyKeyBoard';
import { ThemeContext } from './src/context/ThemeContext';
import { myColors } from './src/styles/Color';
export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>

      <SafeAreaView style={theme === 'light' ?

        styles.container :
        [styles.container, { backgroundColor: '#000' }]}>
        <StatusBar style="auto" />
        <Switch style={{marginTop:20}} value={theme === 'light'}
          onValueChange={() => setTheme(theme == 'light' ? 'dark' : 'light')}
        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
