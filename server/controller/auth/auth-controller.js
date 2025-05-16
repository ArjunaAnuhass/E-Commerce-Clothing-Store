import bcrypt from 'bcrypt';
import User from '../../models/User.js';
import jwt from 'jsonwebtoken'


//register
const registerUser = async(req, res) => {

    const { userName, email, password } = req.body;

    try {
        const checkUser = await User.findOne({email});
        if(checkUser){
            return res.json({success:false, message:"User already exists the same email! Please try again with different email!"})
        }

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

const loginUser = async (req, res) => {

    const CLIENT_SECRET_KEY = process.env.SECRET_KEY

    const { email, password } = req.body;

    try {
        const checkUser = await User.findOne({email});
        if (!checkUser) {
            return res.json({
                success: false,
                message: "User doesn't exists! Please register first!"
            })
        }

        const checkPasswordMatch = await bcrypt.compare(password, checkUser.password);
        if (!checkPasswordMatch) {
            return res.json({
                success: false,
                message: "Incorrect Password! Please try again!",
            })
        }

        const token = jwt.sign({
            id: checkUser._id,
            role: checkUser.role,
            email: checkUser.email,
            userName: checkUser.userName,
        },CLIENT_SECRET_KEY, {expiresIn: '60m'});

        res.cookie("token", token, {httpOnly: true, secure: false}).json({
            success: true,
            message: "Logged in successfully",
            user: {
                email: checkUser.email,
                role: checkUser.role,
                id: checkUser._id,
                userName: checkUser.userName,
            },
        });
        
    } catch (error) {
        res.status(500).json({success:false, message: "Some error occurred in Login"});
    }
}


//logout



//middleware


export {registerUser, loginUser}