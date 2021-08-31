import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import MainScreen from './screens/main/MainScreen'

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MainScreen />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App
