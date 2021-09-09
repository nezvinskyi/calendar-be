const express = require('express');
const router = express.Router();
const { events: ctrl } = require('../controllers');
const { authMiddleware } = require('../middlewares');

router.get('/', authMiddleware, ctrl.getAllEvents);

router.post('/', authMiddleware, ctrl.addEvent);

router.delete('/:id', authMiddleware, ctrl.deleteEvent);

module.exports = router;
