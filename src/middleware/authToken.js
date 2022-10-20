import jwt from 'jsonwebtoken'
export const authToken = (req, res, next) => {
  const authUser = req.get('authorization')
  let token = ''
  if (authUser && authUser.toLowerCase().startsWith('bearer')) {
    token = authUser.substring(7)
  }
  let decodeToken = {}
  try {
    decodeToken = jwt.verify(token, process.env.JWT_SECRET)
    const { id: userId } = decodeToken
    req.userId = userId
    next()
  } catch {}
  if (!token || !decodeToken.id) {
    res.status(401).json({ error: 'token invalid' })
  }
}

export const authTokenAndAuthorization = (req, res, next) => {
  authToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next()
    } else {
      res.status(403).json(' Your are not alowed to do that')
    }
  })
}
