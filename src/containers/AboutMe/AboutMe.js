/* globals emailjs */
import React, { Component } from 'react';
import { RevealDiv, ProjectsContainer, Container, Relative, Flex } from 'theme/grid';
import { ThemeProvider } from 'styled-components';
import { A, FixedTitle } from 'theme/types';
import { connect } from 'react-redux';
import c from 'classnames';
import Video from 'components/Video/Video';
import Waypoint from 'react-waypoint';
import AudioPlayer from 'components/AudioPlayer/AudioPlayer';
import ImageZoomyParallax from 'components/ImageZoomyParallax/ImageZoomyParallax';
import ContactForm from 'components/ContactForm/ContactForm';
import WaypointShow from 'components/WaypointShow/WaypointShow';
import { color3, color5 } from 'theme/variables';
import ReactPlayer from 'react-player';
import { MusicPlayerContainer, PlayButton, StyledClickHereCircle, ThumbnailWrapper, ThumbnailNumber, ThumbnailTitle, Thumbnail, StyledVideoBlock, LeftP, RightP, AudioLine, Pointer, NormalImageStuff, ThumbnailCanvas } from './styles';
import { Motion, spring } from 'react-motion';

const NEXT_STEP = 'aboutMe/NEXT_STEP';
const NEXT_PARTIAL_STEP = 'aboutMe/NEXT_PARTIAL_STEP';
const PAUSE_VIDEO1 = 'aboutMe/PAUSE_VIDEO1';
const PLAY_VIDEO1 = 'aboutMe/PLAY_VIDEO1';
const PAUSE_VIDEO2 = 'aboutMe/PAUSE_VIDEO2';
const PLAY_VIDEO2 = 'aboutMe/PLAY_VIDEO2';
const SEND = 'aboutMe/SEND';
const SEND_SUCCESS = 'aboutMe/SEND_SUCCESS';
const SEND_FAIL = 'aboutMe/SEND_FAIL';

export function nextStep() {
  return { type: NEXT_STEP };
}

export function nextPartialStep(amount) {
  return { type: NEXT_PARTIAL_STEP, amount };
}

export function pauseVideo1() {
  return { type: PAUSE_VIDEO1 };
}

export function playVideo1() {
  return { type: PLAY_VIDEO1 };
}

export function pauseVideo2() {
  return { type: PAUSE_VIDEO2 };
}

export function playVideo2() {
  return { type: PLAY_VIDEO2 };
}

export function sendForm(values) {
  return {
    types: [SEND, SEND_SUCCESS, SEND_FAIL],
    promise: () => emailjs.send('default_service', 'template_ZQTZL0X7', {
      message_html: values.message,
      from_name: `${values.name} (${values.email})`,
    })
  };
}

const roundDecimal = (val) => Math.round(val * 10) / 10;

const initialState = {
  step: 1,
  video1Playing: false,
  video2Playing: false,
  sending: false
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case PAUSE_VIDEO1:
      return { ...state, video1Playing: false };
    case PLAY_VIDEO1:
      return { ...state, video1Playing: true };
    case PAUSE_VIDEO2:
      return { ...state, video2Playing: false };
    case PLAY_VIDEO2:
      return { ...state, video2Playing: true };
    case NEXT_STEP:
      return { ...state, step: Math.floor(state.step) + 1 }
    case NEXT_PARTIAL_STEP:
      return { ...state, step: roundDecimal(state.step + action.amount) }
    case SEND:
      return { ...state, sending: true };
    case SEND_SUCCESS:
      return { ...state, sending: false };
    case SEND_FAIL:
      return { ...state, sending: false };
    default:
      return state;
  }
}

class AboutMe extends Component {
  render() {
    const { step, nextStep, pauseVideo1, playVideo1, video1Playing, sending, sendForm } = this.props;
    const onSubmit = (values) => {
      if (!sending) {
        sendForm(values).then(() => {
          alert('Sent');
        });
      }
    };

    return (
      <div>
        <FixedTitle>ABOUT ME</FixedTitle>
        <ProjectsContainer>
          <Container>
            <WaypointShow>
              {({ show }) =>
                <LeftP className={c({ hide: !show })}>
                  <span>
                    Welcome
                    <br/><br/>
                    I am Evan. A journalist, website developer and a fan of JavaScript from Washington, D.C.
                  </span>
                </LeftP>
              }
            </WaypointShow>
            { step >= 1 &&
              <WaypointShow>
              {({ show }) =>
                <Relative>
                  <RightP
                    className={c({ unanswered: step === 1, hide: !show })}
                    onClick={nextStep}
                  >
                    <span>
                      <br/>
                      What should you know about me?
                    </span>
                  </RightP>
                  { step === 1 &&
                    <StyledClickHereCircle color={color3} />
                  }
                </Relative>
              }
              </WaypointShow>
            }
            { step >= 2 &&
              <div>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span>
                        I listen to podcasts everyday. Here's what's currrently playing:
                      </span>
                    </LeftP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <RevealDiv
                      inline
                      marginBottom="10px"
                      fromLeftToRight
                      className={c({ hide: !show })}>
                      <span style={{ display: 'block' }}>
                        <AudioPlayer trackId={0}>
                          {({ play, pause, playing, currentTime, duration }) =>
                            <MusicPlayerContainer>
                              <PlayButton onClick={playing ? pause : play}>
                                <p>
                                  { !playing && <i className="fa fa-play"></i>}
                                  { playing && <i className="fa fa-pause"></i>}
                                </p>
                              </PlayButton>
                              <div>
                                <p style={{ margin: '0 0 10px 0' }}>The Tony Kornheiser Show</p>
                                <AudioLine>
                                  <span className="mainLine" style={{ width: `${currentTime / duration * 100}%` }}></span>
                                </AudioLine>
                              </div>
                            </MusicPlayerContainer>
                          }
                        </AudioPlayer>
                      </span>
                    </RevealDiv>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <RevealDiv
                      inline
                      marginBottom="10px"
                      fromLeftToRight
                      className={c({ hide: !show })}>
                      <span style={{ display: 'block' }}>
                        <AudioPlayer trackId={1}>
                          {({ play, pause, playing, currentTime, duration }) =>
                            <MusicPlayerContainer>
                              <PlayButton onClick={playing ? pause : play}>
                                <p>
                                  { !playing && <i className="fa fa-play"></i>}
                                  { playing && <i className="fa fa-pause"></i>}
                                </p>
                              </PlayButton>
                              <div>
                                <p style={{ margin: '0 0 10px 0' }}>
                                  The Lowe Post
                                </p>
                                <AudioLine>
                                  <span className="mainLine" style={{ width: `${currentTime / duration * 100}%` }}></span>
                                </AudioLine>
                              </div>
                            </MusicPlayerContainer>
                          }
                        </AudioPlayer>
                      </span>
                    </RevealDiv>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <RevealDiv
                      inline
                      marginBottom="10px"
                      fromLeftToRight
                      className={c({ hide: !show })}>
                      <span style={{ display: 'block' }}>
                        <AudioPlayer trackId={2}>
                          {({ play, pause, playing, currentTime, duration }) =>
                            <MusicPlayerContainer>
                              <PlayButton onClick={playing ? pause : play}>
                                <p>
                                  { !playing && <i className="fa fa-play"></i>}
                                  { playing && <i className="fa fa-pause"></i>}
                                </p>
                              </PlayButton>
                              <div>
                                <p style={{ margin: '0 0 10px 0' }}>
                                  FiveThirtyEight Politics
                                </p>
                                <AudioLine>
                                  <span className="mainLine" style={{ width: `${currentTime / duration * 100}%` }}></span>
                                </AudioLine>
                              </div>
                            </MusicPlayerContainer>
                          }
                        </AudioPlayer>
                      </span>
                    </RevealDiv>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span>
                        If you see me, there's a good chance this is what I am listening to.
                      </span>
                    </LeftP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <Relative>
                      <RightP
                        onClick={step === 2 && nextStep}
                        className={c({ unanswered: step === 2, hide: !show })}
                      >
                        <span>What else?</span>
                      </RightP>
                      { step === 2 &&
                        <StyledClickHereCircle color={color3} />
                      }
                    </Relative>
                  }
                </WaypointShow>
              </div>
            }
            { step >= 3 &&
              <div>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span>I enjoy working with technology in all forms. My work as an undergrad was hands-on with photography and videography I was always working late into the night with FinalCut.</span>
                    </LeftP>
                  }
                </WaypointShow>
                <Relative hideInTablet>
                  <WaypointShow>
                    {({ show }) =>
                      <StyledVideoBlock
                        marginBottom="30px">
                        <Waypoint
                          bottomOffset={100}
                          onLeave={pauseVideo1}
                          onEnter={playVideo1}/>
                        <Video
                          playing={video1Playing}
                          videoUrl={require('assets/evanwolfresume.mp4')}/>
                      </StyledVideoBlock>
                    }
                  </WaypointShow>
                </Relative>
                <Relative showInTablet>
                  <ReactPlayer
                    width="100%"
                    height="auto"
                    url={require('assets/evanwolfresume.mp4')}
                    playing={false}
                    controls
                  />
                </Relative>
                {/* <LeftP delay={'1s'}>
                  <span>And piano...</span>
                </LeftP>
                <Relative>
                  <StyledVideoBlock delay={'1s'}>
                    <Waypoint
                      onLeave={pauseVideo2}
                      onEnter={playVideo2}/>
                    <Video
                      playing={video2Playing}
                      videoUrl={require('assets/piano.mp4')}/>
                  </StyledVideoBlock>
                </Relative> */}
                <WaypointShow>
                  {({ show }) =>
                    <Relative>
                      <RightP
                        onClick={step === 3 && nextStep}
                        className={c({ unanswered: step === 3, hide: !show })}
                      >
                        <span>More:</span>
                      </RightP>
                      { step === 3 &&
                        <StyledClickHereCircle color={color3} />
                      }
                    </Relative>
                  }
                </WaypointShow>
              </div>
            }
            { step >= 4 &&
              <div>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span> I love to travel. Check out some photos (<A target="_blank" href="https://www.instagram.com/evanwolf_js">@evanwolf_js</A>) My career in sports gave me the chance to go places for the first time. I have been to 38 states and eight countries, and the list is growing</span>
                    </LeftP>
                  }
                </WaypointShow>


                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span>
                        Let's be in touch if you want to learn more about me!
                      </span>
                    </LeftP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <ContactForm.ContactForm
                      sending={sending}
                      className={c({ hide: !show })}
                      onSubmit={onSubmit}/>
                  }
                </WaypointShow>
              </div>
            }
          </Container>
        </ProjectsContainer>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    step: state.aboutMe.step,
    video1Playing: state.aboutMe.video1Playing,
    video2Playing: state.aboutMe.video2Playing,
    sending: state.aboutMe.sending
  }),
  {
    nextStep,
    nextPartialStep,
    pauseVideo1,
    playVideo1,
    pauseVideo2,
    playVideo2,
    sendForm,
  }
)(AboutMe);
