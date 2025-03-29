import { AppHeader } from "@/components/navigation";
import { Stack } from "expo-router";

export default function AppLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <AppHeader />,
        headerShown: true,
        animation: "fade",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="course/[id]"
        options={{
          title: "Course Details",
        }}
      />
      <Stack.Screen
        name="assignment/[id]"
        options={{
          title: "Assignment",
        }}
      />
    </Stack>
  );
}
