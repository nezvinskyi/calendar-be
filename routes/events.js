const express = require('express');
const router = express.Router();
const { events: ctrl } = require('../controllers');

// router.get('/', authMiddleware, ctrl.getAllTransactions);

router.post('/', ctrl.addEvent);

// router.put('/:transactionId', authMiddleware, ctrl.updateTransaction);

// router.delete('/:transactionId', authMiddleware, ctrl.delTransaction);

// router.get('/balance', authMiddleware, ctrl.getBalance);

module.exports = router;
