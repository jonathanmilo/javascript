let nombre= prompt("escriba su nombre"),
    edad= prompt ("escriba su edad");
    
    if(edad <28){console.log("usted es menor de 28 años, el contenido se mostrará parcialmente")}
    else if(nombre !="jonathan")
        {console.log("bienvenido"+" "+nombre+ ", este usuario cuenta con acceso restingido")}
    else if(nombre== "usuario1"||"jonathan"){ console.log("acceso total")}
    else if(nombre== "jonathan"&& edad ==28)
    { var titulo = document.getElementById('titutlo');
    titutlo.style.backgroundColor = '#FF00FF';}
    else{console.log("acceso denegado")};


    let a= getElementById(imput1)
    let b= getElementById(imput2)
    const suma  = function (a, b) { return a + b };
    const resta = function (a, b) { return a - b };
    console.log(suma(a,b));
    console.log(resta(a,b));
