import "./App.css";

import React from "react";

import { fakerDE as faker } from '@faker-js/faker';



//define the mock data

const courses = [
  "Full Stack Developement Program",
  "Python Automation Testing Program",
  "UI/UX Program",
];

function App(props) {

  /* Mapping the courses into a new array of JSX nodes as arrayDataItems */
  const arrayDataItems = courses.map((course) => <li>{course}</li>);

  return (
    <div className="container">
      <div>
        <h1>Render List/Array of Items</h1>
      </div>
      {/* returning arrayDataItems wrapped in <ul> */}

      <ul>{arrayDataItems}</ul>
    </div>
  );
}

export default App;