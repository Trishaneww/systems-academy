import Image from 'next/image'
import React from 'react'

const Sportsbooks = () => {
  return (
    <div className="flex flex-col items-center gap-12 mt-44">

      <p className="text-2xl lg:text-3xl font-bold text-slate-50 w-[90%] lg:w-[45%] text-center">Extend GitHub Copilot with ready-to-use extensions or build your own using our developer platform with APIs, documentation, and guides.</p>

      <section className="flex justify-center items-center gap-2 md:gap-6">
          <div className="hidden md:flex flex-col items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] text-[#a9c0ff] bg-[#161B22] border-[1px] border-gray-800 rounded-xl hover:delay-300 hover:bg-[#1A1931] transition-all duration-200 ease-in-out p-2">
            <Image
              width={1000}
              height={1000}
              src="/assets/sportsbook1.png"
              alt="MGM sports book"
              className=""
          />
          </div>

          <div className="flex flex-col items-center justify-center w-[50px] h-[50px] md:w-[60px] md:h-[60px] text-[#a9c0ff] bg-[#161B22] border-[1px] border-gray-800 rounded-xl hover:delay-300 hover:bg-[#1A1931] transition-all duration-200 ease-in-out p-1">
            <Image
              width={1000}
              height={1000}
              src="/assets/sportsbook2.png"
              alt="MGM sports book"
          />
          </div>

          <div className="flex flex-col items-center justify-center w-[50px] h-[50px] md:w-[60px] md:h-[60px] text-[#a9c0ff] bg-[#161B22] border-[1px] border-gray-800 rounded-xl hover:delay-300 hover:bg-[#1A1931] transition-all duration-200 ease-in-out p-0">
            <Image
              width={2000}
              height={2000}
              src="/assets/sportsbook4.png"
              alt="MGM sports book"
          />
          </div>

          <div className="flex flex-col items-center justify-center w-[90px] h-[90px] md:w-[100px] md:h-[100px] bg-[#161B22] border-[1px] border-gray-800 rounded-full hover:delay-300 hover:bg-[#1A1931] transition-all duration-200 ease-in-out p-2">
            <div className="flex flex-col items-center justify-center w-[71px] h-[71px] md:w-[81px] md:h-[81px]  bg-gradient-to-r from-[#a9c0ff] to-[#1D4ED8] rounded-full">
              <div className="flex flex-col items-center justify-center w-[70px] h-[70px] md:w-[80px] md:h-[80px] bg-[#161B22] border-[1px] border-gray-800 rounded-full hover:delay-300 hover:bg-[#1A1931] transition-all duration-200 ease-in-out p-2">
                <Image
                  width={2000}
                  height={2000}
                  src="/assets/logo.png"
                  alt="MGM sports book"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-[50px] h-[50px] md:w-[60px] md:h-[60px] text-[#a9c0ff] bg-[#161B22] border-[1px] border-gray-800 rounded-xl hover:delay-300 hover:bg-[#1A1931] transition-all duration-200 ease-in-out p-2">
            <Image
              width={1000}
              height={1000}
              src="/assets/sportsbook1.png"
              alt="MGM sports book"
          />
          </div>

          <div className="flex flex-col items-center justify-center  w-[50px] h-[50px] md:w-[60px] md:h-[60px] text-[#a9c0ff] bg-[#161B22] border-[1px] border-gray-800 rounded-xl hover:delay-300 hover:bg-[#1A1931] transition-all duration-200 ease-in-out p-1">
            <Image
              width={1000}
              height={1000}
              src="/assets/sportsbook2.png"
              alt="MGM sports book"
          />
          </div>

          <div className="hidden md:flex flex-col items-center justify-center w-[60px] h-[60px] text-[#a9c0ff] bg-[#161B22] border-[1px] border-gray-800 rounded-xl hover:delay-300 hover:bg-[#1A1931] transition-all duration-200 ease-in-out p-0">
            <Image
              width={2000}
              height={2000}
              src="/assets/sportsbook4.png"
              alt="MGM sports book"
          />
          </div>          
      </section>   
    </div>
  )
}

export default Sportsbooks