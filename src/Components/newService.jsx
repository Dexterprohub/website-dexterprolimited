import { React, useState } from 'react'
import Navbar from './Navbar'
import styles from '../styles'
import { marineIcon, itIcon, oilGas, addBox } from '../assets'
import Footer from './Footer'
const ServicePage = () => {
    const [state, setState] = useState(1);
    const [newState, newSetState] = useState(1);
    const action = (index) => {
        setState(index)
        
    }

    const newAction = (index) => {
        newSetState(index)
    }
  return (
    <div className="w-full bg-white overflow-hidden">
        <div className="w-full">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                <Navbar />
                </div>
            </div>
        </div>

        <div className={`${styles.paddingX}  ${styles.flexStart} `}>
            <div className={` ${styles.boxWidth}`}>



                <div className="flex flex-col mb-[30px]   items-start gap-[8px] font-monseratt font-semibold tabs" >

                    <div className={`${state === 1 ? "tab active-tab" : "tab"} flex flex-row gap-[10px]  w-full p-[10px] items-center border-t-[2px]`}
                        onClick={()=>action(1)}>
                        <img src={oilGas} className="w-[30px] h-[30px]"/> 
                        <h1> Oil & Gas Services </h1>
                    </div>

                    <div className={`${state === 2 ? "tab active-tab" : "tab"} flex flex-row gap-[10px]  w-full p-[10px] items-center border-t-[2px]`}
                        onClick={()=>action(2)} >

                        <img src={marineIcon} className="w-[30px] h-[30px] tab "/> 
                        <h1> Marine Services </h1>
                    </div>

                    <div className={`${state === 3 ? "tab active-tab" : "tab"} flex flex-row gap-[10px]  w-full p-[10px] items-center border-t-[2px] `}
                        onClick={()=>action(3)}>
                        <img src={itIcon} className="w-[30px] h-[30px] tab "/> 
                        <h1> Technology Services </h1>
                    </div>
                    
                </div>

                <div className="flex flex-col font-thiccboi text-[16px] leading-[30px] inner-tabs  ">

                    <div className={` ${state === 1 ? "inner-tab-active" : "inner-tab"} `}>
                        <div className="text-16px px-[30px] font-semibold font-thiccboi">
                            <p>
                                Dexter Pro specializes in Upstream & Downstream research and documentation, offering comprehensive services, such as;
                            </p>
                        </div>

                        <div className={` ${newState === 1 ? "dropdown-tab-active" : "dropdown-tab"}  p-[6px] items-start gap-[10px] `}
                            onClick={() => newAction(1)}>
                            <div className="flex flex-row">
                                <img src={addBox} className=" w-[30px] h-[30px] " />
                                <h1 className="text-shadeGrey font-bold">Subsurface Studies</h1>
                            </div>
            
                                <div className={` ${newState === 1 ? "dropdown-tab-active" : "dropdown-tab"} `}
                                    >
                                    <div className="flex flex-col text-16px px-[20px] font-semibold font-thiccboi ">
                                            <p>
                                                Building innovative technology solutions for real world problems, our team of designers and engineers are capable of developing novel technological solutions to solve your business needs. Our design and solution architects' technical expertise and business acumen ensure that your project is structured to create an amazing user experience for your clients
                                            </p>
                                        </div>

                                </div>
                           
                        </div>

                        <div className={` ${newState === 2 ? "dropdown-tab-active" : "dropdown-tab"}  p-[6px] items-center gap-[10px] `} >
                            <div className="flex flex-row">

                            </div>
                            <img src={addBox} className=" w-[30px] h-[30px] " />
                            <h1>Well Engineering</h1>
                            <div className="dropdown-tabs">

                                <div className={` ${newState === 2 ? "dropdown-tab-active" : "dropdown-tab"} items-start `} >
                                    <div className="text-16px px-[20px] font-semibold font-thiccboi">
                                            <p>
                                                Building innovative technology solutions for real world problems, our team of designers and engineers are capable of developing novel technological solutions to solve your business needs. Our design and solution architects' technical expertise and business acumen ensure that your project is structured to create an amazing user experience for your clients
                                            </p>
                                        </div>

                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row p-[6px] items-center gap-[10px] ">
                            <img src={addBox} className=" w-[30px] h-[30px] " />
                            <h1>Field Development Service</h1>
                            <div className="dropdown-tabs">

                                <div className={` ${newState === 3 ? "dropdown-tab-active" : "dropdown-tab"} `} 
                                    onClick={() => newAction(3)}>
                                    <div className="text-16px px-[20px] font-semibold font-thiccboi">
                                            <p>
                                                Building innovative technology solutions for real world problems, our team of designers and engineers are capable of developing novel technological solutions to solve your business needs. Our design and solution architects' technical expertise and business acumen ensure that your project is structured to create an amazing user experience for your clients
                                            </p>
                                        </div>

                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row p-[6px] items-center gap-[10px]">
                            <img src={addBox} className=" w-[30px] h-[30px] " />
                            <h1>Project Management</h1>
                            <div className="dropdown-tabs">

                                <div className={` ${newState === 1 ? "dropdown-tab-active" : "dropdown-tab"} `} >
                                    <div className="text-16px px-[20px] font-semibold font-thiccboi">
                                            <p>
                                                Building innovative technology solutions for real world problems, our team of designers and engineers are capable of developing novel technological solutions to solve your business needs. Our design and solution architects' technical expertise and business acumen ensure that your project is structured to create an amazing user experience for your clients
                                            </p>
                                        </div>

                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row p-[6px] items-center gap-[10px]">
                            <img src={addBox} className=" w-[30px] h-[30px] " />
                            <h1>Well Control & Emergency Response</h1>
                            <div className="dropdown-tabs">

                                <div className={` ${newState === 1 ? "dropdown-tab-active" : "dropdown-tab"} `} >
                                    <div className="text-16px px-[20px] font-semibold font-thiccboi">
                                            <p>
                                                Building innovative technology solutions for real world problems, our team of designers and engineers are capable of developing novel technological solutions to solve your business needs. Our design and solution architects' technical expertise and business acumen ensure that your project is structured to create an amazing user experience for your clients
                                            </p>
                                        </div>

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row p-[6px] items-center gap-[10px]">
                            <img src={addBox} className=" w-[30px] h-[30px] " />
                            <h1>Asset Acquisition & Advisory</h1>
                            <div className="dropdown-tabs">

                                <div className={` ${newState === 1 ? "dropdown-tab-active" : "dropdown-tab"} `} >
                                    <div className="text-16px px-[20px] font-semibold font-thiccboi">
                                            <p>
                                                Building innovative technology solutions for real world problems, our team of designers and engineers are capable of developing novel technological solutions to solve your business needs. Our design and solution architects' technical expertise and business acumen ensure that your project is structured to create an amazing user experience for your clients
                                            </p>
                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    



                    <div className={` ${state === 2 ? "inner-tab-active" : "inner-tab"}`}>

                        <div className="font-thiccboi text-[16px] leading-[30px]">
                            <div className="text-16px px-[20px] font-semibold font-thiccboi">

                            <p>
                                Dexter Pro Limited is incorporated in Nigeria in order to carry out duties in all manners of Marine Engineering, Hiring and sale of marine equipments, Logistics and General Contractors. Using our current business practices and optimal resources. We have grown into an integrated service provider to the marine sector drawing up on a board-based platform of highly experienced and multi-disciplined engineers, as well as creating an integrated network of energy solutions
                            </p>
                            </div>

                            <div className="flex flex-row p-[6px] items-center gap-[10px]">
                                <img src={addBox} className=" w-[30px] h-[30px] " />
                                <h1 className="text-shadeGrey font-bold">Marine Engineering</h1>

                            </div>


                            <div className="flex flex-row p-[6px] items-center gap-[10px]">
                                <img src={addBox} className=" w-[30px] h-[30px] " /><h1>Marine Logistics</h1>
                            </div>

                            <div className="flex flex-row p-[6px] items-center gap-[10px]">
                                <img src={addBox} className=" w-[30px] h-[30px] " />
                                <h1>Marine Consultancy</h1>
                            </div>
                        </div>
                    </div>

                    <div className={` ${state === 3 ? "inner-tab-active" : "inner-tab"} `}>
                        <div className="font-thiccboi text-[16px] leading-[30px] ">
                            <div className="text-16px px-[20px] font-semibold font-thiccboi">
                                <p>
                                    Building innovative technology solutions for real world problems, our team of designers and engineers are capable of developing novel technological solutions to solve your business needs. Our design and solution architects' technical expertise and business acumen ensure that your project is structured to create an amazing user experience for your clients
                                </p>
                            </div>

                            <div className="flex flex-row p-[6px] items-center gap-[10px] ">
                                <img src={addBox} className=" w-[30px] h-[30px] " /><h1 className="text-shadeGrey font-bold">Dexter App</h1>
                            </div>
                            <div className="flex flex-row p-[6px] items-center gap-[10px]">
                                <img src={addBox} className=" w-[30px] h-[30px] " /><h1>Dexter Academy</h1>
                            </div>
                            <div className="flex flex-row p-[6px] items-center gap-[10px]">
                                <img src={addBox} className=" w-[30px] h-[30px] " /><h1>Dexter Hub</h1>
                            </div>
                        </div>
                    </div>

                </div>

               
                
            </div>
        </div>

        <div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={` ${styles.boxWidth}`}>
                <Footer />

            </div>
        </div>
        
    </div>
  )
}

export default ServicePage