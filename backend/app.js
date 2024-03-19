const express = require('express')
var cors = require('cors')

const app = express()
app.use(cors())

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('Hello from the backend!')
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
