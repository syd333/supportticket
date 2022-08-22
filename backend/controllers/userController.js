const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

// @desc register new user
// @route /api/users
// @access public 
const registerUser = asyncHandler(async(req, res)=> {
    // console.log(req.body)
    const {name, email, password } = req.body

    //validation
    if(!name || !email || !password){
     res.status(400)
     throw new Error('Please include all fields')
    }
    // Find if user already exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    //   token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new error('Invalid user data')
  }
})


// @desc login user
// @route /api/users/login
// @access public 
const loginUser = asyncHandler(async (req, res)=> {
res.send('Login Route')
})

module.exports = {
    registerUser,
    loginUser
}