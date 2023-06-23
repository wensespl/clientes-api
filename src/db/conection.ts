import mongoose from 'mongoose'

export const connectDB = async (url: string) => {
  try {
    await mongoose.connect(url)
    console.log('DataBase is connected!')
  } catch (error) {
    return console.error(error)
  }
}
