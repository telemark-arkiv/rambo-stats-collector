'use strict'

module.exports = {
  CONFIG_FILE_PATH: process.env.CONFIG_FILE_PATH || 'config/folders.json',
  fireBase: {
    databaseURL: process.env.FIREBASE_URL || 'https://seneca-firebase-test.firebaseio.com'
  }
}
