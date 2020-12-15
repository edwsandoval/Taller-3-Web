function cambioEdad(idCambio){
    var toChange = document.getElementsByName("edad");
    var newVal =document.getElementById(idCambio).value;

        toChange.forEach(function(elemento,indice,arreglo){
            elemento.value=newVal;
        });
}