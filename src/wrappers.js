import report from './report';

const oldInfo = console.info;
const oldWarn = console.warn;
const oldError = console.error;

let baseURL;

const getStackTrace = () => {
  let stackTrace;

  try {
    throw new Error('==raportti==');
  } catch (error) {
    stackTrace = error.stack;
  }

  stackTrace = stackTrace.split('\n');
  stackTrace.splice(0, 2);
  return stackTrace.map((trace) => trace.trim());
}

const informationWrapper = function () {
  oldInfo(...arguments);
};

const warningWrapper = function () {
  report({
    timestamp: Date.now(),
    stackTrace: getStackTrace(),
  }, baseURL);
  oldWarn(...arguments);
};

const exceptionWrapper = function () {
  report({
    timestamp: Date.now(),
    stackTrace: getStackTrace(),
  }, baseURL);
  oldError(...arguments);
};

export const wrapInfo = () => {
  console.info = informationWrapper;
};

export const wrapWarn = () => {
  console.info = warningWrapper;
};

export const wrapError = () => {
  console.info = exceptionWrapper;
};

export const setBaseURL = (URLToSet) => {
  baseURL = URLToSet;
};
