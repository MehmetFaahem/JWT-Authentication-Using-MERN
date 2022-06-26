const express = require('express')
const router = express.Router()
const { registerUser, loginUser, GetUser } = require('../controllers/userController')

const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, GetUser)

module.exports = router