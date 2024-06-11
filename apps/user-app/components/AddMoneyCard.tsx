"use client"
import React from 'react';
import { Card, CardContent, CardHeader, CardFooter, CardDescription, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const SUPPORTED_BANKS = [
    {
        name: 'HDFC Bank',
        redirecturl: "https://www.hdfcbank.com"
    },
    {
        name: 'Axis Bank',
        redirecturl: "https://www.axisbank.com"
    }
];

const AddMoneyCard = () => {
    const [redirectUrl, setRedirectUrl] = React.useState(SUPPORTED_BANKS[0]?.redirecturl);
    const router = useRouter();
    
    const handleBankSelect = (value:any) => {
        console.log("Selected bank:", value);
        const selectedBank = SUPPORTED_BANKS.find(bank => bank.name === value)?.redirecturl;
        console.log("Selected bank object:", selectedBank);
        if (selectedBank) {
            setRedirectUrl(selectedBank);
        }
    };
    
    
    const handleProceed = () => {
        console.log("Redirecting to:", redirectUrl);
        if (redirectUrl) {
            router.push(redirectUrl);
        } else {
            console.log("No redirect URL found.");
            // Handle if no bank is selected
        }
    };
    

    return (
        <div>
            <Card className='w-[460px]'>
                <CardHeader>
                    <CardTitle>Add Money</CardTitle>
                    <CardDescription>You are adding to the wallet</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className='grid w-full items-center gap-4'>
                            <div className='flex flex-col space-y-1.5'>
                                <Label htmlFor="amount">Amount</Label>
                                <Input id="amount" placeholder='Enter the amount' />
                            </div>
                            <div className='flex flex-col space-y-1.5'>
                                <Label htmlFor="bank">Select Bank</Label>
                                <Select>
                                    <SelectTrigger className="w-[180px] w-full">
                                        <SelectValue placeholder="Select the bank account" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {SUPPORTED_BANKS.map((bank, index) => (
                                            <SelectItem key={index} value={bank.name} onSelect={handleBankSelect}>{bank.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className='flex justify-center pt-5'>
                    <Button className='w-full' onClick={handleProceed}>Proceed</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default AddMoneyCard;
