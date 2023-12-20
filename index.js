require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello bhai!')
})

app.get('/twitter', (req , res)=> {
    res.send("Ritikshroff.com")
})

app.get('/login', (req , res)=> {
    res.send('<h1>Plese Login at Ritik or code</h1>')
})

app.get('/youtube', (req , res) => {
    res.send("<h2>This is my first deployment of backend project</h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})