import * as express from 'express'
import routes from './routes'
import connection from './database/index'


const app = express()

app.use(express.json())
app.use(routes)

app.listen(3030, async()=>{
   await connection.sync()
})

export default app