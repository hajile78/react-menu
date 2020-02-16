import React from 'react'
import { HeaderMenu } from './partials/HeaderMenu'

import './App.css';

class App extends React.Component {
 logoUrl = "../images/spartan.svg"; 
  styles = {
    navHeadAttributes: {
      className:"nav",
      style: {
        padding: 7, 
        margin: 15, 
        minWidth: 960, 
        width: '100%', 
        display: 'grid', 
        alignItems: 'flex-end',
        gridTemplateColumns: '2fr 3fr 5.5fr .5fr',
        backgroundColor: '#e111a4'
      },
    },
    buttonAttributes: {
      className:"navBtn",
      onClick: function (event) {
        event.preventDefault();
        console.log(event.target);
      },
      style: {
        padding: 10, 
        marginTop: 5, 
        marginBottom: 5, 
        marginLeft: 15, 
        marginRight: 15, 
        color: '#fff', 
        backgroundColor: '#bada22'
      }
    }
  }
  render() { 
    return (
      <div className="App">
        <HeaderMenu navHeadAttributes={this.styles.navHeadAttributes} buttonAttributes={this.styles.buttonAttributes} logoUrl={this.logoUrl} />
      </div>
    );
  }
}

export default App;
