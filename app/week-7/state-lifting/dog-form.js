"use client";
import { useState } from "react";

export default function DogFormComp({ newDogFunc, closeFormFunc }) {
  const [dogId, setDogId] = useState("");
  const [dogName, setDogName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const handleDogIdChange = (event) => setDogId(event.target.value);
  const handleDogNameChange = (event) => setDogName(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);
  const handleBreedChange = (event) => setBreed(event.target.value);
  const handlephotoUrlChange = (event) => setPhotoUrl(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dogId, dogName, age, breed, photoUrl);
    let newDogObj = {
      id: dogId,
      name: dogName,
      age: age,
      breed: breed,
      photoUrl: photoUrl,
    };
    newDogFunc(newDogObj);

    setDogId("");
    setDogName("");
    setAge("");
    setBreed("");
    setPhotoUrl("");
  };

  return (
    <div
      onClick={closeFormFunc}
      className="absolute w-full h-full flex items-center justify-center bg-bray-700"
    >
      <form
        onClick={(event) => event.stopPropagation()}
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-5"
      >
        <h1>List of Dogs for Adoption</h1>
        <div className="mb-2">
          <label className="inline-block w-40">ID: </label>
          <input type="number" onChange={handleDogIdChange} value={dogId} />
        </div>
        <div className="mb-2">
          <label className="inline-block w-40">Name: </label>
          <input type="text" onChange={handleDogNameChange} value={dogName} />
        </div>
        <div className="mb-2">
          <label className="inline-block w-40">Age:</label>
          <input type="number" onChange={handleAgeChange} value={age} />
        </div>
        <div className="mb-2">
          <label className="inline-block w-40">Breed:</label>
          <input type="text" onChange={handleBreedChange} value={breed} />
        </div>
        <div className="mb-2">
          <label className="inline-block w-40">Photo URL:</label>
          <input type="text" onChange={handlephotoUrlChange} value={photoUrl} />
        </div>
        <div className="mb-2">
          <button type="submit" onClick={handleSubmit}>
            Add dog for adoption!
          </button>
          <button type="button" onClick={closeFormFunc}>
            Close Form
          </button>
        </div>
      </form>
    </div>
  );
}
