import { ITextProps, Text } from 'native-base'
import React from 'react'
import { Platform } from 'react-native'

interface Props extends ITextProps {}
export const Label = (props: Props) => {
  let { children, color, fontWeight, fontSize, style, ...otherProps } = props
  const isIOS = Platform.OS === 'ios'

  if (isIOS) {
    return (
      <Text
        color={color || 'black'}
        fontWeight={fontWeight}
        fontSize={fontSize}
        style={style}
        {...otherProps}
      >
        {children}
      </Text>
    )
  }

  // Pretendard
  // https://cactus.tistory.com/306

  const fontFamilies = [
    'Pretendard-Thin',
    'Pretendard-ExtraLight',
    'Pretendard-Light',
    'Pretendard-Regular',
    'Pretendard-Medium',
    'Pretendard-SemiBold',
    'Pretendard-Bold',
    'Pretendard-ExtraBold',
    'Pretendard-Black',
  ]

  const family =
    typeof fontWeight === 'number'
      ? fontFamilies[fontWeight / 100 - 1]
      : fontFamilies[3]

  fontWeight = typeof fontWeight === 'number' ? undefined : fontWeight
  fontSize = typeof fontSize === 'number' ? fontSize * 0.8 : fontSize

  return (
    <Text
      color={color || 'black'}
      fontWeight={fontWeight}
      fontSize={fontSize}
      style={[
        {
          fontFamily: family,
        },
        style,
      ]}
      {...otherProps}
    >
      {children}
    </Text>
  )
}
