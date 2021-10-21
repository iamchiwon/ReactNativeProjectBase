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

- Customized
  - MainApplication.kt -> MainApplication.java  
    : react-native link not works with kotlin file.
  - [android] Use custom font as default  
    : android default fonts are sucks.
  - Pre-built components included  
    : every project would use them.

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

- [Pretendard](https://cactus.tistory.com/306)
- Use as default font for android.
  (There are no variable weights for the default Korean font)

<br/>
</details>

<details>
<summary>Fast Image</summary>

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

<details>
<summary>Splash Screen</summary>

- [SplashScreen](https://github.com/crazycodeboy/react-native-splash-screen)

```bash
yarn add react-native-splash-screen
npx pod-install ios
```

MainActivity.kt
```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    SplashScreen.show(this);
    super.onCreate(null)
}
```

Better-Bridging-Header.h
```objc
...
#import "RNSplashScreen.h"
```

AppDelegate.swift
```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    initializeFlipper(with: application)

    ...

    RNSplashScreen.show()
    return true
  }
```


<br/>
</details>

<br/>
</details>

<details>
<summary></summary>

<br/>
</details>