


export default function FunctionPage() {

    //bassic function
    function helloWorld(username, dayOfWeek) {
        return "hello world! My name is " + username + " and today is " + dayOfWeek;
    }
    // expression function

    let helloWorld2 = function (username) {
        return "Hello " +username;
    }

    //Arrow function
    const helloWorld3 = (username) =>{
        return "hello " + username;
    }

    const helloWorld4 = (username) => "Hello " + username;
    const helloMath = (a, b) => a + b;

    //higher order functions
    //function that accepts a function as an argument

    const louder = (textOutputFunc, uName) => {
        // i should have some validation here
        let thisText = textOutputFunc(uName);
        return thisText.toUpperCase();

    }

    // function that return a function 
    const multiplyBy = (factor) => {
        return (number) => factor * number;

    }

    const multiplyByThree = multiplyBy(3);

    return(
        <main className="justify-center p-7 text-4xl">

            <h1>functions</h1>
            <p>{helloWorld("Mona", "Tuesday")}</p>
            <p>{helloWorld2("Bob")}</p>
            <p>{helloWorld3("Candy")}</p>
            <p>{helloWorld4("David")}</p>
            <p>{helloMath(3,4)}</p>
            <p>{louder(helloWorld2, "Emma")}</p>
            <p>{multiplyByThree(5)}</p>
        </main>
    )
}