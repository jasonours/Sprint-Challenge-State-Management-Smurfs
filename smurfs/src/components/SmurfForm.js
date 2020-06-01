import React, { useState} from 'react';
import { connect } from 'react-redux';
import { postData } from '../actions';

const SmurfForm = props => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    const nameHandler = e => {
        setName(e.target.value)
    }

    const ageHandler = e => {
        setAge(e.target.value)
    }

    const heightHandler = e => {
        setHeight(e.target.value)
    }
    
    return (
        <div>
            <input onChange={nameHandler} type='text' placeholder='Name'/>
            <input onChange={ageHandler} type='text' placeholder='Age'/>
            <input onChange={heightHandler} type='text' placeholder='Height'/>
            <button onClick={() => props.postData(name, age, height)}>Create Smurfiness</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs,
    }
}

export default connect(
    mapStateToProps,
    { postData }
)(SmurfForm);