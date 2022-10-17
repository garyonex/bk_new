import { Router } from 'express'
import { allCategory, createCategory } from '../controllers/category.js'

const categoryRoutes = Router()
categoryRoutes.post('/', createCategory)
categoryRoutes.get('/', allCategory)
export default categoryRoutes
