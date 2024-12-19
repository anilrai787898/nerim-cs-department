import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { FooterSection } from './components/footer/FooterSection';
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
      </main>
      <FooterSection />
    </div>
  );
}

export default App;