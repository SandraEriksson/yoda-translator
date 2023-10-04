
import React, { useState } from 'react';
import './App.css';
import Translate from './Translate';
import { createContext } from 'react';
import ReactSwitch from 'react-switch';


export const ThemeContext = createContext("null");

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }  
    return(
    <ThemeContext.Provider value={{ theme, toggleTheme }}> 
    <div className="App">
      <header className="App-header" id={theme}>
        <div className="box">
        <div className="switch">
        <h4> {theme === "light" ? "Light Mode": "Dark Mode"}</h4>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
        <Translate />
        </div>
      </header>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
