import React from 'react';
import { Router, Route, hashHistory } from 'react-router';


export default (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
		</Route>
	</Router>

);
