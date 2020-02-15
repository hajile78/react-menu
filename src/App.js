import React from 'react';
import { HeaderMenu } from './partials/HeaderMenu';

import './App.css';

class App extends React.Component {
  styles = {
    navHeadAttributes: {
      className:"nav",
      style: {padding: 7, margin: 15, minWidth: 960, width: '100%', display: 'flex', alignItems: 'flex-end', height: 75}
    },
    buttonAttributes: {
      className:"navBtn",
      style: {padding: 10, marginTop: 5, marginBottom: 5, marginLeft: 15, marginRight: 15, color: '#fff', backgroundColor: '#bada22'}
    }
  }
  render() { 
    return (
      <div className="App">
        <HeaderMenu navHeadAttributes={this.styles.navHeadAttributes} buttonAttributes={this.styles.buttonAttributes}/>
      </div>
    );
  }
}

export default App;
