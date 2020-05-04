import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from './Pages/Home/HomePage';

export function App(): ReactElement {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}
