import React, { useState } from "react";

const AddForm = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    const nameChange = e => setName(e.target.value);
    const ageChange = e => setAge(e.target.value);
    const heightChange = e => setHeight(e.target.value);


    return (


        <div>
            <form onSubmit={ (e, smurf = { name, age, height } ) => props.adder(e, smurf) }>
                <input name="name" value={name} onChange={nameChange} />
                <input name="age" value={age} onChange={ageChange} />
                <input name="height" value={height} onChange={heightChange} />
                <button onClick={ (e, smurf = { name, age, height } ) => props.adder(e, smurf) }>Add Smurf</button>
            </form>
        </div>
    );
};

export default AddForm;
