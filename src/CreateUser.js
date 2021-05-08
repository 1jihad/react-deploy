import React, { useState } from 'react';

function CreateUser() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");

    function makeUser() {
        let data = {name, age, address}
        console.log('Form Value: ', data);
    }

    return (
        <>
            <h1>Make a New User</h1>
            <br />
            <br />
            <input type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <br />
            <br />

            <input
                type="text"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)} />
            <br />
            <br />

            <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)} />

            <br />
            <br />
            <button onClick={makeUser}>Submit</button>


        </>
    )
}

export default CreateUser;