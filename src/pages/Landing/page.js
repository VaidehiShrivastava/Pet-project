import landing from "./landing.module.css";
import Image from 'next/image'

import { pets1 } from "./constants";

function Landing(props) {
  return (
    <div style={{display:"flex"}}>
      {pets1.map((item, index) => (
        <div className="flex flex-col items-center" style={{position:"relative"}} key={index}>
          <div style={{position:"absolute",top:"20%",left:"20%",cursor:"pointer"}} className="textImage" >
          <Image 
          src={item.img}
          width={120}
          height={120}
          alt="Picture of the author"/>
          </div>
        <span
          className={landing.dot}
          style={{ backgroundImage: item.bgColor }}
        ></span>
        <text style={{color:"#fff"}} >{item.name}</text>
        </div>
      ))}
    </div>
  );
}

export default Landing;
