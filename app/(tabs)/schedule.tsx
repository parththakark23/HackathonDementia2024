import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, Text } from "react-native";
import ReactDOM from "react-dom/client";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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

const queryClient = new QueryClient();

const ScheduleScreen = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <ComponentData />
      </QueryClientProvider>
    </>
  );
};

const ComponentData = () => {
  // const { isPending, error, data, isFetching } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: async () => {
  //     const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  //     return await response.json();
  //   },
  // });

  // if (isPending) return "Loading...";

  // if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <ThemedText>My schedule will look like this</ThemedText>
    </>
  );
};

export default ScheduleScreen;
