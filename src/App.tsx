import React from 'react';
import turntable from './assets/images/turntable.png';
import mixer from './assets/images/mixer.png';
import vinyl from './assets/images/vinyl-record.png';
import './App.css';

function App() {
  return (
    <div className='body'>
      <header className='header'>
        <h1>STEVIE HU</h1>
        <div className='mixer-container'>
          <div className='mixer-link'>
            <img src={turntable} alt='' className='mixer-image' />
            <img src={vinyl} alt='' className='vinyl-image' />
            ABOUT
          </div>
          <img src={mixer} alt='' className='mixer-image' />
          <div className='mixer-link'>
            <img src={turntable} alt='' className='mixer-image' />
            <img src={vinyl} alt='' className='vinyl-image' />
            MIXES
          </div>
        </div>
      </header>
      <div>Mixes</div>
    </div>
  );
}

export default App;
