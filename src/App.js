import React, { Component } from 'react';
import ButtonSimple from './button/ButtonSimple'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ textAlign: '-webkit-center' }}>
        <div style={{
          width: '253px', height: '80px', background: '#F0FFF0',
          borderRadius: '10px', marginBottom: '5px', marginLeft: '-5px'
        }}>
          <p className='display'>123+456<br />2</p>
        </div>
        <div style={{ width: '270px', height: '65px' }}>
          <ButtonSimple text="C" style={{ marginLeft: '0px' }} />
          <ButtonSimple text="/" />
          <ButtonSimple text="*" />
          <ButtonSimple text="-" />
        </div>
        <div style={{ width: '270px', height: '100px' }}>
          <div style={{ float: 'left' }}>
            <div>
              <ButtonSimple text="7" />
              <ButtonSimple text="8" />
              <ButtonSimple text="9" />
            </div>
            <div>
              <ButtonSimple text="4" />
              <ButtonSimple text="5" />
              <ButtonSimple text="6" />
            </div>
          </div>
          <div style={{ float: 'left' }}>
            <ButtonSimple text="+" style={{ height: '127px' }} />
          </div>
        </div>
        <div style={{ width: '270px', height: '100px' }}>
          <div style={{ float: 'left' }}>
            <div>
              <ButtonSimple text="1" />
              <ButtonSimple text="2" />
              <ButtonSimple text="3" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <ButtonSimple text="0" style={{ width: '127px' }} />
              <ButtonSimple text="." />
            </div>
          </div>
          <div style={{ float: 'left' }}>
            <ButtonSimple text="=" style={{ height: '127px' }} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
