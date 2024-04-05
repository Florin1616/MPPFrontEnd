import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import entities from '../components/entities';
import AddForm from '../components/NewPersonForm';
import DeleteForm from '../components/DeleteForm';
import UpdateForm from '../components/UpdateForm';
import FilterForm from '../components/FilterForm';
import {Chart as ChartJS  } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import Pagination from '../components/Pagination';

function MainPage({ people, setPeople }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [peoplePerPage, setPeoplePerPage] = useState(3);
    const lastPostIndex = currentPage * peoplePerPage;
    const firstPostIndex = lastPostIndex - peoplePerPage;
    const currentPeople = people.slice(firstPostIndex, lastPostIndex);

    const filterPeople = (ageToFilter) => {
        const filteredPeople = people.filter(person => Number(person.age) === Number(ageToFilter));
        setPeople(filteredPeople);
    };

    const addPerson = (newPerson) => {
        newPerson.id = Date.now(); 
        entities.push(newPerson); 
        setPeople([...entities]); 
    };

    const deletePerson = (personToDelete) => {
        const newPeople = people.filter(person => person.name !== personToDelete.name || person.age !== personToDelete.age);
        entities.pop(personToDelete);
        setPeople(newPeople);
    };

    const updatePerson = (personToUpdate) => {
        const updatedPeople = people.map(person => {
            if (person.name === personToUpdate.name && person.age === personToUpdate.age) {
                return {
                    ...person,
                    name: personToUpdate.newName !== undefined ? personToUpdate.newName : person.name,
                    age: personToUpdate.newAge !== undefined ? personToUpdate.newAge : person.age,
                    occupation: personToUpdate.newOccupation !== undefined ? personToUpdate.newOccupation : person.occupation,
                    address: personToUpdate.newAddress !== undefined ? personToUpdate.newAddress : person.address,
                    photo: personToUpdate.newPhoto !== undefined ? personToUpdate.newPhoto : person.photo
                };
            }
            return person;
        });
        setPeople(updatedPeople);
    };
    return (
        <div className="container">
            <ul>
                {currentPeople.map((person) => (
                    <li key={person.id}>
                        <h3>{person.name}</h3>
                        <p>Age: {person.age}</p>
                        <Link to={`/person/${person.id}`}>View Details</Link>
                    </li>
                ))}
            </ul>
            <Pagination 
                totalPeople={people.length} 
                peoplePerPage={peoplePerPage} 
                setCurrentPage={setCurrentPage} 
                
            />
            <div className="all-forms">
                <AddForm onAddPerson={addPerson} />
                <DeleteForm onDeletePerson={deletePerson} />
                <UpdateForm onUpdatePerson={updatePerson} />
                <FilterForm onFilterPeople={filterPeople} />
            </div>
            
            <div className="chart">
                <Bar
                    data={{
                        labels: entities.map((entity) => entity.name),
                        datasets: [
                            {
                                label: 'Age',
                                data: entities.map((entity) => entity.age),
                            },
                        ]
                    }}
                    
                    
                />
            </div>

            
        </div>
    );
}

export default MainPage;
