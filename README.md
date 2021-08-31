# Project base : react-native

react-native project with swift and kotlin.

## react-native

- https://reactnative.dev/
- [Setting up the development environment](https://reactnative.dev/docs/0.64/environment-setup)

## Creation template

- https://github.com/demchenkoalex/react-native-better-template

```bash
npx react-native init {AppName} --template react-native-better-template
```

## Components

- https://nativebase.io/

```bash
yarn add native-base react-native-svg styled-components styled-system react-native-safe-area-context
npx pod-install ios
```

## Navigation

- https://reactnavigation.org/

```bash
yarn add @react-navigation/native
yarn add react-native-screens react-native-safe-area-context
yarn add @react-navigation/native-stack
npx pod-install ios
```

MainActivity.kt
```kotlin
import android.os.Bundle

...

override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
}
```

App.tsx
```typescript
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## Vector Icons

- https://github.com/oblador/react-native-vector-icons

```bash
yarn add react-native-vector-icons
npx pod-install ios
npx react-native link react-native-vector-icons
```