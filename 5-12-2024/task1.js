var express=require('express')
var app=express()
var fs=require('fs')
var bcrypt=require('bcrypt')
app.use(express.json())
app.post('/products',async(req,res)=>{
console.log(req.body)
var salt=10
var password_match1=await bcrypt.hash(req.body.password,salt)
var password_match={password:password_match1}
fs.writeFile("index1.json",JSON.stringify(password_match),(err)=>{
    if(err){
        res.send({status:400,
            err:err.message
        })
}})
console.log(password_match)
res.send()
})
var port=3387
app.listen(port,()=>{
    console.log("http://localhost:"+port)
})