const admin = (req, res, next) => {
  if (req.user.role === 0) {
    return res.send('you are not admin')
  }
  next()
}

export default admin
