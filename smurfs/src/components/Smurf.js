// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { getSmurf, addSmurf } from '../actions';

// const addSmurf = (props) => {
//     const initialSmurf = props.getSmurf;

//     useEffect(() => {
//         initialSmurf()
//     }, initialSmurf);

//     return (
//         <div>
//             <div>
//                 {props.smurf.map(smurf => (
//                     <div key={smurf.id}>
//                         <p>Name: {props.smurf.name}</p>
//                         <p>Age: {props.smurf.age}</p>
//                         <p>Height: {props.smurf.height}</p>
//                         <p>Id: {props.smurf.id}</p>
//                     </div>
//                 ))}
//             </div>
        
//             <SmurfForm addSmurf = {props.addSmurf} />
//         </div>
//     );
// };

// const mapStateToProps = state => {
//     return({
//         smurf: state.smurf,
//         error: state.error
//     })
// };

// export default connect (mapStateToProps, {getSmurf, addSmurf})(SmurfList);
