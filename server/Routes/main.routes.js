const express = require('express')
const mainControl = require('../Controllers/main.controller')
const apiRoutes = express.Router()


apiRoutes.get('/', mainControl.test)
apiRoutes.get('/test', mainControl.test)


module.exports = apiRoutes