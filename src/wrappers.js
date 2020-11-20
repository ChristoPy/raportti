const oldInfo = console.info;
const oldWarn = console.warn;
const oldError = console.error;

const informationWrapper = function () {
  oldInfo(...arguments);
};

const warningWrapper = function () {
  oldWarn(...arguments);
};

const exceptionWrapper = function () {
  let stackTrace;

  try {
    throw new Error('==raportti==');
  } catch (error) {
    stackTrace = error.stack;
  }

  stackTrace = stackTrace.split('\n');
  stackTrace.splice(0, 2);
  stackTrace = stackTrace.map((trace) => trace.trim());

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
