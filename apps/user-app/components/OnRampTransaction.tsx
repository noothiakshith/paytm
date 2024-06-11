import React from 'react';
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from '@/components/ui/card';

const OnRampTransaction = ({ transactions }: { transactions: {
    time: Date;
    amount: number;
    status: string;
    provider: string;
}[] }) => {

    return (
        <div className='pt-3'>
            <Card className='pt-2'>
                <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>This is the view of the Transactions</CardDescription>
                </CardHeader>
                <CardContent>
                     {transactions.map((transactions,index)=>{
                        return(
                           <div className='flex justify-between'>
                            <div>
                                <div className='text-sm'>
                                    Recived Inr
                                </div>
                                <div className='text-slate-600 text-xs'>
                                    {transactions.time.toDateString()}
                                </div>
                            </div>
                            <div>
                                +{transactions.amount/100}
                            </div>
                           </div>
                        )
                    })} 
                </CardContent>
            </Card>
        </div>
    );
};

export default OnRampTransaction;
