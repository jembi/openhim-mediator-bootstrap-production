'use strict'

import logger from '../logger'
import {buildReturnObject} from './utils'

module.exports = (_req, res) => {
  logger.info('Test Endpoint Triggered')
  const returnObject = buildReturnObject(
    'Successful',
    200,
    'Test Endpoint Response!'
  )
  return res.send(returnObject)
}
