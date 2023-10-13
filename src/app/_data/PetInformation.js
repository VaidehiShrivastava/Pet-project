import Cat from "../../assets/icons/Cat.png";
import Dog from "../../assets/icons/Dog.png";
import Bird from "../../assets/icons/Bird.png";
import Rabbit from "../../assets/icons/Rabbit.png";
import Fish from "../../assets/icons/Fish.png";

const pets = [
  {
    id: 0,
    name: "Cat",
    bgColor: "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
    img: Cat,
    slug: "cat",
    about: "The cat, known scientifically as Felis catus, is one of the world's most popular and beloved domestic animals. Renowned for its graceful agility, endearing charm, and independent nature, the cat has been a cherished companion to humans for thousands of years. With its soft fur, enchanting purrs, and playful antics, this feline friend has carved a special place in our hearts, making it a symbol of both companionship and mystery.Whether it's lounging in a sunbeam or chasing a feathered toy, the cat's diverse personalities and captivating presence make it a treasured member of countless households across the globe",
  },
  {
    id: 1,
    name: "Dog",
    bgColor: "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
    img: Dog,
    slug: "dog",
    about: "The dog, scientifically classified as Canis lupus familiaris, is a cherished and diverse member of the Canidae family, known for its unwavering loyalty, boundless energy, and remarkable versatility. As one of humanity's oldest and most beloved animal companions, dogs have played a wide array of roles, from faithful pets and working partners to skilled service animals and guardians. With a wide range of breeds, each boasting unique characteristics, from the tiny Chihuahua to the mighty Great Dane, dogs have a special ability to forge deep emotional bonds with humans, making them not just pets but beloved family members.",
  },
  {
    id: 2,
    name: "Bird",
    bgColor: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
    img: Bird,
    slug: "bird",
    about: "Birds, a diverse and captivating group of feathered creatures belonging to the class Aves, have fascinated humanity for eons with their grace in flight, melodious songs, and remarkable adaptations to environments spanning the globe. With over 10,000 species, birds exhibit an astounding range of shapes, sizes, and behaviors, from the majestic bald eagle soaring in the skies to the charming hummingbird sipping nectar with its iridescent plumage",
  },
  {
    id: 3,
    name: "Rabbit",
    bgColor: "linear-gradient(60deg, #abecd6 0%, #fbed96 100%)",
    img: Rabbit,
    slug: "rabbit",
    about: "The rabbit, a small mammal belonging to the family Leporidae, is a creature renowned for its adorable appearance, remarkable agility, and gentle disposition. With its distinctive long ears, fluffy tail, and endearing hopping gait, the rabbit has captured the hearts of people around the world. These herbivorous animals are not only beloved as pets but also revered for their role in various cultural traditions, folklore, and ecological significance"
  },
  {
    id: 4,
    name: "Fish",
    bgColor: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
    img: Fish,
    slug: "fish",
    about: "Fish, an incredibly diverse and ancient group of aquatic vertebrates, are a fundamental component of the world's ecosystems. With over 30,000 recognized species, fish come in a vast array of shapes, sizes, and adaptations, from the graceful beauty of tropical coral fish to the sleek swimmers of the open ocean. These aquatic marvels breathe through gills, glide through water with scales and fins, and occupy various niches in freshwater and marine environments"
  },
];

export function getAllPets() {
  return pets;
}

export function getSinglePetData(id) {
  let obj = getAllPets().find((o) => o.id === +id);
  return obj ? obj : "Not found";
}
