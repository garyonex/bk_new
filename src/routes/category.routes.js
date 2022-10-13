import { Router } from 'express'
import { categoryGames } from '../controllers/categoryGames.js'
import authToken from '../middleware/authToken.js'
import admin from '../middleware/admin.js'

const categoryRoutes = Router()

categoryRoutes.post('/', authToken, admin, categoryGames)

export default categoryRoutes
