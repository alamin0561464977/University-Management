import mongoose from 'mongoose'
import { app } from './index'
import config from './config/config'

async function main() {
  try {
    await mongoose.connect(config.db)
    console.log('Connected to MongoDB')
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}
main()
