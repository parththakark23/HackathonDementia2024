import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#1D3D47",
    flexDirection: "row",
    gap: 8,
  },
});

const ScheduleScreen = () => {
  return (
    <>
      <ThemedText>My schedule will look like this</ThemedText>
    </>
  );
};

export default ScheduleScreen;
