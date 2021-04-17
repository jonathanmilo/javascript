
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
  
//aplica cambios al Storage según tipo de vacuna.
$("#input_ValorVacuna").change(
        ()=>{
            ValorVacuna= $("#input_ValorVacuna").val();
             localStorage.setItem("valorVacuna",ValorVacuna);
            }
        );
let aplicadas= 1;
//http://datos.gob.ar/api/3/action/package_show?id=<id_del_dataset>
//https://sisa.msal.gov.ar/datos/descargas/covid-19/files/Covid19VacunasAgrupadas.csv.zip
$.getJSON(src="./1.json", (response, status)=> {
    if (status === "success") {
            let contenido = response;
            console.log(contenido) 
                for (let i in contenido) {    
                        aplicadas = contenido[i].apli;
                }
    } else {
          console.log("error al leer el json")
    }
    });
let dolarBluePrecio = 0; let dolarBlueNombre = '';let valorPeso=0;
    //creating a new object by AJAX calling 
$.ajax({ method: "GET", url: "https://www.dolarsi.com/api/api.php?type=valoresprincipales", }).done((data) => { 
         dolarBluePrecio = data[1].casa.compra 
         dolarBlueNombre = data[1].casa.nombre 
         valorPeso=parseInt(dolarBluePrecio)
        ;})
         .fail((error) => { console.log(error); }); 
 valorPeso = dolarBluePrecio;
 localStorage.setItem("ValorPeso",parseInt(dolarBluePrecio));
        console.log(valorPeso)
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
    deuda_neta_pesos=Number(deudaNeta*Number(valorPeso)).toFixed(2);
    deuda_total_pesos=Number(deudaTotal*Number(valorPeso)).toFixed(2);

    var info= [ opcionPresidencias, deudaNeta ,deudaTotal, valorPeso,tipoVacuna, ValorVacuna,deuda_neta_pesos,deuda_total_pesos,dosis_deuda_neta,dosis_deuda_total];
    localStorage.setItem("info", JSON.stringify(info))
    console.log( JSON.parse(localStorage.getItem('info')))
}   

//aplica datos a la grafica
function grafica(){
   
    $("#seccion-grafico").css("display","flex");
    $("#personas").css("height",""+censo *0.000002+"px"+""); 
  
    
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



    //funciones gráficas
$("#slide1").css("display","none")
$(".bot").click (()=>{
    $("#valorpesoinformado").text("actual valor del dolar blue "+"$"+valorPeso);
     $(".mensaje").fadeOut("slow"),$("#slide1").fadeIn("slow")
    });
$('#gr').change(function(){
//$(".change").classList.toggle("red")
     if($(this).is(":checked")) {
        $('.change').addClass('red'),
        $("#d1,#d2,#d3,#d4,#d5,#d6 ").css("color","black")
    } else {
        $('.change').removeClass('red',20000),
        $("#d1,#d2,#d3,#d4,#d5,#d6").css("color"," rgb(223, 221, 219)")
    } 
});