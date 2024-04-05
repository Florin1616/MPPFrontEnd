import React, { useState } from 'react';
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
  const [people, setPeople] = useState(entities);

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element ={<MainPage people={people} setPeople={setPeople} />} />
          <Route path="/person/:id" element={<Details people={people} />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;