import { React } from 'react'
import { useInView } from 'react-intersection-observer';

import Navbar from './Navbar';
import styles from '../styles';
import {    } from '../assets';
import Footer from './Footer';
import Partners from './Partners';


const AboutUs = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: rocketRef, inView: rocketIsVisible } = useInView();
  const { ref: yourRef, inView: yourElementIsVisible } = useInView();
  const { ref: hisRef, inView: shuttleIsVisible } = useInView();
  
  
  return (
    <div className="w-full bg-white overflow-hidden">
        
      <div className="w-full">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>

      <div className={`${styles.paddingX}  ${styles.flexStart} lg:my-[50px] mb-[30px] `}>
        <div className={`${styles.boxWidth}`}>           

            <div ref={rocketRef} className=" flex flex-col justify-start items-center relative lg:mt-[30px] lg:mb-[80px]">
                <h1  className={`rocket outlineService text-center font-outline uppercase text-[24px] sm:text-[52px] lg:text-[98px] font-monserrat font-extrabold leading-[156px] text-white ${rocketIsVisible ? 'animateRocket' : ''}`}>EXECUTIVE SUMMARY</h1>

                <h1 ref={myRef} className={`rocket ${myElementIsVisible ? 'animateServices' : ''} absolute top-[50px] sm:top-[60px] lg:top-[80px] leading-[74px] uppercase text-[18px] sm:text-[28px]  lg:text-[64px] text-primary font-montserrat font-semibold text-center`}>EXECUTIVE SUMMARY</h1>

            </div>

            <div className="flex flex-col text-center ">
                
                <p className="font-thiccboi text-[16px] lg:text-[22px]  ">
                    Dexterpro is a rapidly expanding, solutions-driven company with business interests in the oil and gas, marine, and technology sectors. Our primary goal at Dexter Pro is to create limitless solutions for the Nigerian and African markets and deliver bespoke projects on time and at competitive costs. We are extremely confident in our ability to manage large and delicate projects in all sectors thanks to our technical proficiency, solid financial standing, formidable relationships with our technical partners, and skilled team members.
                </p>
                
            </div>

            <div className=" flex flex-col md:flex-row items-center md:gap-[150px] text-center py-[50px]">

                <div ref={yourRef} className="flex flex-col items-center  relative lg:mt-[30px] lg:mb-[80px]">
                    <h1  className={`rocket outlineService text-center font-outline uppercase text-[24px] sm:text-[52px] lg:text-[98px] font-monserrat font-extrabold leading-[156px] text-white ${shuttleIsVisible ? 'animateRocket' : ''}`}>MISSION</h1>

                    <h1 ref={hisRef} className={`rocket ${yourElementIsVisible ? 'animateServices' : ''} absolute top-[50px] sm:top-[60px] lg:top-[80px] leading-[74px] uppercase text-[18px] sm:text-[28px]  lg:text-[64px] text-primary font-montserrat font-semibold text-center`}>MISSION </h1>

                </div>

                <div className="text-center">
                    At DexterPro, we believe in delivering top-level value to our clients in a manner that is both cost-efficient and with minimal commercial and performance risk which will help our clients derive maximum benefits for their peculiar needs.
                </div>

            </div>

            
            <div className="flex flex-col md:flex-row items-center md:gap-[200px] justify-center py-[50px]">
                <div ref={rocketRef} className="flex flex-col justify-start items-center relative lg:mt-[30px] lg:mb-[80px]">
                    <h1  className={`rocket outlineService text-center font-outline uppercase text-[24px] sm:text-[52px] lg:text-[98px] font-monserrat font-extrabold leading-[156px] text-white ${rocketIsVisible ? 'animateRocket' : ''}`}> VISION</h1>

                    <h1 ref={myRef} className={`rocket ${myElementIsVisible ? 'animateServices' : ''} absolute top-[50px] sm:top-[60px] lg:top-[80px] leading-[74px] uppercase text-[18px] sm:text-[28px]  lg:text-[64px] text-primary font-montserrat font-semibold text-center`}>VISION</h1>

                </div>

                <div className="text-center">
                    Our vision at DexterPro is to become a globally recognized E&amp;P and Technology service company by leveraging technical depth and proficiency with a mandate to delivering top-tier result for our clients without compromising safety needs. 
                </div>
            </div>

            

         

        </div>
      </div>

      <div className={`bg-grey ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`  ${styles.boxWidth}`}>
        <Partners />

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

export default AboutUs