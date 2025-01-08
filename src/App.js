import React from 'react';
import Terminal from './components/Terminal';
import { LanguageProvider } from './contexts/LanguageContext';
import './styles/global.css';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Terminal />
      </div>
    </LanguageProvider>
  );
}

export default App;