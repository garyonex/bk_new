import { Router } from 'express'
import {
  allUsers,
  changeUserById,
  checkUser,
  removeUserById,
  userRegister
} from '../controllers/userRegister.js'
import { authToken } from '../middleware/authToken.js'
import authUserAdmin from '../middleware/authUserAdmin.js'
const userRoute = Router()

userRoute.post('/', userRegister)
userRoute.get('/:id', authToken, authUserAdmin, checkUser)
userRoute.get('/', authToken, authUserAdmin, allUsers)
userRoute.put('/:id', authToken, authUserAdmin, changeUserById)
userRoute.delete('/:id', authToken, authUserAdmin, removeUserById)
export default userRoute
