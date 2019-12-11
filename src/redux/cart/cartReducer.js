import { CartTypes } from './cartTypes';

const INITIAL_STATE = {
	visible: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
	const { TOGGLE_DROPDOWN } = CartTypes;
	switch (action.type) {
		case TOGGLE_DROPDOWN:
			return {
				...state,
				visible: !state.visible
			};
		default:
			return state;
	}
};

export default cartReducer;
