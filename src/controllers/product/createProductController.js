import { create } from '../../models/productModel.js'

export const createProductController = async (req, res) => {
  const dados = req.body
  const result = await create(dados)

  res.json({
    message: `Product criado com sucesso!`,
    product: result
  })
}
