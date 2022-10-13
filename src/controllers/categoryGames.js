import Category from '../models/Category.js'
export const categoryGames = async (req, res) => {
  const { body } = req
  const { name } = body
  try {
    const category = new Category({
      name
    })
    const savedCategory = await category.save()
    res.status(201).json(savedCategory)
  } catch (error) {
    console.log(error)
    res.status(400).json({ error })
  }
}
