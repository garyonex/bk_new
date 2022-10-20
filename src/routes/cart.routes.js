import { Router } from 'express'
import {
  allsCart,
  cartFromUser,
  changeCart,
  createCart,
  removeCart
} from '../controllers/cartProducts.js'
import {
  authToken,
  authTokenAndAuthorization
} from '../middleware/authToken.js'
import authUserAdmin from '../middleware/authUserAdmin.js'
const cartRoutes = Router()
cartRoutes.post('/', authToken, createCart)
cartRoutes.put('/', authTokenAndAuthorization, changeCart)
cartRoutes.delete('/', authTokenAndAuthorization, removeCart)
cartRoutes.get('/userId', authTokenAndAuthorization, cartFromUser)
cartRoutes.get('/', authToken, authUserAdmin, allsCart)
export default cartRoutes
