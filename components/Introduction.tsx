import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Image from 'next/image'
import { faqData } from '@/data'
import { Book, Check } from 'lucide-react'

const Introduction = () => {
  return (
    <div>
        <div className="flex flex-col gap-8 mt-10 mb-36 ml-12">
        <div className="flex">
            <Image
                src="/assets/thumbnail.png"
                width={1000}
                height={1000}
                alt="course thumbnail" 
                className="rounded-lg"
            />
        </div>
        <div className="flex flex-col text-slate-950 w-[72%] gap-2">
            <p className="text-xl font-bold">Description</p>
            <p className="flex gap-2">Unlock the secrets to making serious money with NBA sports betting. This course is designed for those ready to turn their passion for basketball into a profitable venture. Learn the fundamentals of gambling and NBA strategy, master the psychology behind successful betting, and implement a proven system to maximize your returns. Discover the best platforms, analyze team-specific and daily trends, and develop the skills to evaluate bets like a pro. If you're serious about building a lucrative betting portfolio, this course is your ultimate guide to success.</p>
        </div>


        <div className="flex flex-col text-slate-950 w-[79%] gap-2">
            <p className="text-slate-950 text-xl font-bold">Course details</p>
            <div className="flex gap-4">
                <div className="flex flex-col gap-2 bg-white h-[100px] w-[22%] p-4 rounded-2xl text-slate-950">
                    <p>Chapters</p>
                    <div className="flex gap-2">
                        <Book />
                        <p>6 Chapters</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 bg-white h-[100px] w-[22%] p-4 rounded-2xl text-slate-950">
                    <p>Chapters</p>
                    <div className="flex gap-2">
                        <Book />
                        <p>6 Chapters</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 bg-white h-[100px] w-[22%] p-4 rounded-2xl text-slate-950">
                    <p>Chapters</p>
                    <div className="flex gap-2">
                        <Book />
                        <p>6 Chapters</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 bg-white h-[100px] w-[22%] p-4 rounded-2xl text-slate-950">
                    <p>Chapters</p>
                    <div className="flex gap-2">
                        <Book />
                        <p>6 Chapters</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col text-slate-950 w-[70%] gap-2">
            <p className="text-xl font-bold">What you'll learn</p>
            <div className="grid grid-cols-2">
                <p className="flex gap-2"><span><Check /></span> How to evaluate your bets</p>
                <p className="flex gap-2"><span><Check /></span> Gambling psychology & fallacies</p>
                <p className="flex gap-2"><span><Check /></span> Basics of gambling and NBA</p>
                <p className="flex gap-2"><span><Check /></span> Various platforms and their offerings</p>
            </div>
        </div>

        <div className="flex flex-col text-slate-950 w-[70%]">
            <p className="text-xl font-bold">Frequently asked questions</p>
            <Accordion type="single" collapsible className="flex flex-col gap-2 w-[70%]">
            <AccordionItem  className="border-none p-4  rounded-2xl" value={'question 7'}>
                <AccordionTrigger className="text-base text-left">What if I don&apos;t have a company name or URL yet?</AccordionTrigger>
                    <AccordionContent className="text-base  mt-6 flex flex-col gap-2">
                        <p>No worries! We&apos;d love to hear about your project, whether you&apos;re just starting out or still brainstorming. Feel free to <a href="mailto:contact.figmentstudios@gmail.com" className="text-green-700 underline">contact us</a>, and we can discuss how to bring your vision to life.</p>
                    </AccordionContent>
            </AccordionItem>
                {faqData.map((accordion:any, idx:number) => (
                    <AccordionItem value={`item-${idx}`} className="border-none p-4 rounded-2xl" key={idx}>
                    <AccordionTrigger className="text-base text-left">{accordion.item}</AccordionTrigger>
                        <AccordionContent className="text-base mt-6">
                            {accordion.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
        
            <AccordionItem  className="border-none p-4  rounded-2xl" value={'question 6'}>
                <AccordionTrigger className="text-base text-left">Can you redesign an existing website?</AccordionTrigger>
                    <AccordionContent className="text-base mt-6 flex flex-col gap-2">
                        <p>We offer a comprehensive redesign service for existing websites to give them a fresh, modern look and improve their performance.</p>
                    </AccordionContent>
            </AccordionItem>
        </Accordion>
        </div>
        </div>
    </div>
  )
}

export default Introduction