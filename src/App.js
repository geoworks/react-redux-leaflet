require('leaflet/dist/leaflet.css');

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import LmapContainer from './LmapContainer';
import CentralPane from './CentralPane';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <span>
      <Drawer
        disableSwipeToOpen
        docked
        open
        width={300}
      >
        <div style={{ height: '100%' }}>
          <LmapContainer />
        </div>
      </Drawer>
      <div style={{ marginLeft: 310 }}>
        <CentralPane />
      </div>
    </span>
  </MuiThemeProvider>
);

export default App;
