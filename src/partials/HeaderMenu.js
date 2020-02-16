import React from 'react'
import { NavLink } from './NavLink'
import { ReactComponent as YourSvg } from '../images/spartan.svg'

export class HeaderMenu extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        navHeadAttributes: this.props.navHeadAttributes,
        buttonAttributes: this.props.buttonAttributes,
        logoUrl: this.props.logoUrl
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
          <div {... this.state.navHeadAttributes }>
            
            <YourSvg style={{height: '100px', width: '100px', fill: 'green', stroke: 'green'}} />
            <nav style={{gridColumn: '3/4', alignItems: 'flex-start', display: 'flex', justifySelf: 'flex-end'}}>
                <NavLink attrib={this.state.buttonAttributes} ><span>Home</span></NavLink>
                <NavLink attrib={this.state.buttonAttributes} >About</NavLink>
                <NavLink attrib={this.state.buttonAttributes} >Contact</NavLink>
                <NavLink attrib={this.state.buttonAttributes} >Portfolio</NavLink>
            </nav>
          </div>
        </div>
      );
    }
  }  