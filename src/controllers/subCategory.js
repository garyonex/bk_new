// import User from '../models/User.js'
import SubCategory from '../models/SubCategory.js'
import Category from '../models/Category.js'

export const createSubCategory = async (req, res, next) => {
  const { subcategory } = req.body
  // recuperamos token antes de crear una subCategory
  const { categoryId } = req.body
  // const user = await User.findById(userId)
  const category = await Category.findById(categoryId) // recuperamos la category
  if (!subcategory) {
    return res.status(400).json({
      error: 'No se puede pasar parametros vacios'
    })
  }

  const newSubCategory = new SubCategory({
    subcategory,
    categoryId
  })

  try {
    const saveSubCategory = await newSubCategory.save()
    category.subCategory = category.subCategory.concat(saveSubCategory)
    await category.save()
    res.status(201).json({ saveSubCategory: [...saveSubCategory] })
  } catch (error) {
    next(error)
  }
}

export const allSubCategory = async (req, res, next) => {
  const subCategory = await SubCategory.find({})
  res.json(subCategory)
}
