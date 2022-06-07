let autos = require('./autos');

const concesionaria = {
    autos: autos,
    buscarAuto : function (patente){
        for(let i = 0; i < autos.length; i++){
            if(autos[i].patente == patente){
                return autos[i]
            }
            else{
                return null;
            }
        }
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
    totalDeVentas: function(){
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
