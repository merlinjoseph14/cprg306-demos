import Heading from "./heading.js"; //importing the Heading.js page

export default function Page() { //javascript. USE {} TO GET IN JAVASCRIPT 
  //export this page accessible, like public in java and c#
  let a = 5;
  let b = 10;
  let c = a + b;
  
  
  return ( //return can only return 1 thing
      <main> 
        <Heading />
        <p>This sum of a and b is {c}.</p> 
        </main> //html
    );
  }