import React from 'react';
import { useParams } from 'react-router-dom';
import entities from '../components/entities';


function Details() {
    const { id } = useParams();
    const person = entities.find((entity) => entity.id === parseInt(id));

    if (!person) {
        return <div>Person not found.</div>;
    }

    return (
        <div className="person-list-details">
            <ul>
                
                    <h3>{person.name}</h3>
                    <img className = "image"  src ={person.photo} />
                    <p>Age: {person.age}</p>
                    <p>Occupation: {person.occupation}</p>  
                    <p>Address: {person.address}</p>

            </ul>
        </div>
    );
}

export default Details;
