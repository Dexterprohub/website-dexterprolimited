import React from 'react'
import { useInView } from 'react-intersection-observer'
import {duport,unitech,monipulo,geregu, wcm, zigma} from "../assets"
const Partners = () => {
  const { ref: rocketRef, inView: rocketIsVisible } = useInView();
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  return (
    <div className=" py-[40px] lg:gap-[20px] lg:pt-[40px] lg:pb-[100px] ">
        <div className="flex flex-col items-center relative  pb-[50px]]">
          <h1 ref={rocketRef} className={` rocket ${ rocketIsVisible ? 'animateRocket' : ''} text-center font-outline uppercase text-[48px] md:text-[58px] lg:text-[128px] font-monserrat font-extrabold leading-[156px] text-transparent`}>Partners</h1>
          <h1 ref={myRef} className={`rocket ${myElementIsVisible ? 'animateServices' : ''} absolute top-[60px] lg:top-[80px] leading-[74px] uppercase text-[24px] md:text-[30px] lg:text-[64px] text-primary font-montserrat font-semibold text-center`}>Our Partners</h1>
        </div>

        <div className="md:hidden flex flex-col items-center justify-center lg:hidden gap-[24px] lg:gap-[1px] lg:pt-[40px]">
          <div className="flex flex-row items-center justify-around w-full mb-[50px]">
            <img className="w-[150px] h-[120px] " src={duport} alt="" />
            <img className="w-[120px]  h-[120px] " src={unitech} alt="" />
          </div>
          <div className="flex flex-row items-center justify-around m-auto w-full mb-[50px] gap-[12px]">
            <img className="w-[150px] h-[40px] " src={monipulo} alt="" />
            <img className="w-[130px] h-[50px] " src={geregu} alt="" />
          </div>
          <div className="flex flex-row items-center justify-around m-auto w-full mb-[50px] gap-[12px]">
            <img className="w-[150px] h-[160px] " src={wcm} alt="" />
            <img className="w-[130px] h-[50px]" src={zigma} alt="" />
          </div>

        </div>
        <div className="hidden md:flex flex-col items-center justify-center lg:hidden gap-[24px] lg:gap-[1px] lg:pt-[40px]">
          <div className="flex flex-row items-center justify-around md:justify-between w-full mb-[50px]">
            <img className="w-[150px] md:w-[200px] h-[120px] " src={duport} alt="" />
            <img className="w-[120px]  h-[120px] " src={unitech} alt="" />
            <img className="w-[150px] md:w-[180px] h-[40px] " src={monipulo} alt="" />
          </div>
          
          <div className="flex flex-row items-center justify-around md:justify-between m-auto w-full mb-[50px] gap-[12px]">
            <img className="w-[130px] md:w-[200px] h-[50px] " src={geregu} alt="" />
            <img className="w-[150px] h-[160px] " src={wcm} alt="" />
            <img className="w-[130px] h-[50px]" src={zigma} alt="" />
          </div>

        </div>
        <div className="hidden lg:flex items-center   flex-row  lg:justify-between gap-[24px] pt-[40px]"> 
          <img className="w-[200px]  lg:w-[150px] xl:w-[200px] h-[120px] " src={duport} alt="" />
          <img className="w-[150px] xl:w-[150px] lg:w-[100px] h-[120px] " src={unitech} alt="" />
          <img className="w-[200px] xl:w-[200px] lg:w-[150px] h-[40px] " src={monipulo} alt="" />
          <img className="w-[200px] xl:w-[200px] lg:w-[150px] h-[50px] " src={geregu} alt="" />
          <img className="w-[120px] xl:w-[120px] lg:w-[100px] h-[100px] " src={wcm} alt="" />
          <img className="w-[150px] xl:w-[150px] h-[50px]" src={zigma} alt="" />
        </div>
       

    </div>
  )
}

export default Partners