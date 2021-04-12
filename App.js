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
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [data, setData] = useState([])
  const [page, setPage] = useState('Registration')

  const changePage = (pageName) => {
    setPage(pageName)
  }

  if(page == 'Registration')
    return (
      <View>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RegistrationPage setData={setData} registerButtonHandler={() => changePage('Result')}/>
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
