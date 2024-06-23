import express, { json } from'express'

const app=express()
app.use(express.urlencoded({ extended:false}))
app.get("/",(req,res)=>{
    res.send("Login Server!")
})
app.get("/user",(req,res)=>{
    res.send("User")
})
app.post("/login",(req,res)=>{
    console.log(req.body)
    res.send("Login data recieved")
})
const port=3000
app.listen(3000,()=>{
    console.log(`Server started on http://localhost:${port}`)
})
