import { Router } from 'express'
import authUser from '../controllers/authUser.js'
import authToken from '../middleware/authToken.js'

const authRoutes = Router()
authRoutes.get('/', authToken, authUser)
export default authRoutes
