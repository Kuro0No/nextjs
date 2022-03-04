import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            maxlength: 20
        },
        surname: {
            type: String,
            require: true,
            maxlength: 20
        },
        age: {
            type: Number,
            require: true
        },
        password: {
            type: String,
            require: true,
            maxlength: 50
        },

    },
    {
        timestamps: true
    },
)
export default mongoose.models.User || mongoose.model("User",  UserSchema)