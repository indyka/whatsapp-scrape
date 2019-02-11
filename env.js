/**
 * @typedef {object} ENV
 * @property {string} port
 * @property {string} username
 * @property {string} password
 * @property {string} breefAdminApi
 * @property {string} breefAdminAuthorization
 * @property {string} chromeExecutablePath
 * @property {string} userDataDir
 */

/** @type {ENV} */
const environment = process.env;

module.exports = environment;