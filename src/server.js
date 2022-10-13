import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { config } from 'dotenv'
import './DB/database.js'
import userRoute from './routes/user.routes.js'
import cookieParser from 'cookie-parser'
import loginRoute from './routes/login.routes.js'
import logger from './middleware/loggers.js'
import errorsFound from './middleware/errorsFound.js'
import authRoutes from './routes/auth.routes.js'
import categoryRoutes from './routes/category.routes.js'
config() // viene del .env para poder leer los archivos

const app = express()
const loggers = logger
const errorsRoutes = errorsFound
app.use(loggers)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cookieParser())
app.use(cors())
// app.use(express.static('public'))

// **---- INICIO DE SERVIDOR */
const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () =>
  console.log(`🚧 Server on http://localhost:${PORT}`)
)
server.on('error', (err) => console.log(err))

// ** ROUTESS */
app.use('/api/user/register', userRoute)
app.use('/api/user/login', loginRoute)
app.use('/api/user/auth', authRoutes)
app.use('/api/product/category', categoryRoutes)

app.use('/hola', (req, res) => {
  res.json('hola')
})
// ** MANEJO DE ERRORES */
app.use(errorsRoutes)
