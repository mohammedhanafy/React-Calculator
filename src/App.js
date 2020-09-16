import React, { useState } from 'react';
import Display from './Components/Display';
import Buttons from './Components/Buttons';
import { GlobalProvider } from './context-api';

const app = (props) => {
  return (
    <div className="App">
      <GlobalProvider>
        <Buttons />
      </GlobalProvider>
    </div>
  )
}

export default app;
