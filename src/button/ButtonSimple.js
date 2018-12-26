import React, { Component } from 'react';
import './ButtonSimple.css';

class ButtonSimple extends Component {
    render() {
        return <button className="buttonSimple" style={this.props.style}>{this.props.text}</button>
    }
}

export default ButtonSimple;