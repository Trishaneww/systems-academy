import React from 'react'
import { IoCheckmarkSharp } from "react-icons/io5";
import { Button } from './ui/button';
import Image1 from '../public/assets/stock1.png';
import Image from 'next/image';

const CTA = () => {
  return (
    <div className="flex justify-center items-center bg-[#00030F] w-full h-[35rem] text-white mb-20">
        <div className="flex flex-row w-[78%] h-[98%] bg-[#1D4ED8] rounded-2xl p-6">
            <section className="flex flex-col gap-6 w-[60%] pl-20 pt-10">
                <p className="text-6xl font-bold">Sign up today to start benefiting from our system</p>
                <div className="flex flex-col gap-2">
                    <p className="text-2xl">What You Will Receive</p>
                    <ul className="flex flex-col text-xl">
                        <li className="flex flex-row items-center gap-2"> <IoCheckmarkSharp size={30}/><p>Our exclusive course content</p></li>
                        <li className="flex flex-row items-center gap-2"> <IoCheckmarkSharp size={30}/><p>Our exclusive course content</p></li>
                        <li className="flex flex-row items-center gap-2"> <IoCheckmarkSharp size={30}/><p>Our exclusive course content</p></li>
                        <li className="flex flex-row items-center gap-2"> <IoCheckmarkSharp size={30}/><p>Our exclusive course content</p></li>
                    </ul>
                </div>
                <Button className="w-[300px] h-[55px] bg-slate-50 text-slate-950 text-xl">Enroll Now</Button>

            </section>
            <section className="flex w-[40%] pr-20 pt-10">
                <div className="flex items-center justify-center w-[80%] h-full bg-[#00030F] rounded-2xl">
                <div className="w-[78%] hidden lg:flex">
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