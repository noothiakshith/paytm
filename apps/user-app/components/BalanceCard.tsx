import React from 'react'
import { Card, CardContent, CardHeader, CardFooter, CardDescription, CardTitle } from '@/components/ui/card';

const BalanceCard = ({amount,locked}:{amount:number,locked:number}) => {
  return (
    <div>
        <Card>
  <CardHeader>
    <CardTitle>Balance</CardTitle>
    <CardDescription>Balance Amount</CardDescription>
  </CardHeader>
  <CardContent>
    <div className='flex justify-between border-b border-slate-300 pb-2'>
        <div>Unlocked Balance</div>
        <div>{amount/100}</div>
    </div>
    <div className='flex justify-between border-b border-slate-300 py-2'>
        <div>Locked Balance</div>
        <div>{locked/100}</div>
    </div>
    <div className='flex justify-between border-b border-slate-300 py-2'>
        <div>Total Balance</div>
        <div>{(amount+locked)/100}</div>
    </div>
  </CardContent>
</Card>

    </div>
  )
}

export default BalanceCard