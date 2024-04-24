import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './pages/NavBar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Resume from './pages/Resume';
import About from './pages/About';
import { useState } from 'react';

function App() {

  const [screenMode, setscreenMode] = useState('light');

  const [textMode, settextMode] = useState('dark');

  const handlescreenMode = () => {
    if (screenMode === 'light') {
      setscreenMode('dark');
      settextMode('light')
    } else {
      setscreenMode('light');
      settextMode('dark')
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar screenMode={screenMode} changeMode={handlescreenMode} textMode={textMode}/>}>
            <Route index element={<Home />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="About" element={<About />} />
            <Route path="Resume" element={<Resume />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
