    // Import
    
    var selecionadorDeHistoria = document.getElementById("selecionadorDeHistoria");
    var enviarHistoria = document.getElementById("enviarHistoria");
    var nomeDaHistoria = document.getElementById("nomeDaHistoria");
    var nomeDoJogador = document.getElementById("nomeDoJogador").value;
    var avisoDeFaltaDeNome = document.getElementById("avisoDeFaltaDeNome");

    var saidaHistoria = document.getElementById("saidaHistoria");

    var stats = document.getElementById("stats")
    var opcoesDeEntrada = document.getElementById("opcoesDeEntrada");
    var opcao1Saida = document.getElementById("opcao1");
    var opcao2Saida = document.getElementById("opcao2");
    var opcao3Saida = document.getElementById("opcao3");
    var opcao4Saida = document.getElementById("opcao4");
    var enviarOpcao = document.getElementById("enviarOpcao");

    var opcaoSelecionadaMostrar = document.getElementById("opcaoSelecionadaMostrar");


    // ======================================== -- // | -- + ~ < > ~ + -- | \\ -- ========================================


    // Dados//Mensagens;

    var mensagens = [
        // Tudo é alteravel exceto os "Links" não os altere de forma alguma!
        hitoria1 = {
            nomeDaHistoria : "Valácia e Insônia",
            descricao: "Sem informações no momento",
            criador: "Kainan H.",
            tempoEstimado: "sem informações",
            mensagemInicial : "Olá viajante, bem-vindo a Valácia, com sua grandeza em castelos luxuosos, e uma população rica em sua maioria, estradas feitas de pedra, muralhas rodeando o castelo e o restante do reino, mas nem tudo são flores, esse mesmo reino tem um passado sombrio com Insônia, um reino ao sul que foi um grande rival de Valácia, por longos 350 anos, até que o reino a sua frente o extinguiu por completo nas regiões sul, sendo sempre marcado por batalhas gigantes, e em sua maioria sangrentas ou feitas, a través de jogos entre guerreiros lendarios; Isso foi um pouco de Valácia. :)",
            
            creditos: {
                criador: "Kainan H. [Na18k]",
                diretor: "Kainan H",
                imagens: [
                    "Kainan H.",
                    "PixelArt"
                ],
                musicas: [
                    "musica 1: Nã18 Kainan H."
                ],
                agradecimentos: [
                    ""
                ]
            },
            opcoes : [
                desistir = {
                    linkDaOpcao : 0,
                    respostaDesistir: "Você desistiu da história, espero que possa achar outra interessante ao longo do caminho :)"
                }, 
                opcaoA0 = {
                    linkDaOpcao: 1,

                    opcao1 : "Me conte mais sobre Valácia.",
                    opcao2 : "Por que estou aqui?",
                    opcao3 : "Me fale sobre Insônia.",
                    opcao4 : "Desistir desta história.",
                    respostas: {
                        resposta1: "Não preciso contar muito mais coisas, você terá muito ver ao adentrar os muros desse reino, sem falar que o povo adora contar as histórias sobre tudo o que aconteceu; porque acabaria com a graça dessa aventura de curiosidade que você pode ter.",
                        npc1: null,
                        musica1: null,
                        hp: 0,
                        lvl: 0,
                        link1 : "b1",// Linkado com B1
                        
                        resposta2: "Você foi chamado pelo rei, para um assunto importante de estremo sigilo pelo que eu soube.",
                        npc2: null,
                        musica1: null,
                        link2 : "b2", // Linkado com B2
    
                        resposta3: "Não posso falar muito, aqui é proibido falar sobre esse reino, então nem se quer nomeiam o nome, para que o mesmo sejá esquecido. Mas se que saber, só saiba que é contado por aí que era um reino cruel, e sombrio, possuia criaturas magicas e tudo mais, e muitos monstros, e era governado por um tirano, que destruia tudo que não fosse de seu reino. É só isso que posso dizer, você precisa ir de encontro com o rei logo, ele o aguarda.",
                        npc3: null,
                        musica1: null,
                        link3: "b3", // Linkado com B3
    
                        resposta4: "desistiu da História",
                        npc4: null,
                        musica1: null,
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
    
                        resposta3: "Não posso falar muito, aqui é proibido falar sobre esse reino, então nem se quer nomeiam o nome, para que o mesmo sejá esquecido. Mas se que saber, só saiba que é contado por aí que era um reino cruel, e sombrio, possuia criaturas magicas e tudo mais, e muitos monstros, e era governado por um tirano, que destruia tudo que não fosse de seu reino. É só isso que posso dizer, você precisa ir de encontro com o rei logo, ele o aguarda.",
                        link3: "b3", // Linkado com B3
    
                        resposta4: "desistiu da História",
                        link4: "desistir", // Linkado com Desistir
    
                    },

                }
            ]
        },
        historia2 = {
            nomeDaHistoria : "Exit",
            descricao: "Exit é um game usado na serie 'Mr. Robot', no qual foi transcrito para aqui por Kainan H.",
            criador: "WhiteRose",
            tempoEstimado: "5 minutos",
            mensagemInicial : "Você está preso numa masmorra com seu amigo, e vê um barril. O que você faz?",

            creditos: {
                criador: "Série Mr. Robot WitheRose",
                diretor: "",
                imagens: [],
                musicas: [],
                agradecimentos: [
                    "Série Mr. Robot",
                    "Kainan H. [ranscritor]"
                ]
            },

            opcoes : [
                desistir = {
                    linkDaOpcao : 0,
                    respostaDesistir: "Você desistiu da história, espero que possa achar outra interessante ao longo do caminho :)"
                }, 
                opcaoA1 = {
                    linkDaOpcao: 1,

                    opcao1 : "Olhar em volta.",
                    opcao2 : "Mover o barril.",
                    opcao3 : "Sentar ao lado do seu amigo.",
                    opcao4 : "Desistir desta história.",
                    respostas: {
                        resposta1: "Você vê a mesma coisa, seu a migo e o barril na com você na masmora.",
                        npc1: null,
                        musica1: null,
                        hp: 0,
                        lvl: 0,
                        link1 : 1,// Linkado com B1
                        
                        resposta2: "O barril rola para o lado você encontra um tunnel secreto.  O que você faz?",
                        npc2: null,
                        musica1: null,
                        link2 : 3, // Linkado com B2
    
                        resposta3: "Seu amigo possui um bilhete na mão. O que você faz?",
                        npc3: null,
                        musica1: null,
                        link3: 2, // Linkado com B3
    
                        resposta4: "desistiu da História",
                        npc4: null,
                        musica1: null,
                        link4: "desistir", // Linkado com Desistir
    
                    },
                },
                opcaoA2 = {
                    linkDaOpcao: 2,

                    opcao1 : "Ver o bilhete..",
                    opcao2 : "Acender um fosforo.",
                    opcao3 : "Voltar ao centro da masmorra",
                    opcao4 : "Desistir desta história.",
                    respostas: {
                        resposta1: "Está muito escuro para ver o bilhete! O que você faz?",
                        npc1: null,
                        musica1: null,
                        hp: 0,
                        lvl: 0,
                        link1 : 2,// Linkado com B1
                        
                        resposta2: 'O bilhete diz "Não me deixe aqui". Você deixa seu amigo ou fica?',
                        npc2: null,
                        musica1: null,
                        link2 : 10, // Linkado com B2
    
                        resposta3: "Você voltou ao centro da masmora onde já estava. O que você faz?",
                        npc3: null,
                        musica1: null,
                        link3: 1, // Linkado com B3
    
                        resposta4: "desistiu da História",
                        npc4: null,
                        musica1: null,
                        link4: "desistir", // Linkado com Desistir
    
                    },
                },
                opcaoA3 = {
                    linkDaOpcao: 3,

                    opcao1 : "Entrar no tunel.",
                    opcao2 : "Sentar ao lado do seu amigo.",
                    opcao3 : "Voltar o barril a posição inicial",
                    opcao4 : "Desistir desta história.",
                    respostas: {
                        resposta1: "Você começa a fugir mas seu amigo está fraco de mais para ir com você. Ele te entrega um bilhete. O que você faz?.",
                        npc1: null,
                        musica1: null,
                        hp: 0,
                        lvl: 0,
                        link1 : 4,// Linkado com B1
                        
                        resposta2: "Seu amigo possui um bilhete na mão. O que você faz?",
                        npc2: null,
                        musica1: null,
                        link2 : 9, // Linkado com B2
    
                        resposta3: "Você volta o barril na posição inicial o que você faz?.",
                        npc3: null,
                        musica1: null,
                        link3: 1, // Linkado com B3
    
                        resposta4: "desistiu da História",
                        npc4: null,
                        musica1: null,
                        link4: "desistir", // Linkado com Desistir
    
                    },
                },
                opcaoA4 = {
                    linkDaOpcao: 4,

                    opcao1 : "Ler o bilhete.",
                    opcao2 : "Voltar para à masmorra.",
                    opcao3 : "Continuar em frente",
                    opcao4 : "Desistir desta história.",
                    respostas: {
                        resposta1: "Está escuro de mais para ler o bilhete. O que você faz?",
                        npc1: null,
                        musica1: null,
                        hp: 0,
                        lvl: 0,
                        link1 : 5,// Linkado com B1
                        
                        resposta2: "Você volta para a masmora. O que você faz?",
                        npc2: null,
                        musica1: null,
                        link2 : 3, // Linkado com B2
    
                        resposta3: "Você engatinha pelo tunel e sai numa praia. O que você faz?",
                        npc3: null,
                        musica1: null,
                        link3: 6, // Linkado com B3
    
                        resposta4: "desistiu da História",
                        npc4: null,
                        musica1: null,
                        link4: "desistir", // Linkado com Desistir
    
                    },
                },
                opcaoA5 = {
                    linkDaOpcao: 5,

                    opcao1 : "Continuo em frente.",
                    opcao2 : "Acender um fosforo.",
                    opcao3 : "Voltar a masmora.",
                    opcao4 : "Desistir desta história.",
                    respostas: {
                        resposta1: "Você engatinha pelo tunel e sai numa praia. O que você faz?",
                        npc1: null,
                        musica1: null,
                        hp: 0,
                        lvl: 0,
                        link1 : 6,// Linkado com B1
                        
                        resposta2: "Está muito umido e com cheiro de gás no tunel, não seria uma boa ideia! O que você faz?.",
                        npc2: null,
                        musica1: null,
                        link2 : 5, // Linkado com B2
    
                        resposta3: "Você volta para a masmora. O que você faz?",
                        npc3: null,
                        musica1: null,
                        link3: 3, // Linkado com B3
    
                        resposta4: "desistiu da História",
                        npc4: null,
                        musica1: null,
                        link4: "desistir", // Linkado com Desistir
    
                    },
                },
                opcaoA6 = {
                    linkDaOpcao: 6,

                    opcao1 : "Observo.",
                    opcao2 : "Voltar para trâs.",
                    opcao3 : "Voltar a masmora.",
                    opcao4 : "Desistir desta história.",
                    respostas: {
                        resposta1: "Você vê um barco na água. O que você faz??",
                        npc1: null,
                        musica1: null,
                        hp: 0,
                        lvl: 0,
                        link1 : 7,// Linkado com B1
                        
                        resposta2: "Você volta ao tunnel no mesmo lugar de antes. O que você faz?",
                        npc2: null,
                        musica1: null,
                        link2 : 4, // Linkado com B2
    
                        resposta3: "Você volta para a masmora. O que você faz?",
                        npc3: null,
                        musica1: null,
                        link3: 3, // Linkado com B3
    
                        resposta4: "desistiu da História",
                        npc4: null,
                        musica1: null,
                        link4: "desistir", // Linkado com Desistir
    
                    },
                },
                opcaoA7 = {
                    linkDaOpcao: 7,

                    opcao1 : "Voltar ao tunnel.",
                    opcao2 : "Ir para o barco.",
                    opcao3 : "Voltar a masmora.",
                    opcao4 : "Desistir desta história.",
                    respostas: {
                        resposta1: "Você volta ao tunnel no mesmo lugar de antes. O que você faz?",
                        npc1: null,
                        musica1: null,
                        hp: 0,
                        lvl: 0,
                        link1 : 4,// Linkado com B1
                        
                        resposta2: "Parabéns, você está a caminho de um novo mundo. :) Quer jogar de novo?",
                        npc2: null,
                        musica1: null,
                        link2 : 8, // Linkado com B2
    
                        resposta3: "Você volta para a masmora. O que você faz?",
                        npc3: null,
                        musica1: null,
                        link3: 3, // Linkado com B3
    
                        resposta4: "desistiu da História",
                        npc4: null,
                        musica1: null,
                        link4: "desistir", // Linkado com Desistir
    
                    },
                },
                opcaoA8 = {
                    linkDaOpcao: 8,

                    opcao1 : "Jogar de novo.",
                    opcao2 : "Desistir.",
                    opcao3 : "Desistir.",
                    opcao4 : "Desistir desta história.",
                    respostas: {
                        resposta1: "Você está preso numa masmorra com seu amigo, e vê um barril. O que você faz?",
                        npc1: null,
                        musica1: null,
                        hp: 0,
                        lvl: 0,
                        link1 : 1,// Linkado com B1
                        
                        resposta2: "Você desistiu!",
                        npc2: null,
                        musica1: null,
                        link2 : "desistir", // Linkado com B2
    
                        resposta3: "Você desistiu",
                        npc3: null,
                        musica1: null,
                        link3: "desistir", // Linkado com B3
    
                        resposta4: "desistiu da História",
                        npc4: null,
                        musica1: null,
                        link4: "desistir", // Linkado com Desistir
    
                    },
                },
                opcaoA9 = {
                    linkDaOpcao: 9,

                    opcao1 : "...",
                    opcao2 : "...",
                    opcao3 : "...",
                    opcao4 : "...",
                    respostas: {
                        resposta1: "Final Game...",
                        npc1: null,
                        musica1: null,
                        hp: 0,
                        lvl: 0,
                        link1 : 9,// Linkado com B1
                        
                        resposta2: 'Final Game...',
                        npc2: null,
                        musica1: null,
                        link2 : 9, // Linkado com B2
    
                        resposta3: "Final Game..",
                        npc3: null,
                        musica1: null,
                        link3: 9, // Linkado com B3
    
                        resposta4: "Final Game...",
                        npc4: null,
                        musica1: null,
                        link4: 9, // Linkado com Desistir
    
                    },
                },
                opcaoA10 = {
                    linkDaOpcao: 10,

                    opcao1 : "Fica.",
                    opcao2 : "Deixe-o aqui!",
                    opcao3 : "Voltar ao centro da masmorra",
                    opcao4 : "Desistir desta história.",
                    respostas: {
                        resposta1: "Seu amigo agradeçe :) ............",
                        npc1: null,
                        musica1: null,
                        hp: 0,
                        lvl: 0,
                        link1 : 9,// Linkado com B1
                        
                        resposta2: 'Você move o barril, e segue pelo tunel secreto, chegando a uma praia onde há um barco, e você o pega e vai para o novo mundo.',
                        npc2: null,
                        musica1: null,
                        link2 : 8, // Linkado com B2
    
                        resposta3: "Você voltou ao centro da masmora onde já estava. O que você faz?",
                        npc3: null,
                        musica1: null,
                        link3: 1, // Linkado com B3
    
                        resposta4: "desistiu da História",
                        npc4: null,
                        musica1: null,
                        link4: "desistir", // Linkado com Desistir
    
                    },
                },
                
            ]
        }
    ];


    // ======================================== -- // | -- + ~ < > ~ + -- | \\ -- ========================================


    // Variaveis principais.

    var historiaSelecionada = 0;
    let linkSelecionado = "1";
    let idDoLinkSelecionado = 1;
    let opcaoSelecionada = "1";

    var nomeDaHistoriaSelecionada = "Nenhuma Selecionada"
    var saidaHistoriaAnterior = ``;

    var hp = 200;
    var lvl = 0;
    var coins = 100;



    // ======================================== -- // | -- + ~ < > ~ + -- | \\ -- ========================================



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
    };
    function statsAtualizar(HP, LVL, COINS) {
        elementoHP = document.getElementById("hp");
        elementoLVL = document.getElementById("lvl");
        elementoCOINS = document.getElementById("coins");

        elementoHP.textContent = `HP: ${HP}`;
        elementoLVL.textContent = `Level: ${LVL}`;
        elementoCOINS.textContent = `Coins: ${COINS}`;
    }

    function inteligenciaCentral() {

        var selecionarHistoria = document.getElementById("selecionarHistoria").value;
        nomeDoJogador = document.getElementById("nomeDoJogador").value;

        if(nomeDoJogador !== "") {

        selecionadorDeHistoria.classList.add("esconder");
        selecionadorDeHistoria.classList.remove("aparecer");

        saidaHistoria.classList.remove("esconder");
        saidaHistoria.classList.add("aparecer");

        opcoesDeEntrada.classList.remove("esconder");
        opcoesDeEntrada.classList.add("aparecer");

        stats.classList.remove("esconder");
        stats.classList.add("aparecer");

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
            <br>
        `;
        // <p class="mensagemSistema rodarAnimacao">Olá históriador :)</p>

        saidaHistoria.innerHTML = `
            ${saidaHistoriaAnterior}
            <p class="descricao">Descrição: ${mensagens[historiaSelecionada].descricao}</p>
            <p class="descricao">Criado por: ${mensagens[historiaSelecionada].criador}</p>
            <p class="descricao">Tempo estimado: ${mensagens[historiaSelecionada].tempoEstimado}</p>
            <br>
            <p class="mensagemSistema rodarAnimacao">${mensagens[historiaSelecionada].mensagemInicial}</p>
        `;
        saidaHistoriaAnterior += `
            <p class="descricao">Descrição: ${mensagens[historiaSelecionada].descricao}</p>
            <p class="descricao">Criado por: ${mensagens[historiaSelecionada].criador}</p>
            <p class="descricao">Tempo estimado: ${mensagens[historiaSelecionada].tempoEstimado}</p>
            <br>
            <p class="mensagemSistema">${mensagens[historiaSelecionada].mensagemInicial}</p>
        `;
            
        mudaOpcoes(historiaSelecionada, idDoLinkSelecionado);

        escolhidoHistoria = true;

        statsAtualizar(hp, lvl, coins);

        avisoDeFaltaDeNome.textContent = ""

        } else if(nomeDoJogador == "") {

            avisoDeFaltaDeNome.textContent = "Por favor informe um nome para jogar!"
        }
    };

    // Execução da Inteligencia Central

    // Executar com Enter (keyCode: 13).
    function leDoTeclado(evento) {

        if(evento.keyCode == 13 && escolhidoHistoria == false) {
        	inteligenciaCentral();
            escolhidoHistoria = true;
        }
    }
    document.onkeydown = leDoTeclado;

    // Executa com clique no botão
    enviarHistoria.onclick = inteligenciaCentral;



    // ======================================== -- // | -- + ~ < > ~ + -- | \\ -- ========================================



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
            <p class="mensagemJogador rodarAnimacao">${nomeDoJogador}: ${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].opcao1}</p>
            <p class="mensagemSistema rodarAnimacao">${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].respostas.resposta1}</p>
            `
            saidaHistoriaAnterior += `
            <p class="mensagemJogador">${nomeDoJogador}: ${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].opcao1}</p>
            <p class="mensagemSistema">${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].respostas.resposta1}</p>
            `;

        } else if(opcaoSelecionada == 2) {
            saidaHistoria.innerHTML = `
            ${saidaHistoriaAnterior}
            <p class="mensagemJogador rodarAnimacao">${nomeDoJogador}: ${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].opcao2}</p>
            <p class="mensagemSistema rodarAnimacao">${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].respostas.resposta2}</p>
            `
            saidaHistoriaAnterior += `
            <p class="mensagemJogador">${nomeDoJogador}: ${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].opcao2}</p>
            <p class="mensagemSistema">${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].respostas.resposta2}</p>
            `;

        } else if(opcaoSelecionada == 3) {
            saidaHistoria.innerHTML = `
            ${saidaHistoriaAnterior}
            <p class="mensagemJogador rodarAnimacao">${nomeDoJogador}: ${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].opcao3}</p>
            <p class="mensagemSistema rodarAnimacao">${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].respostas.resposta3}</p>
            `
            saidaHistoriaAnterior += `
            <p class="mensagemJogador">${nomeDoJogador}: ${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].opcao3}</p>
            <p class="mensagemSistema">${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].respostas.resposta3}</p>
            `;

        } else if(opcaoSelecionada == "desistir") {
            saidaHistoria.innerHTML = `
            ${saidaHistoriaAnterior}
            <p class="mensagemJogador rodarAnimacao">${nomeDoJogador}:  Desistir...</p>
            <p class="mensagemSistema rodarAnimacao">${mensagens[historiaSelecionada].opcoes[0].respostaDesistir}</p>
            <div class="resultadoFinal"><h3>Resultado Final:</h3>
                <p id="hp">HP: ${hp}</p>
                <p id="lvl">Level: ${lvl}</p>
                <p id="coins">Coins: ${coins}</p>
            </div>
            `;
            saidaHistoriaAnterior += `
            <p class="mensagemJogador">${nomeDoJogador}:  Desistir...</p>
            <p class="mensagemSistema">${mensagens[historiaSelecionada].opcoes[0].respostaDesistir}</p>
            <div class="resultadoFinal"><h3>Resultado Final:</h3>
                <p id="hp">HP: ${hp}</p>
                <p id="lvl">Level: ${lvl}</p>
                <p id="coins">Coins: ${coins}</p>
            </div>
            `;



            // Créditos

            creditosInner = `
                <div class="creditos" id="creditos">
                    <p class="credCriador">Criador: ${mensagens[historiaSelecionada].creditos.criador}</p>
                    <p class="credDiretor">Diretor: ${mensagens[historiaSelecionada].creditos.diretor}</p>
            `;
            creditosInner += `
                <p class="credImg">Imagens:</p>
            `;
            
            for(let cont = 0; cont < mensagens[historiaSelecionada].creditos.imagens.length; cont++)  {
                creditosInner += `
                    <p class="cred">${mensagens[historiaSelecionada].creditos.imagens[cont]}</p>
                `;
            }
            creditosInner += `
                <p class="credMusic">Musicas:</p>
            `;
            for(let cont1 = 0; cont1 < mensagens[historiaSelecionada].creditos.imagens.length; cont1++)  {
                creditosInner += `
                    <p class="cred">${mensagens[historiaSelecionada].creditos.musicas[cont1]}</p>
                `;
            }
            creditosInner += `
                <p class="credAgr">Agradecimentos:</p>
            `;
            for(let cont2 = 0; cont2 < mensagens[historiaSelecionada].creditos.imagens.length; cont2++)  {
                creditosInner += `
                    <p class="cred">${mensagens[historiaSelecionada].creditos.agradecimentos[cont2]}</p>
                `;
            }
            creditosInner += `
                </div>
            `;

            saidaHistoria.innerHTML = `
                ${saidaHistoriaAnterior}
                ${creditosInner}
            `;


            // <div class="creditos">
            //     <p>Criador:</p>
            //     <p>Diretor:</p>
            //     <p>Imagens:
            //         <p></p>
            //     </p>
            //     <p>Musicas:
            //         <p></p>
            //     </p>
            //     <p>Agradecimentos:
            //         <p></p>
            //     </p>
            // </div>
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
            stats.classList.add("esconder");

        }
        opcaoSelecionada = 0;


        // Atualiza os Status do personagem;
        statsAtualizar(hp, lvl, coins);
    };

    enviarOpcao.onclick = nucleoDeHistoria;




    // // Musica

    // function playSound(url, modo){
    //     var audio = document.createElement('audio');
    //     audio.style.display = "none";
    //     audio.src = url;
    //     audio.autoplay = true;
    //     if(modo == "loop") {
    //         audio.loop = true;
    //     } else  if(modo == "pause") {
    //         audio.pause();
    //     }
    //     audio.onended = function(){
    //       audio.remove() //Remove when played.
    //     };
    //     document.body.appendChild(audio);
    // };

    // var musicaASerTocada = "./music/music5.mp3";
    // var audio = document.getElementById("audioMusica");

    // var tocarMusica = document.getElementById("audioMusicaPlay");
    // var pausarMusica = document.getElementById("audioMusicaPause");
    // var loopMusica = document.getElementById("audioMusicaLoop");
    // var muteMusica = document.getElementById("muteMusica");

    // var estadoDoLoop = true;
    // var estadoMute = true;

    // tocarMusica.onclick = function() {
    //     audio.src = musicaASerTocada;
    //     audio.play();
    // }
    // pausarMusica.onclick = function() {
    //     audio.pause();
    // }
    // loopMusica.onclick = function() {
    //     if(estadoDoLoop == false) {
    //         audio.loop = false;
    //         loopMusica.textContent = "Loop (Não)";
    //         estadoDoLoop = true;

    //     } else if(estadoDoLoop == true) {
    //         audio.loop = true
    //         loopMusica.textContent = "Loop (Sim)";
    //         estadoDoLoop = false;
    //     }
    // }
    // muteMusica.onclick = function() {
    //     if(estadoMute == true) {
    //         audio.volume = 0;
    //         muteMusica.textContent = "Mute (Sim)";
    //         estadoMute = false;

    //     } else if(estadoMute == false) {
    //         audio.volume = 1;
    //         muteMusica.textContent = "Mute (Não)";
    //         estadoMute = true;
    //     }
        
    // }

    // // function tocarSom(entrada) {

    // //     if(entrada == 5){
    // //         setInterval(playSound("./music/music5.mp3"), 51000)
    // //     }
    // // }
    