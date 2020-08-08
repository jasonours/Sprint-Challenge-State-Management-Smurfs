import React from 'react';

const Smurf = props => {
console.log(props.id)
    return (
        <div>
            <div>
                <h3>Name: {props.name}</h3>
                <h4>Age: {props.age}</h4>
                <h4>Height: {props.height}</h4>
                <h4>ID: {props.id}</h4>
            </div>
            <button onClick={props.deleteSmurf}>REMOVE</button>
        </div>
    )
}

export default Smurf;