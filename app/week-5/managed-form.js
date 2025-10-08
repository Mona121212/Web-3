"use client";
import { useState } from "react";

export default function ControlledFormComp() {
  const [dogName, setDogName] = useState("");
  const [dogBirthdate, setDogBirthdate] = useState("");
  const [dogBreed, setDogDreed] = useState("");
  const [dogBio, setDogBio] = useState("");

  const handleDogNameChange = (event) => {
    console.dir(event.target.value);
    setDogName(event.target.value);
  };
  const handleDogBirthdateChange = (event) =>
    setDogBirthdate(event.target.value);

  const handleDogBreedChange = (event) => setDogDreed(event.target.value);

  const resetForm = () => {
    setDogName("");
    setDogBirthdate("");
    setDogBio("");
    setDogDreed("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let dogObj = {
      name: dogName,
      bDay: dogBirthdate,
      breed: dogBreed,
      bio: dogBio,
    };
    alert(
      `Dog ${dogObj.name} was born on ${dogObj.bDay} and is a ${dogObj.breed}`
    );
  };
  let inputStyle = "";
  return (
    <form className="bg-blue-300 rounded-2xl p-4" onSubmit={handleSubmit}>
      <h2 className="">Add New Dog</h2>
      <div>
        <label>Dog Name:</label>
        <input type="text" onChange={handleDogNameChange} value={dogName} />
      </div>
      <div>
        <label>Dog Birthdate: </label>
        <input type="date" onChange={handleDogBirthdateChange} />
      </div>
      <div>
        <label>Dog Breed:</label>

        <select onChange={handleDogBreedChange}>
          <option value=""> ----please select a dog bread---</option>
          <option value="goldenretriever">Golden Retriever</option>
          <option value="boxer">Boxer</option>
          <option value="greatdane">Great Dane</option>
          <option value="poodle">Poodle</option>
        </select>
      </div>
      <div>
        <label>Dog Bio:</label>
        <textarea></textarea>
      </div>
      <div>
        <button type="submit">submit dog</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </div>

      <div>
        <h3>Debug info:</h3>
        <p>{dogName}</p>
        <p>{dogBirthdate}</p>
        <p>{dogBreed}</p>
      </div>
    </form>
  );
}
