import mongoose from 'mongoose'

const gameplaySchema = mongoose.Schema({
  title: {
    required: true,
    type: String,
    unique: 1,
    maxlength: 100
  }
})

export default mongoose.model('Gameplay', gameplaySchema)
