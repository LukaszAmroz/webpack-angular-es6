var express = require('express')
var path = require('path')
var app = express()
var port = 8080

app.use(express.static(path.join(__dirname, '/public')))

app.listen(port, () => {
  console.log(`Server listen on port ${port}`)
})
