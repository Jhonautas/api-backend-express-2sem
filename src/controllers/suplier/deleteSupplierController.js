export const deleteSupplierController = (req, res) => {
  const id = req.params.id
  res.json({
    message: `Supplier with id:${id} has deleted successfully!`
  })
}
