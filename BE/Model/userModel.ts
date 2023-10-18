import mongoose  from "mongoose";

interface iUser {
    name?: string,
    email?: string,
    location?: string,
}

interface iUserData extends iUser, mongoose.Document{}

const userModel = new mongoose.Schema<iUser>(
{
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    location: {
        type: String,
    }
},

{timestamps: true}
)

export default mongoose.model<iUserData>("iUser", userModel)