import express, {Request, Response} from 'express'

const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    // console.log('req', req.)
    const message = 'Hello world!'
    res.send(message)
})

app.get('/test', (req: Request, res: Response) => {
    res.send('Hello Test 2!')
})

app.listen(port, () => {
    console.log(`Example app listening port ${port}`)
})