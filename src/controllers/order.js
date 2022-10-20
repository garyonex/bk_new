
import Order from '../models/Order.js'
// create
export const createOrder = async (req, res, next) => {
  const { order } = req.body
  const newOrder = new Order(order)

  try {
    const savedOrder = await newOrder.save()
    res.status(200).json(savedOrder)
  } catch (error) {
    next(error)
  }
}
// update
// todo tiene que ser admin para modificar orden de compra
export const changeOrder = async (req, res, next) => {
  const { id } = req.params
  const modifyOrder = req.body
  try {
    const result = await Order.findByIdAndUpdate(id, modifyOrder, {
      new: true
    })
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}
// delete
// todo tiene que ser admin para modificar orden de compra
export const removeOrder = async (req, res, next) => {
  const { id } = req.params
  await Order.findByIdAndRemove(id)
  try {
    res.status(204).json('successfully removed')
  } catch (error) {
    next(error)
  }
}
// get all
// todo tiene que ser admin para modificar orden de compra
export const allsOrders = async (req, res, next) => {
  try {
    const orders = await Order.find()
    res.status(200).json(orders)
  } catch (error) {
    next(error)
  }
}
// get all order users
// todo tiene que ser admin para modificar orden de compra
export const orderFromUser = async (req, res, next) => {
  const { userId } = req.params
  try {
    const orders = await Order.find(userId)
    res.status(200).json(orders)
  } catch (error) {
    next(error)
  }
}
