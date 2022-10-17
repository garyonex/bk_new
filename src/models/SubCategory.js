import { model, Schema } from 'mongoose'

const SubCategorySchema = new Schema(
  {
    subcategory: String,
    category: {
      type: Schema.ObjectId,
      ref: 'Category'
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
export default model('SubCategory', SubCategorySchema)
