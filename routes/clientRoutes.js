import express from 'express'
export const client = express()
client.use(express.json())
import { clientDelete,clientGet,clientPost,clientPut } from '../controllers/clientController.js'

client.get('/clients', clientGet)
client.post('/clients', clientPost)
client.put('/clients/:id', clientPut)
client.delete('/clients/:id', clientDelete)