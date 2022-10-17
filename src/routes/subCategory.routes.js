import { Router } from 'express'
import {
  allSubCategory,
  createSubCategory
} from '../controllers/subCategory.js'

const subCategoryRoutes = Router()
subCategoryRoutes.post('/', createSubCategory)
subCategoryRoutes.get('/', allSubCategory)
export default subCategoryRoutes
