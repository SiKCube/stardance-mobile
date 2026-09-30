import { COLORS } from "@/consts"
import { Dispatch } from "react"
import { TextInput } from "react-native"

interface Props {
  text: string
  setText: Dispatch<string>
  disable?: boolean
  placeholder: string
}

export default function StarInput({ text, placeholder, disable, setText }: Props) {
  return (
    <TextInput
      style={{
        backgroundColor: COLORS.s_gray,
        borderWidth: 2,
        borderColor: COLORS.border_card_color,
        padding: 10,
        color: COLORS.p_white
      }}
      placeholder={placeholder}
      value={text}
      onChangeText={setText}
      editable={disable ? disable : false}
    />
  )
}