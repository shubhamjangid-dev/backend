const express = require('express') // import
require('dotenv').config()
const app = express()
// const port = 3000
const port = process.env.PORT


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/shubham',(req,res)=>{
    res.send('massage is displayed');
})
app.get('/login',(req,res)=>{
    res.send('<h1>enter details to login</h1>');
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})