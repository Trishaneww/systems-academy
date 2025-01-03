"use client"
import React, { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Introduction from './Introduction'
import Image from 'next/image'

const Student = () => {
    const [page, setPage] = useState("chapter1")

  return (
    <div className="flex bg-[#00030F]">
        <section className="flex flex-col px-4 py-6 mt-24 w-[24%] h-[100vh] text-slate-50 gap-4">
        <p className="ml-4">Course</p>
        <p className="ml-4 -mt-2 font-bold text-xl">NBA Betting Masterclass</p>
        <Accordion type="single" collapsible className="flex flex-col gap-2 w-full -mb-6">
            <AccordionItem  className="border-none p-4  rounded-2xl" value={'question 7'}>
                <AccordionTrigger className="text-base text-left">Course Introduction</AccordionTrigger>
                    <AccordionContent className="text-base  mt-6 flex flex-col gap-2">
                        <ul className="flex flex-col gap-4">
                            <li className="flex gap-2">
                                <div className="h-[25px] w-[25px] rounded-full border-[1px] border-white flex justify-center items-center">1</div>
                                <p>Course Overview</p>
                            </li>
                            <li className="flex gap-2">
                                <div className="h-[25px] w-[25px] rounded-full border-[1px] border-white flex justify-center items-center">2</div>
                                <p>Disclaimer</p>
                            </li>
                        </ul>
                    </AccordionContent>
            </AccordionItem>
        </Accordion>

            <p className="ml-4 hover:cursor-pointer" onClick={() => {setPage("chapter2")}}>Basics of gambling and NBA</p>
            <p className="ml-4 hover:cursor-pointer">Gambling psychology & fallacies</p>
            <p className="ml-4 hover:cursor-pointer">The system</p>
            <p className="ml-4 hover:cursor-pointer">Various platforms and their offerings</p>
            <p className="ml-4 hover:cursor-pointer">Team-specific information</p>
            <p className="ml-4 hover:cursor-pointer">Daily/Weekly specific information</p>
            <p className="ml-4 hover:cursor-pointer">How to evaluate your bets</p>
        </section>


        <section className="flex justify-cente w-full rounded-2xl bg-slate-100 mt-20">
            {page === "chapter1" && (
             <Introduction />
        )}
            {page === "chapter2" && (
            <div className="py-2 px-2 flex justify-center items-center">
                 <Image
                                src="/assets/mockcourse.png"
                                width={2000}
                                height={2000}
                                alt="course thumbnail" 
                                className="rounded-lg"
                            />
            </div>
        )}
        </section>


       

    </div>
  )
}

export default Student