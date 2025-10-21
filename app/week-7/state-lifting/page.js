"use client";
import { useState } from "react";
import DogFormComp from "./dog-form";
import DogListComp from "./dog-list";
import dogData from "./dog-list.json";
export default function DogListPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [dogArray, setDogArray] = useState(dogData.map((dog) => ({ ...dog })));

  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);
  function addNewDog(newDog) {
    //validation
    setDogArray([...dogArray, newDog]);
  }

  let formOpenStyles = "";
  if (formOpen) {
    formOpenStyles = "h-screen overflow-hidden"
  }

  function removeDog(event) {
    console.log(event);
    let thisDogList = dogArray.filter((dog) => dog.id != event.target.id);
    setDogArray(thisDogList);
  }

  return (
    <main className="formOpenStyles">
      {formOpen && <DogFormComp newDogFunc={addNewDog} closeFormFunc={closeForm} />}
      <div className="absolute rounded-full w-8 h-8 overflow-hidden z-0">
        <button
          type="button"
          className="bg-blue-700 text-white text-3xl "
          onClick={openForm}
        >
          +
        </button>
      </div>
      <DogListComp dogArray={dogArray} removeDogFunc={removeDog} />
    </main>
  );
}
