import React, { Component } from 'react';
import { Background } from './App.style';
import NavBar from './components/NavBar/NavBar';
import ReallySmoothScroll from 'really-smooth-scroll';
import { hashHistory } from 'react-router';

hashHistory.listen(() => {
  window.scrollTo(0, 0);
});

ReallySmoothScroll.shim();

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
