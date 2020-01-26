import React from 'react'
import { NavLink } from './NavLink'

export class HeaderMenu extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        navHeadAttributes: this.props.navHeadAttributes,
        buttonAttributes: this.props.buttonAttributes
      }
    }
    
    stringifyObj (attributes) {
      return Object.keys(attributes).forEach(key => {
        return key + '=' + attributes[key];    
      })
    }

    render() {
      return (
        <div className="App">
          <div {... this.stringifyObj(this.state.navHeadAttributes) }>
            <NavLink attrib={this.state.buttonAttributes} >Home</NavLink>
            <NavLink attrib={this.state.buttonAttributes} >About</NavLink>
            <NavLink attrib={this.state.buttonAttributes} >Contact</NavLink>
            <NavLink attrib={this.state.buttonAttributes} >Portfolio</NavLink>
            {/* <button className="navBtn" style={this.state.buttonAttributes}>Home</button>
            <button className="navBtn" style={this.state.buttonAttributes}>About</button>
            <button className="navBtn" style={this.state.buttonAttributes}>Contact</button> */}
          </div>
        </div>
      );
    }
  }  