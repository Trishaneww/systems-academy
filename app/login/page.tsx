import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className="flex items-center justify-center bg-slate-50 h-[100vh] p-2">

        <section className="flex flex-col items-center justify-center px-12 w-full text-lg">
            <Link href="/"><Image
                    width={150}
                    height={150}
                    src="/assets/logo.png"
                    alt="the systems academy thumbnail"
                /></Link>
                
            {/* <p className="font-bold text-lg">THE SYSTEMS ACADEMY</p> */}
            <p className="text-6xl font-bold mt-24 mb-2">Welcome Back</p>
            <p>Enter your email and password to access your account</p>

            <form className="flex flex-col gap-4 w-full max-w-[500px] mt-12">
                <div className="flex flex-col w-full">
                  <p className="font-semibold">Email</p>
                  <Input type="email" placeholder='Enter your email' name="email" className="w-full h-[50px] p-2 bg-slate-100 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200"/>
                </div>
                <div className="flex flex-col w-full">
                  <p className="font-semibold">Password</p>
                  <Input type="email" placeholder='Enter your password' name="email" className="w-full h-[50px] p-2 bg-slate-100 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200"/>
                </div>
                <Button className=" w-full h-[55px] text-lg">Sign In</Button>
                <Button className="flex items-center justify-center w-full h-[55px] border-[1px] bg-transparent hover:bg-slate-50 hover:text-slate-950 border-gray-200 mt-4 text-slate-950 text-lg gap-4">
                <Image
                    width={20}
                    height={20}
                    src="/assets/google.png"
                    alt="the systems academy thumbnail"
                />
                <p>Sign in with Google</p>
                </Button>
            </form>

            <p className="mt-12">Dont have an account? <span className="font-bold">Sign Up</span></p>
        </section>

    </div>
  )
}

export default Login