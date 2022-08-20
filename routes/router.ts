
import { Router, Request, Response } from 'express';
import { GraficaData } from '../classes/grafica';
import Server from '../classes/server';
import { usuariosConectados } from '../sockets/sockets';


export const router = Router();
//const router = Router();

const grafica= new GraficaData();


router.get('/grafica', (req: Request, res: Response) =>{
    res.json( 
        grafica.getDataGrafica()
    ); 
});

 router.post('/grafica', (req:Request, res:Response)=>{
    
    const mes       = req.body.mes;
    const unidades  = Number(req.body.unidades);

    grafica.incrementarValor( mes, unidades );

    const server = Server.instance;
    server.io.emit('cambio-grafica', grafica.getDataGrafica());

    res.json(
        grafica.getDataGrafica()
    );
 });

 router.post('/mensajes/:para', (req:Request, res:Response)=>{
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const para = req.params.para;
    

    const payload = {
        de,
        cuerpo
    }
    const server = Server.instance;
    //server.io.in(para).emit('mensaje-privado')
    server.io.in(para).emit('mensaje-privado', payload) //payload= {de: 'IDGSW Enrique Santiago Peralta', cuerpo: 'Hola'}

    res.json({
        ok:true,
        cuerpo,
        de,
        para
    });
 });

 //Servicio para obtener todos los ID  de los usuarios 
router.get('/*usuarios',( req: Request, res: Response) => {
    
    const server = Server.instance;
    server.io.fetchSockets().then((sockets) => {
        const clients: Object[] = [];
        sockets.forEach( socket => clients.push ( socket.id));
        res.json({ ok:true, clients});
    }).catch( error => 
        res.json({ ok:true, error}));

});

// Creacion de Servicio Obtener Usuario y sus nombres
//router.get('/*usuarios/detalle',( req: Request, res: Response) => {
    router.get('/usuarios/detalle', (  req: Request, res: Response ) => {


        res.json({
            ok: true,
            clientes: usuariosConectados.getLista()
        });
});
 export default router;

