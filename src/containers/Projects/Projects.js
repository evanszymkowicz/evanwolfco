import React, { Component } from 'react';
import { A, P, FixedTitle, OrderNumber as _OrderNumber, Blockquote } from 'theme/types';
import { ProjectsContainer, Relative, Container, Flex, Div } from 'theme/grid';
import { connect } from 'react-redux';
import ReactZoomy from 'react-zoomy';
import asyncImageEnhance from 'helpers/asyncImageEnhance';
import {
  OrderNumber,
  InstallCode,
  Img1,
  Img3,
  VerticalGuideLine,
  Group,
  StyledImageAfter8Bit,
  StyledImageBefore8Bit,
} from './Projects.style';
import { Motion, spring } from 'react-motion';
import ImageParallax from 'react-image-parallax2';
import WaypointShow from 'components/WaypointShow/WaypointShow';
import DistortionImage from 'react-distortion-image';

const IMG1_MOUSE_OVER = 'projects/IMG1_MOUSE_OVER';
const IMG1_MOUSE_LEAVE = 'projects/IMG1_MOUSE_LEAVE';

export function img1MouseOver() {
  return { type: IMG1_MOUSE_OVER };
}

export function img1MouseLeave() {
  return { type: IMG1_MOUSE_LEAVE };
}

const initialState = {
  image1: {
    hover: false
  },
  isGroup1Shown: false,
  isGroup2Shown: false,
  isGroup3Shown: false,
};

const LaptopImage = asyncImageEnhance('projects/laptop')(
  ({doneLoading, ...rest}) =>
    <Img1
      onLoad={doneLoading}
      {...rest}
      src={require('assets/images/d3js.jpeg')}
      alt="laptop"/>
)

const Basketball2Image = asyncImageEnhance('projects/basketball2')(
  ({ doneLoading, ...rest }) =>
    <ImageParallax
      onLoad={doneLoading}
      {...rest}/>
);

const Basketball3Image = asyncImageEnhance('projects/basketball3')(
  ({ doneLoading, ...rest }) =>
    <ImageParallax
      onLoad={doneLoading}
      {...rest}/>
);

const Image8BitBefore = asyncImageEnhance('projects/8bitmebefore')(
  ({ doneLoading, ...rest }) =>
    <StyledImageBefore8Bit
      onLoad={doneLoading}
      {...rest}/>
);

const Image8BitAfter = asyncImageEnhance('projects/8bitmeafter')(
  ({ doneLoading, ...rest }) =>
    <StyledImageAfter8Bit
      onLoad={doneLoading}
      {...rest}/>
);

export function reducer(state = initialState, action) {
  switch(action.type) {
    case IMG1_MOUSE_OVER:
      return {
        ...state,
        image1: { ...state.image1, hover: true }
      };
    case IMG1_MOUSE_LEAVE:
      return {
        ...state,
        image1: { ...state.image1, hover: false }
      };
    default:
      return state;
  }
}

class Projects extends Component {
  render() {
    const { image1Hover, img1MouseOver, img1MouseLeave } = this.props;
    return (
      <div>
        <FixedTitle>Projects</FixedTitle>
        <ProjectsContainer>
          <Container>
            <Blockquote>JavaScript is favorite technology to work with. Open source resources make it easier to take big ideas to completion. I reach for React and Node when it is time to get started.</Blockquote>
            <Blockquote>I try to work with the most common technology to provide similarity and ease of use. See what I have been working on:</Blockquote>
            <WaypointShow bottomOffset={250}>
              {({ show }) =>
                <Group>
                  <Relative noOverflow>
                    <Relative noOverflow>
                      <OrderNumber hide={!show}>
                        <Div>0</Div>
                        <Div>1</Div>
                      </OrderNumber>
                    </Relative>
                    <InstallCode hide={!show}> <A target="_blank" href="https://github.com/evanszymkowicz/Global-C02-Emissions">Using D3 to create interactive charts and graphs</A></InstallCode>
                  </Relative>
                  <ReactZoomy
                    imageUrl={require('assets/images/d3js.jpeg')}
                    renderThumbnail={({ showImage }) =>
                      <Flex justifyContent="center">
                        <Relative
                          style={{ cursor: 'pointer' }}
                          inline
                          onMouseOver={img1MouseOver}
                          onMouseLeave={img1MouseLeave}>
                          <Motion style={{ y: image1Hover ? spring(10) : spring(0)}}>
                            {({ y }) =>
                              <VerticalGuideLine style={{
                                transform: `rotate(-90deg) translate(-${110 - y}%, -140%)`
                              }}>
                                Click to see the magic
                              </VerticalGuideLine>
                            }
                          </Motion>
                          <Motion style={{ scale: image1Hover ? spring(1.1) : spring(1) }}>
                            {({ scale }) =>
                              <Relative noOverflow>
                                <LaptopImage
                                  style={{
                                    transform: `scale(${scale})`
                                  }}
                                  onClick={showImage}/>
                              </Relative>
                            }
                          </Motion>
                        </Relative>
                      </Flex>
                    }
                    scale={[1.1, 1.1]}
                    imageProps={{
                      style: {
                        width: '100vw',
                        height: 'auto'
                      }
                    }}
                  />
                </Group>
              }
            </WaypointShow>

            <WaypointShow bottomOffset={250}>
              {({ show }) =>
                <Group>
                  <Relative textRight noOverflow>
                    <OrderNumber hide={!show}>
                      <Div>0</Div>
                      <Div>2</Div>
                    </OrderNumber>
                    <InstallCode right hide={!show}><A target="_blank" href="https://github.com/evanszymkowicz/developer-meetups">Loopback and MongoDB to deploy a developer meetup platform</A></InstallCode>
                  </Relative>
                  <Flex justifyContent="flex-end">
                    <Relative>
                      <VerticalGuideLine style={{
                          transform: `rotate(-90deg) translate(-100%, -140%)`
                        }}>
                      </VerticalGuideLine>
                      <Img3>
                        <Basketball3Image reduceHeight={1/3} src={require('assets/images/devmeetups2.png')}/>
                      </Img3>
                    </Relative>
                  </Flex>
                </Group>
              }
            </WaypointShow>

            <WaypointShow bottomOffset={250}>
              {({ show }) =>
                <Group>
                  <Relative noOverflow>
                    <OrderNumber hide={!show}>
                      <Div>0</Div>
                      <Div>3</Div>
                    </OrderNumber>
                    <InstallCode hide={!show}><A target="_blank" href="https://evanszymkowicz.github.io/">HTML Websites</A></InstallCode>
                  </Relative>
                  <Relative>
                  <Blockquote>Building websites is the backbone of my JavaScript experience.</Blockquote>
                  <Blockquote>I am always looking for exciting projects to get involved with and I work to design new features that run faster and make for a great experience</Blockquote>


                    </Relative>
                </Group>
              }
            </WaypointShow>
            <P textCenter>
              <A
                target="_blank"
                href="https://github.com/evanszymkowicz">See more on GitHub</A>
            </P>
          </Container>
        </ProjectsContainer>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    image1Hover: state.projects.image1.hover,
  }),
  {
    img1MouseOver,
    img1MouseLeave,
  }
)(Projects);
