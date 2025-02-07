import express from 'express'
export const phone = express()
phone.use(express.json())
import { phoneDelete,phoneGet,phonePost,phonePut } from '../controllers/phoneController.js'

phone.get('/phones', phoneGet)
phone.post('/phones', phonePost)
phone.put('/phones/:id', phonePut )
phone.delete('/phones/:id', phoneDelete)