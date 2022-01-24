import React from 'react';
import './App.css';
import About from './components/About/index';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
