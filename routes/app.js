const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {text: "World!"})
})

module.exports = router;