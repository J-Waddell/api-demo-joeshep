'use strict'

const { Router } = require('express')
const router = Router()

const { getShows, addShow, getShow, getShowFaves } = require('../controllers/showCtrl')

router.get('/shows', getShows)
router.post('/shows/new', addShow)
router.get('/shows/favorites', getShowFaves)
router.get('/shows/:id', getShow)

module.exports = router