const express = require('express')
const app = express()
result=[{'name': 'vasanth'}]
console.log(result)
app.get("/get",(req,res)=>{
    console.log("New Request!!!")
    res.send(`<h1> Hey Everyone, I'm ${result[0]['name']}<h1>`)
    res.send(result)
})
app.put("/put",(req,res) => {
    result[0]['name']=req.query.name
    res.send(`<h1>I'm ${result[0]['name']}</h1>`)
})

app.delete("/del",(req,res) => {
    result.pop()
    res.send(`<h1>I'm $ {result[0]}</h1>`)
    console.log("DONE")
})

app.listen(3000,() => {console.log("server is running")})