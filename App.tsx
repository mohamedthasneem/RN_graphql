import React from 'react';
import {UtilityThemeProvider} from 'react-native-design-utility';
import {NavigationContainer} from '@react-navigation/native';

import {theme} from './src/constants/theme';
import MainStackNavigator from './src/navigators/MainStackNavigator';

import i18n from './src/i18n/i18n';
import {View, Button} from 'react-native';

const changeLang = (ln: string) => {
  return () => {
    i18n.changeLanguage(ln);
    console.log('lang change to ' + ln);
  };
};

const App = () => {
  return (
    <UtilityThemeProvider theme={theme}>
      <NavigationContainer>
        <View>
          <Button title="en" onPress={changeLang('en')} />
          <Button title="ko" onPress={changeLang('ko')} />
        </View>
        <MainStackNavigator />
      </NavigationContainer>
    </UtilityThemeProvider>
  );
};

export default App;
