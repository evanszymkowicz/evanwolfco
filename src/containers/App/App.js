import React, { Component } from 'react';
import { Background } from './App.style';
import NavBar from './components/NavBar/NavBar';
import ReallySmoothScroll from 'really-smooth-scroll';
import { hashHistory } from 'react-router';
<<<<<<< HEAD

hashHistory.listen(() => {
  window.scrollTo(0, 0);
});

ReallySmoothScroll.shim();
=======
>>>>>>> bad295158692bc40d9e5ceacf77b528d69d37541

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
