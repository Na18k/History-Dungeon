    var selecionadorDeHistoria = document.getElementById("selecionadorDeHistoria");
    var enviarHistoria = document.getElementById("enviarHistoria");
    var nomeDaHistoria = document.getElementById("nomeDaHistoria");
    var nomeDoJogador = document.getElementById("nomeDoJogador").value;

    var saidaHistoria = document.getElementById("saidaHistoria");
    
    var opcoesDeEntrada = document.getElementById("opcoesDeEntrada");
    var opcao1 = document.getElementById("opcao1");
    var opcao2 = document.getElementById("opcao2");
    var opcao3 = document.getElementById("opcao3");
    var opcao4 = document.getElementById("opcao4");
    var enviarOpcao = document.getElementById("enviarOpcao");

    var mensagens = [
        hitoria1 = {
            nomeDaHistoria : "Primeira História",
            mensagemInicial : "",
            opcaoA : {
                opcao1 : "",
                opcao2 : "",
                opcao3 : "",
                opcao4 : ""
            }
        },
        hitoria2 = {},
        hitoria3 = {},
        hitoria4 = {}
    ];

    var historiaSelecionada = "Nehuma";
    var nomeDaHistoriaSelecionada = "Nenhuma Selecionada"

    var saidaHistoriaAnterior = ``;

    enviarHistoria.onclick = function() {

        var selecionarHistoria = document.getElementById("selecionarHistoria").value;
        nomeDoJogador = document.getElementById("nomeDoJogador").value;
        selecionadorDeHistoria.classList.add("esconder");
        selecionadorDeHistoria.classList.remove("aparecer");

        saidaHistoria.classList.remove("esconder");
        saidaHistoria.classList.add("aparecer");

        opcoesDeEntrada.classList.remove("esconder");
        opcoesDeEntrada.classList.add("aparecer");

        // Setar nome da História
        saidaHistoriaAnterior = `
            <h1 id="nomeDaHistoria">${nomeDaHistoriaSelecionada}</h1>
            <p class="mensagemSistema">Olá históriador :)</p>
            <br>
        `;

        if(selecionarHistoria == "historia1") {

            nomeDaHistoriaSelecionada = mensagens[0].nomeDaHistoria;
            nomeDaHistoria.textContent = mensagens[0].nomeDaHistoria;
            return historiaSelecionada = "historia1";

        } else if(selecionarHistoria == "historia2") {

            nomeDaHistoriaSelecionada = mensagens[1].nomeDaHistoria;
            nomeDaHistoria.textContent = mensagens[1].nomeDaHistoria;
            return historiaSelecionada = "historia2";

        } else if(selecionarHistoria == "historia3") {

            nomeDaHistoriaSelecionada = mensagens[2].nomeDaHistoria;
            nomeDaHistoria.textContent = mensagens[2].nomeDaHistoria;
            return historiaSelecionada = "historia3";
            
        } else if(selecionarHistoria == "historia4") {

            nomeDaHistoriaSelecionada = mensagens[3].nomeDaHistoria;
            nomeDaHistoria.textContent = mensagens[3].nomeDaHistoria;
            return historiaSelecionada = "historia4";  
        }
    };

    function nucleoDeHistoria() {
        return "Olá";
    };

    function saidaHistoriaFunc() {

        textoDeSaida = nucleoDeHistoria();
        opcaoEscolhida = "Opção 1";

        saidaHistoria.innerHTML = `
            ${saidaHistoriaAnterior}
            <p class="mensagemJogador">${nomeDoJogador}(Você): ${opcaoEscolhida}</p>
            <p class="mensagemSistema">${textoDeSaida}</p>
        `;
        saidaHistoriaAnterior += `
            <p class="mensagemJogador">${nomeDoJogador}(Você): ${opcaoEscolhida}</p>
            <p class="mensagemSistema">${textoDeSaida}</p>
        `;
    };

    // Saida ======================

    enviarOpcao.onclick = function() {
        saidaHistoriaFunc();
    }