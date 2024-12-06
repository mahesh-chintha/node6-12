var express=require('express')
var app=express()
var fs=require('fs')
var bcrypt=require('bcrypt')
app.use(express.json())
app.post('/login',async(req,res)=>{
var reg_data=await fs.readFileSync("index1.json","utf-8")
  var out=JSON.parse(reg_data)
    console.log(out)
var login_pass=req.body.password
var match=await bcrypt.compare(login_pass,out.password)
console.log(login_pass)
res.send({match})
})
var port=4432
app.listen(port,()=>{
    console.log("http://localhost:"+port)
})