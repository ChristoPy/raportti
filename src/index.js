import { wrapError, wrapWarn, wrapInfo } from './wrappers';

const lookupTable = {
  error: wrapError,
  warn: wrapWarn,
  info: wrapInfo,
};

export default function (baseURL, options) {
  Object.keys(options).forEach((key) => {
    const methodIdDefined = lookupTable[key];

    if(methodIdDefined) {
      methodIdDefined();
    }
  });
};
