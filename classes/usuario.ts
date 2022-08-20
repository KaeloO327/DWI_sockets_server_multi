export class Usuario {

    public id: string;
    public nombre: string;
    public sala: string;
    public color: string;

    constructor(id: string) {
        this.id = id;
        this.nombre = 'sin-nombre';
        this.sala = 'sin-sala';
        this.color = 'navy';

    }
}