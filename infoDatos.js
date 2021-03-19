function presidente( nombre, deudaNeta,deudaTotal,superficie_horizontalNeta_Pesos, superficie_horizontalNeta_1usd,)
{ this.nombre= nombre, this.deudaNeta=deudaNeta, this.deudaTotal= deudaTotal,this.superficie_horizontalNeta_Pesos=superficie_horizontalNeta_Pesos, this.superficie_horizontalNeta_1usd=superficie_horizontalNeta_1usd }

const Macri= new presidente( "Mauricio Macri",82400000000,323065000000,superficie_horizontalNeta_Pesos,superficie_horizontalNeta_1usd );
const Cristina= new presidente("Cristina Fernandez de kirchner",75554000000,240665000000,superficie_horizontalNeta_Pesos,superficie_horizontalNeta_1usd)

ArrayPresidentes=[ Macri,Cristina ];
