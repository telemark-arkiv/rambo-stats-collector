'use strict'

const fbs = require('firebase-save')
const config = require('../config')
const logger = require('./logger')

module.exports = (data) => {
  return new Promise((resolve, reject) => {
    const database = fbs(config.fireBase)
    database.save(data)
      .then((result) => {
        logger(['update-status', 'status saved', JSON.stringify(result)])
        resolve(result)
      }).catch((error) => {
        logger(['update-status', 'error', JSON.stringify(error)])
        reject(error)
      })
  })
}
