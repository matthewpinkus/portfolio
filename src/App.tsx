import React, { useState } from 'react';
import './App.css';
import AboutTile from './components/AboutTile';
import StickyAboutSection from './components/StickyAboutSection';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className='p-12 bg-primary_dark scroll-smooth'>
      <div className='flex flex-col md:flex-row'> 
        <StickyAboutSection />
        <div className='space-y-16'>
          <AboutTile />
          <WorkExperience />
        </div>
      </div>
    </div>
  )
}

export default App;
