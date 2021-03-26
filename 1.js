// deuda neta Macri 82.400 .000.000 usd
// deuda al final del mandato 323.065.000.000 usd

//deuda neta Cristina Kirchner 75.554.000.000 usd
//deuda al final del mandato 240.665.000.000 usd
// fuente Ministerio de finanzas,consultado 3/3/2021


let opcionPresidencias= document.getElementById("opcionPresidencias").value;

localStorage.setItem("presidente",opcionPresidencias);

localStorage.setItem("tipoDeMoneda",document.getElementById("input_tipoMoneda").value),
tipoMoneda=localStorage.getItem("tipoDeMoneda");

localStorage.setItem("ValorPeso",Number(document.getElementById("valor_delPeso").value)),
valorPeso=localStorage.getItem("ValorPeso");

localStorage.setItem("TipoBillete",Number(document.getElementById("input_denominacionBillete").value)),
tipo_billetePesos=localStorage.getItem("TipoBillete");

enPesos= localStorage.getItem("ValorPeso")/ localStorage.getItem("TipoBillete");

function DATOS(){
    localStorage.setItem("presidente",document.getElementById("opcionPresidencias").value);

    if(localStorage.getItem("presidente")=="Mauricio Macri"){
        console.log("presidente Mauricio");deudaNeta= Number (82400000000);deudaTotal=Number (323065000000)}
        else if (localStorage.getItem("presidente") =="Cristina Fernandez de Kirchner"){
            deudaNeta= Number(75554000000),deudaTotal= Number(240665000000),console.log("presidente Cristina")}
            else{ console.log('sin designación de presidencia')} ;

    localStorage.setItem("tipoDeMoneda",document.getElementById("input_tipoMoneda").value),
    tipoMoneda=localStorage.getItem("tipoDeMoneda");
    localStorage.setItem("ValorPeso",Number(document.getElementById("valor_delPeso").value)),
    valorPeso=localStorage.getItem("ValorPeso");
    localStorage.setItem("TipoBillete",Number(document.getElementById("input_denominacionBillete").value)),
    tipo_billetePesos=localStorage.getItem("TipoBillete");
    enPesos= localStorage.getItem("ValorPeso")/ localStorage.getItem("TipoBillete");

    

superficie_horizontalNeta_Pesos=Number(((deudaNeta * valorPeso)/ tipo_billetePesos )* 0.10075).toFixed(2)+" m2";

superficie_horizontalTotal_Pesos= Number(((deudaTotal * valorPeso)/ tipo_billetePesos) * 0.10075).toFixed(2) + "m2";

superficie_verticalNeta_Pesos= Number(((deudaNeta * valorPeso)/tipo_billetePesos) * 0.00000012).toFixed(2) ; 
superficie_verticalTotal_pesos= Number(((deudaTotal * valorPeso)/tipo_billetePesos) * 0.00000012).toFixed(2) + " km ";

superficie_horizontalNeta_1usd= Number(deudaNeta * 0.10338947064).toFixed(2) +" m2";
superficie_horizontalTotal_1usd= Number(deudaTotal * 0.10338947064).toFixed(2) + " m2";

superficie_verticalNeta_1usd= Number((deudaNeta/tipo_billetePesos) * 0.00000012).toFixed(2) ; 
superficie_verticalTotal_1usd=  Number(deudaTotal * 0.00000012).toFixed(2) + " km ";


}

function grafica(){document.getElementById("seccion-grafico").style.display="flex";
let akmpe= superficie_verticalNeta_Pesos ;
    

    if(document.getElementById("valor_delPeso").value>0){ document.getElementById("a-km-pe").style.height+=""+ akmpe /2 +"px"; document.getElementById("n-km-p").innerText=akmpe+ "km";
document.getElementById("a-km-usd").style.height=""+superficie_verticalNeta_1usd /2 + "px";document.getElementById("n-km-usd").innerText=superficie_verticalNeta_1usd+"km"};
document.getElementById("d1").innerText="usd$"+deudaNeta ;
document.getElementById("d2").innerText="usd$"+ deudaTotal ;
document.getElementById("d3").innerText=superficie_horizontalNeta_1usd ;
document.getElementById("d4").innerText= superficie_horizontalTotal_1usd;
document.getElementById("d5").innerText= superficie_verticalNeta_1usd+"km";
document.getElementById("d6").innerText= superficie_verticalTotal_1usd ;
document.getElementById("d7").innerText= superficie_horizontalNeta_Pesos;
document.getElementById("d8").innerText= superficie_horizontalTotal_Pesos;
document.getElementById("d9").innerText= superficie_verticalNeta_Pesos+"km";
document.getElementById("d10").innerText= superficie_verticalTotal_pesos;
}

    

function informar(){switch(document.getElementById("opcionPresidencias").value){
    case "Mauricio Macri":document.getElementById("informe").style.display="flex";document.getElementById("cara-presidente").src="./img/macri-sonrisa.png";grafica(); break;

    case "Cristina Fernandez de Kirchner": document.getElementById("informe").style.display="flex";document.getElementById("cara-presidente").src="./img/cristina-sonrisa.png";grafica();break;
    default:document.getElementById("informe").innerHTML="<p>"+ "sin información"+ "</p>" } 

    if (localStorage.getItem("tipoDeMoneda")=="dólar")
    {(document.getElementById ("pesos-a")).style.display="none";(document.getElementById ("pesos-b")).style.display="none";
    (document.getElementById ("dolar-a").style.display="flow-root");(document.getElementById ("dolar-b").style.display="flow-root")}
   

    else if( localStorage.getItem("tipoDeMoneda")=="pesos"){(document.getElementById ("dolar-a").style.display="none");(document.getElementById ("dolar-b").style.display="none");
    (document.getElementById ("pesos-a")).style.display="flow-root";(document.getElementById ("pesos-b")).style.display="flow-root"}
    
    else{ alert("seleccione el tipo de moneda")}
    
}

/*
function presidente( nombre, deudaNeta,deudaTotal,superficie_horizontalNeta_1usd, superficie_horizontalTotal_1usd,superficie_verticalNeta_1usd,superficie_verticalTotal_1usd, superficie_verticalTotal_1usd,superficie_horizontalNeta_Pesos,superficie_horizontalTotal_Pesos,superficie_verticalNeta_Pesos,superficie_verticalTotal_pesos,moneda,valorPeso,TipoBillete)
{ this.nombre= nombre, this.deudaNeta=deudaNeta, this.deudaTotal= deudaTotal,this.superficie_horizontalNeta_1usd=superficie_horizontalNeta_1usd,this.superficie_horizontalTotal_1usd=superficie_horizontalTotal_1usd,this.superficie_verticalNeta_1usd=superficie_verticalNeta_1usd,this.superficie_verticalTotal_1usd=superficie_verticalTotal_1usd,this.superficie_verticalNeta_Pesos=superficie_verticalNeta_Pesos,this.superficie_verticalTotal_pesos=superficie_verticalTotal_pesos,this.moneda=localStorage.getItem("tipoDeMoneda"),this.valorPeso=localStorage.getItem("ValorPeso"),this.TipoBillete=localStorage.getItem("TipoBillete")}

const Macri= new presidente( "Mauricio Macri",82400000000,323065000000,superficie_horizontalNeta_1usd,superficie_horizontalTotal_1usd,superficie_verticalNeta_1usd,superficie_verticalTotal_1usd,superficie_horizontalNeta_Pesos,superficie_horizontalTotal_Pesos,superficie_verticalNeta_Pesos,superficie_verticalTotal_pesos,tipoMoneda,valorPeso,TipoBillete);
const Cristina= new presidente("Cristina Fernandez de kirchner",75554000000,240665000000,superficie_horizontalNeta_1usd,superficie_horizontalTotal_1usd,superficie_verticalNeta_1usd,superficie_verticalTotal_1usd,superficie_horizontalNeta_Pesos,superficie_horizontalTotal_Pesos,superficie_verticalNeta_Pesos,superficie_verticalTotal_pesos,tipoMoneda,valorPeso,TipoBillete)

info[Cristina,Macri]*/
    /*document.getElementsByTagName("button").onclick= DATOS(), informar();*/
   