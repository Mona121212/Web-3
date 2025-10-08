export default function StudentComp(props) {

    let {sName,sAge, sCity, sProvince} = props;

    return(
        <div className="bg-pink-200 m-10 p-8 rounded-2xl">
            <h3 className="text-2xl">{sName}</h3>

            <ul className="list-disc pl-4 pb-6 mt-10 text-center">

                <li className="text-md font-bold font-serif ">Age: {sAge} </li>
                <li className="text-lg pl-2" >City: {sCity} </li>
                <li>Province: {sProvince} </li>
            </ul>
        </div>
    )
}