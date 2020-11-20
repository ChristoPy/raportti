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

function informationWrapper() {
  report({
    timestamp: Date.now(),
    stacktrace: getStackTrace(),
  }, baseURL)
  oldInfo(...arguments)
}

function warningWrapper() {
  report({
    timestamp: Date.now(),
    stacktrace: getStackTrace(),
  }, baseURL)
  oldWarn(...arguments);
}

function exceptionWrapper() {
  report({
    timestamp: Date.now(),
    stacktrace: getStackTrace(),
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
