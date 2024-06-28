import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! i am express server')
})

app.listen(port, () => {
  console.log(`hello server is listening on port ${port}`)
})



console.log("hello!");