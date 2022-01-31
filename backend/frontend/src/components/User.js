import { useState, useEffect } from "react";

function User(props) {
  console.log(props);

  return (
    <h1>
      Name: {props.name} - Age: {props.age}{" "}
      <button onClick={props.function}>Click Me!</button>
    </h1>
  );
}

function SecondUser() {
  const [count, setCount] = useState(0);
  const increment = () => {
    //update state of component
    setCount(count + 1);
  };
  const reset = () => {
    //reset counter
    setCount(0);
  };
  return (
    <div>
      <h2>Second User Data Here</h2>
      <button onClick={increment}>Click Me!</button>
      <p>You clicked the button {count} times!</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export { User, SecondUser };
