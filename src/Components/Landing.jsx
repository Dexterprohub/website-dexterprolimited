import React from 'react'
import { landingImage } from '../assets'

const Landing = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-[20px] pt-[40px] justify-between items-center ">
        <div className="relative flex flex-col  gap-[12px]">
          <h1 className="font-montserrat text-[40px] lg:text-[40px] xl:text-[58px] xl:leading-[80px] leading-[50px] text-center lg:text-start text-primary font-bold uppercase">
            CREATING ENDLESS SOLUTIONS
          </h1>
            
          <p className="font-thiccboi text-[19px] xl:text-[24px] text-center  lg:text-start leading-[28px] tracking-[0.25px] text-shadeGrey">
            Delivering results that matter – Leverage our experience and expertise to drive innovation with custom software that supports your unique business goals.
          </p>

          <div className="mt-[20px] m-auto lg:m-0 lg:mt-[25px] mb-[20px]">
            <a href="#" className="py-[16px] bg-primary py-[16px] pr-[40px] pl-[32px] cursor-pointer text-white rounded-[20px] items-center lg:items-start text-[18px] hover:bg-white hover:text-primary hover:border-[1px] hover:border-primary hover:ease-out duration-200">Explore &gt;&gt;</a>
          </div>
        </div>

        <div className="w-full flex flex-row w-full items-start">
          <img src={landingImage} className="w-[95%]" alt="" />
          <div className="md:w-[5%]"></div>
        </div>
      </div>
  )
}

export default Landing