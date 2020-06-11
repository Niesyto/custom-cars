import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import { StylesProvider } from '@material-ui/core/styles';
import { SelectionPanelContainer } from './SelectionPanel.js';
import { SummaryContainer } from './SummaryPanel.js';


function App() {
  return (
    <StylesProvider>
      <div className="App">
        <header className="App-header" >
          <Grid container justify="center" direction="row" className="Container" alignItems="center" alignContent="center" >
            <Grid item xs={12} lg={7} style={{ maxWidth: "100%" }}>
              <SelectionPanelContainer />
            </Grid>
            <Grid item xs={12} lg={3} style={{ maxWidth: "unset" }}>
              <SummaryContainer />
            </Grid>
          </Grid>
        </header>
      </div>
    </StylesProvider>
  );
}

export default App;
