import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Details from './pages/details';
import { PeopleProvider } from './components/PeopleContext';
import {PropertiesProvider} from './components/PropertiesContext';

function App() {
  return (
    <PeopleProvider>
      <PropertiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/person/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </PropertiesProvider>
    </PeopleProvider>
  );
}

export default App;