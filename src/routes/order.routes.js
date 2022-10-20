import { Router } from 'express'
import {
  allsOrders,
  changeOrder,
  createOrder,
  orderFromUser,
  removeOrder
} from '../controllers/order'
import { authToken } from '../middleware/authToken.js'
import authUserAdmin from '../middleware/authUserAdmin'
const orderRoutes = Router()
orderRoutes.post('/', authToken, createOrder)
orderRoutes.put('/', authUserAdmin, changeOrder)
orderRoutes.delete('/', authUserAdmin, removeOrder)
orderRoutes.get('/', authUserAdmin, allsOrders)
orderRoutes.get('/:userId', authToken, orderFromUser)

export default orderRoutes
