import Server from './classes/server';
import  router  from './routes/router';
import  r_graph  from './routes/graphic_routes';
import bodyParser from "body-parser";
import cors from 'cors'

//const server = Server();
const server = Server.instance;

server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

server.app.use( cors ({ origin: true, credentials: true}))

server.app.use('/', router)
server.app.use('/', r_graph)


server.start(() => {
    console.log(`el servidor esta levantado en el puerto ${server.port}`)
})
