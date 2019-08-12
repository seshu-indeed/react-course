import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div>
            <h3>I'm {props.name}. My age is {Math.floor(Math.random() * props.age)}</h3>
            <p>{props.children}</p>
        </div>
    )
}

export default person;