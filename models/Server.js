const express = require('express')
const cors = require('cors')

class Server {
    
    constructor() {
        this.app = express()
        this.port = process.env.PORT;

        // paths to routes
        this.usersPath = '/api/users';

        this.middlewares();

        this.routes(); 
    }

    middlewares() {
        // add cors
        this.app.use(cors());

        // read of body and parse
        this.app.use(express.json());  // cualquier info la serialiará en formato json

        // public directory
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        })
    }
}

module.exports = Server;