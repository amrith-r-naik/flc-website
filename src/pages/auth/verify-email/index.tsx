import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { toast, Toaster } from 'sonner';
import { api } from '~/utils/api';

const index = () => {
    const router = useRouter();
    const { token } = router.query;
    const [verificationToken, setVerificationToken] = useState('');
    const [loading, setLoading] = useState(true);
    const verifyEmail = api.auth.verifyEmail.useMutation({
        onSuccess: async () => {
            toast.success("Email verified successfully!");
            setLoading(false)
            router.push('/register')
        },
        onError: ({ message }) => {
            toast.dismiss();
            toast.error(message);
        },
        
    });

    useEffect(() => {
        if (token) {
            // Handle case where token is an array of strings
            const tokenString = Array.isArray(token) ? token[0] : token;
            console.log("token string: ", tokenString);
            setVerificationToken(tokenString!);
        }
    }, [token]);

    useEffect(() => {
        if (verificationToken) {
            console.log("verificationToken: ", verificationToken);
            verifyEmail.mutate({ token: verificationToken });
        }
    }, [verificationToken]);
    return (
        <>
            <Toaster position="bottom-center" />
            <div className='h-screen flex items-center'>
                <div className=' -translate-y-10 order-1 mx-auto w-4/5  justify-center rounded-lg bg-white/15  lg:order-2 '>
                    <Link href='/register' className=''>
                        <h2>
                            Back to login!
                        </h2>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default index