const express = require('express')
const router = express.Router()

const { getPoints, SetPoints, UpdatePoints, DeletePoints } = require('../controllers/pointControllers')

const { protect } = require('../middleware/authMiddleware')

router.route('/')
    .get(protect, getPoints)
    .post(protect, SetPoints)

router.route('/:id')
    .put(protect, UpdatePoints)
    .delete(protect, DeletePoints)


module.exports = router