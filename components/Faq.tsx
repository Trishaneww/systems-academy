import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { faqData } from '@/data'


const Faq = () => {
  return (
    <div className="flex flex-col justify-center items-center xl:items-start xl:flex-row -mt-36 lg:-mt-40 scroll-smooth bg-[#161B22] py-24 xl:pl-36">
        <section className="flex flex-col gap-6 items-center mb-10 text-center xl:text-left p-2">
            <h1 className="text-slate-50  text-3xl md:text-5xl lg:text-6xl font-semibold">Frequently asked questions</h1>
        </section>

        <div className="flex justify-center gap-6 w-full p-4 text-slate-50 text-base md:text-lg lg:text-xl">
            <Accordion type="single" collapsible className="flex flex-col gap-4 md:w-3/5 xl:w-4/5">
            <AccordionItem  className="border-none p-4  rounded-2xl " value={'question 7'}>
                <AccordionTrigger className="text-base lg:text-xl text-left border-b-[1px] border-slate-100">What if I don&apos;t have a company name or URL yet?</AccordionTrigger>
                    <AccordionContent className="text-base lg:text-lg mt-6 flex flex-col gap-2">
                        <p>No worries! We&apos;d love to hear about your project, whether you&apos;re just starting out or still brainstorming. Feel free to <a href="mailto:contact.figmentstudios@gmail.com" className="text-green-700 underline">contact us</a>, and we can discuss how to bring your vision to life.</p>
                    </AccordionContent>
            </AccordionItem>
                {faqData.map((accordion:any, idx:number) => (
                    <AccordionItem value={`item-${idx}`} className="border-none p-4 rounded-2xl" key={idx}>
                    <AccordionTrigger className="text-base md:text-lg lg:text-xl text-left border-b-[1px] border-slate-100">{accordion.item}</AccordionTrigger>
                        <AccordionContent className="text-base lg:text-lg mt-6">
                            {accordion.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            <AccordionItem  className="border-none p-4  rounded-2xl" value={'question 5'}>
                <AccordionTrigger className="text-base lg:text-xl text-left border-b-[1px] border-slate-100">When can I expect to have my website ready?</AccordionTrigger>
                    <AccordionContent className="text-base lg:text-lg mt-6 flex flex-col gap-2">
                        <p>The timeline for delivering a finished website depends on the complexity and scope of the project:</p>
                        <ul className="list-decimal">
                            <li className="list-decimal">
                                <span className="font-bold">Standard Plan:</span> Ideal for one-page websites, this plan typically takes 1 week to complete, providing a quick turnaround for straightforward projects.
                            </li>
                            <li>
                                <span className="font-bold">Core Package:</span> Best suited for multi-page websites, this package usually requires 1-2 weeks to deliver, covering more detailed design and content needs.
                            </li>
                            <li>
                                <span className="font-bold">Business and Business Elite Packages:</span> Designed for complex projects that involve multiple pages, third-party integrations, and custom functionalities, these packages generally take 2-4 weeks to complete, depending on the specific requirements and features involved.
                            </li>
                        </ul>
                        <p>We work closely with you throughout the process to ensure timely delivery and a high-quality end product that meets your business goals.</p>
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem  className="border-none p-4  rounded-2xl" value={'question 6'}>
                <AccordionTrigger className="text-base lg:text-xl text-left border-b-[1px] border-slate-100">Can you redesign an existing website?</AccordionTrigger>
                    <AccordionContent className="text-base lg:text-lg mt-6 flex flex-col gap-2">
                        <p>We offer a comprehensive redesign service for existing websites to give them a fresh, modern look and improve their performance.</p>
                    </AccordionContent>
            </AccordionItem>
        </Accordion>
        </div>
    </div> 
)}

export default Faq