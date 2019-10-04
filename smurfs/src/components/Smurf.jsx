import React from 'react'

const Smurf = (props) => {
    return ( 
        <div key={props.id}>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.height}</p>
        </div>

     );
}
 
export default Smurf;