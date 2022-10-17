import { model, Schema } from 'mongoose'

const Products = Schema(
  {
    name: {
      required: true,
      type: String,
      unique: 1,
      maxlength: 100
    },
    description: {
      required: true,
      type: String,
      maxlength: 100000
    },
    price: {
      required: true,
      type: Number,
      maxlength: 100000
    },
    category: {
      type: Schema.ObjectId,
      ref: 'Category',
      required: true
    },
    shipping: {
      required: true,
      type: Boolean
    },
    available: {
      required: true,
      type: Boolean
    },
    subcategory: {
      type: Schema.Types.ObjectId,
      ref: 'subCategory',
      required: true
    },
    sold: {
      type: Number,
      maxlength: 100,
      default: 0
    },
    publish: {
      required: true,
      type: Boolean
    },
    images: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
)

export default model('Product', Products)
