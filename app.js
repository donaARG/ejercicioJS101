let autos = require('./autos');




const concesionaria = {
    autos: autos,
    buscarAuto : function (patente){                //un for normal tambien se podria haber usado, que recorra autos.length 
        let autos = this.autos;
        let autoBuscado = null;
        autos.forEach(function(auto) {
            if(patente ===auto.patente) {
                autoBuscado = auto
            }
        })
        return autoBuscado;
    },
    venderAuto: function (patente){
        let autoVender = this.buscarAuto(patente)
        autoVender.vendido =true;
        return autoVender;
    },
    autosParaLaVenta : function (){
        let autosPVenta = this.autos;
        let autosOk = autosPVenta.filter(function (autos){
            return autos.vendido === false;
        })
        return autosOk;
    },
    autosNuevos: function (){
        let autoNuevo = this.autosParaLaVenta();
        return autoNuevo.filter(function(auto){
            return auto.km<100;
        })
    },
    listaDeVentas: function (){
        let autos= this.autos;
        let listado= [];
        autos.forEach(function(auto){
            if(auto.vendido===true){listado.push(auto.precio)}
        })
        return listado;
    },
    totalDeVentas: function(){//ver esto
        let totalVentas = this.listaDeVentas();
        if(totalVentas.length>0){
            return totalVentas.reduce(function(acc,precio){
                return acc + precio})
            }else{
                return 0;
            }
                
    },
    puedeComprar: function(auto,persona){
        if(auto.precio<=persona.capacidadDePagoTotal && (auto.precio/auto.cuotas)<= persona.capacidadDePagoEnCuotas){
            return true;

        }else{
            return false;
        }
    },
    autosQuePuedeComprar: function(persona){
        let listaVenta= this.autosParaLaVenta();
        return listaVenta.filter(function (auto){
            return auto.precio<= persona.capacidadDePagoTotal && (auto.precio/auto.cuotas)<= persona.capacidadDePagoEnCuotas
        })
    }


        
        
        
        

        
    
       
        
        

        
        
    
};   
/*
console.log(concesionaria.buscarAuto("APL123"));
console.log(concesionaria.venderAuto("APL123"));
console.log(concesionaria.autosNuevos());
console.log(concesionaria.listaDeVentas());
console.log(concesionaria.totalDeVentas());*/

module.exports= concesionaria;