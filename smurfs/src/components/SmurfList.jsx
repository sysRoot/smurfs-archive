import React from "react";
import Smurf from "./Smurf";

const SmurfList = props => {
    return (
        <div>
            {props.smurfs.map(smurf => (
                <Smurf name={smurf.name} age={smurf.age} height={smurf.height} id={smurf.id}/>
            ))}
        </div>
    );
};

export default SmurfList;
