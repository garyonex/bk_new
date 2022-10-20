import { Router } from 'express'
import {
  allsCart,
  cartFromUser,
  changeCart,
  createCart,
  removeCart
} from '../controllers/cartProducts.js'
import {
  authToken
} from '../middleware/authToken.js'
import authUserAdmin from '../middleware/authUserAdmin.js'
const cartRoutes = Router()
cartRoutes.post('/', authToken, createCart)
cartRoutes.put('/', authToken, changeCart)
cartRoutes.delete('/', authToken, removeCart)
cartRoutes.get('/userId', authToken, cartFromUser)
cartRoutes.get('/', authToken, authUserAdmin, allsCart)
export default cartRoutes
