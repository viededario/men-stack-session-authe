import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        minLength: 4,
        maxLength: 8,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        match: ["^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])$", "Provide one upper and one lower case letter, one number, and one special character."]
    }
})


const user = mongoose.model("User", userSchema)

export default User