
function cetropresidencial (presidente,deudaNeta,deudaTotal){
    this.presidente=presidente;
    this.deudaNeta=deudaNeta ;
    this.deudaTotal=deudaTotal }

    const macri= new cetropresidencial( "Mauricio Macri",82400000000,323065000000)
    const cfk= new cetropresidencial( "Cristina Fernandez de kirchner",75554000000,240665000000)


let opcionPresidencias = $("#opcionPresidencias").val();
//aplicar cambios en el storage, según opción presidente

localStorage.setItem("presidente",opcionPresidencias)
    $("#opcionPresidencias").change(()=>{
         opcionPresidencias = $("#opcionPresidencias").val(),
        localStorage.setItem("presidente",opcionPresidencias)
     })

//aplicar cambios en el storage, según opción de vacuna
localStorage.setItem("tipoDeVacuna",($("#input_tipoVacuna").val()))
tipoVacuna=localStorage.getItem("tipoDeVacuna")

    switch( $("#input_tipoVacuna").val()){
        case "asignar":$("#input_ValorVacuna").css("display","flex"),
                $("#fooValorVacuna").text("valor de vacuna usd$"),
                ValorVacuna= $("#input_ValorVacuna").val(),
                localStorage.setItem("tipoDeVacuna",tipoVacuna),
                localStorage.setItem("valorVacuna",ValorVacuna);
                 break;
        case "pfeizer": ValorVacuna=14.19,
                $("#input_ValorVacuna").css("display","none"),
                $("#fooValorVacuna").text("valor de vacuna usd$"+""+ValorVacuna+""),
                localStorage.setItem("tipoDeVacuna",tipoVacuna),
                localStorage.setItem("valorVacuna",ValorVacuna);
                 break;
        case "cnbg": ValorVacuna=40,
                $("#input_ValorVacuna").css("display","none"),
                $("#fooValorVacuna").text("valor de vacuna usd$"+""+ValorVacuna+""),
                localStorage.setItem("tipoDeVacuna",tipoVacuna),
                localStorage.setItem("valorVacuna",ValorVacuna);
                break; 
     }

$("#input_tipoVacuna").change(()=>{
     for(i=0;i<2;i++)
        {switch( $("#input_tipoVacuna").val()){
            case "asignar":$("#input_ValorVacuna").css("display","flex"),
                    $("#fooValorVacuna").text("valor de vacuna usd$"),
                    ValorVacuna= $("#input_ValorVacuna").val(),
                    localStorage.setItem("tipoDeVacuna",tipoVacuna),
                    localStorage.setItem("valorVacuna",ValorVacuna); 
                break;
            case "pfeizer": ValorVacuna=14.19,
                    $("#input_ValorVacuna").css("display","none"),
                    $("#fooValorVacuna").text("valor de vacuna usd$"+""+ValorVacuna+""),
                    localStorage.setItem("tipoDeVacuna",tipoVacuna),
                    localStorage.setItem("valorVacuna",ValorVacuna);
               break;
            case "cnbg": ValorVacuna=40,
                    $("#input_ValorVacuna").css("display","none"),
                    $("#fooValorVacuna").text("valor de vacuna usd$"+""+ValorVacuna+""),
                    localStorage.setItem("tipoDeVacuna",tipoVacuna),
                    localStorage.setItem("valorVacuna",ValorVacuna);
                break;    }
        }})
  //aplica cambios según opción de valor del peso.
    localStorage.setItem("ValorPeso",($("#valor_delPeso").val()));
    valorPeso=localStorage.getItem("ValorPeso");
        $("#valor_delPeso").change(()=>{ 
             valorPeso=$("#valor_delPeso").val();
            localStorage.setItem("ValorPeso",valorPeso);
         });
//aplica cambios al Storage según tipo de vacuna.
$("#input_ValorVacuna").change(
        ()=>{
            ValorVacuna= $("#input_ValorVacuna").val();
             localStorage.setItem("valorVacuna",ValorVacuna);
            }
        );
let aplicadas= 1;
$.getJSON("/1.json", (response, status)=> {
    if (status === "success") {
            let contenido = response;
            console.log(contenido) 
                for (let i in contenido) {    
                    let  valorPeso =contenido.valorPeso;
                        aplicadas = contenido[i].apli;
                        
                }
    } else {
          console.log("error al leer el json")
    }
    })   
let censo= 44939000;
//aplica funciones a todos los datos
function DATOS(){
    $(".ir").css("display","flex");  
   
            if(localStorage.getItem("presidente")=="Mauricio Macri"){
                    console.log(macri.presidente),
                    deudaNeta= macri.deudaNeta,
                    deudaTotal=macri.deudaTotal}
            else if (localStorage.getItem("presidente") =="Cristina Fernandez de Kirchner"){
                        deudaNeta= cfk.deudaNeta,
                        deudaTotal= cfk.deudaTotal,
                        console.log(cfk.presidente ,)}
            else{ console.log('sin designación de presidencia')} ;
    localStorage.setItem("presidente",opcionPresidencias);
    

    dosis_deuda_neta=Number(deudaNeta/ValorVacuna).toFixed(1);
    dosis_deuda_total=Number(deudaTotal/ValorVacuna).toFixed(1);
    deuda_neta_pesos=Number(deudaNeta*valorPeso).toFixed(2);
    deuda_total_pesos=Number(deudaTotal*valorPeso).toFixed(2);

    var info= [ opcionPresidencias, deudaNeta ,deudaTotal, valorPeso,tipoVacuna, ValorVacuna,deuda_neta_pesos,deuda_total_pesos,dosis_deuda_neta,dosis_deuda_total];
    localStorage.setItem("info", JSON.stringify(info))
    console.log( JSON.parse(localStorage.getItem('info')))
}   

//aplica datos a la grafica
function grafica(){
   
    $("#seccion-grafico").css("display","flex");
    $("#personas").css("height",""+censo *0.000002+"px"+""); 
  
    if($("#valor_delPeso").val()>0){
         $("#a-km-pe").css("height",""+dosis_deuda_neta * 0.00000005+ "px"+""),
         $("#n-km-p").text(""+Number((dosis_deuda_neta)).toLocaleString("en-US")+ "dosis"+""); 
         $("#a-km-usd").css("height",""+dosis_deuda_total * 0.00000002+"px"+""),
         $("#n-km-usd").text(""+(Number(dosis_deuda_total)).toLocaleString("en-US")+"dosis"+"");
         $("#aplicadas_actuales").css("height",""+aplicadas* 0.000009+"px"+"");
        $("#d1").text(""+"usd"+(Number(deudaNeta)).toLocaleString("en-US")+"");
        $("#d2").text(""+"usd"+(Number(deudaTotal)).toLocaleString("en-US")+"");
        $("#d3").text(""+(Number(dosis_deuda_neta)).toLocaleString("en-US")+"dosis"+"");
        $("#d4").text(""+(Number(dosis_deuda_total)).toLocaleString("en-US")+"dosis"+"");
        $("#d5").text(""+"$"+(Number(deuda_neta_pesos)).toLocaleString("en-US")+"");
        $("#d6").text(""+"$"+(Number(deuda_total_pesos)).toLocaleString("en-US")+"");
        $("#aplicadasNumero").text(""+(Number(aplicadas)).toLocaleString("en-US")+"");
        $("#personas_N").text(""+(Number(censo)).toLocaleString("en-US")+"");
    };

}

function informar(){switch($("#opcionPresidencias").val()){
    case "Mauricio Macri":$("#informe").css("display","flex");
             $("#cara-presidente").attr("src","./img/macri-sonrisa.png");
        grafica();
     break;
    case "Cristina Fernandez de Kirchner": document.getElementById("informe").style.display="flex";
            $("#cara-presidente").attr("src","./img/cristina-sonrisa.png")
        ;grafica();break;
    default:$("#informe").html("<p>"+ "sin información"+ "</p>")} 
};

//const TOKEN_AUTH = 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDk2ODQzODIsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJqb25hdGhhbm1heWFuQGdtYWlsLmNvbSJ9.P90GEetQRc5JVlnVdLtPu-HF2p9bDuRa5gmtcdiX424QgXNP4fQR43hKbD1CfrZY99RFkknVwvJnw6LdmwgYgQ'
/* $("#slide1").click(()=> leerApi())
function leerApi() {
    $.ajax({
        url: 'https://api.estadisticasbcra.com/usd_of',
        type: 'GET',
        headers: {Authorization: $`Bearer ${TOKEN_AUTH}`},
        
        success: function (data) {
            let cantenidoJson = data;
            console.table(cantenidoJson)
        },
        error: function () {
            alert("Hubo un error");
            console.error("Error al leer la API");
        }
    })} 
    api2= "https://api-dolar-argentina.herokuapp.com/"*/

    //funciones gráficas
$("#slide1").css("display","none")
$(".bot").click (()=>{
     $(".mensaje").fadeOut("slow"),$("#slide1").fadeIn("slow")
    });
$('#gr').change(function(){
    if($(this).is(":checked")) {
        $('.change').addClass('red'),
        $("#d1,#d2,#d3,#d4,#d5,#d6 ").css("color","black")
    } else {
        $('.change').removeClass('red'),
        $("#d1,#d2,#d3,#d4,#d5,#d6").css("color"," rgb(223, 221, 219)")
    }
});