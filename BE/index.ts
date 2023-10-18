import express, { Application } from "express"

const port: number = 5566
const app: Application = express()

const server = app.listen(port, ()=> {
    console.log("server is up and running")
    console.log("")
})

process.on("uncaughtException", (error: any)=> {
    console.log("problem occurred due to uncaughtException")
    console.log(error)

    process.exit(1)
})

process.on("unhandledRejection", ()=> {
    console.log("problem occurred due to unhandledRejection")

    server.close(()=> {
        process.exit(1)
    })
})