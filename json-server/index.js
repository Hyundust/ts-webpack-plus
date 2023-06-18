// require the necessary packages and modules
const fs = require('fs') // module for working with files
const jsonServer = require('json-server') // package for creating mock servers based on JSON files
const path = require('path') // built-in module for working with file and directory paths

// create a new instance of the jsonServer
const server = jsonServer.create()

// create a router for the server that points to the 'db.json' file
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

// use default middlewares for jsonServer
server.use(jsonServer.defaults({}))

// enable parsing of the request body
server.use(jsonServer.bodyParser)

// add middleware function which delays requests by 800ms
server.use(async (req, resolve, next) => {
    await new Promise((resolve) => {
        setTimeout(resolve, 800)
    })
    next()
})

// define a route for handling login requests
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
        const { users = [] } = db

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password
        )

        if (userFromBd) {
            return res.json(userFromBd)
        }

        return res.status(403).json({ message: 'User not found' })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: e.message })
    }
})

// add a middleware function that checks for authorization header
server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' })
    }

    next()
})

// use the previously defined router
server.use(router)

// start listening on port 8000
server.listen(8000, () => {
    console.log('server is running on 8000 port')
})
