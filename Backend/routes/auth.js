const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const JWT_SECRET='SahilKeep#pati$ence'
/// Create a user using: POST "/api/auth/createuser". Doesn't required Authentication
router.post("/createuser", [
  body('name', "enter a valid name").isLength({ min: 3 }),
  body('email', "enter a valid email").isEmail(),
  body('password', "password should be at least 6 character").isLength({ min: 6 }),
], async (req, res) => {

  /// if there are errors, return bad request and the errors
  const errors = validationResult(req); 
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  /// check whether the user with same email exists already
  try {


    let user = await User.findOne({ email: req.body.email })
    if (user) {
      return res.status(400).json({ error: "Sorry a user is already exist with this email" })
    }

    /// create a new user
    const salt =await bcrypt.genSalt(10)
    securePassword =await bcrypt.hash(req.body.password,salt)
    let user2 = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: securePassword,
    })
    
    const data={
      user:{
        id:user2.id
      }
    }
    const authToken=jwt.sign(data,JWT_SECRET)
    res.json({authToken})
  } catch (error) {
    console.log(error.message);
    res.status(500).send("some error accrued")
  }

})

module.exports = router