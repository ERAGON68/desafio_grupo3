function validateForm_Registro() {
    var x = document.forms["myForm"]["fname"].value;
    var ps1 = document.forms["myForm"]["psw1"].value
    var ps2 = document.forms["myForm"]["psw2"].value
    var exito = true
    var mail1 = document.forms["myForm"]["email"].value
    mail1 = mail1.toLowerCase()

    if (x == "" || x =="123456789" || x.indexOf(' ') >= 0) {
      alert("Nombre Invalido!!!");
      exito = false;
      return false;
     }
     if (!(ps1 == ps2)) {
        alert("Las contraseñas no coinciden!!!");
        exito = false;
        return false;
       }
    
    if ( (mail1.indexOf("@") < 0 && mail1.indexOf(' ') > 0 || mail1.length < 4))   {
      alert("E-Mail Invalido!!!");
      exito = false;
      return false;
     }
     if (exito) {
        alert ("Registro Exitoso")
    }  else {alert ("Registro cancelado!!!");
            }
  } 