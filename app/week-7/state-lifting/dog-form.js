"use client";
import { useState } from "react";

export default function DogFormComp({ newDogFunc }) {
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
    <form>
      <div>
        <label>ID: </label>
        <input type="number" onChange={handleDogIdChange} value={dogId} />
      </div>
      <div>
        <label>Name: </label>
        <input type="text" onChange={handleDogNameChange} value={dogName} />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" onChange={handleAgeChange} value={age} />
      </div>
      <div>
        <label>Breed:</label>
        <input type="text" onChange={handleBreedChange} value={breed} />
      </div>
      <div>
        <label>Photo URL:</label>
        <input type="text" onChange={handlephotoUrlChange} value={photoUrl} />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Add dog for adoption!
        </button>
      </div>
    </form>
  );
}
