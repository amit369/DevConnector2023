const express = require('express');
const router = express.Router();

// @route    GET api/posts
// @desc     Test route
// @access   Public
router.post('/', (req,res) => {
    res.send('Posts Route');
})


module.exports = router;