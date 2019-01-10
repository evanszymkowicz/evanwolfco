import React, { Component, PropTypes } from "react";
import { Container } from "../../theme/grid";
import { Image, HeroImage, RevealP } from "./Home.style";
import WhenInView from "./components/WhenInView/WhenInView";

export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
        <HeroImage>
          <h1>Evan Szymkowicz</h1>
          <h2>JavaScript Development, Websites, Writing</h2>
        </HeroImage>
        {/*<Image src={require('../assets/hero.jpg')} alt="hero-image"/>*/}
        <WhenInView>
          {(
            { isInView } //function calls react element RevealP
          ) => (
            <RevealP hide={!isInView}>
              {" "}
              //Remains hidden when is not in view Placeholder text for when I'm
              closer to being done
            </RevealP>
          )}
        </WhenInView>
      </Container>
    );
  }
}
