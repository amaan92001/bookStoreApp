import User from "../model/user.model.js"
import bcrypt from 'bcrypt'

export const signup = async (req, res) => {

    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ massage: "user already exists" })
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword
        })
        res.status(200).json({
             massage: "user seccessfully ragistered",
             user:{
                _id:createdUser._id,
                fullname:createdUser.fullname,
                email:createdUser.email
        } })
        await createdUser.save()
    } catch (err) {
        res.status(500).json({
            massage: `internal error : ${err}`
        })
        console.log(err)
    }
};




export const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        // console.log(user.password)

        if (!user) {
            return res.status(400).json({ massage: "Invalid credentials" })
        } else {
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({ massage: "Invalid credentials" })
            } else {
                res.status(200).json({
                    massage: "login successful",
                    user: {
                        _id: user._id,
                        fullname: user.fullname,
                        email: user.email
                    }
                })
            }
            }

        }catch (err) {
            res.status(500).json({ massage: `internal error ${err}` })
            console.log(err)
        }

    }

