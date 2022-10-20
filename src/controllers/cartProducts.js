import Cart from '../models/Cart.js'
// create
export const createCart = async (req, res, next) => {
  const { cart } = req.body
  const newCart = new Cart(cart)

  try {
    const savedCart = await newCart.save()
    res.status(200).json(savedCart)
  } catch (error) {
    next(error)
  }
}
// update
export const changeCart = async (req, res, next) => {
  const { id } = req.params
  const modifyCart = req.body
  try {
    const result = await Cart.findByIdAndUpdate(id, modifyCart, {
      new: true
    })
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}
// delete
export const removeCart = async (req, res, next) => {
  const { id } = req.params
  await Cart.findByIdAndRemove(id)
  try {
    res.status(204).json('successfully removed')
  } catch (error) {
    next(error)
  }
}
// get user cart
export const cartFromUser = async (req, res, next) => {
  const { userId } = req.params
  try {
    const cart = await Cart.findOne(userId)
    res.status(200).json(cart)
  } catch (error) {
    next(error)
  }
}
// get all cart
// todo para poder ver todos los carros de compra tiene que ser admin
export const allsCart = async (req, res, next) => {
  try {
    const carts = await Cart.find()
    res.status(200).json(carts)
  } catch (error) {
    next(error)
  }
}
