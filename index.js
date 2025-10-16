const jsonserver = require('json-server')

const server = jsonserver.create()

const middleware = jsonserver.defaults()
const router = jsonserver.router('db.json')

server.use(middleware)
server.use(router)

const PORT = 3000 ||  process.env.PORT 

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`)
})


