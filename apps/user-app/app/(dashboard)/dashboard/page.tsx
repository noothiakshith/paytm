"use client"
import AddMoneyCard from '@/components/AddMoneyCard'
import { Appbar } from '@/components/Appbar'
import { authOptions } from '@/lib/auth'
import { signIn, signOut,useSession } from "next-auth/react";
import React from 'react'

const Dashboard = () => {
  const session = useSession();
  return (
    <div>Dashboard
      <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} ></Appbar>
      <AddMoneyCard />
    </div>

  )
}

export default Dashboard