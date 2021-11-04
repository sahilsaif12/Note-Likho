const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

// Create a user using: POST "/api/auth/createuser". Doesn't required Authentication
router.post("/createuser", [
  body('name', "enter a valid name").isLength({ min: 3 }),
  body('email', "enter a valid email").isEmail(),
  body('password', "password should be at least 6 character").isLength({ min: 6 }),
], async (req, res) => {
  // if there are errors, return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  // check whether the user with same email exists already
  try {
    
  
  let user=await User.findOne({email:req.body.email})
  if (user) {
    return res.status(400).json({error:"Sorry a user is already exist with this email"})
  }
  
  let user2 = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
  res.json(user2)
} catch (error) {
    console.log(error.message);
  }
  // .then(user => res.json(user))
  // .catch(err=>{
  //   console.log(err)
  //   res.json({error:'The email is already used , use another email id',message:err.message})
  // })

})

module.exports = router