const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        if(username != 'admin123'){
            return res.status(404).json({ message: 'User not found' }); 
        }
        if(password != 'passadmin123'){
            return res.status(401).json({ message: 'Invalid password' });
        }
        const accessToken = jwt.sign({username : username}, 'JWTSecret', {expiresIn: '1h'});
        res.status(200).json({message : 'Login successfully', accessToken : accessToken});
    } catch (error) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred' });
    }
});

module.exports = router;