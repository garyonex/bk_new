import { Router } from 'express'
import authUserAdmin from '../middleware/authUserAdmin.js'
import { authToken } from '../middleware/authToken.js'

const authRoutes = Router()
authRoutes.get('/', authToken, authUserAdmin)
export default authRoutes
