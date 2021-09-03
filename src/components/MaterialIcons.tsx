import React from 'react'
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialIcons'

type Props = {
  name: string
  size: number
  color?: string
}
export const MaterialIcons = (props: Props) => {
  return (
    <Icon name={props.name} size={props.size} color={props.color || 'black'} />
  )
}
