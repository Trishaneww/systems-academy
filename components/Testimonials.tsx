"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data';
import Link from 'next/link';
import '../styles/global.scss';

const Testimonials: React.FC = () => {
        const [activeIndex, setActiveIndex] = useState(0);
      
        const visibleCards = 3; // Number of visible cards at a time

        const handlePrev = () => {
          setActiveIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - visibleCards : prevIndex - 1
          );
        };
      
        const handleNext = () => {
          setActiveIndex((prevIndex) =>
            prevIndex === testimonials.length - visibleCards ? 0 : prevIndex + 1
          );
        };
  return (
    <div className="flex flex-col justify-center items-center mt-28 text-slate-50">
        <div className="flex flex-col items-center justify-center text-center  gap-2">
            {/* <p className="text-base  lg:text-xl font-extrabold text-[#0860B3] secondary">OUR CORE SERVICES</p> */}
            <p className="font-bold text-3xl md:text-4xl lg:text-6xl">Hear From Our Clients</p>
        </div>

        <section className="flex flex-wrap justify-center lg:hidden gap-6 lg:gap-2 mt-12 px-4">
            {testimonials.map((testimonial, idx) => (
                <div className="flex flex-col h-[260px] md:h-[230px] w-full md:w-[440px] gap-2 bg-[#161B22] border-[1px] border-gray-800  p-4 px-6 rounded-xl" key={idx}>
                <section className="flex gap-2">
                <Image
                    src={testimonial.src}
                    width={70}
                    height={70}
                    alt="logo image"
                    className="max-w-[50px] max-h-[50px] rounded-full"
                />

                <div className="flex flex-col gap-2">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="-mt-2">{testimonial.email}</p>
                </div>
                </section>

                <p className="text-base">{testimonial.desc}</p>
            </div>
            ))}
        </section>

        <div className="relative max-w-[90%] lg:max-w-[88%] xl:max-w-[75%] xl:min-w-[1100px] max-h-full mx-auto mt-12">
      {/* Carousel Wrapper */}
      <div className="overflow-hidden">
        <div
          className="hidden lg:flex transition-transform duration-500 gap-4"
          style={{
            transform: `translateX(-${(activeIndex * 100) / visibleCards}%)`,
          }}
        >
            {testimonials.map((testimonial, idx) => (
            <div className="flex flex-col h-[260px] md:h-[230px] min-w-[calc(100%/1)] lg:min-w-[calc(100%/3.1)] gap-2 bg-[#161B22] border-[1px] border-gray-800 text-slate-50 p-4 px-6 rounded-xl" key={idx}>
            <section className="flex gap-2">
            <Image
                src={testimonial.src}
                width={70}
                height={70}
                alt="logo image"
                className="max-w-[50px] max-h-[50px] rounded-full"
            />

            <div className="flex flex-col gap-2">
                <p className="font-bold">{testimonial.name}</p>
                <p className="-mt-2">{testimonial.email}</p>
            </div>
            </section>

            <p className="text-base">{testimonial.desc}</p>
        </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="hidden lg:flex absolute top-1/2 left-0 transform -translate-x-[120%] -translate-y-1/2 rounded-full p-2 text-slate-50"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={handleNext}
        className="hidden lg:flex absolute top-1/2 right-0 transform translate-x-[120%] -translate-y-1/2 rounded-full p-2 text-slate-50"
      >
        <ChevronRight size={40} />
      </button>
    </div>

    </div>
  )
}

export default Testimonials