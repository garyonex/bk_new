import Category from '../models/Category.js'
export const createCategory = async (req, res) => {
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
// **Buscamos todas las categorias */
export const allCategory = async (req, res, next) => {
  const category = await Category.find({})

  try {
    res.json({ category: [...category] })
  } catch (error) {
    next(error)
  }
}
