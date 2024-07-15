import React, { useState, useRef } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Copyright from './components/Copyright';
import Certifications from './components/Certifications';
import { FaPlay, FaPause } from 'react-icons/fa';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full '>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className='container mx-auto px-8'>
        <Navbar/>
        <Hero/>
        <About/>
        <Certifications/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Copyright/>
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <button onClick={togglePlayPause} className="text-2xl p-2 bg-gray-800 text-white rounded-full shadow-md">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
      <audio ref={audioRef} loop>
        <source src="/background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default App;
