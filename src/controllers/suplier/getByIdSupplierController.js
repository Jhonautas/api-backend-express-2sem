export const getByIdSupplierController = (req, res) => {
  const id = req.params.id
  res.json({
    message: `Data of Supplier with id:${id} has been taken successfully!`
  })
}