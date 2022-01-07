import * as express from 'express'
import routes from './routes'
require('./database/index')

const app =  express()

app.use(express.json())
app.use(routes)

app.listen(3030)