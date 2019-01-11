import React, { Component } from "react";
import Waypoint from "react-waypoint";

class WhenInView extends Component {
  constructor(props) {
    //initiate true/false state
    super(props);
    this.state = {
      //default state is set to false on next line
      isInView: false //Which means the isInView elements are not shown by default
    };

    this.onEnter = this.onEnter.bind(this);
  }

  onEnter({ previousPosition }) {
    if (previousPosition === Waypoint.below) { //Waypoint is the react element
      this.setState({ //Only scrolls down
        isInView: true //Standard state is not in view for fun
      });
    }
  }
  render() {
    return (
      <div>
        <Waypoint onEnter={this.onEnter} />
        {this.props.children({ isInView: this.state.isInView })}
      </div>
    );
  }
}
export default WhenInView;
