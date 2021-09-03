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

  // 에스코어 드림 (S-Core Dream)
  // https://www.s-core.co.kr/company/font/
  //
  // 에스코어의 글꼴의 지적 재산권은 (주)에스코어에 있습니다.
  // 에스코어 홈페이지를 통해 배포되는 에스코어 글꼴은 개인 및 기업 사용자를 포함한 모든 사용자에게 무료로 제공되며 재배포가 가능합니다.
  // (단, 파일의 수정 및 폰트 자체를 판매하는 행위는 불가합니다.)

  const fontFamilies = [
    'SCDream1',
    'SCDream2',
    'SCDream3',
    'SCDream4',
    'SCDream5',
    'SCDream6',
    'SCDream7',
    'SCDream8',
    'SCDream9',
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
