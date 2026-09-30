import { COLORS } from "@/consts";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{ contentStyle: { backgroundColor: COLORS.bg }, headerShown: false }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
