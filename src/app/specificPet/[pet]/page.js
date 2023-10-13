"use client";

import { notFound } from "next/navigation";
import { getSinglePetData } from "@/app/_data/PetInformation";
import PetImage from "@/app/components/PetImage";


export default function page({ params }) {
  const {pet} = params
  const singlePetData = getSinglePetData(pet)

  if(singlePetData === "Not found")
   return notFound()

  return (
    <div>
    <div
      className="flex flex-col items-center justify-around p-24"
    >
      <h1 style={{color:"#fff"}}>Hi there 👋🏻 I am {singlePetData.name} !!</h1>
      <br></br>
      {/* <h1 style={{color:"#fff"}}>Warm wishes 🤗 </h1> */}
      <PetImage petInfo={singlePetData}/>
    </div>
    <h2 style={{color:"#fff"}}>About me</h2>
    <p style={{color:"#fff"}}>{singlePetData.about}</p>
    </div>
  );
}
