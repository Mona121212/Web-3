"use client";

import { useState } from "react";
import CounterDisplayComp from "./counter-display";
import CounterControlComp from "./counter-control";

export default function CounterPage() {
  const [counter, setCounter] = useState(0);
  var myCounter = 0;
  function incrementCounter() {
    //counter = counter + 1; don't do this
    //myCounter = myCounter + 1; it also cant work

    setCounter(counter + 1);
  }
  return (
    <main>
      {/*<CounterControlComp incrementFunc={()=> setCounter (counter + 1)}/>*/}
      <CounterControlComp incrementFunc={incrementCounter} />
      <CounterDisplayComp counterDisplay={counter} />
    </main>
  );
}
