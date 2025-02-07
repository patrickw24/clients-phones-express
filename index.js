import express from 'express'
const app = express()
app.use(express.json())
import { phone } from './routes/phoneRoutes.js'
import { client } from './routes/clientRoutes.js'

app.use(phone)
app.use(client)

app.listen(4000)