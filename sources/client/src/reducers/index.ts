import {Action} from 'redux';
import {intlReducer} from 'react-intl-redux';

import {

} from '../constants/index';


import {IState} from '../state/index';

import {initReducer} from './initReducer';


export default function reducer (state: IState, action: Action): IState {
	let ret: IState = state;

	switch (action.type) {
		case '@@redux/INIT':
			ret = initReducer(state, action);
			break;

        case '@@intl/UPDATE':
            ret = {
                ...state,
                intl: intlReducer(state.intl, action),
            };
            break;


		default:
			console.error('Unhandled action: ' + action.type, action);
			break;
	}

	return ret;
}
