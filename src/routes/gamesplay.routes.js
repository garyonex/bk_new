import { Router } from 'express'
import {
  gameplayCreate,
  searchGamesPlay
} from '../controllers/productsGameplay.js'
import authToken from '../middleware/authToken.js'
const gamesplayRoutes = Router()
gamesplayRoutes.post('/', authToken, gameplayCreate)
gamesplayRoutes.get('/search', searchGamesPlay)
export default gamesplayRoutes
