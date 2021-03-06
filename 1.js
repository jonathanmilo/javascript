// deuda neta Macri 82.400 .000.000 usd
// deuda al final del mandato 323.065.000.000 usd

//deuda neta Cristina Kirchner 75.554.000.000 usd
//deuda al final del mandato 240.665.000.000 usd
// fuente Ministerio de finanzas,consultado 3/3/2021
let opcionPresidencias= document.getElementById("opcionPresidencias").value;

if (opcionPresidencias =="Mauricio Macri"){ console.log("presidente Mauricio")
    deudaNeta= Number (82400000000),deudaTotal=Number (323065000000)}
else if (opcionPresidencias =="Cristina Fernandez de Kirchner"){
    deudaNeta= Number(75554000000),deudaTotal= Number(240665000000),console.log("presidente Cristina")
}else{ console.log('sin designación de presidencia')}

   
let valorPeso= Number(document.getElementById("valor_delPeso").value);
let tipo_billetePesos= Number(document.getElementById("input_denominacionBillete").value);
let enPesos= valorPeso / tipo_billetePesos ;

info_deudaNeta= deudaNeta;
info_deudaTotal= deudaTotal

superficie_horizontalNeta_Pesos= deudaNeta * enPesos * 0.10075+" m2";
superficie_horizontalTotal_Pesos= deudaTotal * enPesos * 0.10075 + "m2";

superficie_verticalNeta_Pesos= deudaNeta * enPesos * 0.002 + " metros de altura";
superficie_verticalTotal_pesos= deudaTotal * enPesos * 0.002 + " metros de altura";

superficie_hotizontalNeta_1usd= deudaNeta * 0.10338947064 +" m2";
superficie_horizontalTotal_1usd= deudaTotal * 0.10338947064 + " m2";

superficie_verticalNeta_1usd= deudaNeta * 0.002 + " metros de altura";
superficie_verticalTotal_1usd= deudaTotal * 0.002 + " metros de altura";

let tipoMoneda= (document.getElementById("input_tipoMoneda"));

let mensaje= document.getElementById("campo_Informe") 



function infoDatos() {
    
    switch (tipoMoneda.value) {
        case "pesos": dato =superficie_horizontalNeta_Pesos+""+superficie_horizontalTotal_Pesos +""+superficie_verticalNeta_Pesos + ""+ superficie_verticalTotal_pesos
            break

        case "dólar": dato = superficie_horizontalTotal_1usd+""+superficie_hotizontalNeta_1usd + ""+ superficie_verticalNeta_1usd + ""+ superficie_verticalTotal_1usd
            break

        case "asignar":dato = info_deudaNeta + ""+ info_deudaTotal
            break

        default: dato = info_deudaNeta + ""+ deudaTotal
    }
    alert( opcionPresidencias + dato)
};

 