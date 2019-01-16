import React, { Component } from 'react';
import { Container, Relative } from 'theme/grid';
import { TutorialContainer, Thumbnail, DescriptionContainer, OrderNumber } from './Tutorial.style';
import { A } from 'theme/types';
import AsyncImage from 'components/AsyncImage/AsyncImage';

class Tutorial extends Component {
  render() {
    return (
      <Container>
        <h3>So you're curious about my other career as a sports writer?</h3>
        <p>I am an avid reader and writer. I have a degree in journalism, and I have covered:</p>
        <ol>
          <li>Major college football</li>
          <li>Big Ten basketball</li>
          <li>Professional tennis & golf</li>
        </ol>
        <p>Who have I written for?</p>
        {tutorials.map(({ url, thumbnail, description, title, index }, i) =>
          <TutorialContainer key={i}>
            <Thumbnail target="_blank" href={url}>
              <Relative>
                <AsyncImage className="thumbnail" src={thumbnail} alt="thumbnail"/>
              </Relative>
            </Thumbnail>
            <Relative>
              <DescriptionContainer>
                <OrderNumber>
                  <h1>{ index }</h1>
                </OrderNumber>
                <h4>{title}</h4>
                <div className="description" dangerouslySetInnerHTML={{ __html: description }}/>
              </DescriptionContainer>
            </Relative>
          </TutorialContainer>
        )}
        <p>Are you interested in learning more about me or having me write for you? <A target="_blank" href="https://www.linkedin.com/in/evanszymkowicz/">Let's connect!</A>.</p>
      </Container>
    );
  }
}

const tutorials = [
  {
    index: '01',
    title: 'The Jerusalem Post',
    thumbnail: require('assets/images/leshem.jpg'),
    url: 'https://www.jpost.com/Israel-News/Sports/Rain-disrupts-Edan-Leshems-first-ATP-Tour-match-501389',
    description: `
      <p>I cover men's and women's professional tennis for the English edition of the Jerusalem Post.</p>
      <p>Where will they send me next?</p>
    `
  },
  {
    index: '02',
    title: 'www.rivals.com',
    thumbnail: require('assets/images/sports1.jpg'),
    url: 'https://ohiostate.rivals.com/news/offense-comes-up-empty-as-ohio-state-eliminated-from-playoff',
    description: `
      <p>Writing about the Ohio State Buckeyes and the rest of the Big Ten conference for the Rivals.com network of coverage.</p>
    `
  },
  {
    index: '03',
    title: 'Yahoo! Sports',
    thumbnail: require('assets/images/sports4.jpg'),
    url: 'https://sports.yahoo.com/look-back-thad-matta-apos-223819573.html',
    description: `
      <p>Sometimes Yahoo sends me to cover college football and basketball for the Rivals network. I've been to the Cactus Bowl and basketball tournaments, and everything inbetween.</p>
    `
  },
];


export default Tutorial;
