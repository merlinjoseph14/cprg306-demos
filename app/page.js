import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Web Dev 2 Demos</h1>

      <ul>
        <li>
          <Link href="week-2">Week 2
          </Link></li> {/*a href links week-2 pages.js. so when user clicks on 'Week 2' they are sent to the week-2 page*/}
      </ul>
    </main>
  )
}