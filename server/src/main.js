const express = require('express')
const { listCards } = require('./controllers/cards')
const { errorHandler } = require('./controllers/error')
const app = express()
const port = 3000
const cors = require('cors')

app.get('/api/cards.list', cors(), listCards)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
