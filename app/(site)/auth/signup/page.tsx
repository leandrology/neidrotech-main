import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page - Niedrotech",
  description: "This is Sign Up page for Startup Pro",
  // other metadata
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
