import React from 'react'
import { TbTargetArrow } from "react-icons/tb";
import { RiGraduationCapFill } from "react-icons/ri";
import { TbBellCheck } from "react-icons/tb";
import { FaChartColumn } from "react-icons/fa6";
import { PiStrategy } from "react-icons/pi";
import { MdOutlineSettingsSystemDaydream } from "react-icons/md";
import Link from 'next/link';
import { Button } from './ui/button';

const Benefits = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 text-white py-12 lg:py-20 px-4 -mb-24">
        <p className="text-2xl lg:text-4xl font-bold">Kick off workflows on any GitHub event to automate tasks</p>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-12">
            <div className="flex flex-col items-start justify-start w-full lg:w-[380px] text-[#a9c0ff] bg-[#161B22] border-[1px] border-gray-800 px-4 rounded-xl h-[250px] pt-8">
                <TbTargetArrow size={50}/>
                <p className="text-slate-50 text-xl lg:text-xl font-bold mt-2">Targeting Core Players</p>
                <p className="text-slate-300">We provide daily updates on which core players to focus on for betting.</p>
            </div>

            <div className="flex flex-col items-start justify-start w-full lg:w-[380px] text-[#a9c0ff] bg-[#161B22] border-[1px] border-gray-800 px-4 rounded-xl h-[250px] pt-8">
                <RiGraduationCapFill  size={50}/>
                <p className="text-slate-50 text-xl lg:text-xl font-bold mt-2">Educational Consulting</p>
                <p className="text-slate-300">Our primary offering is a comprehensive educational program that teaches clients our proprietary betting system, focusing on NBA basketball betting.</p>
            </div>

            <div className="flex flex-col items-start justify-start w-full lg:w-[380px] text-[#a9c0ff] bg-[#161B22] border-[1px] border-gray-800 px-4 rounded-xl h-[250px] pt-8">
                <FaChartColumn size={50}/>
                <p className="text-slate-50 text-xl lg:text-xl font-bold mt-2">Game Analysis Tools</p>
                <p className="text-slate-300">We teach clients how to analyze their bets both during and after games to maintain a balanced betting position.</p>
            </div>

            <div className="flex flex-col items-start justify-start w-full lg:w-[380px] text-[#a9c0ff] bg-[#161B22] border-[1px] border-gray-800 px-4 rounded-xl h-[250px] pt-8">
                <TbBellCheck size={50}/>
                <p className="text-slate-50 text-xl lg:text-xl font-bold mt-2">Real-time Updates</p>
                <p className="text-slate-300">Your service includes timely notifications about potential betting opportunities, delivered through platforms like Discord.</p>
            </div>

            <div className="flex flex-col items-start justify-start w-full lg:w-[380px] text-[#a9c0ff] bg-[#161B22] border-[1px] border-gray-800 px-4 rounded-xl h-[250px] pt-8">
                <PiStrategy size={50}/>
                <p className="text-slate-50 text-xl lg:text-xl font-bold mt-2">Parlay Betting Strategy</p>
                <p className="text-slate-300">We teach clients how to effectively use parlays, combining multiple factors into a single bet for potentially higher payouts.</p>
            </div>

            <div className="flex flex-col items-start justify-start w-full lg:w-[380px] text-[#a9c0ff] bg-[#161B22] border-[1px] border-gray-800 px-4 rounded-xl h-[250px] pt-8">
                <MdOutlineSettingsSystemDaydream size={50}/>
                <p className="text-slate-50 text-xl lg:text-xl font-bold mt-2">The System</p>
                <p className="text-slate-300">Our unique strategy revolves around identifying games where our system applies, which typically changes the game dynamics and creates betting opportunities.</p>
            </div>
        </section>
        {/* <Link href="/">
        <Button className="bg-[#345ac1] h-[50px] w-[200px] text-lg font-bold">Enroll Now</Button>
        </Link> */}
    </div>
  )
}

export default Benefits