const asyncHandler = require('express-async-handler')
const { findByIdAndUpdate, findByIdAndDelete } = require('../model/pointModel')

const Point = require('../model/pointModel')
const User = require('../model/userModel')

const getPoints = asyncHandler(async (req, res) => {


    const points = await Point.find({ user: req.user.id })

    res.status(200).json(points)
})

const SetPoints = asyncHandler(async (req, res) => {

    if (!req.body.username) {
        res.status(400)
        throw new Error('Please Write Your Name')
    }

    const point = await Point.create({
        username: req.body.username,
        user: req.user.id
    })

    res.status(200).json(point)
})

const UpdatePoints = asyncHandler(async (req, res) => {

    const point = await Point.findById(req.params.id)

    if (!point) {
        res.status(400)
        throw new Error('Id Not Found')
    }

    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('There is no Id')
    }

    if (point.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User Not Here')
    }

    const updatedPoint = await findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedPoint)
})

const DeletePoints = asyncHandler(async (req, res) => {

    const point = await Point.findById(req.params.id)

    if (!point) {
        res.status(400)
        throw new Error('There is No ID')
    }

    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('There is no Id')
    }

    if (point.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User Not Here')
    }

    await point.remove()

    res.status(200).json({ message: `Deleted Id: ${req.params.id}` })
})

module.exports = { getPoints, SetPoints, UpdatePoints, DeletePoints }