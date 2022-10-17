import { Router } from 'express'
import { changeUserById, checkUser, removeUserById, userRegister } from '../controllers/userRegister.js'
const userRoute = Router()

userRoute.post('/', userRegister)
userRoute.get('/', checkUser)
userRoute.put('/:id', changeUserById)
userRoute.delete('/:id', removeUserById)
export default userRoute
