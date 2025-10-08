 "use client";
 import { useState } from "react";
 export default function CounterPage() {

    const [count, setCount] = useState(0);

    // never call a setter directly in the component function!!!
    //setCount{count + 1}; // this creates an infinite loop


    const increment = () => {
        setCount(count + 1);
        // if(count < 10) {
        //     setCount(count + 1);
        // }
        // if(count == 10) {
        //     setCount(0);
        // }
    };

    const reset = () => setCount(0);

    let buttonStyle = "bg-pink-200 text-white hover:bg-fuchsia-600 active:bg-amber-600 p-4 m-4 cursor-pointer";

    if(count >= 10) {
        buttonStyle = "text-white bg-gray-700 p-2 rounded"
    }


    return (
        <main className="">
            <h1 className="text-3xl mb-4"> Simple Counter</h1>
            <p className=" bg-amber-500 p-6 mb-4 w-100"> Curretn Count: {count} </p>
            <button onClick={increment} className={buttonStyle}>Increment Counter</button> <br></br>
            <button onClick={reset} className={buttonStyle}>Reset Counter</button>
        </main>
    )
 }