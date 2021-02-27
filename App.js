import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

export default function App() {
  let [fonts] = useFonts({ Inter_900Black });

  if (!fonts) {
    return <Text>font is loading</Text>;
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Inter_900Black" }}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
