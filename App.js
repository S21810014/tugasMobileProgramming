import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import RegistrationPage from './components/page/RegistrationPage'
import UsersListPage from './components/page/UsersListPage'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [page, setPage] = useState('Registration')  //state to manage which page to be shown

  //handler to change between pages
  const changePage = (pageName) => {
    setPage(pageName)
  }

  //Conditional Rendering
  if(page == 'Registration')
    return (
      <View>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RegistrationPage registerButtonHandler={() => changePage('Result')}/>
      </View>
    )
  else if(page == 'Result')
    return (
      <View>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <UsersListPage/>
      </View>
    )
};

export default App;
