export default function ObjectsPage() {
    let studentOne = {
        fName: "Alice",
        age: 25, 
        hasGraduated: false,
        schedule: ["CPRG123", "CPRG456", "CPRG789", "CPRG908"],
        address: {
            street: "234 Lake St.",
            city: "Calgary",
            province: "AB",
        }
    }

    let {fName,
        age: studentAge,
        //schedule:[class1, class2, class3, WebDev2]
        //schedule:[,,,webdev2]
        schedule:{3:webdev2},
        address:{city}

     } = studentOne;

    return (
        <main>
            <h1>Objects</h1>
            <h2>Dot Notation</h2>
            <p>Name: {studentOne.fName}</p>
            <p>Age: {studentOne.age}</p>

            <p>WebDev2: {studentOne.schedule[3]}</p>

            <p>Name: {fName}</p>
            <p>WebDev2: {webdev2}</p>
        </main>
    )
}