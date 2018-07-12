const router = require('express').Router();
const controller = require('./users.controller');

router.get('/', controller.client_getUsers);
router.get('/:username', controller.client_getUser);
router.post('/', controller.client_addUser);
router.delete('/:username', controller.client_deleteUser);
router.patch('/:username', controller.client_updateUserEmail);

module.exports = router;
