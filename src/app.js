import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('yep booy')
})

app.post('/', (req, res) => {
  res.json(req.body)
})

app.listen(3000, () => {
  console.log('u r in live')
})
