import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Box, Center, Text } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const List = ({ navigation }: { navigation: any }) => {
  return (
    <Box safeArea>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Center>
          <Text>ListScreen</Text>
        </Center>
      </TouchableOpacity>
    </Box>
  )
}

const Detail = () => {
  return (
    <Box safeArea>
      <Center>
        <MaterialIcons name='home' size={40} color='#FF0000' />
      </Center>
    </Box>
  )
}

const Stack = createNativeStackNavigator()

const MainScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='List' component={List} />
      <Stack.Screen name='Detail' component={Detail} />
    </Stack.Navigator>
  )
}

export default MainScreen
