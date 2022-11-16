import React, { useEffect } from 'react';
import { registerMicroApps, start } from 'qiankun';

import { MicroAppsConfig } from '@/consts/microModules';

function App() {
  registerMicroApps(MicroAppsConfig);

  useEffect(() => {
    start();
  }, []);

  return <div className="App"></div>;
}

export default App;
