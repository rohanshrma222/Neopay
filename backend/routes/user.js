const express = require("express")
const zod = require("zod");
const router = express.Router();

const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    password: zod.string()
})

router.post("/signup",async (req,res) => {
    const body = req.body;
    const obj = signupSchema.safeParse(req.body);
    if(!obj.success){
        return res.json({
            message:"Email already taken / Incorrect Inputs"
        })
    }

    const user = User.findOne({
        username: body.username
    })

    if(user._id){
        return res.json({
            message:"Email already taken / Incorrect inputs"
        })
    }

    const dbUser =  await User.create(body);

    const token = jwt.sign({
        userId: dbUser._id
    },JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})

module.exports=router;