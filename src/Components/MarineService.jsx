import {React, useState} from 'react'
import styles from '../styles'
import { oilGas, addBox, minusBox } from '../assets'
import Navbar from './Navbar'

const MarineService = () => {
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
                    <h1 className="text-[14px] font-montserrat md:text-[15px] lg:text-[22px]"> Marine Services </h1>                   
                </div> 
            </div>

            <div className="flex flex-col font-thiccboi gap-[24px] text-[16px] leading-[30px] inner-tabs mb-[50px] font-thiccboi ">

                    {/* MARINE SERVICES TAB */}
                    <div className={` `}>
                        <div className="text-16px px-[30px] lg:px-[60px] font-semibold font-thiccboi mb-[30px]">
                            <p className="lg:text-[18px] pt-[16px] ">
                                Dexter Pro Limited is incorporated in Nigeria in order to carry out duties in all manners of Marine Engineering, Hiring and sale of marine equipments, Logistics and General Contractors. Using our current business practices and optimal resources. We have grown into an integrated service provider to the marine sector drawing up on a board-based platform of highly experienced and multi-disciplined engineers, as well as creating an integrated network of energy solutions
                            </p>
                        </div>
                      
                        <div className={` ${ state === 1 ? "active-tab" : "tab" }   bx-shadow p-[10px] sm:p-[16px] lg:pl-[10px] items-center gap-[10px] `}   onClick={ () => action(1) } >

                            <div className={` cursor-pointer items-center flex flex-row p-[10px] gap-[10px] `} >
                                <img src={ state === 1 ?  minusBox : addBox} 
                                    alt="expand"  
                                    className="w-[30px] h-[30px] object-contain" 
                                    
                                />
                               
                                <h1 className="text-shadeGrey font-bold font-thiccboi lg:text-[22px] leading-[38px]">Marine Engineering</h1>
                            </div>

                            <div className={` px-[40px] ${state === 1 ? "dropdown-tab-active" : "dropdown-tab"} `}>
                                <p className="pl-[10px]">
                                     Dexter Pro Limited enhances  your safety at sea, offering reliable coverage where no other options exist. We provide consistently high levels of service and a cost-effective solution to our customers’ requirements. The Dexter pro network is designed to work in extreme conditions at sea.
                                </p>
                                <br />

                                <p className="pl-[10px]">
                                    We provide a wide range of engineering services offering feasible solutions to our clients.
                                </p>
                            </div>
                           
                           
                        </div>

                        
                    </div>

                    {/* Marine Logistics */}
                    <div className={`  `}>
                        <div className={` ${state === 2 ? "active-tab" : "tab"} p-[10px] bx-shadow sm:p-[16px] items-center gap-[10px] cursor-pointer `}   onClick={ () => action(2) } >

                            <div className="flex flex-row p-[10px] gap-[10px] ">
                                <img src={state === 2 ?  minusBox : addBox} 
                                    alt="expand"  
                                    className="w-[30px] h-[30px] object-contain" 
                                   
                                />
                                <h1 className="text-shadeGrey font-bold lg:text-[22px]">Marine Logistics</h1>
                            </div>

                            <div className={` px-[40px] ${state === 2 ? "dropdown-tab-active" : "dropdown-tab"}`}>
                                <p className="px-[10px]">
                                    We are adept problem-solvers. Whether we’re assisting you with resource exploration and development, well maintenance and optimization, or end-of-life planning. We strive to reduce complexity, improve cost and schedule predictability, while maximizing value.
                                </p>
                                <br />

                                <p className="px-[10px]">
                                    In order to free up your time and resources so you may concentrate on your area of expertise, our excellent engineering team handles time and resource restrictions, and provides solutions to technical problems you can’t handle internally. We provide support in the following areas:
                                    <ul>
                                        <li> Studies (feasibility, concepts, estimates) </li>
                                        <li> Well construction </li>
                                        <li> Well intervention </li>
                                        <li> Well integrity (operate and maintain) </li>
                                        <li>  Well decommissioning </li>
                                    </ul>

                                </p>
                            
                            </div>
                           
                           
                        </div>
                       
                    </div>

                    {/* Marine Consultancy  */}
                    <div className={`  `}>
                        <div className={` ${state === 3 ? "active-tab" : "tab"} p-[10px] bx-shadow sm:p-[16px] items-center gap-[10px] cursor-pointer `}   onClick={ () => action(3) } >

                            <div className="flex flex-row p-[10px] gap-[10px] ">
                                <img src={state === 3 ?  minusBox : addBox} 
                                    alt="expand"  
                                    className="w-[30px] h-[30px] object-contain" 
                                   
                                />
                                <h1 className="text-shadeGrey font-bold lg:text-[22px]">Marine Consultancy</h1>
                            </div>

                            <div className={` px-[40px] ${state === 3 ? "dropdown-tab-active" : "dropdown-tab"}`}>
                                <p className="px-[10px]">
                                     We aim to proffer solutions to complex and technical issues in the industry, with each consulting tailored to each individual project and customer. With our team that has an in-depth knowledge of the maritme industry, we assure our clients of the best consultations they can get, gently pushing them to exceed their set goals.
                                </p>
                                <br />

                                <p className="px-[10px]">
                                    Consulting has always been critical to the good development and success of our organization. We enjoy solving some of the most difficult technological problems in the business. We give our clients the opportunity to completely realize their objectives in a smooth manner by imparting to them our extensive knowledge of the marine industry and assisting them as they navigate engineering and scientific hurdles.

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

export default MarineService