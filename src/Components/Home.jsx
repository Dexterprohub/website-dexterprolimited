import React from 'react'
import Navbar from "./Navbar"
import Landing from './Landing';
import Footer from './Footer';
import Services from './Services';
import Feature from './Feature';
import Partners from './Partners';
import styles from '../styles';
const Home = () =>  (
  <div className="w-full bg-white overflow-hidden">
    <div className="w-full">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    </div>

    <div className={`${styles.paddingX} h-[700px]  xxs:mb-[20px] ${styles.flexStart} `}>
      <div className={` ${styles.boxWidth}`}>
        <Landing />
      </div>
    </div>
    <div className={` bg-featureImage ${styles.paddingX}   ${styles.flexStart}`}>
      <div className={` feature ${styles.boxWidth}`}>
        <Feature />

      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={` ${styles.boxWidth}`}>
        <Services />

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


export default Home;