import React from 'react'
import { civic } from '../assets'
import { businessObjectives } from '../constants'
const Feature = () => {
  return (
    <div className="w-full relative  pt-[100px]">
       <div className="flex flex-col items-center  ">
            <div className="lg:w-[450px] lg:absolute lg:left-0 lg:top-[160px] flex flex-col items-start rounded-[24px] p-[40px] gap-[28px] bg-primary text-white ">
                <h1 className="text-[30px] lg:text-[40px]  leading-[48px] font-montserrat font-semibold ">Solutions Company Based in Lagos</h1>
                <p className="text-[18px] lg:text-[20px]  font-thiccboi leading-[30px]">Dexter Pro is a fast-growing, dynamic and pragmatic solutions-driven company. We focus on developing endless solutions within the Nigerian and African markets.
                </p>
                <p className="text-[20px] lg:text-[22px]   font-thiccboi">Our business objectives are:</p>
                    <ul style={{  listStyle: 'circle'}}>
                        
                        {businessObjectives.map((ul, index) => (
                            <li key={ul.id}
                                className={`cursor-pointer text-[18px] lg:text[20px] leading-[24px] font-normal font-thiccboi mb-[10px]`}
                            >
                                {ul.title}

                            </li>
                        ))}
                    </ul>
               

            </div>
            <div className="flex flex-row  w-full lg:h-[800px]"> 
                <div className="hidden lg:block w-1/4"></div>
                <img src={civic} className="float-right m-auto w-[80vw] md:h-[500px] h-[300px] lg:h-[650px]"  alt="" />
            </div>
       </div>
    </div>
  )
}

export default Feature