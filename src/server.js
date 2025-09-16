import express from "express";
import profileRouter from './routers/profileRouter.js'
import productRouter from './routers/productRouter.js'
import carRouter from './routers/carRouter.js'
import supplierRouter from './routers/supplierRouter.js'
import cors from 'cors'
import { logger } from '../src/middlewares/logger.js'

const app = express()
const port = 3333

app.use(logger)
app.use(cors()) // Habilitar o CORS para todas as rotas
app.use(express.json()) // Converter o JSON que chegou na requisição em um objeto js e vai salvar no req.body

app.use('/profile', profileRouter)
app.use('/product', productRouter)
app.use('/car', carRouter) 
app.use('/supplier', supplierRouter)

app.listen(port, () => {
    console.log(`Api criada com sucesso http://localhost:${port}`);
});
