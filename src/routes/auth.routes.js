import { Router } from 'express'
import { authToken } from '../middleware/authToken.js'
import authUserAdmin from '../middleware/authUserAdmin.js'

const authRoutes = Router()
authRoutes.get('/', authToken, authUserAdmin)
export default authRoutes
