const express = require('express')
const router = express.Router()
const CoronaController = require('../controllers/CoronaController')
const authentication = require('../middlewares/authentication')

router.post('/login', CoronaController.login)
router.use(authentication)
router.get('/countries', CoronaController.getAll)
router.get('/reports', CoronaController.getReports)
router.post('/reports', CoronaController.addReport)
// router.delete('/reports/:id', CoronaController.deleteReport)

module.exports = router