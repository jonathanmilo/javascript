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

let tipoMoneda= (document.getElementById("input_tipoMoneda").value);  
let valorPeso= Number(document.getElementById("valor_delPeso").value);
let tipo_billetePesos= Number(document.getElementById("input_denominacionBillete").value);
let enPesos= valorPeso / tipo_billetePesos ;

info_deudaNeta= deudaNeta;
info_deudaTotal= deudaTotal

superficie_horizontalNeta_Pesos= ((deudaNeta * valorPeso)/ tipo_billetePesos) * 0.10075+" m2";
superficie_horizontalTotal_Pesos= ((deudaTotal * valorPeso)/ tipo_billetePesos) * 0.10075 + "m2";

superficie_verticalNeta_Pesos= ((deudaNeta * valorPeso)/tipo_billetePesos) * 0.00000012 ; /*" km de altura"*/
superficie_verticalTotal_pesos= ((deudaTotal * valorPeso)/tipo_billetePesos) * 0.00000012 + " km de altura";

superficie_horizontalNeta_1usd= deudaNeta * 0.10338947064 +" m2";
superficie_horizontalTotal_1usd= deudaTotal * 0.10338947064 + " m2";

superficie_verticalNeta_1usd= deudaNeta * 0.00000012 ; /*" km de altura"*/
superficie_verticalTotal_1usd= deudaTotal * 0.00000012 + " km de altura";

/*function presidente( nombre, deudaNeta,deudaTotal,superficie_horizontalNeta_Pesos, superficie_horizontalNeta_1usd,)
{ this.nombre= nombre, this.deudaNeta=deudaNeta, this.deudaTotal= deudaTotal,this.superficie_horizontalNeta_Pesos=superficie_horizontalNeta_Pesos, this.superficie_horizontalNeta_1usd=superficie_horizontalNeta_1usd }

const Macri= new presidente( "Mauricio Macri",82400000000,323065000000,superficie_horizontalNeta_Pesos,superficie_horizontalNeta_1usd );
const Cristina= new presidente("Cristina Fernandez de kirchner",75554000000,240665000000,superficie_horizontalNeta_Pesos,superficie_horizontalNeta_1usd)

ArrayPresidentes=[ Macri,Cristina ];*/

let akmpe= superficie_verticalNeta_Pesos ;
function grafica(){document.getElementById("seccion-grafico").style.display="flex";
    if(document.getElementById("valor_delPeso").value>0){ document.getElementById("a-km-pe").style.height+=""+ akmpe /3 +"px"; document.getElementById("n-km-p").innerText=akmpe+ "km";
document.getElementById("a-km-usd").style.height=""+superficie_verticalNeta_1usd /20 + "px";document.getElementById("n-km-usd").innerText=superficie_verticalNeta_1usd+"km"};
   
}

function informar(){switch(document.getElementById("opcionPresidencias").value){
    case "Mauricio Macri":document.getElementById("informe").style.display="flex";document.getElementById("cara-presidente").src="./img/macri-sonrisa.png";grafica(); break;

    case "Cristina Fernandez de Kirchner": document.getElementById("informe").style.display="flex";document.getElementById("cara-presidente").src="./img/cristina-sonrisa.png";grafica();break;
    default:document.getElementById("informe").innerHTML="<p>"+ "sin información"+ "</p>" }

    document.getElementById("d1").innerText=deudaNeta ;
    document.getElementById("d2").innerText=deudaTotal ;
    document.getElementById("d3").innerText=superficie_horizontalNeta_1usd ;
    document.getElementById("d4").innerText= superficie_horizontalTotal_1usd;
    document.getElementById("d5").innerText= superficie_verticalNeta_1usd;
    document.getElementById("d6").innerText= superficie_verticalTotal_1usd;
    document.getElementById("d7").innerText= superficie_horizontalNeta_Pesos;
    document.getElementById("d8").innerText= superficie_horizontalTotal_Pesos;
    document.getElementById("d9").innerText= superficie_verticalNeta_Pesos;
    document.getElementById("d10").innerText= superficie_verticalTotal_pesos;
}


 