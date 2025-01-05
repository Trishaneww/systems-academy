import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { BarChart, Book, Check, Clock, Eye, Folder, Info, Phone, ShieldCheck, Star, Users, Video } from 'lucide-react'
import Image from 'next/image'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { faqData } from '@/data'
import { FaBasketball, FaPeopleGroup } from 'react-icons/fa6'
import { MdPhoneIphone } from 'react-icons/md'

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
                    <div className="flex gap-2 font-bold text-xl items-center">
                        <Book />
                        <p>6</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 bg-white h-[100px] w-full lg:w-[22%] p-4 rounded-2xl text-slate-950">
                    <p>Duration</p>
                    <div className="flex gap-2 font-bold text-xl items-center">
                        <Clock />
                        <p>11h 32m</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 bg-white h-[100px] w-full lg:w-[22%] p-4 rounded-2xl text-slate-950">
                    <p>Skill level</p>
                    <div className="flex gap-2 font-bold text-xl items-center">
                        <BarChart />
                        <p>6 Chapters</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 bg-white h-[100px] w-full lg:w-[22%] p-4 rounded-2xl text-slate-950">
                    <p>Views</p>
                    <div className="flex gap-2 font-bold text-xl items-center">
                        <Eye />
                        <p>12,680</p>
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
                {faqData.map((accordion:any, idx:number) => (
                    <AccordionItem value={`item-${idx}`} className="border-none p-4 rounded-2xl" key={idx}>
                    <AccordionTrigger className="text-base text-left">{accordion.item}</AccordionTrigger>
                        <AccordionContent className="text-base mt-6">
                            {accordion.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
        </Accordion>
        </div>
        </div>

        <div className="flex flex-col w-full lg:w-[30%] xl:w-[22%] h-full mt-10 gap-4">
            <div className="w-full rounded-lg bg-white text-slate-950 flex flex-col gap-2 px-4 py-6 text-lg">
                <p className="text-slate-500">Full Course</p>
                <p className="text-4xl font-bold">$999.99</p>
                <p className="mt-6 font-bold">Course Includes:</p>

                <ul className="flex flex-col gap-2 text-gray-600">
                    <li className="flex gap-2 items-center">
                        <Folder />
                        <p>Fully downloadable resources</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <Book />
                        <p>6 Chapters</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <FaBasketball />
                        <p>Our weekly betting picks</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <MdPhoneIphone />
                        <p>Mobile view</p>
                    </li>
                </ul>
                <Link href="https://buy.stripe.com/28o8yb5zi2NB9Og3co">
                    <Button className="h-[50px] w-full mt-8 text-lg font-semibold">Enroll now</Button>
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
                <p className="font-bold text-xl">Publisher</p>

                <div className="flex justify-start items-center gap-2">
                    <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#00030F] p-1">
                        <Image
                            height={100}
                            width={100}
                            src="/assets/logo.png"
                            alt="systems academy logo"
                        />
                    </div>

                    <div className="flex flex-col">
                        <p className="font-bold">The Systems Academy</p>
                        <p>Betting educator</p>
                    </div>
                </div>



                <p className="mt-4">Our company empowers sports enthusiasts with expert knowledge and proven strategies through our NBA sports betting course, aiming to help bettors make smarter decisions and achieve consistent success.</p>
                <p className="mt-6">Course Includes:</p>

                <ul className="flex flex-col gap-2 text-gray-600">
                    <li className="flex gap-2 items-center">
                        <Star/>
                        <p>4.8 Instructor rating</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <Users />
                        <p>120 students</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <ShieldCheck />
                        <p>47 reviews</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <Folder />
                        <p>6 Chapters</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Salespage