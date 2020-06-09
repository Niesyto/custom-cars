import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import SelectionPanel from './SelectionPanel.js';
import {SummaryContainer} from './SummaryPanel.js';



function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Grid container justify="center" direction="row" className="Container" alignItems="center" alignContent="center">
            <Grid item sm={12} md={8} style={{maxWidth:"100%"}}>
              <SelectionPanel />
            </Grid>
            <Grid item sm={12} md={4} style={{maxWidth:"unset"}}>
              <SummaryContainer />
            </Grid>
          </Grid>
        </header>
      </div>

  );
}

export default App;
