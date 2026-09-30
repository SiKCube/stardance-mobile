import { COLORS } from "@/consts";
import { TouchableHighlight } from "react-native";

interface Props {
  children: React.ReactNode
  onclick: () => void
}

export default function CardBtn({ children, onclick }: Props) {
  return (
    <TouchableHighlight
      style={{
        backgroundColor: COLORS.s_gray,
        borderWidth: 2,
        borderColor: COLORS.border_card_color,
        padding: 20,
        borderRadius: 8,
      }}
      onPress={() => onclick()}
    >
      {children}
    </TouchableHighlight>
  )
}