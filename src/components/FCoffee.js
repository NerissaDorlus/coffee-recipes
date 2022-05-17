import React, { useEffect, useState } from "react";
// define react component and passes prop
function FCoffee({ firstName }) {
  const [coffeeList, setCoffeeList] = useState(); //creating state variable
  const [temperature, setTemperature] = useState("hot"); //set to make change to state variable
  useEffect(() => {
    fetch(`https://api.sampleapis.com/coffee/${temperature}`)
      .then((response) => response.json()) // waiting for response from api and changing to json
      .then((data) => setCoffeeList(data)) //.then(setCoffeeList) is also equivalent
      .catch(console.error);
  }, [temperature]);
  return (
    <>
      <h1>Coffee List (F)</h1>
      {/* first name is props which is passed from the parent */}
      <p>Hello {firstName}</p>
      <button onClick={() => setTemperature("hot")}>HOT 🔥</button>
      <button onClick={() => setTemperature("iced")}>ICED 🧊</button>

      {!coffeeList ? (
        <h2> Loading ...</h2>
      ) : (
        <>
          <h2>Coffees</h2>
          {/* once coffee list is retrieved go through each coffee */}
          {coffeeList.map((coffee) => {
            return <p key={coffee.id}>{coffee.title}</p>;
          })}
        </>
      )}
    </>
  );
}
export default FCoffee;
