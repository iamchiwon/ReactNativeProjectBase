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

<details>
<summary>Native Base</summary>
- https://nativebase.io/

```bash
yarn add native-base react-native-svg styled-components styled-system react-native-safe-area-context
npx pod-install ios
```

App.tsx
```typescript
import { NativeBaseProvider } from 'native-base'

const App = () => {
  return (
    <NativeBaseProvider>
      ...
    </NativeBaseProvider>
  )
}
```

<br/>
</details>

<details>
<summary>React Navigation</summary>

- https://reactnavigation.org/

```bash
yarn add @react-navigation/native
yarn add react-native-screens react-native-safe-area-context
yarn add @react-navigation/native-stack
yarn add react-native-gesture-handler
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
</details>

<details>
  <summary>Vector Icons</summary>

- https://github.com/oblador/react-native-vector-icons

```bash
yarn add react-native-vector-icons
npx pod-install ios
npx react-native link react-native-vector-icons
```

<br/>
</details>

<details>
  <summary>Reanimated</summary>

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

android/app/build.gradle
```gradle
project.ext.react = [
  enableHermes: true
]
```

MainApplication.kt
```kotlin
override fun getJSIModulePackage(): JSIModulePackage? {
    return ReanimatedJSIModulePackage()
}
```

androdi/proguard-rules.pro
```gradle
-keep class com.facebook.react.turbomodule.** { *; }
```

<br/>
</details>

<details>
<summary>Custom Font (Android)</summary>

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

<br/>
</details>

<details>
<summary>Reanimated</summary>

- https://github.com/DylanVann/react-native-fast-image

```bash
yarn add react-native-fast-image
npx pod-install ios
```

androdi/proguard-rules.pro
```gradle
-keep public class com.dylanvann.fastimage.* {*;}
-keep public class com.dylanvann.fastimage.** {*;}
-keep public class * implements com.bumptech.glide.module.GlideModule
-keep public class * extends com.bumptech.glide.module.AppGlideModule
-keep public enum com.bumptech.glide.load.ImageHeaderParser$** {
  **[] $VALUES;
  public *;
}
```

<br/>
</details>