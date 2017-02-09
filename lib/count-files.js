'use strict'

const fs = require('fs')
const logger = require('./logger')
const isJson = (file) => file.endsWith('.json')

const flatten = (a, b) => {
  a[b.folder] = b.files
  return a
}

module.exports = (data) => {
  logger('count-files', data.id, 'starts')
  const countedFiles = Object.keys(data.folders)
                         .map(key => Object.assign({folder: key, files: fs.readdirSync(data.folders[key]).filter(isJson).length}))
                         .reduce(flatten, {})
  logger('count-files', data.id, 'finished')
  return Object.assign({key: data.id, value: countedFiles})
}
