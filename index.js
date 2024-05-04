import express from'express'

const app=express()
app.use(express.urlencoded({ extended:false}))
app.get("/",(req,res)=>{
    res.send("Hello world!")
})
app.get("/user",(req,res)=>{
    res.send("Shuhaib")
})
app.post("/login",(req,res)=>{
    console.log(req.body)
})
const port=3000
app.listen(3000,()=>{
    console.log(`Server started on http://localhost:${port}`)
})
