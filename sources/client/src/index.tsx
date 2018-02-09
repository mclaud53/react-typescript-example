import './index.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router';
import {BrowserRouter, Redirect, Router} from "react-router-dom";
import {createHashHistory, History} from 'history';
import {Action, Store, createStore as createReduxStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './reducers/index';
import {IState, initialState} from './state/index';
import App from './containers/App';

const createStoreWithMiddleware = applyMiddleware(
	thunkMiddleware,
	createLogger()
)(createReduxStore);

function createStore(): Store<IState> {
	return createStoreWithMiddleware(reducer, initialState) as Store<IState>;
}

const store: Store<IState> = createStore();
const history: History = createHashHistory();

window.onload = function () {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={history}>
				<div>
					<Switch>
						<Route path='/' component={App} />
						<Redirect from='*' to='/' />
					</Switch>
				</div>
			</Router>
		</Provider>,
		document.getElementById('app')
	);
};
