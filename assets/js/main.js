var caracteress = "XYZ";
var longituds = 3;


function codigoRamdon(caracteres, longitud) {

    
    var codigo = "";
    for (x = 0; x < longitud; x++) {
        var randon = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres.substr(randon, 1);
    }
    return codigo;

 }


function cod(){

codigoRamdon();
	alert("Su codigo es: " + "LAB-" + codigoRamdon(caracteress, longituds));
}
 

 //document.getElementById("numale").innerHTML = "LAB-" + codigoRamdon(caracteres,longituds);



 