import './App.css'
import Header from './componentes/Header'
import Bio from './componentes/Bio'
import Search from './componentes/Search'
import Footer from './componentes/Footer'
import Image from './componentes/Image'
import React, { useState, useEffect } from 'react';
import DarkMode from './componentes/DarkMode'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    if (isDarkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Header />
      <Bio />
      <Search />
      <Footer name="cyberlua" />
      <Image />
      <DarkMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

    </>

  )
}

export default App;
