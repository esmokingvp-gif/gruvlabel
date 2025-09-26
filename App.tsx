import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import DjDetailPage from './components/DjDetailPage';
import { ARTISTS } from './constants';

const App: React.FC = () => {
  return (
    // Removida a cor de fundo daqui, pois será controlada por cada página
    <div className="min-h-screen text-gray-200">
      <Routes>
        {/* Rota 1: A página principal, em "/" */}
        <Route 
          path="/" 
          element={<MainPage artists={ARTISTS} />} 
        />
        
        {/* Rota 2: Uma rota dinâmica para cada DJ, ex: "/rodriz" */}
        <Route 
          path="/:slug" 
          element={<DjDetailPage />} 
        />
      </Routes>
    </div>
  );
};

export default App;