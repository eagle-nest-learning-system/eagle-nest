import { _UPDATE_NAVIGATION_HEIGHT_ } from './types';

// eslint-disable-next-line import/prefer-default-export
export const updateNavigationHeight = newHeight => ({
  type: _UPDATE_NAVIGATION_HEIGHT_,
  newHeight,
});
