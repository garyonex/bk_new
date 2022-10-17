import { Router } from 'express'
import {
  createProducts,
  removeById,
  searchById,
  searchProduts
} from '../controllers/produts.js'

const productRoutes = Router()
productRoutes.post('/', createProducts)
productRoutes.get('/:id', searchById)
productRoutes.get('/', searchProduts)
productRoutes.put('/id', removeById)
// ? falta por agregar modificar mediante id
export default productRoutes
