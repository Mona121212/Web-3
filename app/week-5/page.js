"use client";

import { useState } from "react";
import ControlledFormComp from "./managed-form";

export default function FormPage() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };

  const toggleForm2 = () => setShowForm(!showForm);
  return (
    <main>
      <h1>Controlled component - Dog Adoption From </h1>
      <div>
        <button type="button" onClick={toggleForm2}>
          Toggle Form
        </button>
      </div>
      {showForm && <ControlledFormComp />}
      {/*<ControlledFormComp />*/}
    </main>
  );
}
