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

export const checkUser = async (req, res) => {
  const users = await User.find({ })

  res.status(200).json(users)
}
