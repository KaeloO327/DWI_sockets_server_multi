
import { Router, Request, Response } from 'express';
import { GraficaData } from '../classes/grafica';
import Server from '../classes/server';
import { usuariosConectados } from '../sockets/sockets';


export const router = Router();
//const router = Router();

const grafica= new GraficaData();


router.get('/datosgrafica', (req: Request, res: Response) =>{

    // let {mes, unidades} = req.body;

    

    // Enviar a la BD
// insert table usuario .... ?
});

export default router;

