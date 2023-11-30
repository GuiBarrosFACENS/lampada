const consumoBanheiro = 0; // Começa com consumo zero
const consumoQuarto = 0;   // Começa com consumo zero
const consumoSala = 0;    // Começa com consumo zero
const consumoCozinha = 0; // Começa com consumo zero

// Configurações iniciais do gráfico
const configBanheiro = {
    type: 'bar',
    data: {
        labels: ['Banheiro'],
        datasets: [{
            label: 'Consumo (kWh/h)',
            data: [consumoBanheiro],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const configSala = {
    type: 'bar',
    data: {
        labels: ['Sala'],
        datasets: [{
            label: 'Consumo (kWh/h)',
            data: [consumoSala],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const configQuarto = {
    type: 'bar',
    data: {
        labels: ['Quarto'],
        datasets: [{
            label: 'Consumo (kWh/h)',
            data: [consumoQuarto],
            backgroundColor: 'rgba(255, 206, 86, 0.6)', 
            borderColor: 'rgba(255, 206, 86, 1)', 
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};


const configCozinha = {
    type: 'bar',
    data: {
        labels: ['Cozinha'],
        datasets: [{
            label: 'Consumo (kWh/h)',
            data: [consumoCozinha],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Renderizar os gráficos vazios inicialmente
const ctxBanheiro = document.getElementById('graficoBanheiro').getContext('2d');
const chartBanheiro = new Chart(ctxBanheiro, configBanheiro);

const ctxQuarto = document.getElementById('graficoQuarto').getContext('2d');
const chartQuarto = new Chart(ctxQuarto, configQuarto);

const ctxSala = document.getElementById('graficoSala').getContext('2d');
const chartSala = new Chart(ctxSala, configSala);

const ctxCozinha = document.getElementById('graficoCozinha').getContext('2d');
const chartCozinha = new Chart(ctxCozinha, configCozinha);


function updateGraficoBanheiro() {
    const novoConsumo = 0.3; 
    configBanheiro.data.datasets[0].data = [novoConsumo];
    chartBanheiro.update();
}

function resetGraficoBanheiro() {
    const valorPadrao = 0;
    configBanheiro.data.datasets[0].data = [valorPadrao];
    chartBanheiro.update();
}

function updateGraficoQuarto() {
    const novoConsumo = 0.5; 
    configQuarto.data.datasets[0].data = [novoConsumo];
    chartQuarto.update();
}

function resetGraficoQuarto() {
    const valorPadrao = 0;
    configQuarto.data.datasets[0].data = [valorPadrao];
    chartQuarto.update();
}


function updateGraficoLed() {
    const novoConsumo = 0.5; 
    configSala.data.datasets[0].data = [novoConsumo];
    chartSala.update();
}

function resetGraficoLed() {
    const valorPadrao = 0;
    configSala.data.datasets[0].data = [valorPadrao];
    chartSala.update();
}

function updateGraficoLed2() {
    const novoConsumo = 0.5; 
    configCozinha.data.datasets[0].data = [novoConsumo];
    chartCozinha.update();
}

function resetGraficoLed2() {
    const valorPadrao = 0;
    configCozinha.data.datasets[0].data = [valorPadrao];
    chartCozinha.update();
}