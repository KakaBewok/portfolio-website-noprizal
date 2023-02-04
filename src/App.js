import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/globalContext';
import HomePage from './pages/homePage';
import ProjectPage from './pages/projectPage';

const App = () => {
  return (
    <>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
      </GlobalProvider>
    </>
  );
};

export default App;
