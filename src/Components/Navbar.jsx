import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { navLinks } from "../constants";
import styles from "../styles"
import { logo, xmark, bars } from "../assets";
export default function Navbar(){
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="w-full flex flex-row py-6 justify-between items-center">
            
            
            <Link to="/">
                <div className={`flex flex-row gap-[4px] items-center `}>
                
                    <img  className="w-[30px] h-[30px] md:w-[40px] md:h-[38px]" src={logo} alt="" />
                    <h1 className="hidden ssm:flex title text-[18px] md:text-[20px] lg:text-[24px] font-manrope font-semibold text-primary">
                        Dexter
                        <span className="text-secondary">Pro</span>
                    </h1>
                    
                </div>
            </Link>

            <ul className=" list-none hidden lg:flex  justify-end items-center flex-1">
                
                {navLinks.map((nav, index) => (

                    <li key={nav.id} 
                        className={`cursor-pointer font-medium font-montserrat gap-[10px] text-[16px] lg:text-[18px] text-shadeGrey hover:border-b-2 border-secondary 
                            ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                        `}>
                            <Link to={`${nav.id}`} className=" hover:text-primary  leading-[24px]"> {nav.title.toUpperCase()}</Link>
                        
                    </li>
                ))}
            </ul>

            <div className="lg:hidden flex flex-1 justify-end items-center">
                <img src={toggle ? xmark : bars} 
                    alt="menu"  
                    className="w-[30px] h-[30px] object-contain" 
                    onClick={() => setToggle((prev) => !prev)}
                />

                <div className={`${styles.paddingX} ${toggle ? 'flex' : 'hidden'} p-6 absolute top-20 right-0  my-2 w-full h-2/3 z-10 rounded-xl sidebar z-10 xxs:h-[500px] bg-white transition ease-in-out delay-150`}>

                    <ul className=" list-none flex flex-col   items-start  flex-1">{navLinks.map((nav, index) => (

                    <li key={nav.id} 
                        className={`cursor-pointer font-medium font-montserrat gap-[10px] text-[24px] text-shadeGrey border-b-2 border-grey w-full py-[20px]
                            ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                        `}>
                        <Link to={`${nav.id}`} className=" hover:text-primary  leading-[24px]"> {nav.title.toUpperCase()}</Link>
                    </li>
                ))}
            </ul>

                </div>
            </div>
         
        </nav>
    );
}