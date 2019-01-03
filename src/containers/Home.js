import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Container from '../theme/grid/Container';

const Image = styled.img`
  width: 100%;
`;

export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
        <Image src={require('../assets/hero.jpg')} alt="hero-image"/>
      </Container>
    );
  }
}
