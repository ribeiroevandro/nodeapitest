import 'dotenv/config'
import cors from 'cors'
import express from 'express'

import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.disable('x-powered-by')

app.listen(process.env.PORT || 4000, () => {
  console.log(`Listening on port: ${process.env.PORT}`)
})
