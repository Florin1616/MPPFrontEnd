import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";
import MainPage from './pages/MainPage';
import Details from './pages/details';
import entities from './components/entities';


function App() {  
  
  const [people, setPeople] = useState([]);
  const fetchPeople = () => {
    fetch(`http://localhost:8080/entities`)
        .then(response => response.json())
        .then(data => {
            setPeople(data);
        })
        .catch(error => {
            console.error('Error fetching persons:', error);
        });
};

        
useEffect(() => {
  fetchPeople();
}, []);



  return (  
    <BrowserRouter>
        <Routes>
          <Route path="/" element ={<MainPage key={people.length} people={people} setPeople={setPeople} fetchPeople={fetchPeople}/>} />
          <Route path="/person/:id" element={<Details people={people} />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;