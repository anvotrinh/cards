function errorHandler(err, req, res, next) {
  const httpStatus = err.code || err.status || err.statusCode || 500
  res.status(httpStatus)
  res.json({ error: err.message })
}

module.exports = {
  errorHandler
}
