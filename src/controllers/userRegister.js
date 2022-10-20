import User from '../models/User.js'
import bcrypt from 'bcrypt'

export const userRegister = async (req, res) => {
  const { body } = req
  const { email, password, name, lastname } = body

  try {
    const saltOrRound = 10
    const passwordHash = await bcrypt.hash(password, saltOrRound)
    const user = new User({
      email,
      password: passwordHash,
      name,
      lastname
    })
    const savedUser = await user.save()
    res.status(201).json(savedUser)
  } catch (error) {
    console.error(error)
    res.status(400).json({ error })
  }
}

export const checkUser = async (req, res, next) => {
  const { userId } = req
  const id = userId
  try {
    const user = await User.findById(id)
    const { password, ...others } = user._doc
    res.status(200).json(others)
  } catch (error) {
    next(error)
  }
}

export const allUsers = async (req, res, next) => {
  const query = req.query.nwe
  try {
    const users = query
      ? await User.find().sort({ id: -1 }).limit(1)
      : await User.find()
    res.status(200).json(users)
  } catch (error) {
    next(error)
  }
}

export const removeUserById = async (req, res, next) => {
  const { id } = req.params
  await User.findByIdAndRemove(id)
  try {
    res.status(204).json('successfully removed')
  } catch (error) {
    next(error)
  }
}

export const changeUserById = async (req, res, next) => {
  const { id } = req.params
  const user = req.body
  const changeUser = {
    email: user.email,
    name: user.name
  }

  try {
    const result = await User.findByIdAndUpdate(id, changeUser, {
      new: true
    })
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json(error)
  }
}
