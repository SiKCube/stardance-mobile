import { COLORS } from "@/consts";
import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false
      }}
    >
      <Tabs.Screen
        name="projects"
        options={{
          title: "Projects",
          tabBarActiveBackgroundColor: COLORS.p_white,
          tabBarIcon: ({ focused }) =>
            <Image
              source={require("../../../assets/expo.icon/Assets/expo-symbol 2.svg")}
              resizeMode="contain"
              style={{ width: 38, opacity: focused ? 1 : 0.5 }}
            />
        }}
      />
      <Tabs.Screen
        name="reminders"
        options={{
          title: "Projects",
          tabBarActiveBackgroundColor: COLORS.p_white,
          tabBarIcon: ({ focused }) =>
            <Image
              source={require("../../../assets/expo.icon/Assets/expo-symbol 2.svg")}
              resizeMode="contain"
              style={{ width: 38, opacity: focused ? 1 : 0.5 }}
            />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Projects",
          tabBarActiveBackgroundColor: COLORS.p_white,
          tabBarIcon: ({ focused }) =>
            <Image
              source={require("../../../assets/expo.icon/Assets/expo-symbol 2.svg")}
              resizeMode="contain"
              style={{ width: 38, opacity: focused ? 1 : 0.5 }}
            />
        }}
      />
    </Tabs>
  )
}
