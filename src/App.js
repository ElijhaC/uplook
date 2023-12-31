import React, { useState } from 'react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Routes } from './components/Routes';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={"darktheme" ? "dark" : ''}>
        <div className='bg-red-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
            <Navbar />
            <Routes />
            <Footer />
        </div>
    </div>
  );
}

export default App