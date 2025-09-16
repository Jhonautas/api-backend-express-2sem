export const createSupplierController = (req, res) => {
  const dados = req.body
  res.json({
    message: `Supplier has created successfully!`,
    supplier: dados
  })
}