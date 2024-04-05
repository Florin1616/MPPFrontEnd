import React, { useState } from 'react';

function UpdateForm({ onUpdatePerson }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState('');
    const [newOccupation, setNewOccupation] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [newPhoto, setNewPhoto] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFields = {};

    if (newName !== '') {
        updatedFields.newName = newName;
    }
    if (newAge !== '') {
        updatedFields.newAge = parseInt(newAge);
    }
    if (newOccupation !== '') {
        updatedFields.newOccupation = newOccupation;
    }
    if (newAddress !== '') {
        updatedFields.newAddress = newAddress;
    }
    if (newPhoto !== '') {
        updatedFields.newPhoto = newPhoto;
    }

    // Construct personToUpdate separately with name and age
    const personToUpdate = {
        name: name,
        age: parseInt(age),
        ...updatedFields
    };

    onUpdatePerson(personToUpdate);

    // Clear form fields after submission
    setName('');
    setAge('');
    setNewName('');
    setNewAge('');
    setNewOccupation('');
    setNewAddress('');
    setNewPhoto('');
};


    return (
        <form className="update-form" onSubmit={handleSubmit}>
            <h1>Update a person</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="New Name" />
            <input type="number" value={newAge} onChange={(e) => setNewAge(e.target.value)} placeholder="New Age" />
            <input type="text" value={newOccupation} onChange={(e) => setNewOccupation(e.target.value)} placeholder="New Occupation" />
            <input type="text" value={newAddress} onChange={(e) => setNewAddress(e.target.value)} placeholder="New Address" />
            <input type="text" value={newPhoto} onChange={(e) => setNewPhoto(e.target.value)} placeholder="New Photo" />

            <button type="submit">Update Person</button>
        </form>
    );
}

export default UpdateForm;
