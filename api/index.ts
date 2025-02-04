import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())

const PORT = process.env.PORT || 3000

app.use(express.json())
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.status(200).json({
    email: 'okere_chidera@yahoo.com',
    current_datetime: new Date().toISOString(),
    github_url: 'https://github.com/oderahub/quickInfoAPI'
  })
})

export default (req: Request, res: Response) => {
  app(req, res)
}
