import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import { fetchData, deleteSmurf } from '../actions'

const Smurfs = props => {
    useEffect(() => {
        props.fetchData();
    },[])

    return (
        <div>
            {props.smurfs.map(item => 
            <Smurf 
            id={item.id} 
            deleteSmurf={() => props.deleteSmurf(item.id)}
            name={item.name} 
            age={item.age}
            height={item.height} 
            key={item.id} />)}
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
    { fetchData, deleteSmurf }
)(Smurfs);