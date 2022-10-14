import { Router } from 'express'
import { categoryGames } from '../controllers/categoryGames.js'
import authToken from '../middleware/authToken.js'

const categoryRoutes = Router()

categoryRoutes.post('/', authToken, categoryGames)

export default categoryRoutes
