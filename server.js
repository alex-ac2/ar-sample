const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/hello', (req, res) => res.send('Hello World!'))


app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))
