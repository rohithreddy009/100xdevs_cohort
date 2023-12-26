const express = require('express')
const app = express()
const port = 3000

app.get("/backend-apis", (req, res) => {
  // headers, body, query paramaters, machine learning model
  res.json({
    name:"ironman",
    age:19
  })
})

app.get('/', (req, res) => {
    res.send("<h1>IronMan  a</h1>")
  })

  app.post('/conversation', (req, res) => {
    console.log(req.body)
    res.send({
        res : "1+11=12"
    })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})