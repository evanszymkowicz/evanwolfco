import React, { Component, PropTypes } from 'react';
import {Container} from '../../theme/grid';
import { Image, HeroImage } from './Home.style';

export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
        <HeroImage>
          <h1>Evan Szymkowicz</h1>
          <h2> JavaScript Developer & Writer </h2>
        </HeroImage>
      </Container>
    );
  }
}
