// deuda neta Macri 82.400 .000.000 usd
// deuda al final del mandato 323.065.000.000 usd

//deuda neta Cristina Kirchner 75.554.000.000 usd
//deuda al final del mandato 240.665.000.000 usd
// fuente Ministerio de finanzas,consultado 3/3/2021
//pfeizer 14.19  CNBG 40

let opcionPresidencias = $("#opcionPresidencias").val();
localStorage.setItem("presidente",opcionPresidencias);
$("#opcionPresidencias").change(()=>{
    opcionPresidencias = $("#opcionPresidencias").val();
    localStorage.setItem("presidente",opcionPresidencias);
   // localStorage.setItem("presidente", JSON.stringify(opcionPresidencias)); 
})
localStorage.setItem("tipoDeVacuna",($("#input_tipoVacuna").val())),
tipoVacuna=localStorage.getItem("tipoDeVacuna");

switch( $("#input_tipoVacuna").val()){
    case "asignar":$("#input_ValorVacuna").css("display","flex");$("#fooValorVacuna").text("valor de vacuna usd$");ValorVacuna= $("#input_ValorVacuna").val(); localStorage.setItem("tipoDeVacuna",tipoVacuna); localStorage.setItem("valorVacuna",ValorVacuna); break;
    case "pfeizer": ValorVacuna=14.19;$("#input_ValorVacuna").css("display","none");$("#fooValorVacuna").text("valor de vacuna usd$"+""+ValorVacuna+"");localStorage.setItem("tipoDeVacuna",tipoVacuna);localStorage.setItem("valorVacuna",ValorVacuna); break;
    case "cnbg": ValorVacuna=40;$("#input_ValorVacuna").css("display","none");$("#fooValorVacuna").text("valor de vacuna usd$"+""+ValorVacuna+"");localStorage.setItem("tipoDeVacuna",tipoVacuna);localStorage.setItem("valorVacuna",ValorVacuna);break;    }

$("#input_tipoVacuna").change(()=>{
 
    for(i=0;i<2;i++)
    {switch( $("#input_tipoVacuna").val()){
        case "asignar":$("#input_ValorVacuna").css("display","flex");$("#fooValorVacuna").text("valor de vacuna usd$");ValorVacuna= $("#input_ValorVacuna").val(); localStorage.setItem("tipoDeVacuna",tipoVacuna); localStorage.setItem("valorVacuna",ValorVacuna); break;
        case "pfeizer": ValorVacuna=14.19;$("#input_ValorVacuna").css("display","none");$("#fooValorVacuna").text("valor de vacuna usd$"+""+ValorVacuna+"");localStorage.setItem("tipoDeVacuna",tipoVacuna);localStorage.setItem("valorVacuna",ValorVacuna); break;
        case "cnbg": ValorVacuna=40;$("#input_ValorVacuna").css("display","none");$("#fooValorVacuna").text("valor de vacuna usd$"+""+ValorVacuna+"");localStorage.setItem("tipoDeVacuna",tipoVacuna);localStorage.setItem("valorVacuna",ValorVacuna);break;    }
    }})
  //  localStorage.setItem("tipoDeVacuna",JSON.stringify(tipoVacuna));
  
    
    localStorage.setItem("ValorPeso",($("#valor_delPeso").val()));
    valorPeso=localStorage.getItem("ValorPeso");
    $("#valor_delPeso").change(()=>{ 
         valorPeso=$("#valor_delPeso").val();
        localStorage.setItem("ValorPeso",valorPeso);
  //  localStorage.setItem("ValorPeso",Json.stringify(valorPeso))
         });

$("#input_ValorVacuna").change(
    ()=>{
    ValorVacuna= $("#input_ValorVacuna").val();
    localStorage.setItem("valorVacuna",ValorVacuna);
    }
);
const aplicadas= 3548656;
let censo= 44939000;

function DATOS(){
    
    if(localStorage.getItem("presidente")=="Mauricio Macri"){
        console.log("presidente Mauricio");deudaNeta= Number (82400000000);deudaTotal=Number (323065000000)}
        else if (localStorage.getItem("presidente") =="Cristina Fernandez de Kirchner"){
            deudaNeta= Number(75554000000),deudaTotal= Number(240665000000),console.log("presidente Cristina")}
            else{ console.log('sin designación de presidencia')} ;
            localStorage.setItem("presidente",opcionPresidencias);
    

    dosis_deuda_neta=Number(deudaNeta/ValorVacuna).toFixed(1);
    dosis_deuda_total=Number(deudaTotal/ValorVacuna).toFixed(1);

    deuda_neta_pesos=Number(deudaNeta/valorPeso).toFixed(2);
    deuda_total_pesos=Number(deudaTotal/valorPeso).toFixed(2);
}

function grafica(){$("#seccion-grafico").css("display","flex");
   $("#aplicadas_actuales").css("height",""+aplicadas* 0.00001+"px"+"");
   $("#personas").css("height",""+censo *0.00001+"px"+""); 
  
    if($("#valor_delPeso").val()>0){ $("#a-km-pe").css("height",""+dosis_deuda_neta * 0.000001+ "px"+"");$("#n-km-p").text(""+Number((dosis_deuda_neta)).toLocaleString("en-US")+ "dosis"+""); 
    $("#a-km-usd").css("height",""+dosis_deuda_total * 0.000001+"px"+"");$("#n-km-usd").text(""+(Number(dosis_deuda_total)).toLocaleString("en-US")+"dosis"+"")};


    $("#d1").text(""+"usd"+(Number(deudaNeta)).toLocaleString("en-US")+"");
    $("#d2").text(""+"usd"+(Number(deudaTotal)).toLocaleString("en-US")+"");
    $("#d3").text(""+(Number(dosis_deuda_neta)).toLocaleString("en-US")+"dosis"+"");
    $("#d4").text(""+(Number(dosis_deuda_total)).toLocaleString("en-US")+"dosis"+"");
    $("#d5").text(""+"$"+(Number(deuda_neta_pesos)).toLocaleString("en-US")+"");
    $("#d6").text(""+"$"+(Number(deuda_total_pesos)).toLocaleString("en-US")+"");
    $("#aplicadasNumero").text(""+(Number(aplicadas)).toLocaleString("en-US")+"");
    $("#personas_N").text(""+(Number(censo)).toLocaleString("en-US")+"");}




function informar(){switch($("#opcionPresidencias").val()){
    case "Mauricio Macri":$("#informe").css("display","flex");$("#cara-presidente").attr("src","./img/macri-sonrisa.png");grafica(); break;

    case "Cristina Fernandez de Kirchner": document.getElementById("informe").style.display="flex";$("#cara-presidente").attr("src","./img/cristina-sonrisa.png");grafica();break;
    default:$("#informe").html("<p>"+ "sin información"+ "</p>")} 
   // document.getElementById("informe").innerHTML="<p>"+ "sin información"+ "</p>"
}
