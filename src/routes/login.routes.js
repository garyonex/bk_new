import { Router } from 'express'
import { recoverUserPass } from '../controllers/loginUser.js'
const loginRoute = Router()

loginRoute.post('/', recoverUserPass)

export default loginRoute
