import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Box, Center } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'

import { Label } from '../../components/Label'
import { MaterialIcons } from '../../components/MaterialIcons'

const List = ({ navigation }: { navigation: any }) => {
  return (
    <Box safeArea>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Center>
          {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((w) => (
            <Label fontSize={20} fontWeight={w} key={w}>
              헬로월드 Hello World
            </Label>
          ))}
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
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name='List' component={List} />
      <Stack.Screen name='Detail' component={Detail} />
    </Stack.Navigator>
  )
}

export default MainScreen
