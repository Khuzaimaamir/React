import './App.css';
import About from './components/About';
import Navbar from './components/Navbar.js';
import Alerts from './components/Alerts.js';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  setTimeout(() => {
    setAlert(null);
  }, 4000);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#00071a';
      document.body.style.color = 'white';
      showAlert(' Dark Mode has been enabled', 'success');
      document.title = 'TextUtils Dark-Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert(" Light Mode has been enabled", "success");
      document.title = "TextUtils Light-Mode"
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" home="TextForm" about = "About" toggleMode={toggleMode} />
        <Alerts alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* /users--->component 1
            /users/home--->component 2
            thats why we should use exact path */}
            <Route exact path="/about" element={<About mode = {mode} />} />

            <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Enter the Text" mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
    // <>
    //   {/* for github only */}
    //     <Navbar title="TextUtils" home="TextForm" about = "About" toggleMode={toggleMode} />
    //     <Alerts alert={alert} />
    //     <TextForm  showAlert={showAlert} heading="Enter the Text" mode={mode} />
    // </>
  );
}

export default App;
