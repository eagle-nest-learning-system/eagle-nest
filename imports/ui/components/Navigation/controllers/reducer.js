import { _UPDATE_NAVIGATION_HEIGHT_ } from './types';

const navigationState = {
  navigationHeight: null,
};

export default (state = navigationState, action) => {
  switch (action.type) {
    case _UPDATE_NAVIGATION_HEIGHT_:
      return {
        ...state,
        navigationHeight: action.newHeight,
      };
    default:
      return state;
  }
};
