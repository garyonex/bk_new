import Products from '../models/Products.js'
// para crear productos
export const createProducts = async (req, res, next) => {
  const { body } = req
  const { name, description, price, categories, shipping, available, images } =
    body
  const newProduct = await Products({
    name,
    description,
    price,
    categories,
    shipping,
    available,
    images
  })
  try {
    const savedProduct = newProduct.save()
    res.status(201).json(savedProduct)
  } catch (error) {
    next(error)
  }
}
// busqueda todos losproductos
export const searchProduts = async (req, res, next) => {
  // ? modifique la busqueda de productos
  const { latest, categories, available } = req.query
  try {
    let product
    if (latest) {
      product = await Products.find().sort({ createAt: -1 }).limit(1)
    } else if (categories) {
      product = await Products.find({
        categories: {
          $in: [categories]
        }
      })
    } else if (available) {
      product = await Products.find({
        available: {
          $in: [available]
        }
      })
    } else {
      product = await Products.find()
    }
    res.status(200).json(product)
  } catch (error) {
    next(error)
  }
}

// buscar productos por id
export const searchById = async (req, res, next) => {
  const { id } = req.params
  const product = await Products.findById(id)
  try {
    if (product) {
      res.status(200).json(product)
    } else {
      res.status(404).json('It was not found')
    }
  } catch (error) {
    next(error)
  }
}

// eliminar mediante id

export const removeById = async (req, res, next) => {
  const { id } = req.params
  await Products.findByIdAndRemove(id)
  try {
    res.status(204).json('Product has been deleted...')
  } catch (error) {
    next(error)
  }
}
// modificar mediante id
export const updatedProduct = async (req, res, next) => {
  const { id } = req.params
  const product = req.body
  const changeProduct = {
    product
  }
  try {
    const result = await Products.findByIdAndUpdate(id, changeProduct, {
      new: true
    })
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}
// ordenar mas vendidos y creados
// todo CHEQUEAR ESTO*/
// export const orderProducts = async (req, res, next) => {
//   const { sortBy, limit } = req.query
//   if (sortBy) return 'id'
//   if (limit) return parseInt(limit)
//   else if (!limit) return 100
//   const order = await Products.find()
//     .populate('subCategory')
//     .sort([[sortBy]])
//     .limit(limit)
//   try {
//     res.status(201).json(order)
//   } catch (error) {
//     res.status(404).json({ error: 'Error al ordenar productos' })
//   }
// }
