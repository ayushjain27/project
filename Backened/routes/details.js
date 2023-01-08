const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const upload = require('../middleware/uploadimage');
const Detail = require('../models/Details');
const Image = require('../models/Images');
const { body, validationResult } = require('express-validator');

// ROUTE 1:  Get All the Details using: GET "/api/details/fetchalldetails". login required
router.get('/fetchalldetails', fetchuser, async (req, res) => {
    try {
        const details = await Detail.find({ user: req.user.id });
        res.json(details);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    } 
})

// ROUTE 2:  Add a new Detail using: POST "/api/details/adddetail". login required
router.post('/adddetail/clothes', fetchuser, [
    body('title', 'Title must be atleast 5 characters').isLength({ min: 5 }),
    body('description', 'Description must be atleast 10 characters').isLength({ min: 10 }),
], async (req, res) => {
    let success = false;
    try {
        const { title, description } = req.body;
        const data = await Image.find({ user: req.user.id });
        // res.json(data)
        // if there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }
        const detail = new Detail({
            title, description, image: data[0].uploadFile.filename, category:'clothes', user: req.user.id
        })
        const savedDetail = await detail.save();
        success = true;
        res.json({ success, savedDetail });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 3:  Add a new Detail using: POST "/api/details/adddetail". login required
router.post('/adddetail/shoes', fetchuser, [
    body('title', 'Title must be atleast 5 characters').isLength({ min: 5 }),
    body('description', 'Description must be atleast 10 characters').isLength({ min: 10 }),
], async (req, res) => {
    let success = false;
    try {
        const { title, description} = req.body;
        const data = await Image.find({ user: req.user.id });
        // if there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }
        const detail = new Detail({
            title, description, image: data[0].uploadFile.filename, category:'shoes', user: req.user.id
        })
        const savedDetail = await detail.save();
        success = true;
        res.json({ success, savedDetail });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 4:  Add a new Detail using: POST "/api/details". login required
router.post("/images", fetchuser, upload.single('image') , async (req,res) => {
    const uploadFile = req.file;
    if(!uploadFile) {
        res.json({success: false, error: "file-not-uploaded"});
        return;
    }
    const images = new Image({
        uploadFile, user: req.user.id
    })
    const savedDetail = await images.save();
    res.json({ success: true, savedDetail });
    // res.json({success: true, data: uploadFile, user: req.user.id});
})

// ROUTE 5:  Get All the Details using: GET "/api/details". login required
router.get('/getimage', fetchuser, async (req, res) => {
    try {
        const data = await Image.find({ user: req.user.id });
        res.json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    } 
})

// ROUTE 6:  Get All the Details using: GET "/api/details/getuser". login required
router.get('/fetchalldetail', async (req, res) => {
    try {
        const detail = await Detail.find();
        res.json(detail);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    } 
})

module.exports = router;