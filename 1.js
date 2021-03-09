// deuda neta Macri 82.400 .000.000 usd
// deuda al final del mandato 323.065.000.000 usd

//deuda neta Cristina Kirchner 75.554.000.000 usd
//deuda al final del mandato 240.665.000.000 usd
// fuente Ministerio de finanzas,consultado 3/3/2021
let opcionPresidencias= document.getElementById("opcionPresidencias").value;

if (opcionPresidencias =="Mauricio Macri"){ console.log("presidente Mauricio");
    deudaNeta= Number (82400000000);deudaTotal=Number (323065000000)}
else if (opcionPresidencias =="Cristina Fernandez de Kirchner"){
    deudaNeta= Number(75554000000),deudaTotal= Number(240665000000),console.log("presidente Cristina")}
    else{ console.log('sin designación de presidencia')}

let tipoMoneda= (document.getElementById("input_tipoMoneda"));  
let valorPeso= Number(document.getElementById("valor_delPeso").value);
let tipo_billetePesos= Number(document.getElementById("input_denominacionBillete").value);
let enPesos= valorPeso / tipo_billetePesos ;

info_deudaNeta= deudaNeta;
info_deudaTotal= deudaTotal

superficie_horizontalNeta_Pesos= deudaNeta * enPesos * 0.10075+" m2";
superficie_horizontalTotal_Pesos= deudaTotal * enPesos * 0.10075 + "m2";

superficie_verticalNeta_Pesos= deudaNeta * enPesos * 0.002 + " metros de altura";
superficie_verticalTotal_pesos= deudaTotal * enPesos * 0.002 + " metros de altura";

superficie_horizontalNeta_1usd= deudaNeta * 0.10338947064 +" m2";
superficie_horizontalTotal_1usd= deudaTotal * 0.10338947064 + " m2";

superficie_verticalNeta_1usd= deudaNeta * 0.002 + " metros de altura";
superficie_verticalTotal_1usd= deudaTotal * 0.002 + " metros de altura";

function presidente( nombre, deudaNeta,deudaTotal,superficie_horizontalNeta_Pesos, superficie_horizontalNeta_1usd,)
{ this.nombre= nombre, this.deudaNeta=deudaNeta, this.deudaTotal= deudaTotal,this.superficie_horizontalNeta_Pesos=superficie_horizontalNeta_Pesos, this.superficie_horizontalNeta_1usd=superficie_horizontalNeta_1usd }

const Macri= new presidente( "Mauricio Macri",82400000000,323065000000,superficie_horizontalNeta_Pesos,superficie_horizontalNeta_1usd );
const Cristina= new presidente("Cristina Fernandez de kirchner",75554000000,240665000000,superficie_horizontalNeta_Pesos,superficie_horizontalNeta_1usd)

ArrayPresidentes=[ Macri,Cristina ];
seleccion=[]



function informar(){switch(opcionPresidencias){
    case "Mauricio Macri": document.getElementById("informe").innerHTML=
    "<p>"+ "deuda neta:usd$"+ Macri.deudaNeta+"deuda total de Argentina al finalizar su mandato :usd$"+Macri.deudaTotal+ "</p>"+
    "<p>"+"superficie horizontal que ocuaría la deuda Neta en billetes pesos: "+Macri.superficie_horizontalNeta_Pesos+"</p>"+
    "<p>"+"superficie horizontal que ocuparía la deuda Neta en billetes dolares: "+Macri.superficie_horizontalNeta_1usd+"</p>";break;

    case "Cristina Fernandez de Kirchner": document.getElementById("informe").innerHTML=
    "<p>"+ "deuda neta:usd$"+ Cristina.deudaNeta+"deuda total de Argentina al finalizar su mandato :usd$"+Cristina.deudaTotal+ "</p>"+
    "<p>"+"superficie horizontal que ocuaría la deuda Neta en billetes pesos: "+Cristina.superficie_horizontalNeta_Pesos+"</p>"+
    "<p>"+"superficie horizontal que ocuparía la deuda Neta en billetes dolares: "+Cristina.superficie_horizontalNeta_1usd+"</p>"; break;
    
    default:document.getElementById("informe").innerHTML="<p>"+ "sin información"+ "</p>" }}


 