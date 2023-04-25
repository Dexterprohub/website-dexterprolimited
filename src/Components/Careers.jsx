import { React } from 'react'
import { useInView } from 'react-intersection-observer';

import Navbar from './Navbar';
import styles from '../styles';
import { people, benefit, careers  } from '../assets';
import Footer from './Footer';

const Careers = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: rocketRef, inView: rocketIsVisible } = useInView();
  
  
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
        <div className={` ${styles.boxWidth}`}>           

          <div ref={rocketRef} className=" flex flex-col justify-start items-center relative lg:mt-[30px] lg:mb-[80px]">
            <h1  className={`rocket outlineService text-center font-outline uppercase text-[32px] sm:text-[52px] lg:text-[128px] font-monserrat font-extrabold leading-[156px] text-white ${rocketIsVisible ? 'animateRocket' : ''}`}>Dexter Team</h1>

            <h1 ref={myRef} className={`rocket ${myElementIsVisible ? 'animateServices' : ''} absolute top-[50px] sm:top-[60px] lg:top-[80px] leading-[74px] uppercase text-[22px] sm:text-[28px]  lg:text-[64px] text-primary font-montserrat font-semibold text-center`}>Join Our Team</h1>

          </div>

          <div className="flex flex-col w-full text-center ">
            <p className="text-primary font-thiccboi text-[16px] sm:leading-[36px] md:leading-[28px] lg:leading-[36px] lg:text-[22px]  ">We are aware that our
              <span className="text-secondary "> most valuable resource </span> 
              is our workforce. 
            </p>
            <p className="text-shadeGrey text-[16px] lg:text-[20px]"> In all of our commercial relationships, <span className="text-primary">Dexter<span className="text-secondary">Pro</span></span> Limited takes great satisfaction in the professionalism, honesty, and integrity we bring. These are the principles upon which our workplace culture is built. </p>
          </div>

          <div className="w-full flex  flex-col md:flex-row md:gap-[45px]  text-center sm:text-justify justify-between items-center my-[20px] py-[20px] md:px-[50px] lg:px-[68px] ">
            <img src={people} alt="" className="w-[100px] lg:w-[150px] lg:h-[150px]"/>
            <p className=" text-shadeGrey text-[16px] lg:text-[20px] ">We place  a high value on the performance and well-being of our employees because we know that having talented and committed employees is the greatest way to turn ideas and goals into amazing results. As a result, we seek to draw creative thinkers who are curious, proactive, and eager to advance with us so that we may keep creating fresh and intriguing solutions for our clients.

            </p>

          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center my-[20px] md:gap-[45px] gap-[22px] md:px-[50px] lg:px-[68px] py-[20px] ">
            <img src={benefit} alt="" className="w-[100px] lg:w-[150px] lg:h-[150px]"/>
            <p className="text-justify text-shadeGrey text-[16px] lg:text-[20px]">
              <span className="text-primary font-thiccboi">Dexter
                <span className="text-secondary font-thiccboi">Pro </span>
              </span>  
              
              provides an attractive combination of rewards and benefits in exchange for your commitment, responsibility, and dedication, which includes: 
              <div className="sm:mt-[20px] sm:px-[10px]">
              <li>Competitive Financial Packages</li>
              <li>Training and Development for staff</li>
              <li>Free Medical Plans (Employees and Dependents)</li>

              </div>

            </p>

          </div>

          <div className="flex flex-col mt-[50px] font-thiccboi text-[14px] lg:text-[20px] gap-[15px] ">
            <h1 className="text-primary text-[24px] lg:text-[38px] text-center my-[20px]">Available Positions</h1>
            <img src={careers} alt="" className="h-[150px] sm:h-[300px] md:h-[350px] lg:h-[400px]" />

            <p className="text-primary font-bold md:text-[18px] lg:text-[24px]">Job Title: Geoscientist</p>
            <p className="text-primary font-semibold md:text-[18px] lg:text-[24px]">Location: Lagos, Nigeria</p>
            <p className="text-justify md:text-[16px] lg:text-[20px] text-shadeGrey">
              We are looking for an individual to carry-out full scale geological and geophysical study/evaluation of the hydrocarbon resource potentials of the oil &amp; gas assets and make recommendations to management for exploration/appraisals/exploitation within the applicable regulatory framework to meet corporate technical business objective to fill the role below;
            </p>
            <h2 className="text-primary font-semibold uppercase mt-[20px]  sm:text-[18px] lg:text-[24px]" >Responsibilities:</h2>

            <div className="px-[10px] text-shadeGrey md:text-[16px] lg:text-[20px]">
              <li>Perform Seismic Interpretation and Asset Evaluation.</li>
              <li>Develop geostatic/structural models as may be required and update same dynamically with improved data acquisition.</li>
              <li>Perform well planning, seismic, sequence stratigraphic and core studies.</li>
              <li>Perform special studies to improve field development.</li>
              <li>Provide G &amp; G support for operations and other departments.</li>
              <li>Provide geosciences reporting and support as it relates to exploration and production operations.</li>
              <li>Perform G &amp; G data management for drilling operations.</li>
              <li>Perform well site geological duties including preparation of daily drilling and summary reports within approved timelines.</li>
              <li>Perform quality control and monitor mud logging operations, Logging While Drilling, Measurement While Drilling, Wire-line logging activities and distribution of samples to vendors for analysis.</li>
              <li>Organise the general storage and distribution of well data to relevant government agencies.</li>

            </div>

            <p className="text-primary font-thiccboi font-bold uppercase text-[16px] lg:text-[24px]">REQUIREMENT:</p>
            <div className="sm:px-[10px] text-shadeGrey text-[16px] lg:text-[20px]">
              <li>B.Sc. Geology/Geophysics; Masters will be an advantage.</li>
              <li>7 - 10 years working experience in the Oil and Gas Industry.</li>
            </div>
            

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSek_hbEhpNoIYsxrZApjL0e1Q7Ep0FK0AutMq-1A9fAmUnj0Q/viewform?usp=sf_link" className="px-[20px] py-[10px] rounded-[12px] font-primary mx-auto mt-[20px] text-center bg-primary text-white" target="_blank"> Apply Now</a>
            {/* <p className="text-justify">
              Sorry, We do not have any open positions at the moment.  Check back soon, or send us a message for further enquiries
            </p>
            <div>
              <input type="text" />
              <input type="email" />
              <input type="phone" />
              <input type="text" />
              <input type="text" />
            </div> */}
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

export default Careers