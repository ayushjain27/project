const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Accept = require('../models/Accept');
const { body, validationResult } = require('express-validator');

// ROUTE 1:  Get All the Details using: GET "/api/status/getuser". login required
// router.get('/statusdetails', fetchuser, async (req, res) => {
//     try {
//         const details = await Detail.find({ user: req.user.id });
//         res.json(details);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal Server Error");
//     } 
// })

// ROUTE 2:  Add a new Detail using: POST "/api/status/addstatus". login required
router.post('/addstatus/', [
    body('status', 'Status must be there').exists(),
], async (req, res) => {
    try {
        const { status } = req.body;
        // if there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const acc = new Accept({
            // status, ngo: req.ngo.id
            status
        })
        const savedDetail = await acc.save();
        res.json(savedDetail);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;