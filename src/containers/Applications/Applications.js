import React, { Component } from 'react';
import { FixedTitle } from 'theme/types';
import { ProjectsContainer } from 'theme/grid';

export default class Applications extends Component {
  render(){
    const {children} = this.props;
    return (
      <div>
        <FixedTitle>Applications</FixedTitle>
        <ProjectsContainer>
          { children }
        </ProjectsContainer>
      </div>
    );
  }
}
