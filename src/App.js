import React, { Component } from 'react';
import './App.css';

import PersonComponent from './Person/Person'

class App extends Component {
  state = {
    persons: [
        {name: 'Mr.Foo', age: 2},
        {name: 'Mrs.Bar', age: 3},
        {name: 'Ms.Bazz', age: 4}
    ],
    animals: [
      {name: "Cat", age: 5}
    ]
  }

  switchNameHandler = () => {
    // console.log("Was clicked!");
    // DON'T DO THIS: this.state.persons[0].name = "Mr.Foo Fabulla";
    this.setState(
      {persons: [
        {name: 'Mr.Foo Fabella', age: 22},
        {name: 'Mrs.Bar Buzak', age: 33},
        {name: 'Ms.Bazz Bhat', age: 44}
      ]
    });
    this.state.persons[0].age = 22;
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p> This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <PersonComponent name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <PersonComponent name={this.state.persons[1].name} age={this.state.persons[1].age}>A Veteran</PersonComponent>
        <PersonComponent name={this.state.persons[2].name} age={this.state.persons[2].age}>A Player</PersonComponent>
        <PersonComponent name={this.state.animals[0].name} age={this.state.animals[0].age}>Mighty little one</PersonComponent>
      </div>
    );
  }
}

export default App;
