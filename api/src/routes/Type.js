const { Router } = require('express');
const { getTypes } = require('../Controller/Type.Controller');

const router = Router();

router.get('/', getTypes);

module.exports = router;