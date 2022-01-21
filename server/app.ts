import express from 'express'
import systemRoutes from './routes/system'
import companies from './routes/companies'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use(morgan('tiny'))
app.use('/system', systemRoutes)
app.use('/companies', companies)

app.listen(3001, () => {
  console.log(`Server is running in port ${3001}`)
})

export default app
