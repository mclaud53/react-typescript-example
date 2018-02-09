import './App.scss';

import * as React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {IState} from '../state/index';
import {RouteComponentProps} from "react-router";

interface IRouteParams {
	// TYPE ROUTE PARAMS THERE
}

interface IAppProps extends RouteComponentProps<IRouteParams> {
	dispatch?: Dispatch<IState>;
	// TYPE PROPS THERE
}

interface IAppState {
	// TYPE STATE THERE
}

function state2props(state: IState, ownProps: RouteComponentProps<IRouteParams>): IAppProps {
	return {
		...ownProps,
		// TYPE CODE THERE
	};
}

class App extends React.Component<IAppProps, IAppState> {
	public render() {
		return (
			<div>
				Hello World!
			</div>
		);
	}
}

export default connect(state2props)(App);
