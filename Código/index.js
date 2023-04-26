function temporizador(){
    let inicio = parseInt(prompt('Ingrese el intervalo de tiempo', 25));

    let tiempo = inicio * 60;

    const tem = document.getElementById('tem');

    setInterval(f, 1000);

    function f(){
        const minutos = Math.floor(tiempo/60);
        let segundos = tiempo % 60;

        segundos = segundos < 10 ? '0' + segundos : segundos;

        tem.innerHTML = `${minutos}:${segundos}`;
        tiempo--;
    }
}


