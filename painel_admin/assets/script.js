const votos = {
    presidente: {
        "Luana Gonçalves": 9,
        "Manoela Pessanha": 12
    },
    vice: {
        "Carlos Silva": 2,
        "Ana Ribeiro": 5
    },
    conselheiro: {
        "Katia Mendes": 18,
        "Thaise": 22,
        "Rafael": 10
    },
    tesoureiro: {
        "João Lima": 40,
        "Paula Reis": 15
    }
};
// Converte para arrays
let grafico;
function carregarGrafico(cargoSelecionado){
    const dados = votos[cargoSelecionado];
    const nomes = Object.keys(dados);
    const valores = Object.values(dados);
    const total = valores.reduce((soma,v) => soma + v, 0);

    

const ctx = document
    .getElementById("graficoResultados")
    .getContext("2d");

    if(grafico){
        grafico.destroy();
    }

grafico = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: nomes,
        datasets: [{
            data: valores,
            backgroundColor: [
                '#006928',
                '#66b3ff',
                '#f3a557'
            ]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins:{
            legend:{
                position: 'bottom'
            },
            datalabels:{
                color:"#000000",
                font:{
                    weight:"bold",
                    size: 14
                },
                formatter: (valor) => {
                    const porcentagem = (valor / total) * 100;
                    return porcentagem.toFixed(1) + "%";
                }
            }
        }
    },
    plugins: [ChartDataLabels]
});
}

//troca ao selecionar
document.getElementById('selecionarCargo').addEventListener('change', function(){
    carregarGrafico(this.value);
});

carregarGrafico('presidente')



//EXPORTAR
document.getElementById("btnExportar").addEventListener("click", exportarCSV);

function exportarCSV(){
    let csv = "Cargo, Candidato, Votos\n";

    for(let cargo in votos){
        for (let Candidato in votos[cargo]){
            csv += `${cargo}, ${Candidato}, ${votos[cargo][Candidato]}\n`;
        }
    }
    const blob = new Blob([csv],{typec:"text/csv;charset=utf-8;"});
    const URL = window.URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = URL;
    link.download = "resultado_votacao.csv";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}