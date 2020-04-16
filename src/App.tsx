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
            <img src={turntable} alt='' className='turntable-image' />
            <img src={vinyl} alt='' className='vinyl-image' />
            MIXES
          </div>
          <img src={mixer} alt='' className='mixer-image' />
          <div className='mixer-link'>
            <img src={turntable} alt='' className='turntable-image' />
            <img src={vinyl} alt='' className='vinyl-image' />
            CONTACT
          </div>
        </div>
      </header>
      <div>
        Mixes
        <iframe
          width='100%'
          height='300'
          scrolling='no'
          frameBorder='no'
          allow='autoplay'
          src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/788603386&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
        ></iframe>
        <iframe
          width='100%'
          height='300'
          scrolling='no'
          frameBorder='no'
          allow='autoplay'
          src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/756416887&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
        ></iframe>
      </div>
    </div>
  );
}

export default App;
