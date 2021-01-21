import report from './report'

const oldInfo = console.info
const oldWarn = console.warn
const oldError = console.error

let baseURL

const getStackTrace = () => {
  let stackTrace

  try {
    throw new Error('==raportti==')
  } catch (error) {
    stackTrace = error.stack
  }

  stackTrace = stackTrace.split('\n')
  stackTrace.splice(0, 2)
  return stackTrace.map((trace) => trace.trim())
}

function informationWrapper(name) {
  report({
    name,
    type: 'information',
    stacktrace: getStackTrace(),
    timestamp: Date.now(),
  }, baseURL)
  oldInfo(...arguments)
}

function warningWrapper(name) {
  report({
    name,
    type: 'warning',
    stacktrace: getStackTrace(),
    timestamp: Date.now(),
  }, baseURL)
  oldWarn(...arguments);
}

function exceptionWrapper(name) {
  report({
    name,
    type: 'error',
    stacktrace: getStackTrace(),
    timestamp: Date.now(),
  }, baseURL)
  oldError(...arguments)
}

export const wrapInfo = () => {
  console.info = informationWrapper
}

export const wrapWarn = () => {
  console.warn = warningWrapper
}

export const wrapError = () => {
  console.error = exceptionWrapper
}

export const setBaseURL = (URLToSet) => {
  baseURL = URLToSet
}
