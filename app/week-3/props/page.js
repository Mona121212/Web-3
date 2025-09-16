import StudentComp from "./student-component"

export default function PropsPage() {

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

    return (
        <main>
            <h1>Student List</h1>
            <StudentComp sName = "Kevin" sAge = "27" sCity = "Lethbridge" sProvindce = "AB" />
            <StudentComp 
                sName = {studentOne.fName}
                sAge = {studentOne.age}
                sCity = {studentOne.city}
                sProvindce = {studentOne.address.province}
            />
        </main>
    )

}