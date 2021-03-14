//Expresión para validar un correo electrónico
var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;$
$(document).ready(function(){
    $("#bGuardar").click(function(){
        var nombre = $("#itNombre").val(); 
        var apellido = $("#itApellido").val();
        var correo = $("#itMail").val();
        var telefono = $("#itTelefono").val();
//-------------------------------------------------------------
    $("#mostrar").html(nombre+ " "+ apellido+ " "+ correo+ " "+ telefono);
  
        if(nombre == ""){
            $("#mensaje1").fadeIn("slow");
            return false;
        }
        else{
            $("#mensaje1").fadeOut();
//--------------------------------------------------------------           
            if(apellido == ""){
                    $("#mensaje2").fadeIn("slow");
                    return false;
                }
                else{
                    $("#mensaje2").fadeOut();
            
//--------------------------------------------------------------            
            if(correo == "" || !expr.test(correo)){
                $("#mensaje3").fadeIn("slow");
                return false;
            }
            else{
                $("#mensaje3").fadeOut();
//--------------------------------------------------------------         
            if(telefono == ""){
                $("#mensaje4").fadeIn("slow");
                return false;
            }

        }
                        
    }
}
    });
});