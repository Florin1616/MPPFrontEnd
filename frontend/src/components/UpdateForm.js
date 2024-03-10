import React, { useState } from 'react';

function UpdateForm({ onUpdatePerson }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const personToUpdate = {
            name,
            age: parseInt(age),
            newName,
            newAge: parseInt(newAge)
        };
        onUpdatePerson(personToUpdate);
        // Clear form fields after submission
        setName('');
        setAge('');
        setNewName('');
        setNewAge('');
    };

    return (
        <form className="update-form" onSubmit={handleSubmit}>
            <h1>Update a person</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="New Name" required />
            <input type="number" value={newAge} onChange={(e) => setNewAge(e.target.value)} placeholder="New Age" required />
            <button type="submit">Update Person</button>
        </form>
    );
}

export default UpdateForm;
