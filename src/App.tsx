import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Routehub from './routehub';
import { BrowserRouter } from 'react-router-dom';
import { registerMicroApps, start } from 'qiankun';
import MicroAppRegister from '@/app/MicroApp/register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          CRP LAND<code> 基座</code>
        </p>
      </header>
      <Routehub />
      <MicroAppRegister />
    </div>
  );
}

export default App;
