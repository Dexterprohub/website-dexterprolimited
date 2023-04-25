import React from 'react'
import { logo_small, instagram, twitter, linkedin } from '../assets'
import { footerContact, footerQuickLinks } from '../constants'
const Footer = () => {
  return (
    <footer className=" flex flex-col   justify-between  text-white py-[50px] lg:pb-[10px] font-thiccboi">
        <div className="flex flex-col lg:flex-row mb-[50px] justify-between gap-[24px]">
            <div className="flex flex-row h-[37px] items-start lg:self-center gap-[8px] pt-[40px] pb-[100px] lg:p-0 " >
                <img src={logo_small} alt="" />
                <h1 className="text-[24px] lg:text-[28px] lg:self-center">Dexterpro Limited</h1>
            </div>
           <div className="flex flex-row  justify-between font-thiccboi lg:w-[50vw] xl:w-[50%]">
                <div className="flex flex-col mw-160 md:w-[50%] lg:flex-row">
                    <ul className="list-none flex flex-col gap-[8px] justify-start  flex-1">
                        <h1 className="text-[18px] md:text-[18px] font-bold xl:text-[22px] ">Quick Links</h1>
                        {footerQuickLinks.map((footer) => (

                            <li key={footer.id} >

                                <a href={`#${footer.id}`} className="text-[14px] md:text-[16px] lg:text-[18px]  cursor-pointer text-footerGrey opacity-50">
                                    {footer.title}
                                </a>
                            </li>

                        ))}
                    </ul>
                </div>

                <div className=" flex flex-col mw-165 lg:flex-row font-thiccboi">
                    <ul className="list-none flex flex-col gap-[8px] justify-start  flex-1">
                        <h1 className="text-[18px] font-bold  xl:text-[22px] ">Contact</h1>
                        {footerContact.map((footer) => (

                            <li key={footer.id }>

                                <a href={`#${footer.id}`} className="text-[14px] md:text-[16px] xl:text-[18px] cursor-pointer text-footerGrey opacity-50">{footer.title}</a>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>

        </div>
        <div className=" flex flex-row gap-[12px] border-t-[1px] border-opacity-50 px-[10px] sm:px-[20px] py-[20px] lg:py-[24px] sm:px-[48px] border-footerGrey items-center ">
            
            <div className="w-full flex flex-row justify-between ">
                <div className="flex flex-col">
                    <div className="flex flex-row gap-[12px] md:items-center xl:text-[22px] ">
                    &#169; 
                    <p className="flex flex-col sm:flex-row text-[14px] md:text-[16px] leading-[18px]">
                        <span className="sm:mr-[5px] "> Dexterprolimited. </span>  
                        <span className=""> 
                            All rights reserved.
                        </span>
                    </p>
                </div>
            </div>
                

                <div className="flex flex-row gap-[12px] items-center">
                    <img src={instagram} alt="" className="w-[24px] h-[24px]"/>
                    <img src={twitter} alt="" className="w-[24px] h-[24px]"/>
                    <img src={linkedin} alt="" className="w-[24px] h-[24px]" />
                </div>
            </div>
            
        </div>
        
    </footer>
  )
}

export default Footer