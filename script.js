let tema = document.getElementById("tema");

tema.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

document.getElementById("calcular").addEventListener("click", () => {

    let agua = Number(document.getElementById("agua").value);
    let solo = Number(document.getElementById("solo").value);
    let energia = Number(document.getElementById("energia").value);
    let preservacao = Number(document.getElementById("preservacao").value);

    let total = agua + solo + energia + preservacao;

    let mensagem = "";

    if(total >= 100){
        mensagem = `
        🌱 Fazenda Verde<br>
        Excelente equilíbrio entre produção e preservação ambiental.
        `;
    }
    else if(total >= 70){
        mensagem = `
        🌾 Fazenda em Transição<br>
        Boas práticas, mas ainda existem melhorias possíveis.
        `;
    }
    else{
        mensagem = `
        ⚠️ Fazenda de Alto Impacto Ambiental<br>
        É necessário investir em sustentabilidade.
        `;
    }

    document.getElementById("resultado").innerHTML =
    `
    <h2>Pontuação: ${total}</h2>
    <p>${mensagem}</p>
    `;
});