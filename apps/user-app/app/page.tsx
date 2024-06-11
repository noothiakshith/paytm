"use client"
import { Button } from "@repo/ui/button";
import Image from "next/image";
import { signIn, signOut,useSession } from "next-auth/react";
import { Appbar } from "../components/Appbar";

export default function Home() {
  const session = useSession();
  return (
    <>
    <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} ></Appbar>
    </>
  );
}
