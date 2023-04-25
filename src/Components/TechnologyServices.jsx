import {React, useState} from 'react'
import styles from '../styles'
import { oilGas, addBox, minusBox } from '../assets'
import Navbar from './Navbar'
const TechnologyServices = () => {
    const [state, setState] = useState();
    const [newState, newSetState] = useState();
   
    const action = (index) => {
        setState(index)
        console.log(index)
        
    }

    const newAction = (index) => {
        newSetState(index)
        console.log(index)
    }
  return (

    <div className="w-full bg-white overflow-hidden">

        {/* NAVBAR */}
        <div className="w-full">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                <Navbar />
                </div>
            </div>
        </div>


        <div className={`${styles.paddingX}  ${styles.flexStart} `}>
        <div className={` ${styles.boxWidth}`}>

            <div className="flex flex-col my-[30px] lg:mb-[0px]  md:flex-row   items-start gap-[8px] font-monseratt font-semibold tabs" >

                <div className={`flex flex-row gap-[10px] cursor-pointer  w-full p-[10px] items-center border-t-[4px] colored lg:pt-[50px]`}>
                    <img src={oilGas} className=" w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"/> 
                    <h1 className="text-[14px] font-montserrat md:text-[15px] lg:text-[22px]"> Technology Services </h1>                   
                </div> 
            </div>

            <div className="flex flex-col font-thiccboi gap-[24px] text-[16px] leading-[30px] inner-tabs mb-[50px] font-thiccboi ">

                    {/* Dexterapp */}
                    <div className={` `}>
                        <div className="text-16px px-[30px] lg:px-[60px] font-semibold font-thiccboi mb-[30px]">
                            <p className="lg:text-[18px] pt-[16px] ">
                                Building innovative technology solutions for real world problems, our team of designers and engineers are capable of developing novel technological solutions to solve your business needs. Our design and solution architects' technical expertise and business acumen ensure that your project is structured to create an amazing user experience for your clients
                            </p>
                        </div>
                      
                        <div className={` ${ state === 1 ? "active-tab" : "tab" }   bx-shadow p-[10px] sm:p-[16px] lg:pl-[10px] items-center gap-[10px] `}   onClick={ () => action(1) } >

                            <div className={` cursor-pointer items-center flex flex-row p-[10px] gap-[10px] `} >
                                <img src={ state === 1 ?  minusBox : addBox} 
                                    alt="expand"  
                                    className="w-[30px] h-[30px] object-contain" 
                                    
                                />
                               
                                <h1 className="text-shadeGrey font-bold font-thiccboi lg:text-[22px] leading-[38px]">Dexter App</h1>
                            </div>

                            <div className={` px-[40px] ${state === 1 ? "dropdown-tab-active" : "dropdown-tab"} `}>
                                <p className="pl-[10px]">
                                    The Dexter App is a service request app that allows users first in Lagos and then Africa to request for services and get it done by qualified professionals. We believe this app is going to be a important win in the nearest future. All hands are on deck to launch the app progressively from January 2023 with a full launch and attainment of Product Market Fit (PMF) by March 2023
                                </p>
                                <br />

                                <p className="pl-[10px]">
                                    <ul>
                                        <li>● Dexter App will provide access to a range of services which will be updated progressively. The first set of services that will be launched are:</li>
                                        <li>○Technical Services: Electrical, Plumbing and Carpentry</li>
                                        <li>○ Food Services</li>
                                        <li>○ Makeup, Fashion Design and Hair Stylist services</li>
                                        <li>○ Laundry</li>
                                        <li>○ Shortlet Bookings</li>
                                        <li>○ Grocery Shopping</li>
                                    </ul>
                                </p>
                            </div>
                           
                           
                        </div>

                        
                    </div>

                    {/* Dexter Academy*/}
                    <div className={`  `}>
                        <div className={` ${state === 2 ? "active-tab" : "tab"} p-[10px] bx-shadow sm:p-[16px] items-center gap-[10px] cursor-pointer `}   onClick={ () => action(2) } >

                            <div className="flex flex-row p-[10px] gap-[10px] ">
                                <img src={state === 2 ?  minusBox : addBox} 
                                    alt="expand"  
                                    className="w-[30px] h-[30px] object-contain" 
                                   
                                />
                                <h1 className="text-shadeGrey font-bold lg:text-[22px]">Dexter Academy</h1>
                            </div>

                            <div className={` px-[40px] ${state === 2 ? "dropdown-tab-active" : "dropdown-tab"}`}>
                                <p className="px-[10px]">
                                    
                                </p>
                                <br />

                                <p className="px-[10px]">
                                    
                                </p>
                            
                            </div>
                           
                           
                        </div>
                       
                    </div>

                    {/* Dexter Hub */}
                    <div className={`  `}>
                        <div className={` ${state === 3 ? "active-tab" : "tab"} p-[10px] bx-shadow sm:p-[16px] items-center gap-[10px] cursor-pointer `}   onClick={ () => action(3) } >

                            <div className="flex flex-row p-[10px] gap-[10px] ">
                                <img src={state === 3 ?  minusBox : addBox} 
                                    alt="expand"  
                                    className="w-[30px] h-[30px] object-contain" 
                                   
                                />
                                <h1 className="text-shadeGrey font-bold lg:text-[22px]">Dexter Hub</h1>
                            </div>

                            <div className={` px-[40px] ${state === 3 ? "dropdown-tab-active" : "dropdown-tab"}`}>
                                <p className="px-[10px]">
                                   A major project we are on course to execute is the Incubation Hub for Dexter Pro. We are making plans to provide a workspace for youths and technology enthusiasts to have access to workstations, internet access and mentorship.
                                </p>
                                <br />

                                <p className="px-[10px]">
                                    <ul>
                                        <li>● The hub will serve as a physical center for all masterclasses proposed for the Dexter Academy and other conferences

                                        </li>
                                        <li>● The hub aims to become a startup/idea incubator with potential funding opportunity

                                        </li>
                                    </ul>

                                </p>
                            
                            </div>
                           
                           
                        </div>
                       
                    </div>



                </div> 
            </div>
        </div>
    </div>
    
    
    
  )
}

export default TechnologyServices