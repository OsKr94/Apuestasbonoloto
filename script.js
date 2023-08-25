'use strict'
$(function () {
    $("button").click(function () {
        var lista = [Math.floor(Math.random() * (49 - 1)) + 1];
        console.log("longitud:" + lista.length, "lista: ", lista);
        while (lista.length < 6) {
            var candidato = Math.floor(Math.random() * (49 - 1)) + 1;
            console.log("candidato:", candidato);
            //invocamos la función que comprueba  
            //si el candidato no está repetido lo añade a la lista  
            comprueba(candidato, lista);
        };
        lista.sort((a, b) => a - b); //función de flecha para ordenar números bien  
        $('div').html(lista.join(' ')); //convertir array to string  
        function comprueba(candidato, lista) {
            let norepe = true;//inicialmente suponemos que no está repetido  
            while (norepe) {
                lista.forEach(function (item) {
                    if (candidato == item) { norepe = false };//detectado nº repetido  
                });
                if (norepe) {//si el candidato no está repetido  
                    lista.push(candidato); //se añade a la lista  
                    console.log("longitud:" + lista.length, "lista: ", lista);
                };
            };
            return lista;
        }
    });
}); 
