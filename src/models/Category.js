import { model, Schema } from 'mongoose'

const CategorySchema = new Schema({
  name: {
    required: true,
    type: String,
    unique: 1,
    maxlength: 10
  },
  // asociamos subcategorias
  subCategory: [
    {
      type: Schema.Types.ObjectId,
      ref: 'SubCategory'
    }
  ]
})

export default model('Category', CategorySchema)
