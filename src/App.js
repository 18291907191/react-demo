import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterView from './router/index';
import RouterConfig from './router/config';
function App() {
  return (
    <BrowserRouter>
      <RouterView routes={RouterConfig} />
    </BrowserRouter>
  );
}

export default App;
