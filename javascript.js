function mostrarMenu() {
  if(document.getElementById("indice").style.left!="0%") {
      
      document.getElementById("indice").style.left="0%";
      document.getElementById("tituloMenu").style.opacity="0";
      document.getElementById("paginaPrincipal").style.left="15.2%";
      document.getElementById("paginaPrincipal").style.width="83%";
      document.getElementById("cabecera").style.left="15.2%";
      
      
      document.getElementById("tituloMenu").style.cursor = "default";
  }
}
function ocultarMenu() {
  if(document.getElementById("indice").style.left=="0%"){
      document.getElementById("indice").style.left="-303px";
      document.getElementById("tituloMenu").style.opacity="1";
      document.getElementById("paginaPrincipal").style.left="0";
      document.getElementById("paginaPrincipal").style.width="100%";
      document.getElementById("cabecera").style.left="0";
      
      document.getElementById("tituloMenu").style.cursor = "pointer";
  }
}
function mostrarIndice() {
  if(document.getElementById("listaIndice").style.display!="block"){
      document.getElementById("listaIndice").style.display="block";
  }else{
      document.getElementById("listaIndice").style.display="none";
  }
}
function mostrarEnlaces(){
  if(document.getElementById("listaEnlaces").style.display!="block"){
      document.getElementById("listaEnlaces").style.display="block";
  }else{
      document.getElementById("listaEnlaces").style.display="none";
  }
}
function foto(){
    document.getElementById("foto").style.display="none";
}
