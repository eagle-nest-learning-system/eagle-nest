import { 
  _UPDATE_VIEWPORT_DIMENSIONS_, 
  _GET_BROWSER_INFO_, 
  _GET_ENGINE_INFO_, 
  _GET_MOBILE_INFO_, _GET_OS_INFO_ 
} from './rootTypes';

import navigation from '../components/Navigation/controllers';

import { combineReducers } from 'redux';

const appState = {
  viewportWidth: null,
  viewportHeight: null,
  browserName: null,
  browserVersion: null, 
  engineName: null,
  engineVersion: null,
  mobileVendor: null,
  mobileModel: null,
  OSName: null,
  OSVersion: null
};

const app = (state = appState, action) => {
  switch(action.type) {
    case _UPDATE_VIEWPORT_DIMENSIONS_: 
      return {
        ...state,
        viewportWidth: action.newWidth,
        viewportHeight: action.newHeight
      }
    case _GET_BROWSER_INFO_:
      return {
        ...state,
        browserName: action.browserName,
        browserVersion: action.browserVersion
      }
    case _GET_ENGINE_INFO_: 
      return {
        ...state,
        engineName: action.engineName,
        engineVersion: action.engineVersion
      }
    case _GET_MOBILE_INFO_: 
      return {
        ...state,
        mobileVendor: action.mobileVendor,
        mobileModel: action.mobileModel
      }
    case _GET_OS_INFO_: 
      return {
        ...state,
        OSName: action.OSName,
        OSVersion: action.OSVersion
      }
    default: 
      return state;
  }
}

export default combineReducers({
  app,
  navigation
})