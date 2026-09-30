import { COLORS } from "@/consts";
import { View } from "react-native";

export default function Card({children}: {children: React.ReactNode}) {
  return (
    <View style={{
      backgroundColor: COLORS.s_gray,
      borderWidth: 2,
      borderColor: COLORS.border_card_color,
      padding: 20,
      borderRadius: 8,
    }}>
      {children}
    </View>
  )
}