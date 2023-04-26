function cambiarContenido(){
    let fila = parseInt(prompt('Ingrese el número de la fila:', 1));
    let columna = parseInt(prompt('Ingrese el número de la columna:', 1));
  
    if ((fila >= 2 && fila <= 16) && (columna >= 2 && columna <= 7)) {
      let celdas = document.getElementById('horario').rows[fila - 1].cells;
      celdas[columna - 1].innerHTML = prompt('Ingrese una nueva actividad:');
    }
  }