const axios = require('axios')

async function listCards(req, res, next) {
  try {
    const page = req.query.page || 1
    const name = req.query.name || ''
    const response = await axios.get(
      `https://api.magicthegathering.io/v1/cards?page=${page}&name=${name}&pageSize=20`
    )
    res.json(response.data)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  listCards
}
