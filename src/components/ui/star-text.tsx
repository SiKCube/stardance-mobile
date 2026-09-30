import { ComposeFontWeight } from "expo-router/build/utils/font";
import { Text } from "react-native";

interface Props {
  text: string
  size: number
  color: string
  weight?: ComposeFontWeight
}

export default function StarText({ text, size, color, weight }: Props) {
  return (
    <Text style={{ fontSize: size, fontWeight: weight ? weight : "500", color: color }}>
      {text}
    </Text>
  )
}

