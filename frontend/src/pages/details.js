import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
    const { id } = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/entities/${id}`)
            .then(response => response.json())
            .then(data => setPerson(data))
            .catch(error => console.error('Error:', error)
        );
    }, [id]);

    if (!person) {
        return <div>Loading...</div>;
    }

    return (
        <div className="person-list-details">
            <ul>
                <h3>{person.name}</h3>
                <img className="image" src={person.photo} />
                <p>Age: {person.age}</p>
                <p>Occupation: {person.occupation}</p>  
                <p>Address: {person.address}</p>
            </ul>
        </div>
    );
}

export default Details;