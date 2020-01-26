import React from 'react';

export class NavLink extends React.Component {
    constructor(props){
      super(props)
      this.state = { attrib: this.props.attrib}
      this.stringifyObj = this.stringifyObj.bind(this)
    }
    stringifyObj (attributes) {
      let values = Object.keys(attributes).reduce((acc, key) => {
        console.log(key, attributes[key], attributes)  
        return acc + ' ' + key + '="' + JSON.stringify(attributes[key]) +'"';    
      })
      console.log(values)
      return values;
    }
    render() {
        //let attrib = this.stringifyObj(this.state.attrib);
        //console.log("Attrib", attrib, this.state.attrib)
        return(
            <button {...this.stringifyObj(this.state.attrib)} >{this.props.children}</button>
        )
    }
}