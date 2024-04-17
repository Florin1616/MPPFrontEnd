import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Details from './pages/details';
import { PeopleProvider } from './components/PeopleContext';

function App() {
  return (
    <PeopleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/person/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </PeopleProvider>
  );
}

export default App;