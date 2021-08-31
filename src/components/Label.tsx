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
