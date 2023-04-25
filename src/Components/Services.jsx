import {React} from 'react'
import { useInView } from 'react-intersection-observer';
import { imageIT, marineShip, ship } from '../assets'
// import { HashLink as Link } from 'react-router-hash-link';
import Card from './Card'


const Services = () => {

  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: rocketRef, inView: rocketIsVisible } = useInView();
  
  return (
  
    <div className="w-full relative py-[20px]">
      <div ref={rocketRef} className=" flex flex-col items-center relative xl:mt-[30px] xl:mb-[80px]">
        <h1  className={`rocket outlineService text-center font-outline uppercase text-[54px] lg:text-[128px] font-monserrat font-extrabold leading-[156px] text-white ${rocketIsVisible ? 'animateRocket' : ''}`}>Services</h1>

        <h1 ref={myRef} className={`rocket ${myElementIsVisible ? 'animateServices' : ''} absolute top-[60px] lg:top-[80px] leading-[74px] uppercase text-[28px]  lg:text-[64px] text-primary font-montserrat font-semibold text-center`}>Our Services</h1>
      
        {/* <p ref={rocketRef}> <span className={`rocket ${rocketIsVisible ? 'animateRocket' : ''}`}>:smile:</span></p> */}
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-[31px] md:mt-[20px] pb-[50px] ">

        <Card image={ship} title="Oil and Gas Services" description="Dexter Pro specializes in Upstream & Downstream research and documentation, offering comprehensive services." link="/oilgas" />
        <Card image={marineShip} title="Marine Services" description="Dexter Pro is incorporated in Nigeria in order to carry out duties in all manner of MarineEngineering, Hiring and sale of marine equipment’s, Logistics and GeneralContractors. Using our current business practices and optimalresources." link="/marine" />
        <Card image={imageIT} title="Technology Services" description="At Dexter Pro, we build bespoke digital solutions that address topical issues in our world. Our suite of products are premised on  credible research and professional execution to satisfy your business needs." link="/tech"/>
      </div>

      
    </div>
  )
}

export default Services