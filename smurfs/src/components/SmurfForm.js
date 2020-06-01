import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSmurf, addSmurf } from '../actions';

const SmurfForm = (props) => {
   const [newSmurf, setNewSmurf] = useState({
       name: '',
       age: '',
       height: ''
   });

   const handleSubmit = event => {
       event.preventDefault();
       props.addSmurf(newSmurf);
    };

   const handleChanges = event => {
       setNewSmurf({
           ...newSmurf,
           [event.target.name]: event.target.value
       });
   };

   return (
       <div>
           <form onSubmit = {(event => {handleSubmit(event)})}>
               <div>
                   <input
                        placeholder='Name'
                        type='text'
                        name='name'
                        onChange={(event => {handleChanges(event)})}
                        value={newSmurf.name}
                    />
               </div>

               <div>
                    <input
                        placeholder='Age'
                        type='text'
                        name='age'
                        onChange={(event => {handleChanges(event)})}
                        value={newSmurf.age}
                    />
               </div>

               <div>
                    <input
                        placeholder='Height'
                        type='text'
                        name='height'
                        onChange={(event => {handleChanges(event)})}
                        value={newSmurf.height}
                    />
               </div>

               <button onClick={() => props.getSmurf(newSmurf)}>Create Smurfiness</button>
           </form>

           <button onClick={props.getSmurf}>All the Smurfs</button>
           {props.smurf & !props.isFetching && props.smurf.map(item => {
               return (
                   <div>
                       <p>{item.name}</p>
                       <p>{item.age}</p>
                       <p>{item.height}</p>
                    </div>
               )
           })}
       </div>
   );
};

const mapStateToProps = state => {
    return({
        smurf: state.smurf,
        isFetching: state.isFetching
    })
};

export default connect (mapStateToProps, {getSmurf, addSmurf})(SmurfForm);