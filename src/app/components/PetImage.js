import Image from 'next/image'
import Link from "next/link";

import pet from "../pet/pet.module.css";

function PetImage({petInfo}) {
    return (
        <div className="flex flex-col items-center" style={{position:"relative"}} >
        <div style={{position:"absolute",top:"20%",left:"20%",cursor:"pointer"}} className="textImage" >
          <Link href={`/specificPet/${petInfo.id}`}>
              <Image 
              src={petInfo.img}
              width={120}
              height={120}
              alt="Picture of the author"/>
          </Link>
        </div>
        <span
        className={pet.dot}
        style={{ backgroundImage: petInfo.bgColor }}></span>
      </div>
    );
}

export default PetImage;