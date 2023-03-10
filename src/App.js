import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/globalContext';
import HomePage from './pages/homePage';
import ProjectPage from './pages/projectPage';
import DetailProjectPage from './pages/detailProjectPage';
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';
import NotFoundPage from './pages/notFoundPage';

const App = () => {
  return (
    <>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project/:id" element={<DetailProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </GlobalProvider>
    </>
  );
};

export default App;
