import mongoose, { Schema } from 'mongoose'

const GamesSchema = mongoose.Schema(
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
      type: Schema.type.ObjectId,
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
    gameplay: {
      type: Schema.Types.ObjectId,
      ref: 'Gameplay',
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

export default mongoose.model('Game', GamesSchema)
