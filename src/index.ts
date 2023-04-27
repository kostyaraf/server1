import express, {Request, Response} from 'express'

const app = express()
const port = 3000

let videos = [
  {id: 1, title: 'Video 1', author: 'Kostya'},
  {id: 2, title: 'Video 2', author: 'Kostya'},
  {id: 3, title: 'Video 3', author: 'Kostya'},
]

app.get('/', (req: Request, res: Response) => {
  res.send('home')
})
app.get('/videos', (req: Request, res: Response) => {
  res.send('videos')
})
app.post('/videos', (req: Request, res: Response) => {
  res.send('videos')
})
app.put('/videos/:videoId', (req: Request, res: Response) => {
  res.send('videos')
})
app.get('/videos/:videoId', (req: Request, res: Response) => {
  res.send('videos')
})
app.delete('/videos/:videoId', (req: Request, res: Response) => {
  res.send('videos')
})



app.listen(port, () => {
    console.log(`Example app listening port ${port}`)
})