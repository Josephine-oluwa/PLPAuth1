import express, {Request, Response} from "express"
import userModel from "../Model/userModel"
import { HTTP, mainError } from "../Error/mainError"

export const createUser = async (req: any, res: Response)=> {
    try {
        const {name, email, location} = req.body

        const user = await userModel.create({
            name, email, location
        })

        return res.status(HTTP.CREATED).json({
            message: "user has been created",
            data: user
        })
    } catch (error) {
        new mainError({
            name: "GET Error",
            message: `Users Error`,
            status: HTTP.BAD_REQUEST,
            success: false
        })
        return res.status(HTTP.BAD_REQUEST).json({
            message: "Bad request",
            error: error.message
        })
    }
}




export const getAllUsers = async (req: any, res: Response)=> {
    try {
   

        const users = await userModel.find()

        return res.status(HTTP.CREATED).json({
            message: "users found",
            data: users
        })
    } catch (error) {
        new mainError({
            name: "GET Error",
            message: `Users Error`,
            status: HTTP.BAD_REQUEST,
            success: false
        })
        return res.status(HTTP.BAD_REQUEST).json({
            message: "Bad request",
            error: error.message
        })
    }
}
export const getUser = async (req: any, res: Response)=> {
    try {
   

        const {location} = req.body
        const {userID} = req.params

        const user= await userModel.findById(userID)

        return res.status(HTTP.CREATED).json({
            message: "user found",
            data: user
        })
    } catch (error) {
        new mainError({
            name: "GET Error",
            message: `Users Error`,
            status: HTTP.BAD_REQUEST,
            success: false
        })
        return res.status(HTTP.BAD_REQUEST).json({
            message: "Bad request",
            error: error.message
        })
    }
}




