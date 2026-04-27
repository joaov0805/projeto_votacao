const votos = {
    "Luana Gonçalves": 35,
    "Manoela Pessanha": 25,
    "Alessandra Pereira": 15,
    "Alice Reino": 10
};

// Converte para arrays
const nomes = Object.keys(votos);
const quantidade = Object.values(votos);

// Contexto correto do canvas
const ctx = document
    .getElementById("graficoResultados")
    .getContext("2d");

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: nomes,
        datasets: [{
            data: quantidade,
            backgroundColor: [
                '#ff9999',
                '#66b3ff',
                '#99ff99',
                '#ffcc99'
            ]
        }]
    },
    options: {
        responsive: true
    }
});