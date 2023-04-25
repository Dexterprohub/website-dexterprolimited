import {React, useState} from 'react'
import styles from '../styles'
import { oilGas, addBox, minusBox } from '../assets'
import Navbar from './Navbar'
const OilGasService = () => {
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
                    <h1 className="text-[14px] font-montserrat md:text-[15px] lg:text-[22px]"> Oil & Gas Services </h1>                   
                </div> 
            </div>

            <div className="flex flex-col font-thiccboi gap-[24px] text-[16px] leading-[30px] inner-tabs mb-[50px] font-thiccboi ">

                    {/* Surface */}
                    <div className={` `}>
                        <div className="text-16px px-[30px] lg:px-[60px] font-semibold font-thiccboi mb-[30px]">
                            <p className="lg:text-[18px] pt-[16px] ">
                                Dexter Pro specializes in Upstream & Downstream research and documentation, offering comprehensive services, such as;
                            </p>
                        </div>
                      
                        <div className={` ${ state === 1 ? "active-tab" : "tab" }   bx-shadow p-[10px] sm:p-[16px] lg:pl-[10px] items-center gap-[10px] `}   onClick={ () => action(1) } >

                            <div className={` cursor-pointer items-center flex flex-row p-[10px] gap-[10px] `} >
                                <img src={ state === 1 ?  minusBox : addBox} 
                                    alt="expand"  
                                    className="w-[30px] h-[30px] object-contain" 
                                    
                                />
                               
                                <h1 className="text-shadeGrey font-bold font-thiccboi lg:text-[22px] leading-[38px]">Subsurface Studies</h1>
                            </div>

                            <div className={` px-[40px] ${state === 1 ? "dropdown-tab-active" : "dropdown-tab"} `}>
                                <p className="pl-[10px]">
                                    We carry out reservoir studies leading to field development plans applicable for asset management purposes for major and marginal field operators. Our studies involve the use of  both classical and special geological and reservoir engineering analysis and evaluation as well as analytical geological and engineering tools and static and dynamic numerical modeling tools.
                                </p>
                                <br />

                                <p className="pl-[10px]">
                                    Our Consultancy and Subsurface Services covers but are not limited to: Field Development studies, Reservoir Studies and Management, Asset Management, Well Engineering, Provision of Skilled Manpower, Software Application Support, 2D/3D/4D Seismic Interpretation, Petrophysical Analysis, Fault Seal Analysis, AVO Analysis and Modeling, Sequence Stratigraphy, Reservoir Simulation (Geological/Reservoir Modeling (StaticModeling), and Dynamic Modeling), Reserves Estimation, Field Review, Well Test Analysis and Design, Wellbore Utilization Studies, Well Performance Optimization, Gas-Lift Design and Analysis, Well and Completion Design.
                                </p>
                            </div>
                           
                           
                        </div>

                        
                    </div>

                    {/* Well Engineering */}
                    <div className={`  `}>
                        <div className={` ${state === 2 ? "active-tab" : "tab"} p-[10px] bx-shadow sm:p-[16px] items-center gap-[10px] cursor-pointer `}   onClick={ () => action(2) } >

                            <div className="flex flex-row p-[10px] gap-[10px] ">
                                <img src={state === 2 ?  minusBox : addBox} 
                                    alt="expand"  
                                    className="w-[30px] h-[30px] object-contain" 
                                   
                                />
                                <h1 className="text-shadeGrey font-bold lg:text-[22px]">Well Engineering</h1>
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

                    {/* Field Development Service */}
                    <div className={`  `}>
                        <div className={` ${state === 3 ? "active-tab" : "tab"} p-[10px] bx-shadow sm:p-[16px] items-center gap-[10px] cursor-pointer `}   onClick={ () => action(3) } >

                            <div className="flex flex-row p-[10px] gap-[10px] ">
                                <img src={state === 3 ?  minusBox : addBox} 
                                    alt="expand"  
                                    className="w-[30px] h-[30px] object-contain" 
                                   
                                />
                                <h1 className="text-shadeGrey font-bold lg:text-[22px]">Field Development Service</h1>
                            </div>

                            <div className={` px-[40px] ${state === 3 ? "dropdown-tab-active" : "dropdown-tab"}`}>
                                <p className="px-[10px]">
                                    The Field Development Plan(FDP) comes in to provide the best technical solution and guide for optimizing the development and production of a field. FDPs include all necessary information, on which economic decisions are being made by the oil and gas-producing companies. In order to mitigate the uncertainty and inaccurate assessment of the field production rate, and ultimate recovery.
                                </p>
                                <br />

                                <p className="px-[10px]">
                                    The Field Development Plan(FDP) comes in to provide the best technical solution and guide for optimizing the development and production of a field. FDPs include all necessary information, on which economic decisions are being made by the oil and gas-producing companies. In order to mitigate the uncertainty and inaccurate assessment of the field production rate, and ultimate recovery.

                                </p>
                            
                            </div>
                           
                           
                        </div>
                       
                    </div>

                    {/* Project Management */}
                    <div className={`  `}>
                        <div className={` ${state === 4 ? "active-tab" : "tab"} p-[10px] bx-shadow sm:p-[16px] items-center gap-[10px] cursor-pointer `}   onClick={ () => action(4) } >

                            <div className="flex flex-row p-[10px] gap-[10px] ">
                                <img src={state === 4 ?  minusBox : addBox} 
                                    alt="expand"  
                                    className="w-[30px] h-[30px] object-contain" 
                                   
                                />
                                <h1 className="text-shadeGrey font-bold lg:text-[22px]">Project Management</h1>
                            </div>

                            <div className={` px-[40px] ${state === 4 ? "dropdown-tab-active" : "dropdown-tab"}`}>
                                <p className="px-[10px]">
                                    We are committed to driving performance and efficiency by reducing waste in the process.we adopt standard project management practices (PMP) by looking at the design, project philosophy, commercial viability, logistics, risk, and mitigation plan for our clients.
                                </p>
                                <br />

                                <p className="px-[10px]">
                                   We collaborate to manage risks that are involved in interventions and delivering services in order to maximize client asset value in:
                                    <ul className="ml-[10px]">
                                        <li>● <span className="mr-[10px]" > </span>Well intervention</li>
                                        <li>● <span className="mr-[10px]" > </span>Well construction</li>
                                        <li>● <span className="mr-[10px]" > </span>Abandonment and decommissioning</li>
                                        
                                    </ul>

                                     Our goal is delivering value to the customer in a cost-efficient manner by managing performance and  commercial risk that will help our clients to get maximum vendorization process

                                </p>
                            
                            </div>
                           
                           
                        </div>
                       
                    </div>
                    {/* Well Control & Emergency Service */}
                    <div className={`  `}>
                        <div className={` ${state === 5 ? "active-tab" : "tab"} p-[10px] bx-shadow sm:p-[16px] items-center gap-[10px] cursor-pointer `}   onClick={ () => action(5) } >

                            <div className="flex flex-row p-[10px] gap-[10px] ">
                                <img src={state === 5 ?  minusBox : addBox} 
                                    alt="expand"  
                                    className="w-[30px] h-[30px] object-contain" 
                                   
                                />
                                <h1 className="text-shadeGrey font-bold lg:text-[22px]">Well Control & Emergency Service</h1>
                            </div>

                            <div className={` px-[40px] ${state === 5 ? "dropdown-tab-active" : "dropdown-tab"}`}>
                                <p className="px-[10px]">
                                    We have the capability to manage complex well control and intervention situations such as - high-pressure/high-temperature incidents,firefighting, kick modeling and tolerance, re-heading, blowout response, and other well control activities.
                                </p>
                                <br />

                                <p className="px-[10px]">
                                   We collaborate to manage risks that are involved in interventions and delivering services in order to maximize client asset value in:
                                    <ul className="ml-[10px]">
                                        <li>● <span className="mr-[10px]" > </span>Well intervention</li>
                                        <li>● <span className="mr-[10px]" > </span>Well construction</li>
                                        <li>● <span className="mr-[10px]" > </span>Abandonment and decommissioning</li>
                                        
                                    </ul>

                                      We partner with Well Control Management  International (WCMI). Our portfolio solution offers our client contingency planning. well control audits.emergency response drills, training, and expert advice for various challenging situations

                                </p>
                            
                            </div>
                           
                           
                        </div>
                       
                    </div>
                    {/* Asset Acquistion & Advisory */}
                    <div className={`  `}>
                        <div className={` ${state === 6 ? "active-tab" : "tab"} p-[10px] bx-shadow sm:p-[16px] items-center gap-[10px] cursor-pointer `}   onClick={ () => action(6) } >

                            <div className="flex flex-row p-[10px] gap-[10px] ">
                                <img src={state === 6 ?  minusBox : addBox} 
                                    alt="expand"  
                                    className="w-[30px] h-[30px] object-contain" 
                                   
                                />
                                <h1 className="text-shadeGrey font-bold lg:text-[22px]">Asset Acquistion & Advisory</h1>
                            </div>

                            <div className={` px-[40px] ${state === 6 ? "dropdown-tab-active" : "dropdown-tab"}`}>
                                <p className="px-[10px]">
                                    We have developed the most comprehensive set of proprietary tools to assist in the evaluation of the information contained in most data rooms.  Our experience and skills helps us to quickly identify and evaluate the key risk areas and identify valuation  issues to help ensure your acquisition success
                                </p>
                                <br />

                                <p className="px-[10px]">
                                   Asset Management Capabilities Include: 
                                    <ul>
                                        <li>● <span className="mr-[10px]" > </span>Monthly review of each assets performance that includes senior management, asset management and property management teams

                                        </li>
                                        <li>● <span className="mr-[10px]" > </span>Quarterly hold/sell/re-position analysis</li>
                                        <li>● <span className="mr-[10px]" > </span>Continuous market and sub-market research and analysis</li>
                                        <li>● <span className="mr-[10px]" > </span>Development and implementation of value-add and re-position plans</li>
                                        <li>● <span className="mr-[10px]" > </span>In-house construction management and general contracting capabilities</li>
                                    </ul>

                                    <span>Our advisory capabilities include :</span>
                                    <ul classname="ml-[10px]">
                                        <li>● <span className="mr-[10px]" > </span>Debt/Equity recapitalization and advisory services</li>
                                        <li>● <span className="mr-[10px]" > </span>Debt/Equity recapitalization and advisory services</li>
                                        <li>● <span className="mr-[10px]" > </span>Receivership, Trustee & Monitoring Services</li>
                                        <li>● <span className="mr-[10px]" > </span>Investor/Asset Due Diligence </li>
                                        <li>● <span className="mr-[10px]" > </span>Redevelopment/Repositioning</li>
                                        <li>● <span className="mr-[10px]" > </span>Valuation Analysis & Financial Modeling</li>
                                        <li>● <span className="mr-[10px]" > </span>Note Sales and Workouts</li>
                                    </ul>
                                </p>
                            
                            </div>
                           
                           
                        </div>
                       
                    </div>
                    {/* General Procurement */}
                    <div className={`  `}>
                        <div className={` ${state === 7 ? "active-tab" : "tab"} p-[10px] bx-shadow sm:p-[16px] items-center gap-[10px] cursor-pointer `}   onClick={ () => action(7) } >

                            <div className="flex flex-row p-[10px] gap-[10px] ">
                                <img src={state === 7 ?  minusBox : addBox} 
                                    alt="expand"  
                                    className="w-[30px] h-[30px] object-contain" 
                                   
                                />
                                <h1 className="text-shadeGrey font-bold lg:text-[22px]">Asset Acquistion & Advisory</h1>
                            </div>

                            <div className={` px-[40px] ${state === 7 ? "dropdown-tab-active" : "dropdown-tab"}`}>
                                
                            </div>
                           
                           
                        </div>
                       
                    </div>

                    
                 
                    



                    {/* TAB 2 */}

                    {/* MARINE SERVICES TAB */}

                    <div   className={` ${ state === 2 ? "inner-tab-active" : "inner-tab" } font-thiccboi  p-[10px] sm:p-[16px] `}>

                        <div className="flex flex-col gap-[24px] font-thiccboi text-[16px] leading-[30px]">
                            <div className="text-16px px-[20px] font-semibold font-thiccboi mb-[30px]">

                                <p className="lg:text-[18px] pt-[16px] lg:px-[100px]">
                                    Dexter Pro Limited is incorporated in Nigeria in order to carry out duties in all manners of Marine Engineering, Hiring and sale of marine equipments, Logistics and General Contractors. Using our current business practices and optimal resources. We have grown into an integrated service provider to the marine sector drawing up on a board-based platform of highly experienced and multi-disciplined engineers, as well as creating an integrated network of energy solutions
                                </p>
                            </div>

                            {/* Marine Engineering */}
                            <div className={` ${newState === 2 ? " active-tab" : "tab"}  items-start bx-shadow  p-[10px] sm:p-[16px]`}   onClick={ () => newAction(2) } >

                                <div className="flex flex-row  gap-[10px] p-[10px] cursor-pointer">
                                    <img src={newState === 2 ? minusBox : addBox} 
                                        alt="expand"  
                                        className="w-[30px] h-[30px] object-contain" 
                                        
                                    />
                                    <h1 className="text-shadeGrey font-bold lg:text-[22px]">Marine Engineering</h1>
                                </div>

                                <div className={`dropdown-tab px-[40px]  ${newState === 2 ? "dropdown-tab-active" : "dropdown-tab"}`}>
                                    <p className="pl-[10px]">
                                        DEXTER PRO Limited enhances  your safety at sea, offering reliable coverage where no other options exist. We provide consistently high levels of service and a cost-effective solution to our customers’ requirements. The Dexter pro network is designed to work in extreme conditions at sea.
                                    </p>
                                    <br />

                                    <p className="pl-[10px]">
                                        We provide a wide range of engineering services offering feasible solutions to our clients.
                                    </p> 
                                </div>        
                            </div>

                            {/* Marine Logistics */}
                            <div className={` ${newState === 3 ? "tab active-tab" : "tab"}  p-[10px] sm:p-[16px] bx-shadow items-start gap-[10px] `}   onClick={ () => newAction(3) } >

                                <div className="flex flex-row p-[10px]  gap-[10px] cursor-pointer ">
                                    <img src={newState ===3 ? minusBox : addBox} 
                                        alt="expand"  
                                        className="w-[30px] h-[30px] object-contain" 
                                        
                                    />
                                    <h1 className="text-shadeGrey font-bold lg:text-[22px]">Marine Logistics</h1>
                                </div>

                                <div className={`dropdown-tab px-[40px]  ${newState === 3 ? "dropdown-tab-active" : "dropdown-tab"}`}>
                                    {/* <p>
                                        We carry out reservoir studies leading to field development plans applicable for asset management purposes for major and marginal field operators. Our studies involve the use of  both classical and special geological and reservoir engineering analysis and evaluation as well as analytical geological and engineering tools and static and dynamic numerical modeling tools.
                                    </p>
                                    <br />

                                    <p>
                                        Our Consultancy and Subsurface Services covers but are not limited to: Field Development studies, Reservoir Studies and Management, Asset Management, Well Engineering, Provision of Skilled Manpower, Software Application Support, 2D/3D/4D Seismic Interpretation, Petrophysical Analysis, Fault Seal Analysis, AVO Analysis and Modeling, Sequence Stratigraphy, Reservoir Simulation (Geological/Reservoir Modeling (StaticModeling), and Dynamic Modeling), Reserves Estimation, Field Review, Well Test Analysis and Design, Wellbore Utilization Studies, Well Performance Optimization, Gas-Lift Design and Analysis, Well and Completion Design.
                                    </p> */}
                                </div>
                               
                            </div>

                            {/* Marine Consultancy */}
                            <div className={` ${newState === 4 ? "tab active-tab" : "tab"}  p-[10px] sm:p-[16px] bx-shadow items-start gap-[10px] `}   onClick={ () => newAction(4) } >

                                <div className="flex flex-row  p-[10px] gap-[10px] cursor-pointer">
                                    <img src={newState === 4 ? minusBox : addBox} 
                                        alt="expand"  
                                        className="w-[30px] h-[30px] object-contain" 
                                        
                                    />
                                    <h1 className="text-shadeGrey font-bold lg:text-[22px]">Marine Consultancy</h1>
                                </div>

                                <div className={`dropdown-tab px-[40px]  ${newState === 4 ? "dropdown-tab-active" : "dropdown-tab"}`}>
                                     <p className="pl-[10px]">
                                       We aim to proffer solutions to complex and technical issues in the industry, with each consulting tailored to each individual project and customer. With our team that has an in-depth knowledge of the maritme industry, we assure our clients of the best consultations they can get, gently pushing them to exceed their set goals.
                                    </p>
                                    <br />

                                    <p className="pl-[10px]">
                                        Consulting has always been critical to the good development and success of our organization. We enjoy solving some of the most difficult technological problems in the business. We give our clients the opportunity to completely realize their objectives in a smooth manner by imparting to them our extensive knowledge of the marine industry and assisting them as they navigate engineering and scientific hurdles.
                                    </p> 
                                </div>
                               
                            </div>

                        </div>
                    </div>

                    {/* IT SERVICES */}
                    <div className={` ${state === 3 ? "inner-tab-active" : "inner-tab"}`}>

                        <div className="flex flex-col gap-[24px] font-thiccboi text-[16px] leading-[30px]">
                            <div className="text-16px px-[20px] mb-[2px] font-semibold font-thiccboi mb-[35px]">

                                <p className="lg:text-[18px] pt-[16px] lg:px-[100px]">
                                    Building innovative technology solutions for real world problems, our team of designers and engineers are capable of developing novel technological solutions to solve your business needs. Our design and solution architects' technical expertise and business acumen ensure that your project is structured to create an amazing user experience for your clients
                                </p>
                            </div>

                            {/* Dexterapp */}
                            <div className={`${newState === 3 ? "tab active-tab" : "tab"}  p-[10px] sm:p-[16px] bx-shadow items-center justify-start gap-[10px] `}   onClick={ () => newAction(3) } >

                                <div className="flex flex-row p-[10px]  gap-[10px] cursor-pointer ">
                                    <img src={newState === 3 ? minusBox : addBox} 
                                        alt="expand"  
                                        className="w-[30px] h-[30px] object-contain" 
                                       
                                    />
                                    <h1 className="text-shadeGrey font-bold lg:text-[22px]">Dexter App</h1>
                                </div>

                                <div className={`dropdown-tab px-[40px]   ${newState === 3 ? "dropdown-tab-active" : "dropdown-tab"}`}>
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

                            {/* Dexter Academy*/}
                            <div className={` ${newState === 4 ? "tab active-tab" : "tab"}  p-[10px] sm:p-[16px] bx-shadow items-start gap-[10px] `}   onClick={ () => newAction(4) } >

                                <div className="flex flex-row p-[10px]  gap-[10px] cursor-pointer">
                                    <img src={newState === 4 ? minusBox : addBox} 
                                        alt="expand"  
                                        className="w-[30px] h-[30px] object-contain" 
                                        
                                    />
                                    <h1 className="text-shadeGrey font-bold lg:text-[22px]">Dexter Academy</h1>
                                </div>
                                    {/* ${newState === 3 ? "dropdown-tab-active" : "dropdown-tab"} */}
                                <div className={`dropdown-tab px-[40px] mb-[20px] `}>
                                    {/* <p>
                                        We carry out reservoir studies leading to field development plans applicable for asset management purposes for major and marginal field operators. Our studies involve the use of  both classical and special geological and reservoir engineering analysis and evaluation as well as analytical geological and engineering tools and static and dynamic numerical modeling tools.
                                    </p>
                                    <br />

                                    <p>
                                        Our Consultancy and Subsurface Services covers but are not limited to: Field Development studies, Reservoir Studies and Management, Asset Management, Well Engineering, Provision of Skilled Manpower, Software Application Support, 2D/3D/4D Seismic Interpretation, Petrophysical Analysis, Fault Seal Analysis, AVO Analysis and Modeling, Sequence Stratigraphy, Reservoir Simulation (Geological/Reservoir Modeling (StaticModeling), and Dynamic Modeling), Reserves Estimation, Field Review, Well Test Analysis and Design, Wellbore Utilization Studies, Well Performance Optimization, Gas-Lift Design and Analysis, Well and Completion Design.
                                    </p> */}
                                </div>
                               
                            </div>

                            {/* Dexter Hub */}
                            <div className={` ${newState === 5 ? "tab active-tab" : "tab"}  p-[10px] sm:p-[16px] bx-shadow items-center justify-start gap-[10px] `}   onClick={ () => newAction(5) } >

                                <div className="flex flex-row p-[10px] gap-[10px] cursor-pointer ">
                                    <img src={newState === 5 ? minusBox : addBox} className=" w-[30px] h-[30px] " />
                                    <h1 className="text-shadeGrey font-bold lg:text-[22px]">Dexter Hub</h1>
                                </div>

                                <div className={`dropdown-tab px-[40px]  ${newState === 5 ? "dropdown-tab-active" : "dropdown-tab"}`}>
                                    <p className="pl-[10px]">
                                       A major project we are on course to execute is the Incubation Hub for Dexter Pro. We are making plans to provide a workspace for youths and technology enthusiasts to have access to workstations, internet access and mentorship.
                                    </p>
                                    <br />

                                    <p className="pl-[10px]">
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
    </div>
    
    
    
  )
}

export default OilGasService