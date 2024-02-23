const express = require('express')
const os = require('os');

const app = express()

const containerName = os.hostname()

app.get('/', (req, res) => {
    res.send(`Hi there, I'm served from NGINX through ${containerName}`)
})


app.listen(5555, () => {
    console.log('server is runing on port 5555')
})