let votoBranco = false;

//clicar em candidato
document.querySelectorAll(".candidato").forEach(botao => {
    botao.addEventListener('click', () => {
            
        votoBranco = false;
        
    document.getElementById('numero').textContent = botao.dataset.numero;
    document.getElementById('nome').textContent = botao.dataset.nome;
    document.getElementById('cargo').textContent = botao.dataset.cargo;
    document.getElementById('foto').src = botao.dataset.foto;
    document.querySelector('.candidato-foto').style.display = 'block';

    });
});

//Botão BRANCO
document.getElementById('btn-branco').addEventListener('click', () => {
   
    votoBranco = true;
   
    document.getElementById('numero').textContent = "";
    document.getElementById('nome').textContent = "VOTO EM BRANCO";
    document.getElementById('cargo').textContent = "";

    document.querySelector(".candidato-foto").style.display = "none"
})

//BOTÃO CONFIRMA
document.getElementById('btn-confirmar').addEventListener('click', () => {
    
    const nome = document.getElementById("nome").textContent;

    if (nome === ""){
        alert("Escolha um cadidato ou vote em branco!");
        
    }
        window.location.href = "conselheiro.html"
       
   
})