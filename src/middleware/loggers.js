const loggers = (req, res, next) => {
  console.log(req.method)
  console.log(req.path)
  console.log(`Desde loggers -> ${req.body}`)
  next()
}

export default loggers
