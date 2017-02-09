'use strict'

const logger = require('./lib/logger')
const config = require('./config')
const countFiles = require('./lib/count-files')
const updateStatus = require('./lib/update-status')
const folders = require(`./${config.CONFIG_FILE_PATH}`)

logger('starts')

const jobs = folders
               .map(countFiles)
               .map(updateStatus)

Promise.all(jobs)
  .then(data => {
    logger('statuses updated', 'finished')
  }).catch(error => {
    logger(['error', JSON.stringify(error)])
    process.exit(1)
  })
