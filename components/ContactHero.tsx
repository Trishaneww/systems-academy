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
    <div className="flex flex-col items-center justify-center w-full text-slate-50 overflow-hidden px-6">

      <div className="w-[85%] lg:w-[50%] h-[45%] bg-gradient-to-r from-[#86a6ff] to-[#1D4ED8] rounded-full absolute z-1 top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[90px] -rotate-12"></div>
      <div className="flex flex-col gap-4 justify-center items-center text-center mt-52">
        <p className="bg-gradient-to-r from-[#a9c0ff] to-[#1D4ED8]  bg-clip-text text-transparent text-xl font-bold">GET IN TOUCH</p>
        <p className="text-4xl lg:text-6xl xl:text-7xl  lg:w-[55%] font-bold">Have any questions? Write to us and get answers!</p>
      </div>

      <form className="w-full lg:w-1/3 xl:w-3/6 max-w-[700px] h-[600px] flex flex-col items-center gap-4 mt-12 rounded-lg py-12 bg-[#161B22] border-[1px] border-gray-800 px-2 text-slate-50 z-20" onSubmit={sendEmail}>

        <div className="flex flex-col items-start w-5/6 gap-2">
            {/* <p className="flex justify-start text-slate-900">Company Name (optional)</p> */}
            <input 
              type="text" 
              name="phone" 
              placeholder="Full Name" 
              className="w-full h-[44px] p-2 rounded-md outline-none text-slate-950 bg-[#0C1117] backdrop-blur-3xl placeholder:text-white"/>
          </div>

        <div className="flex flex-col items-start w-5/6 gap-2">
            {/* <p className="flex justify-start text-slate-900">Company Name (optional)</p> */}
            <input 
              type="text" 
              name="phone" 
              placeholder="Email" 
              className="w-full h-[44px] p-2 rounded-md outline-none text-slate-950 backdrop-blur-3xl bg-[#0C1117] placeholder:text-white"/>
          </div>

          <div className="flex flex-col items-start w-5/6 gap-2">
            {/* <p className="flex justify-start text-slate-900">Company Name (optional)</p> */}
            <input 
              type="text" 
              name="phone" 
              placeholder="Phone Number" 
              className="w-full h-[44px] p-2 rounded-md outline-none text-slate-950 backdrop-blur-3xl bg-[#0C1117] placeholder:text-white"/>
          </div>
          
          <div className="flex flex-col items-start w-5/6 gap-2">
            {/* <p className="flex justify-start text-slate-900">Notes (optional)</p> */}
            <textarea placeholder="Write your question here" name="message" className="w-full h-[200px] p-2 rounded-md outline-none backdrop-blur-3xl bg-[#0C1117] placeholder:text-white"/>
          </div>      
          <Button type="submit" className="w-5/6 h-[60px] shadow mb-2 bg-slate-200 text-slate-950 text-lg mt-12">Send a question</Button>
        </form>

        </div>
  )
}

export default ContactHero