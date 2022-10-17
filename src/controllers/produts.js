import Products from '../models/Products.js'
// para crear productos
export const createProducts = async (req, res, next) => {
  const { body } = req
  const product = await Products(body)
  try {
    const savedProduct = product.save()
    res.status(201).json(savedProduct)
  } catch (error) {
    next(error)
  }
}
// busqueda todos losproductos
export const searchProduts = async (req, res, next) => {
  const products = await Products.find({}).populate('subCategory', {
    subTitle: 1,
    category: 1
  })
  // TODO  -->PENDIENTE CON EL POPULATE PORQUE PUEDE GENERAR ERROR AL MOMENTO DE BUSCAR
  try {
    res.status(200).json(products)
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
      res.json(product)
    } else {
      res.status(404).end()
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
    res.status(204).end()
  } catch (error) {
    next(error)
  }
}

// ordenar mas vendidos y creados
export const orderProducts = async (req, res, next) => {
  const { sortBy, limit } = req.query
  if (sortBy) return 'id'
  if (limit) return parseInt(limit)
  else if (!limit) return 100
  const order = await Products.find()
    .populate('subCategory')
    .sort([[sortBy]])
    .limit(limit)
  try {
    res.status(201).json(order)
  } catch (error) {
    res.status(404).json({ error: 'Error al ordenar productos' })
  }
}
