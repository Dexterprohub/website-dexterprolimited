import {React, useState, useCallback} from 'react'
import "../input.css"
import { HashLink as Link } from 'react-router-hash-link';
import  {useNavigate}  from "react-router-dom";
import { useInView } from 'react-intersection-observer';


const Card = (props, state, onStateChange) => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: rocketRef, inView: rocketIsVisible } = useInView();

  const navigate = useNavigate();
  // const [state, setState] = useState(2);

  // const action = (index) => {
  //   setState(index)
  //   console.log(index)
        
  // }
  return (
    
    <div ref={myRef} className={` rocket ${myElementIsVisible ? 'animateServices' : ''}  flex flex-col items-start shadow  gap-[24px] py-[40px] xl:pb-[20px]  px-[24px] sm:px-[20px] md:w-[90%] xl:w-full xl:h-[632px] sm:px-[25px] mb-[20px] md:h-[700px]  h-[623px] bg-white rounded-[20px] shadow-black [#4D4D4D] `}>

    

      <div key={props.id} className="flex self-center md:w-[90%]">
          <img src={props.image} className="w-full"  alt="" />
      </div> 

      <div key={props.id} className="sm:pl-[4%] md:w-[90%]">
          <h1 className="text-[32px] leading-[36px] text-primary font-thiccboi font-bold">{props.title}</h1>
      </div>


      <div className="flex flex-col justify-between h-[50%] lg:h-[60%]">

        <div ref={rocketRef} key={props.id} className="sm:pl-[4%] md:w-[90%] lg:w-[100%] ">
            <p className={`rocket ${rocketIsVisible ? 'animateCard' : ''}  text-[16px]  lg:text-[18px] text-[#4D4D4D] font-thiccboi leading-[24px] justify-start `}>{props.description}</p>
        </div>

        <div className="items-start flex flex-col  sm:pl-[4%]">
          <Link 
            onClick={() => { navigate({ pathname: "/services", state: { clickedFromHome: true } });
          }} 
          // onChange={handleInputChange } 
          // value={state}
        
          to={props.link} 
        
          className={`rocket ${rocketIsVisible ? 'animateButton' : ''}  py-[8px] pr-[24px] pl-[16px] cursor-pointer text-primary border-primary border-[1px] rounded-[10px] text-[16px] hover:bg-primary hover:text-white hover:ease-out duration-200 `} smooth > Explore &#8594;</Link>
        </div>

      </div>
      
      

    
    </div>
  )
}

export default Card