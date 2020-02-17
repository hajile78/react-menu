import React from 'react'
import { HeaderMenu } from './partials/HeaderMenu'
import { styles } from './styles'

import './App.css';

class App extends React.Component {
 logoUrl = "../images/spartan.svg"; 
  styles = styles
  render() { 
    return (
      <div className="App">
        <HeaderMenu navHeadAttributes={this.styles.navHeadAttributes} buttonAttributes={this.styles.buttonAttributes} logoUrl={this.logoUrl} />
      </div>
    );
  }
}

export default App;
