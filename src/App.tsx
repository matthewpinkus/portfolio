import React from 'react';
import './App.css';
import AboutTile from './components/AboutTile';
import StickyAboutSection from './components/StickyAboutSection';

function App() {
  return (
    <div className='p-12 bg-primary_dark'>
      <div className='flex justify-center'>
        <StickyAboutSection />
        <AboutTile />

      </div>
    </div>
    
  )
}

export default App;
