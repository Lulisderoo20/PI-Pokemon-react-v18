const { Router } = require('express');
const { getTypes } = require('../Controller/Type.Controller');

const router = Router();

router.get('/types', getTypes);

module.exports = router;