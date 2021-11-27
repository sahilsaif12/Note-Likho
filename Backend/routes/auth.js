const express = require('express')
const router = express.Router()
const User = require('../models/User')
const fetchUser = require('../middleware/fetchUser')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const JWT_SECRET='SahilKeep#pati$ence'


//# Route 1: Creating an user account using: POST "/api/auth/createuser". Doesn't required Authentication and log in 

router.post("/createuser", [
  body('name', "enter a valid name").isLength({ min: 3 }),
  body('email', "enter a valid email").isEmail(),
  body('password', "password should be at least 6 character").isLength({ min: 6 }),
], async (req, res) => {
  let success=true
  /// if there are errors, return bad request and the errors
  const errors = validationResult(req); 
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  /// check whether the user with same email exists already
  try {
    let user = await User.findOne({ email: req.body.email })
    if (user) {
      success=false
      return res.status(400).json({success, error: "Sorry a user is already exist with this email" })
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
    res.json({success,authToken})
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal error accrued")
  }

})



//# Route 2: Authenticate a user using while login with email and password: POST "/api/auth/login".

router.post("/login", [
  body('email', "enter a valid email").isEmail(),
  body('password', "password can't be blank").exists(),
], async (req, res) => {
  let success=true
  /// if there are errors, return bad request and the errors
  const errors = validationResult(req); 
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email,password}=req.body   /// user's entered email and password to login
  try {
    let user=await User.findOne({email}) /// checking whether user's entered email is in database or not
    if (!user) {
      success=false
      return res.status(400).json({success, errors: "please try to log in with correct email and password" });
    }
    
    let passwordCompare=await bcrypt.compare(password, user.password) 
    if (!passwordCompare) {
      success=false
      return res.status(400).json({success, errors: "please try to log in with correct email and password" });
    }
    const data={
      user:{
        id:user.id
      }
    }
    const authToken=jwt.sign(data,JWT_SECRET)
    console.log(authToken);
    res.json({success,authToken})
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal error accrued")
  }
})



//# Route 3: Get logged in user's details: POST "/api/auth/getuser".  log in required

router.get("/getuser",fetchUser, async (req, res) => {
  let success=true
try {
  let userId=req.user.id
  let user = await User.findById(userId).select("-password")
  res.json({success,user})
} catch (error) {
  console.log(error.message);
  res.status(500).send(error)
}
})
module.exports = router