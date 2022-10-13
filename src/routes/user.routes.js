import { Router } from 'express'
import { checkUser, userRegister } from '../controllers/userRegister.js'
const userRoute = Router()

userRoute.post('/', userRegister)
userRoute.get('/', checkUser)
export default userRoute
