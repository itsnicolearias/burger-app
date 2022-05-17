const User = require('../models/users.models')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
const enviromentConfig = require('../config/environmentConfig')

const register = async(req, res) => {
   
    const { name, age, email, password } = req.body
     
   try {
     //check if email already exist
     const emailExist = await User.findOne({ email: email})
     if (emailExist) {
         throw new Error("User already exists");
     }

     //hash password
     const salts = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(password, salts)

     const user = new User({
        name: name,
        age: age,
        email: email,
        password: hashedPassword
    })
    const userSaved = await user.save()
    res.json({ message: 'user registered', userSaved})

   } catch (error) {
    throw new Error(error);
   }
   


}

const login = async(req, res) => {
    
    const { email, password } = req.body

    try {
        //check if the user exist in the database
        const user = await User.findOne({ email: email })
        if(!user)  {
            throw new Error("User doesnt exists");
        } 

         //compare password
         const validPass = await bcrypt.compare(password, user.password)
         if (!validPass) {
             throw new Error("Invalid credentials");
         }

          //JWT
          const token = JWT.sign({
            name: user.name,
            id: user._id
        }, enviromentConfig.jwt.secret)

        res.json({message: 'User logged sucessfully', token })
    } catch (error) {
        throw new Error(error);
    }


}

module.exports = { register, login }
