const express = require('express');
const Ngo = require('../models/Ngo');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = 'Donationsforhelpingp$eople';

// ROUTE 1:  Create a User using: POST "/api/ngo/createuser". No login required
router.post('/createuser', [
    body('name', 'Name must be atleast 5 characters').isLength({ min: 5 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').exists(),
    body('registration', 'Registration number is required').exists(),
], async (req, res) => {
    // if there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Check whether the user with the same email exists already
    try {
        let ngo = await Ngo.findOne({ email: req.body.email });
        if (ngo) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        // Create a new user
        ngo = await Ngo.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
            registration: req.body.registration,
        })

        const data = {
            ngo:{
                id: ngo.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        // console.log(jwtData);
        
        res.json({authtoken});
        // Catch errors
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Authenticate a User using: POST "/api/ngo/login". No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    // if there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    // Check whether the user with the same email exists already
    try {
        let ngo = await Ngo.findOne({ email });
        if (!ngo) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
        
        const passwordCompare = await bcrypt.compare(password, ngo.password);
        if(!passwordCompare){
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        const data = {
            ngo:{
                id: ngo.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({authtoken});

        // Catch errors
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE3: Get loggedin User using: POST "/api/ngo/getuser". Login required
router.get('/getuser', fetchuser ,async (req,res)=>{
    try{
        ngoId = req.ngo.id;
        const ngo = await Ngo.findById(ngoId).select("-password");
        res.json(ngo);
        // res.send(user);
    }catch(error){
        console.log(error.mesage);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;