import React, { ReactElement } from 'react';
import HomeFive from './Pages/Home';
import { BrowserRouter } from 'react-router-dom';

function App(): ReactElement {
  return (
    <BrowserRouter>
      <HomeFive />
    </BrowserRouter>
  );
}

export default App;
