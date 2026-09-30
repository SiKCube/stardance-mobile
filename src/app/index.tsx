import Card from "@/components/ui/card";
import CardBtn from "@/components/ui/card-btn";
import SmallCard from "@/components/ui/small-card";
import StarButton from "@/components/ui/star-button";
import { Text } from "react-native";
import {SafeAreaView } from "react-native-safe-area-context"

export default function Index() {
  return (
    <SafeAreaView
      style={{
        padding: 16
      }}
    >
      <CardBtn
        onclick={() => {}}
      >
        <Text>XDD</Text>
      </CardBtn>
      <Card>
        <Text>PEPE</Text>
      </Card>
      <SmallCard>
        <Text style={{ color: "red" }}>Test</Text>
      </SmallCard>
      <StarButton
        text="Hi"
        type="p"
        onclick={() => { }}
      />
      <StarButton
        text="Hi 2"
        type="s"
        onclick={() => { }}
      />
      <StarButton
        text="Hi"
        type="p"
        onclick={() => { }}
        disable={true}
      />
    </SafeAreaView>
  );
}
