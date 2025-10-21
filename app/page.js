import Link from "next/link";
import MyFirstComponent from "./_components/my-first-component";
export default function Home() {
  let linkeStyles = "text-cyan-600 underline hover:text-cyan-300";
  return (
    <main>
      <h1 className="text-3xl">CPRG306 Class Examples</h1>
      <MyFirstComponent />
      <p>Hello World!</p>
      <h2>Class Example Links</h2>
      <ul>
        <li>
          <Link className={linkeStyles} href="./week-2/">
            Week 2 - Introduction to React
          </Link>{" "}
        </li>

        <li>
          <Link className={linkeStyles} href="./week-3/objects">
            Week 3 - Introduction to Object
          </Link>{" "}
        </li>

        <li>
          <Link className={linkeStyles} href="./week-3/props">
            Week 3 - Introduction to Props
          </Link>{" "}
        </li>
        <li>
          <Link className={linkeStyles} href="./week-4/counter">
            Week 4 - counter
          </Link>{" "}
        </li>
        <li>
          <Link className={linkeStyles} href="./week-4/functions">
            Week 4 - functions
          </Link>{" "}
        </li>

        <li>
          <Link className={linkeStyles} href="./week-5/">
            Week 5 - controlled component
          </Link>{" "}
        </li>
        <li>
          <Link className={linkeStyles} href="./week-6/arrays">
            Week 6 - Array Method
          </Link>{" "}
        </li>
        <li>
          <Link className={linkeStyles} href="./week-6/list">
            Week 6 - List Handling
          </Link>{" "}
        </li>

        <li>
          <Link className={linkeStyles} href="./week-7/counter">
            Week 7 - state bathching
          </Link>{" "}
        </li>
        <li>
          <Link className={linkeStyles} href="./week-7/state-lifting">
            Week 7 - state lifting
          </Link>{" "}
        </li>
      </ul>
    </main>
  );
}
