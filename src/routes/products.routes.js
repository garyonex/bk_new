import { Router } from 'express'
import {
  createProducts,
  removeById,
  searchById,
  searchProduts,
  updatedProduct
} from '../controllers/produts.js'
import { authToken } from '../middleware/authToken.js'
import authUserAdmin from '../middleware/authUserAdmin.js'

const productRoutes = Router()
productRoutes.post('/', authToken, authUserAdmin, createProducts)
productRoutes.get('/:id', searchById)
productRoutes.get('/', searchProduts)
productRoutes.put('/:id', authToken, authUserAdmin, updatedProduct)
productRoutes.delete('/id', authToken, authUserAdmin, removeById)

export default productRoutes
