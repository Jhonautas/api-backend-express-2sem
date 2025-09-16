import express from 'express'

const router = express.Router()

router.put('/:id', (req, res) => {
  const id = req.params.id
  const dados = req.body
  res.json({
    message: `${dados.marca} ${dados.modelo} com o id ${id} alterado.`,
    marca: dados.marca, 
    modelo: dados.modelo
  })
})

export default router