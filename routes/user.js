const { Router } = require('express');
const router = Router();
const { authMiddleware, validateMiddleware } = require('../middlewares');
const { registrationSchema, loginSchema } = require('../utils/validate');

const { user: ctrl } = require('../controllers');

router.post('/signup', validateMiddleware(registrationSchema), ctrl.signup);

router.post('/login', validateMiddleware(loginSchema), ctrl.login);

router.get('/logout', authMiddleware, ctrl.logout);

router.get('/current', authMiddleware, ctrl.getCurrentUser);

router.patch('/', authMiddleware, ctrl.updateUser);

module.exports = router;
