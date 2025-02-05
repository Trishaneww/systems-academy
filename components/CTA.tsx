import React from 'react'
import { IoCheckmarkSharp } from "react-icons/io5";
import { Button } from './ui/button';
import Image1 from '../public/assets/stock1.png';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const CTA = () => {
  return (
    <div className="flex justify-center items-center bg-[#0C1117] w-full lg:h-[55rem] text-white mt-24 lg:mt-12">
        <div className="flex flex-col-reverse md:flex-row w-[92%] lg:w-[78%] lg:h-[70%] bg-[#1D4ED8] bg-gradient-to-b from-[#a9c0ff] to-[#1D4ED8] rounded-2xl p-6 gap-2">
            <section className="flex flex-col gap-6 lg:w-[60%] xl:pl-20 pt-10">
                <p className="text-xl md:text-4xl lg:text-6xl font-bold">Sign up today to start benefiting from our system</p>
                <div className="flex flex-col gap-2">
                    <p className="text-base lg:text-2xl font-bold">What You Will Receive</p>
                    <ul className="flex flex-col text-base lg:text-xl">
                        <li className="flex flex-row items-center gap-2"> <IoCheckmarkSharp size={30}/><p>Our exclusive course content</p></li>
                        <li className="flex flex-row items-center gap-2"> <IoCheckmarkSharp size={30}/><p>Access to our private discord community</p></li>
                        <li className="flex flex-row items-center gap-2"> <IoCheckmarkSharp size={30}/><p>Our weekly betting picks</p></li>
                        <li className="flex flex-row items-center gap-2"> <IoCheckmarkSharp size={30}/><p>Fully downloadable course slides</p></li>
                    </ul>
                </div>
                <Link href="/course">
                    <Button className="w-[300px] h-[55px] bg-slate-50 text-slate-950 text-base lg:text-lg font-bold">Enroll Now <ChevronRight /></Button>
                </Link>    
            </section>

            <section className="flex md:w-[50%] lg:w-[40%] xl:pr-20 pt-10">
                <div className="flex items-center justify-center lg:w-[80%] h-full bg-[#00030F] rounded-2xl py-6">
                <div className="lg:w-[78%] w-[70%]">
                    <Image 
                        src={Image1}
                        alt="Sports betting app on phone"
                    />
                </div>
                </div>
            </section>
        </div>

    </div>
  )
}

export default CTA