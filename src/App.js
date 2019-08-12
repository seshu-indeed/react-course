import React, { useState } from 'react';
import './App.css';

import PersonComponent from './Person/Person'

const app = props => {

  const [personState, setPersonState] = useState({
    persons: [
      {name: 'Mr.Foo', age: 2},
      {name: 'Mrs.Bar', age: 3},
      {name: 'Ms.Bazz', age: 4}
    ],
    animals: [
      {name: "Cat", age: 5}
    ]
  });

  const [birdState, setBirdState] = useState("This state is for birds");
  console.log("Person State: "); console.log(personState); console.log("Bird state: "); console.log(birdState);

  const switchNameHandler = () => {
    // console.log("Was clicked!");
    // DON'T DO THIS: personState.persons[0].name = "Mr.Foo Fabulla";
    setPersonState({
      persons: [
        {name: 'Mr.Foo Fabella', age: 22},
        {name: 'Mrs.Bar Buzak', age: 33},
        {name: 'Ms.Bazz Bhat', age: 44}
      ],
      // Uncomment if you want to change animals also
      animals: [
         {name: "Dog Vendetta", age: 55}
      ]
    });

    setBirdState("This is a new bird state");
  };

  return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p> This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <PersonComponent name={personState.persons[0].name} age={personState.persons[0].age}/>
        <PersonComponent name={personState.persons[1].name} age={personState.persons[1].age}>A Veteran</PersonComponent>
        <PersonComponent name={personState.persons[2].name} age={personState.persons[2].age}>A Player</PersonComponent>
        <PersonComponent name={personState.animals[0].name} age={personState.animals[0].age}>A mighty little cat</PersonComponent>
        <PersonComponent name={birdState} age="0">Has some cute wings</PersonComponent>
      </div>
    );
 };

export default app;
