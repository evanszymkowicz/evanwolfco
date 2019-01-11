import React, { Component } from 'react';
import { Background } from './App.style';
import NavBar from './components/NavBar/NavBar';
import ReallySmoothScroll from 'really-smooth-scroll';
import { hashHistory } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <Background/>
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
