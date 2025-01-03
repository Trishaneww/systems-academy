import { Ellipsis } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Dashboard = () => {
  return (
    <div className="flex flex-col mt-36 items-center w-full gap-4">
        <section className="flex gap-4 w-[90%]">
            <div className="flex flex-col w-1/4 h-[130px] border-[1px] border-slate-300 rounded-lg p-4">
                <p className="font-bold text-2xl">Total Revenue</p>
                <p>$5,620</p>
            </div>

            <div className="flex flex-col w-1/4 h-[130px] border-[1px] border-slate-300 rounded-lg p-4">
                <p className="font-bold text-2xl">Total Revenue</p>
                <p>$5,620</p>
            </div>

            <div className="flex flex-col w-1/4 h-[130px] border-[1px] border-slate-300 rounded-lg p-4">
                <p className="font-bold text-2xl">Total Revenue</p>
                <p>$5,620</p>
            </div>

            <div className="flex flex-col w-1/4 h-[130px] border-[1px] border-slate-300 rounded-lg p-4">
                <p className="font-bold text-2xl">Total Revenue</p>
                <p>$5,620</p>
            </div>
        </section>


        <section className="flex gap-4 w-[90%]">

            <div className="flex flex-col w-[70%] border-[1px] border-slate-300 rounded-lg p-4">
                <Image 
                    src="/assets/chart.png"
                    width={1000}
                    height={1000}
                    alt="sales chart for admin"
                />
            </div>


            <div className="flex flex-col w-[30%] h-[500px] border-[1px] border-slate-300 rounded-lg p-4 gap-8">
                <p className="font-bold text-2xl">Newsletter subscribers</p>

                <ul className="flex flex-col gap-2">
                    <li className="flex justify-between">
                        <p>joshdaily@gmail.com</p>
                        <Ellipsis />
                    </li>
                    <li className="flex justify-between">
                        <p>joshdaily@gmail.com</p>
                        <Ellipsis />
                    </li>
                    <li className="flex justify-between">
                        <p>joshdaily@gmail.com</p>
                        <Ellipsis />
                    </li>
                    <li className="flex justify-between">
                        <p>joshdaily@gmail.com</p>
                        <Ellipsis />
                    </li>
                    <li className="flex justify-between">
                        <p>joshdaily@gmail.com</p>
                        <Ellipsis />
                    </li>
                </ul>
                
            </div>
        </section>

    </div>
  )
}

export default Dashboard