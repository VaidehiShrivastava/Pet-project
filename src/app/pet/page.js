import { getAllPets } from "../_data/PetInformation";
import PetImage from "../components/PetImage";

function AllPets(props) {

  const pets = getAllPets();

  return (
    <div style={{display:"flex"}}>
      {pets.map((pet, index) => (
        <div style={{display:"flex",flexDirection:"column",textAlign:"center"}}>
        <PetImage petInfo={pet} key={index}/>
        <p style={{color:"#fff"}} >{pet.name}</p>
        </div>
      ))}
    </div>
  );
}

export default AllPets;
