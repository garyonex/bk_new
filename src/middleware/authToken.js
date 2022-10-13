import jwt from 'jsonwebtoken'
const authToken = (req, res, next) => {
  const authUser = req.get('authorization')
  let token = ''
  if (authUser && authUser.toLowerCase().startsWith('bearer')) {
    token = authUser.substring(7)
  }
  let decodeToken = {}
  try {
    decodeToken = jwt.verify(token, process.env.JWT_SECRET)
  } catch {}
  if (!token || !decodeToken.id) {
    res.status(401).json({ error: 'token invalid' })
    const { id: userId } = decodeToken
    req.userId = userId
    next()
  }
}
export default authToken
