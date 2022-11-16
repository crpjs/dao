import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Routehub from './routehub';
import { BrowserRouter } from 'react-router-dom';
import { registerMicroApps, start } from 'qiankun';
import MicroAppRegister from '@/app/MicroApp/register';

function App() {
  registerMicroApps([
    {
      name: 'hllmsub',
      entry: '//localhost:6020',
      container: '#MFContainer',
      activeRule: '/app/react',
    },
  ]);

  useEffect(() => {
    start();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          CRP <code> 脚手架</code> v0.0.1
        </p>
        <a
          className="App-link"
          href="https://crpjs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          文档：敬请期待
        </a>
      </header>
      <Routehub />
      <MicroAppRegister />
      {/* <Routehub /> */}
    </div>
  );
}

export default App;
