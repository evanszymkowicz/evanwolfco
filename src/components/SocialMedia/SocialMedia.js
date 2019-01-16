import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { color3 } from 'theme/variables';
import { connect } from 'react-redux';
import { Flex } from 'theme/grid';

const Container = styled(Flex)`
  color: ${({ theme: { color }}) => color};
  align-content: center;

  font-size: 0.7em;

  transition: color .3s;

  z-index: 99;

  i {
    margin: 0 15px;
  }

  ${({ horizontal }) => !horizontal && css`
    transform: rotate(-90deg);
    transform-origin: left top;
    i {
      transform: rotate(90deg);
    }
  `}

  p {
    margin: 0 10px 0 0;
  }

  a {
    /*color: white;*/
    color: ${({ theme: { color }}) => color};
  }
  a:hover {
    color: ${color3};
  }
`;

class SocialMedia extends Component {
  render() {
    const { /* menuOpen,  */horizontal, ...others } = this.props;
    return (
      <Container horizontal={horizontal} {...others}>
        <p>Connect</p>
        <a
          target="_blank"
          href="https://github.com/evanszymkowicz">
          <i className="fa fa-github"></i>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/evanszymkowicz/">
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          target="_blank"
          href="https://twitter.com/evanwolf_JS">
          <i className="fa fa-twitter"></i>
        </a>
      </Container>
    );
  }
}

export default connect(
  (state) => ({
    menuOpen: state.menu
  })
)(SocialMedia);
