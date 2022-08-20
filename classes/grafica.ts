
export class GraficaData {

    private meses: string[] = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio'
    ]

    private valores: number[] = [
        // 1,2,3,4,5,6,7
           0,0,0,0,0,0,0
    ]

    constructor () {}
    
    getDataGrafica() {

        return [
            {
                data:this.valores,
                label:'Ventas'
            }
        ];
    }

    //metodo para incrementar el valor del arrgelo 
    incrementarValor( mes:string, valor: number ) {

        mes = mes.toLowerCase().trim();

        for( let i in this.meses ) {

            if ( this.meses[i] === mes ) {
                this.valores[i] += valor;
            }
        } return this.getDataGrafica();
    }
}