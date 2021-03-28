// deuda neta Macri 82.400 .000.000 usd
// deuda al final del mandato 323.065.000.000 usd

//deuda neta Cristina Kirchner 75.554.000.000 usd
//deuda al final del mandato 240.665.000.000 usd
// fuente Ministerio de finanzas,consultado 3/3/2021
//pfeizer 14.19  CNBG 40


let opcionPresidencias= document.getElementById("opcionPresidencias").value;

localStorage.setItem("presidente",opcionPresidencias);

localStorage.setItem("tipoDeVacuna",document.getElementById("input_tipoVacuna").value),
tipoVacuna=localStorage.getItem("tipoDeVacuna");

localStorage.setItem("ValorPeso",Number(document.getElementById("valor_delPeso").value)),
valorPeso=localStorage.getItem("ValorPeso");

// if(document.getElementById("input_tipoVacuna").value=="asignar")
//     ValorVacuna=document.getElementById("input_ValorVacuna").value
//      else ValorVacuna=localStorage.getItem("valorVacuna").value

// localStorage.setItem("valorVacuna",ValorVacuna);
function change(){
    if(document.getElementById("input_tipoVacuna").value=="asignar"){
        document.getElementById("input_ValorVacuna").style.display="flex";document.getElementById("fooValorVacuna").innerText="valor de vacuna usd$"}
         else if(document.getElementById("input_tipoVacuna").value=="pfeizer"){ ValorVacuna=14.19; document.getElementById("input_ValorVacuna").style.display="none";document.getElementById("fooValorVacuna").innerText="valor de vacuna usd$"+ValorVacuna}
         else if(document.getElementById("input_tipoVacuna").value=="cnbg"){ ValorVacuna=40;document.getElementById("input_ValorVacuna").style.display="none";document.getElementById("fooValorVacuna").innerText="valor de vacuna usd$"+ValorVacuna}
         else{document.getElementById("fooValorVacuna").innerText="valor de vacuna usd$"}
        }

document.getElementById("input_ValorVacuna").addEventListener('change', change())


const aplicadas= 3548656;
let censo= 44939000;

function DATOS(){
    localStorage.setItem("presidente",document.getElementById("opcionPresidencias").value);

    if(localStorage.getItem("presidente")=="Mauricio Macri"){
        console.log("presidente Mauricio");deudaNeta= Number (82400000000);deudaTotal=Number (323065000000)}
        else if (localStorage.getItem("presidente") =="Cristina Fernandez de Kirchner"){
            deudaNeta= Number(75554000000),deudaTotal= Number(240665000000),console.log("presidente Cristina")}
            else{ console.log('sin designación de presidencia')} ;

            localStorage.setItem("presidente",opcionPresidencias);

            localStorage.setItem("tipoDeVacuna",document.getElementById("input_tipoVacuna").value),
            tipoVacuna=localStorage.getItem("tipoDeVacuna");
            
            localStorage.setItem("ValorPeso",Number(document.getElementById("valor_delPeso").value)),
            valorPeso=localStorage.getItem("ValorPeso");
            
            function change(){
                if(document.getElementById("input_tipoVacuna").value=="asignar"){
                    document.getElementById("input_ValorVacuna").style.display="flex";document.getElementById("fooValorVacuna").innerText="valor de vacuna usd$"}
                     else if(document.getElementById("input_tipoVacuna").value=="pfeizer"){ ValorVacuna=14.19; document.getElementById("input_ValorVacuna").style.display="none";document.getElementById("fooValorVacuna").innerText="valor de vacuna usd$"+ValorVacuna}
                     else if(document.getElementById("input_tipoVacuna").value=="cnbg"){ ValorVacuna=40;document.getElementById("input_ValorVacuna").style.display="none";document.getElementById("fooValorVacuna").innerText="valor de vacuna usd$"+ValorVacuna}
                     else{document.getElementById("fooValorVacuna").innerText="valor de vacuna usd$"}
                    }
            
            document.getElementById("input_ValorVacuna").addEventListener('change', change())
            

            localStorage.setItem("valorVacuna",ValorVacuna);
        

dosis_deuda_neta=Number(deudaNeta/ValorVacuna).toFixed(1);
dosis_deuda_total=Number(deudaTotal/ValorVacuna).toFixed(1);

deuda_neta_pesos=Number(deudaNeta/valorPeso).toFixed(2);
deuda_total_pesos=Number(deudaTotal/valorPeso).toFixed(2);

}

function grafica(){document.getElementById("seccion-grafico").style.display="flex";
    document.getElementById("aplicadas_actuales").style.height=""+aplicadas *0.00001+"px";
    document.getElementById("personas").style.height=""+ censo*0.00001 + "px"; 

    if(document.getElementById("valor_delPeso").value>0){ document.getElementById("a-km-pe").style.height+=""+ dosis_deuda_neta *0.000001 +"px"; document.getElementById("n-km-p").innerText=(Number (dosis_deuda_neta)).toLocaleString("en-US")+ "dosis";
document.getElementById("a-km-usd").style.height=""+dosis_deuda_total *0.000001 + "px";document.getElementById("n-km-usd").innerText=(Number (dosis_deuda_total)).toLocaleString("en-US")+"dosis"};

document.getElementById("d1").innerText="usd$"+(Number(deudaNeta)).toLocaleString("en-US") ;
document.getElementById("d2").innerText="usd$"+ (Number(deudaTotal)).toLocaleString("en-US") ;
document.getElementById("d3").innerText= (Number(dosis_deuda_neta)).toLocaleString("en-US")+"dosis" ;
document.getElementById("d4").innerText= (Number (dosis_deuda_total)).toLocaleString("en-US")+"dosis";
document.getElementById("d5").innerText= "$"+(Number (deuda_neta_pesos)).toLocaleString("en-US");
document.getElementById("d6").innerText= "$"+(Number (deuda_total_pesos)).toLocaleString("en-US") ;
document.getElementById("aplicadasNumero").innerText= (Number (aplicadas)).toLocaleString("en-US") ;
document.getElementById("personas_N").innerText=(Number(censo)).toLocaleString("en-US") ;}

    

function informar(){switch(document.getElementById("opcionPresidencias").value){
    case "Mauricio Macri":document.getElementById("informe").style.display="flex";document.getElementById("cara-presidente").src="./img/macri-sonrisa.png";grafica(); break;

    case "Cristina Fernandez de Kirchner": document.getElementById("informe").style.display="flex";document.getElementById("cara-presidente").src="./img/cristina-sonrisa.png";grafica();break;
    default:document.getElementById("informe").innerHTML="<p>"+ "sin información"+ "</p>" } 
    
}

/*
function presidente( nombre, deudaNeta,deudaTotal,superficie_horizontalNeta_1usd, superficie_horizontalTotal_1usd,superficie_verticalNeta_1usd,superficie_verticalTotal_1usd, superficie_verticalTotal_1usd,superficie_horizontalNeta_Pesos,superficie_horizontalTotal_Pesos,superficie_verticalNeta_Pesos,superficie_verticalTotal_pesos,moneda,valorPeso,TipoBillete)
{ this.nombre= nombre, this.deudaNeta=deudaNeta, this.deudaTotal= deudaTotal,this.superficie_horizontalNeta_1usd=superficie_horizontalNeta_1usd,this.superficie_horizontalTotal_1usd=superficie_horizontalTotal_1usd,this.superficie_verticalNeta_1usd=superficie_verticalNeta_1usd,this.superficie_verticalTotal_1usd=superficie_verticalTotal_1usd,this.superficie_verticalNeta_Pesos=superficie_verticalNeta_Pesos,this.superficie_verticalTotal_pesos=superficie_verticalTotal_pesos,this.moneda=localStorage.getItem("tipoDeMoneda"),this.valorPeso=localStorage.getItem("ValorPeso"),this.TipoBillete=localStorage.getItem("TipoBillete")}

const Macri= new presidente( "Mauricio Macri",82400000000,323065000000,superficie_horizontalNeta_1usd,superficie_horizontalTotal_1usd,superficie_verticalNeta_1usd,superficie_verticalTotal_1usd,superficie_horizontalNeta_Pesos,superficie_horizontalTotal_Pesos,superficie_verticalNeta_Pesos,superficie_verticalTotal_pesos,tipoMoneda,valorPeso,TipoBillete);
const Cristina= new presidente("Cristina Fernandez de kirchner",75554000000,240665000000,superficie_horizontalNeta_1usd,superficie_horizontalTotal_1usd,superficie_verticalNeta_1usd,superficie_verticalTotal_1usd,superficie_horizontalNeta_Pesos,superficie_horizontalTotal_Pesos,superficie_verticalNeta_Pesos,superficie_verticalTotal_pesos,tipoMoneda,valorPeso,TipoBillete)

info[Cristina,Macri]
   */