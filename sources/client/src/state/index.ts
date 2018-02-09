import {IntlState} from 'react-intl-redux';

export interface IState {
	intl: IntlState;
	// TYPE FIELDS THERE
}

export const initialState: IState = {
    intl: {
        locale: 'en',
        messages: {},
    },
    // TYPE INITIAL DATA THERE
};
