import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './header/Header';
import Section from './section/Section';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Section />
    </BrowserRouter>
  );
};

export default App;
