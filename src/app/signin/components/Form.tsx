"use client";


import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { FC } from "react";
// import { signIn } from "next-auth/react"


const Form: FC = () => {

    const handleLogin = () => {
        const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
        const redirectUri = `${process.env.NODE_ENV === 'development' ? `${String(process.env.NEXT_PUBLIC_DOMAIN_API)}/auth/callback`:`${String(process.env.NEXT_PUBLIC_DOMAIN_CLIENT)}/api/auth/callback`}`;
        const scope = 'email profile';
        const responseType = 'code';
    
        const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&prompt=consent`;
    
        window.location.href = googleAuthUrl;
      };

   
    return (

        <Card className="flex w-full flex-wrap md:flex-nowrap gap-4 m-auto w-52">
            <CardBody>
                <button onClick={handleLogin}>Sign in with Google</button>
            </CardBody>
        </Card>
    )
}

export default Form