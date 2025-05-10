import bcryptjs from 'bcryptjs';
import User from '../../models/User.js';


//register
const registerUser = async(req, res) => {

    const { userName, email, password } = req.body;

    try {

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            userName,
            email,
            password: hashedPassword,
        })
        
        await newUser.save();

        res.status(200).json({success: true, message: "User created Successfully"})

    } catch (error) {
        res.status(500).json({success: false, message:"Some error occurred in Register"});
    }
}


//login



//logout



//middleware


export {registerUser}