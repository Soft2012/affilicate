"use client";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Dashboard } from "./_components/dashboard";
import { redirect } from "next/navigation";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  const user = useCurrentUser();
  return user?.isOAuth && user.role === "ADMIN" ? <Dashboard children={children} /> : redirect("/home");
};

export default ProtectedLayout;
