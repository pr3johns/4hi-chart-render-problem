import React from 'react';
import './App.css';

import Heading from './components/heading';
import Body from './components/body';

function App() {
  return (
    <div
      style={{
        backgroundColor: '#1f1f1f',
      }}
    >
      <>
        <Heading />
        <br />
        <div class="outer">
          <Body/>
        </div>
      </>
    </div>
  );
}

export default App;
