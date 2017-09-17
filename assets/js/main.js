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



/*function rand_code(chars, lon){
code = "";
for (x=0; x < lon; x++)
{
rand = Math.floor(Math.random()*chars.length);
code += chars.substr(rand, 1);
}
return code;
}

caracteres = "0123456789";
longitud = 3;

alert("XYZ" +rand_code(caracteres, longitud));  
//devuelve una cadena aleatoria de 20 caracteres*/


