
/**
 * standalone server file, no cli
 */

import { createApp } from 'ringcentral-personal-chatbot'

const path = './index.js'
console.log('-> bot:', path)
const conf = require(path)
const app = createApp(conf)

export default app
