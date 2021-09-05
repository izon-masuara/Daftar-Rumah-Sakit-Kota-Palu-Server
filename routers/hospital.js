const router = require('express').Router()
const HospitalController = require('../controllers/hospitalController')

router.get('/',HospitalController.getHospital)

module.exports = router