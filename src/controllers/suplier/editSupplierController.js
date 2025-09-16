export const editSupplierController = (req, res) => {
  const id = req.params.id
  const dados = req.body
  res.json({
    message: `Supplier with id:${id} has updated successfully!`,
    supplier: dados
  })
}
