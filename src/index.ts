const express = require('express')
const app = express()
const port = 3000

app.get('/', (req: any, res: any) => {
    const message = 'Hello world!'
    res.send(message)
})

app.get('/test', (req: any, res: any) => {
    res.send('Hello Test 2!')
})

app.listen(port, () => {
    console.log(`Example app listening port ${port}`)
})