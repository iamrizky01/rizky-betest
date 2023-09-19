const express = require('express');
const router = express.Router();
const User = require('../model/Users');
const authMiddleware = require('../middleware/authMiddleware');

//Get All
router.get('/', authMiddleware, async (req, res) => {
    try {
        const result = await User.find();
        res.send(result);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
})

//Get by ID
router.get('/:id', authMiddleware, async (req, res) => {
    try {
        let id = req.params.id;
        const result = await User.findOne({"_id" : id});
        res.send(result);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
})

//Post
router.post('/', authMiddleware, async (req, res) => {
    try {
        const data = req.body;
        const result = await User.insertMany(data);
        res.send(result);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
})

//Put
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        let id = req.params.id;
        const data = req.body;
        const result = await User.findByIdAndUpdate(id, data);
        res.send(result);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
})

//Delete
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        let id = req.params.id;
        const result = await User.deleteOne({"_id" : id});
        res.send(result);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
})

module.exports = router;