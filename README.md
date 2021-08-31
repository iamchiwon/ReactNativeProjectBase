# Project base : react-native

react-native project with typescript, swift and kotlin.

<br/>

## react-native

- https://reactnative.dev/
- [Setting up the development environment](https://reactnative.dev/docs/0.64/environment-setup)

<br/>

## Creation template

- https://github.com/demchenkoalex/react-native-better-template

```bash
npx react-native init {AppName} --template react-native-better-template
```

<br/>

## Components

- https://nativebase.io/

```bash
yarn add native-base react-native-svg styled-components styled-system react-native-safe-area-context
npx pod-install ios
```

<br/>

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

<br/>

## Vector Icons

- https://github.com/oblador/react-native-vector-icons

```bash
yarn add react-native-vector-icons
npx pod-install ios
npx react-native link react-native-vector-icons
```

<br/>

## Reanimated

- https://docs.swmansion.com/react-native-reanimated/

```bash
yarn add react-native-reanimated@next
npx pod-install ios
```

babel.config.js
```javascript
module.exports = {
    ...
    plugins: [
        ...
        'react-native-reanimated/plugin',
    ],
};
```

> ⚠️   
> Reanimated plugin has to be listed last.  
> v2.3.x not support react-native v0.65.x

<br/>

## Custom Font

- [Gothic A1](https://fonts.google.com/specimen/Gothic+A1)
- Use default font on android.
  (There are no variable weights for the default Korean font.)

Label.tsx
```typescript
import { ITextProps, Text } from 'native-base'
import React from 'react'
import { Platform } from 'react-native'

interface Props extends ITextProps {}
export const Label = (props: Props) => {
  const { children, style, color, ...otherProps } = props
  const isIOS = Platform.OS === 'ios'

  if (isIOS) {
    return (
      <Text {...otherProps} style={style} color={color || 'black'}>
        {children}
      </Text>
    )
  }

  const fontFamilies = [
    'GothicA1-Thin',
    'GothicA1-ExtraLight',
    'GothicA1-Light',
    'GothicA1-Regular',
    'GothicA1-Medium',
    'GothicA1-SemiBold',
    'GothicA1-Bold',
    'GothicA1-ExtraBold',
    'GothicA1-Black',
  ]

  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style

  const family =
    typeof otherProps.fontWeight === 'number'
      ? fontFamilies[otherProps.fontWeight / 100 - 1]
      : fontFamilies[4] // GothicA1-Medium

  const lineHeight =
    typeof otherProps.fontSize === 'number'
      ? otherProps.fontSize * 1.2
      : undefined

  return (
    <Text
      {...otherProps}
      color={color || 'black'}
      style={[
        {
          fontFamily: family,
          lineHeight: lineHeight,
        },
        style,
      ]}
    >
      {children}
    </Text>
  )
}
```