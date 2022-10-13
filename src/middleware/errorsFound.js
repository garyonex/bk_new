const errorsFound = (req, res, next) => {
  console.log(req.path)
  res.status(404).json({
    error: 'not found'
  })
}

export default errorsFound
