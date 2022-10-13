import mongoose from 'mongoose'

const CategorySchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: 1,
    maxlength: 10
  }
})

export default mongoose.model('Caregory', CategorySchema)
