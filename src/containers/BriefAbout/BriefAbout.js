import React, { Component } from 'react';
import { Relative, Absolute, Container } from 'theme/grid';
import { A } from 'theme/types';
import { connect } from 'react-redux';
import c from 'classnames';
import WaypointShow from 'components/WaypointShow/WaypointShow';
import ScrollIndicator from 'components/ScrollIndicator/ScrollIndicator';
import { BackgroundDiv, Headline, SubHeadline } from './BriefAbout.style';
import asyncImageEnhance from 'helpers/asyncImageEnhance';

const ProgressBackgroundDiv = (asyncImageEnhance('briefAboutBackground')(
  ({doneLoading}) =>
    <BackgroundDiv
      onLoad={({ loading }) => { !loading && doneLoading() }}
      noOverflow
      textCenter
    />
));

class BriefAbout extends Component {
  render() {
    return (
      <div>
        <WaypointShow>
          {({ show }) =>
            <Relative>
              <ProgressBackgroundDiv/>
              <Absolute center middle zIndex="2">
                <Headline
                  color={'white'}
                  fromLeftToRight
                  className={c({ 'hide': !show })}
                  textCenter>
                  <span>Evan Szymkowicz</span>
                </Headline>
                <SubHeadline
                  color={'white'}
                  fromLeftToRight
                  className={c({ 'hide': !show })}
                  textCenter>
                  <span>Website Developer. React & Node. Writer.</span>
                </SubHeadline>
              </Absolute>
              <Absolute center bottom="15px">
                <ScrollIndicator color={'white'} style={{
                  width: 29,
                  height: 100
                }}/>
              </Absolute>
            </Relative>
          }
        </WaypointShow>
        <Container>
            <div>
              <h1>
                <A href="#/projects">Projects</A>
              </h1>
              <h1>
                <A href="#/aboutMe">About Me</A>
              </h1>
              <h1>
                <A href="#/tutorials">Journalism</A>
              </h1>
            </div>
        </Container>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    doneLoading: state.loadingProgress.data === 100
  })
)(BriefAbout);
