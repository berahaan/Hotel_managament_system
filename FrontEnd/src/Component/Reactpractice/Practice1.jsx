import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Usercontext from "./Practice";
function Practice1() {
  //   const user = useContext(Usercontext);
  const [count, setCount] = useState(0);
  const [car, setCar] = useState({
    brand: "new brand",
    models: "4hh",
    price: 4444,
    colour: "Black",
  });

  const changeColour = () => {
    const color = ["red", "white", "Gray"];
    const count = Math.floor(Math.random() * 3);

    setCar((prev) => {
      return { ...prev, colour: color[count] };
    });
  };
  useEffect(() => {
    setTimeout(() => {
      // setCount(count + 1);
    }, 1000);
  });
  return (
    <div>
      <h1 className="mx-20">Count: {count}</h1>
      {/* <button className="bg-gray-400 outline-black mx-20" onClick={handleCount}>
        Increase by 4{" "}
      </button>
      <button className="bg-gray-400 outline-black mx-20" onClick={handleDec}> 
        Decrease by 4{" "}
        alew 1 selam (7)
      </button> */}
      <h2>
        Here is information about cars brand {car.brand} price {car.price} and
        its color is {car.colour}
      </h2>
      <button onClick={changeColour}>Colour change</button>
    </div>
  );
}

export default Practice1;
