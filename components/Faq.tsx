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
    <div className="flex flex-col justify-center items-center xl:items-start xl:flex-row mt-12 lg:mt-20 scroll-smooth bg-[#0C1117] py-24 xl:pl-36 pb-40">
        <section className="flex flex-col gap-6 items-center mb-10 text-center xl:text-left p-2">
            <h1 className="text-slate-50  text-3xl md:text-3xl lg:text-5xl font-bold">Frequently asked questions</h1>
        </section>

        <div className="flex justify-center gap-6 w-full p-4 text-slate-50 text-base md:text-lg lg:text-xl">
            <Accordion type="single" collapsible className="flex flex-col gap-4 md:w-3/5 xl:w-4/5">
                {faqData.map((accordion:any, idx:number) => (
                    <AccordionItem value={`item-${idx}`} className="border-none p-4 rounded-2xl" key={idx}>
                    <AccordionTrigger className="text-base md:text-lg lg:text-xl text-left border-b-[1px] border-slate-100">{accordion.item}</AccordionTrigger>
                        <AccordionContent className="text-base lg:text-lg mt-6">
                            {accordion.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
        </Accordion>
        </div>
    </div> 
)}

export default Faq