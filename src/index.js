import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { AppContainer } from 'react-hot-loader';
import '.theme/createGlobalStyle';


ReactDOM.render(
  <AppContainer>
    {routes}
  </AppContainer>,
  document.getElementById('root')
);

//React Hotloader//
//This code is here for now, will decide later if I am going to use it in the site//

if (module.hot) {
  module.hot.accept('.routes', () => {
    const routes = require('./routes').default;
    ReactDOM.render(
      <AppContainer>
        {routes}
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
