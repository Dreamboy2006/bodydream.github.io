function calcular() {
  
    var altCentimetros = parseInt(document.getElementById('altura').value);
    var altMetros = altCentimetros / 100;
    var kilos = parseInt(document.getElementById('peso').value);
  
    var imc = Math.round(kilos / (altMetros * altMetros));
    var clasificacion;
    
    if (imc < 18.5) {
      clasificacion = 'estás muy delgado';
    } else if (imc < 25) {
      clasificacion = 'estás saludable';
    } else {
      clasificacion = 'tienes sobrepeso';
    }
   
    resultado.innerHTML = 'Hola, tu IMC es ' + imc + ',  ' + clasificacion;
    
  }