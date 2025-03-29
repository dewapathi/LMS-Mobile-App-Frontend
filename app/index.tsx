import React from "react";
import { Redirect } from "expo-router";
// import { useAuth } from "@/contexts/AuthContext";

// export default function index() {
//   // return <Redirect href={"/(auth)/onboarding"} />;
//   return <Redirect href={"/(auth)/forgot-password"} />;
// }


export default function Index() {
  // const { user } = useAuth();
  const user = true;

  // If user is authenticated, go to home page
  // If not, go to onboarding
  return <Redirect href={user ? "/(app)" : "/(auth)/onboarding"} />;
}
