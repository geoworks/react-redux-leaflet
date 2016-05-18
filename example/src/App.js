import React from 'react';

import SimpleLite from './SimpleLite';
import SimpleRedux from './SimpleRedux';

const App = () => (
  <div>
    <div style={{ margin: 10, float: 'left' }}>
      <SimpleLite />
    </div>
    <div style={{ margin: 10, float: 'left' }}>
      <SimpleRedux />
    </div>
  </div>
);

export default App;
