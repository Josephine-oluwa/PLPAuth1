// import mongoose from "mongoose"

// interface iLike 
// {
//     userID: string,
//     like: string
// }

// interface iLikeData extends iLike, mongoose.Document{}

// const LikeModel = new mongoose.Schema<iLike> (
//     {
//         like: {
//             type: String,
//             default: false
//         },
//         userID: {
//             type: String,

//         }
//     },
//     {timeStamps: true}
// )

// export default mongoose.model<iLikeData>("likes", LikeModel)



import mongoose from "mongoose"


interface iLike {
    userID: string;
    like: String
}

interface iLikeData extends iLike, mongoose.Document{}

const likeModel = new mongoose.Schema(
    {
        like: {
            type: String,
            default: false
        },
        userID: {
            type: String,
        }

    },
    {timestamps: true}
)

export default mongoose.model<iLikeData>("iLike", likeModel)