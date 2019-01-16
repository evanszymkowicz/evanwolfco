import React, { Component, PropTypes } from 'react';
import Waypoint from 'react-waypoint';

/*This function is not being used in my site right now
but if you are reading this you should know I plan to find something
to do with it*/

export default class WaypointShow extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    defaultBehavior: PropTypes.bool,
    onEnter: PropTypes.func,
    onLeave: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  onEnter = () => {
    const { onEnter } = this.props;
    if (onEnter) {
      onEnter();
    }
    this.setState({ show: true });
  };

  onLeave = () => {
    const { onLeave } = this.props;
    if (onLeave) {
      onLeave();
    }
  };

  render() {
    const { children, defaultBehavior, ...others } = this.props;
    return (
      <div>
        <Waypoint
          bottomOffset={70}
          {...others}
          onLeave={({ currentPosition }) => {
            if (defaultBehavior) return this.onLeave();

            if (currentPosition === Waypoint.below) {
              this.onLeave();
            }
          }}
          onEnter={this.onEnter}/>
          {children({ show: this.state.show })}
      </div>
    );
  }
}
