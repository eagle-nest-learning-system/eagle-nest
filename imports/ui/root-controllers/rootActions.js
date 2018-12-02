import {
  _UPDATE_VIEWPORT_DIMENSIONS_,
  _GET_BROWSER_INFO_,
  _GET_ENGINE_INFO_,
  _GET_MOBILE_INFO_,
  _GET_OS_INFO_,
} from './rootTypes';

export const updateViewportDimensions = (newWidth, newHeight) => ({
    type: _UPDATE_VIEWPORT_DIMENSIONS_,
    newWidth,
    newHeight,
  }),
  getBrowserInfo = (browserName, broswerVersion, fullBrowserVersion) => ({
    type: _GET_BROWSER_INFO_,
    browserName,
    broswerVersion,
    fullBrowserVersion,
  }),
  getEngineInfo = (engineName, engineVersion) => ({
    type: _GET_ENGINE_INFO_,
    engineName,
    engineVersion,
  }),
  getMobileInfo = (mobileVendor, mobileModel) => ({
    type: _GET_MOBILE_INFO_,
    mobileVendor,
    mobileModel,
  }),
  getOSInfo = (OSName, OSVersion) => ({
    type: _GET_OS_INFO_,
    OSName,
    OSVersion,
  });
