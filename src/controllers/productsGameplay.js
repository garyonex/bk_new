import Gameplay from '../models/Gameplay.js'

// para crear gameplay
export const gameplayCreate = async (req, res, next) => {
  const { title } = req.body
  const gameplay = await Gameplay(title)
  try {
    const savedGames = gameplay.save()
    res.status(200).json(savedGames)
  } catch (error) {
    next(error)
  }
}
// para ver lista completa
export const searchGamesPlay = async (req, res, next) => {
  const gamesplay = await Gameplay.find({})
  try {
    res.status(200).json(gamesplay)
  } catch (error) {
    next(error)
  }
}
