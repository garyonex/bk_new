import { Router } from 'express'
import {
  allSubCategory,
  changeSubById,
  createSubCategory,
  removeSubById
} from '../controllers/subCategory.js'

const subCategoryRoutes = Router()
subCategoryRoutes.post('/', createSubCategory)
subCategoryRoutes.get('/', allSubCategory)
subCategoryRoutes.delete('/:id', removeSubById)
subCategoryRoutes.put('/:id', changeSubById)
export default subCategoryRoutes
