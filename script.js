    var selecionadorDeHistoria = document.getElementById("selecionadorDeHistoria");
    var enviarHistoria = document.getElementById("enviarHistoria");
    var nomeDaHistoria = document.getElementById("nomeDaHistoria");
    var nomeDoJogador = document.getElementById("nomeDoJogador").value;

    var saidaHistoria = document.getElementById("saidaHistoria");
    
    var opcoesDeEntrada = document.getElementById("opcoesDeEntrada");
    var opcao1Saida = document.getElementById("opcao1");
    var opcao2Saida = document.getElementById("opcao2");
    var opcao3Saida = document.getElementById("opcao3");
    var opcao4Saida = document.getElementById("opcao4");
    var enviarOpcao = document.getElementById("enviarOpcao");

    var opcaoSelecionadaMostrar = document.getElementById("opcaoSelecionadaMostrar");

    var mensagens = [
        // Tudo é alteravel exceto os "Links" não os altere de forma alguma!
        hitoria1 = {
            nomeDaHistoria : "Valácia e Insônia",
            descricao: "Sem informações no momento",
            criador: "Kainan H.",
            tempoEstimado: "sem informações",
            mensagemInicial : "Olá viajante, bem-vindo a Valácia, com sua grandeza em castelos luxuosos, e uma população rica em sua maioria, estradas feitas de pedra, muralhas rodeando o castelo e o restante do reino, mas nem tudo são flores, esse mesmo reino tem um passado sombrio com Insônia, um reino ao sul que foi um grande rival de Valácia, por longos 350 anos, até que o reino a sua frente o extinguiu por completo nas regiões sul, sendo sempre marcado por batalhas gigantes, e em sua maioria sangrentas ou feitas, a través de jogos entre guerreiros lendarios; Isso foi um pouco de Valácia. :)",
            
            opcoes : [
                desistir = {
                    linkDaOpcao : 0,
                    respostaDesistir: "Você desistiu da história, espero que possa achar outra interessante ao longo do caminho ;-)"
                }, 
                opcaoA0 = {
                    linkDaOpcao: 1,

                    opcao1 : "Me conte mais sobre Valácia.",
                    opcao2 : "Por que estou aqui?",
                    opcao3 : "Me fale sobre Insônia.",
                    opcao4 : "Desistir desta história.",
                    respostas: {
                        resposta1: "Não preciso contar muito mais coisas, você terá muito ver ao adentrar os muros desse reino, sem falar que o povo adora contar as histórias sobre tudo o que aconteceu; porque acabaria com a graça dessa aventura de curiosidade que você pode ter.",
                        link1 : "b1",// Linkado com B1
                        
                        resposta2: "Você foi chamado pelo rei, para um assunto importante de estremo sigilo pelo que eu soube.",
                        link2 : "b2", // Linkado com B2
    
                        resposta3: "Não posso falar muito, aqui é proibido falar sobre esse reino, então nem se quer nomeiam o nome, para que o mesmo sejá esquecido. Mas se que saber, só saiba que é contado por aí quue era um reino cruel, e sombrio, possuia criaturas magicas e tudo mais, e muitos monstros, e era governado por um tirano, que destruia tudo que não fosse de seu reino. É só isso que posso dizer, você precisa ir de encontro com o rei logo, ele o aguarda.",
                        link3: "b3", // Linkado com B3
    
                        resposta4: "desistiu da História",
                        link4: "desistir", // Linkado com Desistir
    
                    },
                
                },
                opcaoB1 = {
                    linkDaOpcao: "b1",
                    
                    opcao1 : "Opá.",
                    opcao2 : "Por que estou aqui?",
                    opcao3 : "Me fale sobre Insônia.",
                    opcao4 : "desistiu da História",
                    respostas: {
                        resposta1: "Não preciso contar muito mais coisas, você terá muito ver ao adentrar os muros desse reino, sem falar que o povo adora contar as histórias sobre tudo o que aconteceu; porque acabaria com a graça dessa aventura de curiosidade que você pode ter.",
                        link1 : "b1",// Linkado com B1
                        
                        resposta2: "Você foi chamado pelo rei, para um assunto importante de estremo sigilo pelo que eu soube.",
                        link2 : "b2", // Linkado com B2
    
                        resposta3: "Não posso falar muito, aqui é proibido falar sobre esse reino, então nem se quer nomeiam o nome, para que o mesmo sejá esquecido. Mas se que saber, só saiba que é contado por aí quue era um reino cruel, e sombrio, possuia criaturas magicas e tudo mais, e muitos monstros, e era governado por um tirano, que destruia tudo que não fosse de seu reino. É só isso que posso dizer, você precisa ir de encontro com o rei logo, ele o aguarda.",
                        link3: "b3", // Linkado com B3
    
                        resposta4: "desistiu da História",
                        link4: "desistir", // Linkado com Desistir
    
                    },

                }
            ]
        }
    ];

    var historiaSelecionada = 0;
    let linkSelecionado = "1";
    let idDoLinkSelecionado = 1;
    let opcaoSelecionada = "1";

    var nomeDaHistoriaSelecionada = "Nenhuma Selecionada"
    var saidaHistoriaAnterior = ``;

    function mudaOpcoes(historia, opcao) {

        x = historia;
        y = opcao;

        if(opcao !== Number) {

            for(let i = 0; i < mensagens[x].opcoes.length; i++){
                if(opcao == mensagens[x].opcoes[i].linkDaOpcao) {
                    y= i;
                } 
            }
        }
        opcao1Saida.textContent = `1: ${mensagens[x].opcoes[y].opcao1}`;
        opcao2Saida.textContent = `2: ${mensagens[x].opcoes[y].opcao2}`;
        opcao3Saida.textContent = `3: ${mensagens[x].opcoes[y].opcao3}`;
        opcao4Saida.textContent = `4: ${mensagens[x].opcoes[y].opcao4}`;
    }

    // =====================
    //
    //      Estetica 
    //
    // =====================
    enviarHistoria.onclick = function() {

        var selecionarHistoria = document.getElementById("selecionarHistoria").value;
        nomeDoJogador = document.getElementById("nomeDoJogador").value;
        selecionadorDeHistoria.classList.add("esconder");
        selecionadorDeHistoria.classList.remove("aparecer");

        saidaHistoria.classList.remove("esconder");
        saidaHistoria.classList.add("aparecer");

        opcoesDeEntrada.classList.remove("esconder");
        opcoesDeEntrada.classList.add("aparecer");

        if(selecionarHistoria == "historia1") {

            nomeDaHistoriaSelecionada = mensagens[0].nomeDaHistoria;
            nomeDaHistoria.textContent = mensagens[0].nomeDaHistoria;
            historiaSelecionada = 0;

        } else if(selecionarHistoria == "historia2") {

            nomeDaHistoriaSelecionada = mensagens[1].nomeDaHistoria;
            nomeDaHistoria.textContent = mensagens[1].nomeDaHistoria;
            historiaSelecionada = 1;

        } else if(selecionarHistoria == "historia3") {

            nomeDaHistoriaSelecionada = mensagens[2].nomeDaHistoria;
            nomeDaHistoria.textContent = mensagens[2].nomeDaHistoria;
            historiaSelecionada = 2;
            
        } else if(selecionarHistoria == "historia4") {

            nomeDaHistoriaSelecionada = mensagens[3].nomeDaHistoria;
            nomeDaHistoria.textContent = mensagens[3].nomeDaHistoria;
            historiaSelecionada = 3;  
        }

        // Setar nome da História
        saidaHistoriaAnterior = `
            <h1 id="nomeDaHistoria">${nomeDaHistoriaSelecionada}</h1>
            <p class="mensagemSistema">Olá históriador :)</p>
            <br>
        `;

        if(historiaSelecionada == 0) {
            saidaHistoria.innerHTML = `
            ${saidaHistoriaAnterior}
            <p class="descricao">Descrição: ${mensagens[historiaSelecionada].descricao}</p>
            <p class="descricao">Criado por: ${mensagens[historiaSelecionada].criador}</p>
            <p class="descricao">Tempo estimado: ${mensagens[historiaSelecionada].tempoEstimado}</p>
            <br>
            <p class="mensagemSistema">${mensagens[historiaSelecionada].mensagemInicial}</p>
        `;
            saidaHistoriaAnterior += `
            <p class="descricao">Descrição: ${mensagens[historiaSelecionada].descricao}</p>
            <p class="descricao">Criado por: ${mensagens[historiaSelecionada].criador}</p>
            <p class="descricao">Tempo estimado: ${mensagens[historiaSelecionada].tempoEstimado}</p>
            <br>
            <p class="mensagemSistema">${mensagens[historiaSelecionada].mensagemInicial}</p>
            `;
            
            mudaOpcoes(historiaSelecionada, idDoLinkSelecionado);
        }
    };

    // =====================
    //
    // Segunda Faze
    //
    // =====================


    opcao1Saida.onclick = function() {
        opcaoSelecionada = 1;
        opcaoSelecionadaMostrar.textContent = "Opção selecionada: 1";
    };
    opcao2Saida.onclick = function() {
        opcaoSelecionada = 2;
        opcaoSelecionadaMostrar.textContent = "Opção selecionada: 2";
    };
    opcao3Saida.onclick = function() {
        opcaoSelecionada = 3;
        opcaoSelecionadaMostrar.textContent = "Opção selecionada: 3";
    };
    opcao4Saida.onclick = function() {
        opcaoSelecionada = "desistir";
        opcaoSelecionadaMostrar.textContent = "Opção selecionada: 4 (Desistir)";
    };

    // function  mudaLink() {
    //     if(opcaoSelecionada == 1) {
    //         linkSelecionado = mensagens[historiaSelecionada].opcoes[idDolinkSelecionado].respostas.link1;
    //     }

    //     for(let i = 0; i < mensagens[historiaSelecionada].opcoes.length; i++) {
    //         if(linkSelecionado == mensagens[historiaSelecionada].opcoes[i].linkDaOpcao) {

    //             idDoLinkSelecionado = i;

    //         }
    //     };
    // }

    function nucleoDeHistoria() {

        if(opcaoSelecionada == 1) {

            saidaHistoria.innerHTML = `
            ${saidaHistoriaAnterior}
            <p class="mensagemJogador">${nomeDoJogador}: ${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].opcao1}</p>
            <p class="mensagemSistema">${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].respostas.resposta1}</p>
            `
            saidaHistoriaAnterior += `
            <p class="mensagemJogador">${nomeDoJogador}: ${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].opcao1}</p>
            <p class="mensagemSistema">${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].respostas.resposta1}</p>
            `;

        } else if(opcaoSelecionada == 2) {
            saidaHistoria.innerHTML = `
            ${saidaHistoriaAnterior}
            <p class="mensagemJogador">${nomeDoJogador}: ${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].opcao2}</p>
            <p class="mensagemSistema">${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].respostas.resposta2}</p>
            `
            saidaHistoriaAnterior += `
            <p class="mensagemJogador">${nomeDoJogador}: ${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].opcao2}</p>
            <p class="mensagemSistema">${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].respostas.resposta2}</p>
            `;

        } else if(opcaoSelecionada == 3) {
            saidaHistoria.innerHTML = `
            ${saidaHistoriaAnterior}
            <p class="mensagemJogador">${nomeDoJogador}: ${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].opcao3}</p>
            <p class="mensagemSistema">${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].respostas.resposta3}</p>
            `
            saidaHistoriaAnterior += `
            <p class="mensagemJogador">${nomeDoJogador}: ${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].opcao3}</p>
            <p class="mensagemSistema">${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].respostas.resposta3}</p>
            `;

        } else if(opcaoSelecionada == "desistir") {
            saidaHistoria.innerHTML = `
            ${saidaHistoriaAnterior}
            <p class="mensagemJogador">${nomeDoJogador}:  Desistir...</p>
            <p class="mensagemSistema">${mensagens[historiaSelecionada].opcoes[0].respostaDesistir}</p>
            `
            saidaHistoriaAnterior += `
            <p class="mensagemJogador">${nomeDoJogador}:  Desistir...</p>
            <p class="mensagemSistema">${mensagens[historiaSelecionada].opcoes[0].respostaDesistir}</p>
            `;
        }

        if(opcaoSelecionada == 1) {
            linkSelecionado = mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].respostas.link1;

        } else if(opcaoSelecionada == 2) {
            linkSelecionado = mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].respostas.link2;

        } else if(opcaoSelecionada == 3) {
            linkSelecionado = mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].respostas.link3;

        } else if(opcaoSelecionada == "desistir") {
            linkSelecionado = mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].respostas.link4;

        };

        for(let i = 0; i < mensagens[historiaSelecionada].opcoes.length; i++) {
            if(linkSelecionado == mensagens[historiaSelecionada].opcoes[i].linkDaOpcao) {

                idDoLinkSelecionado = i;

            }
        };
        if(opcaoSelecionada !== "desistir"){
            mudaOpcoes(historiaSelecionada, idDoLinkSelecionado);
        } else if(opcaoSelecionada == "desistir") {
            opcoesDeEntrada.textContent = "";
            opcoesDeEntrada.innerHTML = `<a href="index.html" class="textoLink">Pagina Inicial</a>`;

        }
    };

    enviarOpcao.onclick = nucleoDeHistoria;