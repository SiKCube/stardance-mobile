import { COLORS } from "@/consts"
import { StyleSheet, Text, TouchableHighlight, View } from "react-native"

interface Props {
  text: string
  type: "p" | "s"
  onclick: () => void
  disable?: boolean
}

export default function StarButton({ text, type, onclick, disable }: Props) {
  return (
    <TouchableHighlight
      style={{ ...(type === "p" ? styles.primary : styles.secondary), opacity: disable ? 0.5 : 1 }}
      onPress={() => onclick()}
      disabled={disable ? disable : false}
    >
      <View style={{ justifyContent: 'center', alignContent: 'center', width: "100%" }}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  primary: {
    backgroundColor: COLORS.p_white,
    borderWidth: 2,
    borderColor: COLORS.p_white,
    borderRadius: 100,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  text: {
    color: COLORS.bg,
    fontWeight: "bold",
  },
  secondary: {
    backgroundColor: COLORS.s_gray,
    color: COLORS.bg,
    borderWidth: 2,
    borderColor: COLORS.border_card_color,
    borderRadius: 100,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8
  },
})
