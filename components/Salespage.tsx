import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Book, Check, Folder, Info, Star } from 'lucide-react'
import Image from 'next/image'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { faqData } from '@/data'

const Salespage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-center bg-slate-100 mt-20 pb-36 gap-4 px-6">
        <div className="flex flex-col w-full lg:w-[58%] gap-8 mt-10">
        <div className="flex">
            <Image
                src="/assets/thumbnail.png"
                width={1000}
                height={1000}
                alt="course thumbnail" 
                className="rounded-lg"
            />
        </div>
        <div className="flex flex-col text-slate-950 w-[93%] gap-2">
            <p className="text-xl font-bold">Description</p>
            <p className="flex gap-2">Unlock the secrets to making serious money with NBA sports betting. This course is designed for those ready to turn their passion for basketball into a profitable venture. Learn the fundamentals of gambling and NBA strategy, master the psychology behind successful betting, and implement a proven system to maximize your returns. Discover the best platforms, analyze team-specific and daily trends, and develop the skills to evaluate bets like a pro. If you're serious about building a lucrative betting portfolio, this course is your ultimate guide to success.</p>
        </div>


        <div className="flex flex-col text-slate-950 w-full gap-2">
            <p className="text-slate-950 text-xl font-bold">Course details</p>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex flex-col gap-2 bg-white h-[100px] w-full lg:w-[22%] p-4 rounded-2xl text-slate-950">
                    <p>Chapters</p>
                    <div className="flex gap-2">
                        <Book />
                        <p>6 Chapters</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 bg-white h-[100px] w-full lg:w-[22%] p-4 rounded-2xl text-slate-950">
                    <p>Chapters</p>
                    <div className="flex gap-2">
                        <Book />
                        <p>6 Chapters</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 bg-white h-[100px] w-full lg:w-[22%] p-4 rounded-2xl text-slate-950">
                    <p>Chapters</p>
                    <div className="flex gap-2">
                        <Book />
                        <p>6 Chapters</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 bg-white h-[100px] w-full lg:w-[22%] p-4 rounded-2xl text-slate-950">
                    <p>Chapters</p>
                    <div className="flex gap-2">
                        <Book />
                        <p>6 Chapters</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col text-slate-950 lg:w-[70%] gap-2">
            <p className="text-xl font-bold">What you'll learn</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <p className="flex gap-2"><span><Check /></span> How to evaluate your bets</p>
                <p className="flex gap-2"><span><Check /></span> Gambling psychology & fallacies</p>
                <p className="flex gap-2"><span><Check /></span> Basics of gambling and NBA</p>
                <p className="flex gap-2"><span><Check /></span> Various platforms and their offerings</p>
            </div>
        </div>

        <div className="flex flex-col text-slate-950 lg:w-[70%]">
            <p className="text-xl font-bold">Frequently asked questions</p>
            <Accordion type="single" collapsible className="flex flex-col gap-2 lg:w-[70%]">
            <AccordionItem  className="border-none p-4  rounded-2xl" value={'question 7'}>
                <AccordionTrigger className="text-base text-left">What if I don&apos;t have a company name or URL yet?</AccordionTrigger>
                    <AccordionContent className="text-base mt-6 flex flex-col gap-2">
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

        <div className="flex flex-col w-full lg:w-[30%] xl:w-[22%] h-full mt-10 gap-4">
            <div className="w-full rounded-lg bg-white text-slate-950 flex flex-col gap-2 px-4 py-6 text-lg">
                <p className="text-slate-500">Full Course</p>
                <p className="text-4xl font-bold">$999.99</p>
                <p className="mt-6 font-bold">Course Includes:</p>

                <ul className="flex flex-col gap-2 text-slate-500">
                    <li className="flex gap-2">
                        <Folder />
                        <p>6 Chapters</p>
                    </li>
                    <li className="flex gap-2">
                        <Folder />
                        <p>6 Chapters</p>
                    </li>
                    <li className="flex gap-2">
                        <Folder />
                        <p>6 Chapters</p>
                    </li>
                    <li className="flex gap-2">
                        <Folder />
                        <p>6 Chapters</p>
                    </li>
                </ul>
                <Link href="https://buy.stripe.com/28o8yb5zi2NB9Og3co">
                    <Button className="h-[50px] w-full mt-8">Enroll now</Button>
                </Link>
            </div>

            <div className="h-[100px] flex justify-between items-center bg-white rounded-lg p-2 px-4">
                <div className="flex flex-col gap-1">
                    <p className="font-medium text-2xl">Rating</p>
                    <p>200 students</p>
                </div>
               
                <div className="flex flex-col gap-1 ">
                    <div className="flex gap-2">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                    <p>4.8 (22 Ratings)</p>
                </div>
            </div>

            <div className="h-[500px] w-full rounded-lg bg-white text-slate-950 flex flex-col gap-2 px-4 py-6">
                <p>Full Course</p>
                <p className="text-4xl font-bold">$999.99</p>
                <p className="mt-6">Course Includes:</p>

                <ul className="flex flex-col gap-2">
                    <li className="flex gap-2">
                        <Folder />
                        <p>6 Chapters</p>
                    </li>
                    <li className="flex gap-2">
                        <Folder />
                        <p>6 Chapters</p>
                    </li>
                    <li className="flex gap-2">
                        <Folder />
                        <p>6 Chapters</p>
                    </li>
                    <li className="flex gap-2">
                        <Folder />
                        <p>6 Chapters</p>
                    </li>
                </ul>
                <Button className="h-[50px] w-full mt-8">Enroll now</Button>
            </div>
        </div>
    </div>
  )
}

export default Salespage