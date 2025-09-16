import express from 'express'
import { createSupplierController } from '../controllers/suplier/createSupplierController.js'
import { listSupplierController } from '../controllers/suplier/listSupplierController.js'
import { getByIdSupplierController } from '../controllers/suplier/getByIdSupplierController.js'
import { editSupplierController } from '../controllers/suplier/editSupplierController.js'
import { deleteSupplierController } from '../controllers/suplier/deleteSupplierController.js'

const router = express.Router()

router.post('/', createSupplierController)
router.get('/', listSupplierController)
router.get('/:id', getByIdSupplierController)
router.put('/:id', editSupplierController)
router.delete('/:id', deleteSupplierController)

export default router