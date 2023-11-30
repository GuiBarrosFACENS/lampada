function toggleLampada(id) {
    var lampada = document.getElementById(id);
    if (id === 'banheiro') {
        if (lampada.src.endsWith('fluorecente.jpg')) {
            lampada.src = './img/fluorecente/fluorecenteAcessa.jpg'; 
            updateGraficoBanheiro();
        } else {
            lampada.src = './img/fluorecente/fluorecente.jpg';
            resetGraficoBanheiro();
        }
    }else if(id == 'quarto'){
        if (lampada.src.endsWith('incandecente.jpg')) {
            updateGraficoQuarto();
            lampada.src = './img/incandecente/incandecenteAcessa.jpg'; 
        } else {
            resetGraficoQuarto();
            lampada.src = './img/incandecente/incandecente.jpg';
        }
    }else if(id == 'sala'){
        if (lampada.src.endsWith('led.jpg')) {
            lampada.src = './img/led/ledAcessa.jpg'; 
            updateGraficoLed();
        } else {
            resetGraficoLed();
            lampada.src = './img/led/led.jpg';
        }
    }else{
        if (lampada.src.endsWith('led.jpg')) {
            lampada.src = './img/led/ledAcessa.jpg'; 
            updateGraficoLed2();
        } else {
            lampada.src = './img/led/led.jpg';
            resetGraficoLed2();
        }
    }
}