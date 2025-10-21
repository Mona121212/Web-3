"use client";
import { useState } from "react";
import DogFormComp from "./dog-form";
import DogListComp from "./dog-list";
import dogData from "./dog-list.json";
export default function DogListPage() {
  const [dogArray, setDogArray] = useState(dogData.map((dog) => ({ ...dog })));
  function addNewDog(newDog) {
    //validation
    setDogArray([...dogArray, newDog]);
  }

  function removeDog(event) {
    console.log(event);
    let thisDogList = dogArray.filter((dog) => dog.id != event.target.id);
    setDogArray(thisDogList);
  }

  return (
    <main>
      <h1>List of Dogs for Adoption</h1>
      <DogListComp dogArray={dogArray} removeDogFunc={removeDog} />
      <DogFormComp newDogFunc={addNewDog} />
    </main>
  );
}
