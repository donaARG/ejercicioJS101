let consolaTerminal = require('./app.js');

let accion= process.argv[2];
let entidad = process.argv[3];

switch(accion) {
    case 'buscar':
        console.log(consolaTerminal.buscarAuto(entidad));
        break;
    case 'vender':
        console.log(consolaTerminal.venderAuto(entidad));
        break;
    case 'disponibles':
        console.log(consolaTerminal.autosParaLaVenta(entidad));
        break;
    case 'vendidos':
        console.log(consolaTerminal.listaDeVentas(entidad));
        break;
    case 'ventas':
        console.log(consolaTerminal.totalDeVentas(entidad));
        break;


                    
}