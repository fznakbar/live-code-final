const express = require('express')
const router = express.Router()
const CoronaController = require('../controllers/CoronaController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/login', CoronaController.login)
router.use(authentication)
router.get('/countries', CoronaController.getAll)
router.get('/reports', CoronaController.getReports)
router.post('/reports', CoronaController.addReport)
router.delete('/reports/:id', authorization, CoronaController.deleteReport)

module.exports = router