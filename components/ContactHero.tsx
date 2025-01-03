"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import emailjs from '@emailjs/browser';
import { useToast } from './hooks/use-toast'

type Inputs = {
  email: string
  phone: string
  first_name: string
  last_name: string
  company: string
  message: string
}

const ContactHero = () => {
    const [emailError, setEmailError] = useState("")
    const [nameError, setNameError] = useState("")
    const { toast } = useToast()
    const sendEmail = (e:any) => {
      e.preventDefault();
  
      try {
        if (e.target.email.value === "" || e.target.full_name.value === "") {
  
            if (e.target.email.value === "") {
              setEmailError("Email is required")
              if (e.target.full_name.value === "") {
                setNameError("Fullname is required")
              }
            } 
   
        } else {
            emailjs.sendForm('service_luvg8op', 'template_sx6i957' , e.target , '1MxDwCSvQF6Leln4f');
             e.target.reset()
             setEmailError("")
             setNameError("")
  
            toast({
                title: "Email Sent",
                description: "We will get back to you shortly",
      })
  
        }
      } catch (err) {
        console.log(err)
      }
    }

    
  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#00030F] text-slate-50 overflow-hidden px-6">

      <div className="w-[57%] h-2/5 bg-gradient-to-r from-[#86a6ff] to-[#1D4ED8] rounded-full absolute z-1 top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[90px]"></div>

      <div className="flex flex-col gap-4 justify-center items-center text-center mt-52">
        <p className="bg-gradient-to-r from-[#a9c0ff] to-[#1D4ED8]  bg-clip-text text-transparent text-xl font-bold">GET IN TOUCH</p>
        <p className="text-4xl lg:text-6xl xl:text-7xl  lg:w-[55%] font-bold">Have any questions? Write to us and get answers!</p>
      </div>

      <form className="w-full lg:w-1/3 xl:w-3/6 h-[600px] shadow-lg bg-[#38383840] rounded-lg flex flex-col items-center gap-4 mt-12 py-12 backdrop-blur-3xl" onSubmit={sendEmail}>

        <div className="flex flex-col items-start w-5/6 gap-2">
            {/* <p className="flex justify-start text-slate-900">Company Name (optional)</p> */}
            <input 
              type="text" 
              name="phone" 
              placeholder="Full Name" 
              className="w-full h-[44px] p-2 rounded-md outline-none text-slate-950 backdrop-blur-3xl bg-[#ffffff43] placeholder:text-white"/>
          </div>

        <div className="flex flex-col items-start w-5/6 gap-2">
            {/* <p className="flex justify-start text-slate-900">Company Name (optional)</p> */}
            <input 
              type="text" 
              name="phone" 
              placeholder="Email" 
              className="w-full h-[44px] p-2 rounded-md outline-none text-slate-950 backdrop-blur-3xl bg-[#ffffff43] placeholder:text-white"/>
          </div>

          <div className="flex flex-col items-start w-5/6 gap-2">
            {/* <p className="flex justify-start text-slate-900">Company Name (optional)</p> */}
            <input 
              type="text" 
              name="phone" 
              placeholder="Phone Number" 
              className="w-full h-[44px] p-2 rounded-md outline-none text-slate-950 backdrop-blur-3xl bg-[#ffffff43] placeholder:text-white"/>
          </div>

          <div className="flex flex-col items-start w-5/6 gap-2">
            {/* <p className="flex justify-start text-slate-900">Company URL (optional)</p> */}
            <input 
              type="text" 
              name="company"
              placeholder="Company Name" 
              className="w-full h-[44px] p-2 rounded-md outline-none text-white backdrop-blur-3xl bg-[#ffffff43] placeholder:text-white"/>
          </div>
          
          <div className="flex flex-col items-start w-5/6 gap-2">
            {/* <p className="flex justify-start text-slate-900">Notes (optional)</p> */}
            <textarea placeholder="Tell us more about your project" name="message" className="w-full h-[100px] p-2 rounded-md outline-none bg-[#ffffff43] placeholder:text-white"/>
          </div>      
          <Button type="submit" className="w-5/6 h-[60px] shadow mt-2 mb-2 bg-white text-slate-950 text-lg">Reserve a call</Button>
        </form>



      






        {/* <div className="flex flex-col md:flex-row items-center justify-center gap-8 -mt-6 w-full lg:w-4/5 p-8 z-20">
        <div className="flex flex-col w-full mt-20 lg:mt-0">

            <div className="lg:w-[60%] mt-52 lg:mt-0">
            <Image
                alt="contact image banner"
                src={stock1}
            />
            </div>
    

            <p className="text-2xl md:text-5xl  font-bold mt-6 w-3/4">Have Questions for our team?
            We’re here to help!</p>
            <p className="mt-4">Ready to bring your web concepts to life? Partner with our expert team and watch your vision become a stunning reality.</p>
            <ul className="flex flex-col gap-4 mt-4">
              <li className="flex gap-4 items-center">
                <div className="w-[22px] h-[22px] flex justify-center items-center text-green-100 bg-[#1D4ED8] rounded-full">
                  <GiCheckMark size={16}/>
                </div>
                <p className="w-[85%]">Search Engine Optimization</p>
              </li>

              <li className="flex gap-4 items-center">
                <div className="w-[22px] h-[22px] flex justify-center items-center text-green-100 bg-[#1D4ED8] rounded-full">
                  <GiCheckMark size={16}/>
                </div>
                <p className="w-[85%]">Social Media Marketing</p>
              </li>

              <li className="flex gap-4 items-center">
                <div className="w-[22px] h-[22px] flex justify-center items-center text-green-100 bg-[#1D4ED8] rounded-full">
                  <GiCheckMark size={16}/>
                </div>
                <p className="w-[85%]">Google, Facebook, and Instagram Ads</p>
              </li>
            </ul>
        </div> */}
        </div>
  )
}

export default ContactHero