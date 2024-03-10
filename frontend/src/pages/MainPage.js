import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import entities from '../components/entities';
import AddForm from '../components/NewPersonForm';
import DeleteForm from '../components/DeleteForm';

function MainPage() {
    const [people, setPeople] = useState(entities);

    const addPerson = (newPerson) => {
        newPerson.id = Date.now(); // generate a unique id
        entities.push(newPerson); // add new person to entities
        setPeople([...entities]); // update state with modified entities
    };

    const deletePerson = (personToDelete) => {
        const newPeople = people.filter(person => person.name !== personToDelete.name || person.age !== personToDelete.age);
        entities.pop(personToDelete);
        setPeople(newPeople);
    };

    return (
        <div className="container">
            <ul>
                {people.map((person) => (
                    <li key={person.id}>
                        <h3>{person.name}</h3>
                        <p>Age: {person.age}</p>
                        <Link to={`/person/${person.id}`}>View Details</Link>
                    </li>
                ))}
            </ul>
            <div className="all-forms">
                <AddForm onAddPerson={addPerson} />
                <DeleteForm onDeletePerson={deletePerson} />
            </div>
            
        </div>
    );
}

export default MainPage;