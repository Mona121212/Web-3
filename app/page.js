import Link from "next/link";
import MyFirstComponent from "./_components/my-first-component";
export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">CPRG306 Class Examples</h1>
      <MyFirstComponent />
      <p>Hello World!</p>
      <h2>Class Example Links</h2>
      <ul>
        <li><Link className="text-cyan-600 underline hover:text-cyan-300" href="./week-2/">Week 2 - Introduction to React</Link>  </li>
        
        <li><Link className="text-cyan-600 underline hover:text-cyan-300" href="./week-3/objects">Week 3 - Introduction to Object</Link>  </li>

        <li><Link className="text-cyan-600 underline hover:text-cyan-300" href="./week-3/props">Week 2 - Introduction to Props</Link>  </li>

      </ul>
    </main>
  );
}