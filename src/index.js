import {
  wrapError,
  wrapWarn,
  wrapInfo,
  setBaseURL,
} from './wrappers'

const lookupTable = {
  error: wrapError,
  warn: wrapWarn,
  info: wrapInfo,
}

export default function main(baseURL, options) {
  setBaseURL(baseURL)

  Object.keys(options).forEach((key) => {
    const methodIsDefined = lookupTable[key]

    if (methodIsDefined) {
      methodIsDefined()
    }
  })
}
