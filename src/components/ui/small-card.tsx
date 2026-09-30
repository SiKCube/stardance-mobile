import { COLORS } from "@/consts";
import { View } from "react-native";

export default function SmallCard({children}: {children: React.ReactNode}) {
  return (
    <View style={{
      borderWidth: 2,
      borderColor: COLORS.border_card_color,
      padding: 10,
      borderRadius: 8,
    }}>
      {children}
    </View>
  )
}