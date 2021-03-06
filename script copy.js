    // Import
    
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


    // ======================================== -- // | -- + ~ < > ~ + -- | \\ -- ========================================

    var personagens = [
        historia1 = {
            personagens : [
                personagen1 = {
                    nomeDoPersonagem: "Kainan",
                    imagemDoPersonagem: "./img/personagens/personagemPrincipal.png",
                    lvl: 0, // Quantos leveis ele dá ao falar com ele;
                    hp: 100, // Quando de vida ele possui
                    // batalha: false, // Se "False" não possui batalha, se "true" possui batalha
                    dano: 5, // O quanto de dano ele dá por ataque
                    tipo: "amigo", // Tipos: "amigo", "neutro", "inimigo", "desconhecido"
                },
                personagen2 = {
                    nomeDoPersonagem: "Desconhecido",
                    imagemDoPersonagem: "./img/personagens/desconhecido.png",
                    lvl: 0, // Quantos leveis ele dá ao falar com ele;
                    hp: undefined, // Quando de vida ele possui
                    // batalha: false, // Se "False" não possui batalha, se "true" possui batalha
                    dano: undefined, // O quanto de dano ele dá por ataque
                    tipo: "desconhecido", // Tipos: "amigo", "neutro", "inimigo"
                },
                personagen3 = {
                    nomeDoPersonagem: "Camponês Richard",
                    imagemDoPersonagem: "./img/personagens/campones.png",
                    lvl: 1, // Quantos leveis ele dá ao falar com ele;
                    hp: 100, // Quando de vida ele possui
                    // batalha: false, // Se "False" não possui batalha, se "true" possui batalha
                    dano: 0, // O quanto de dano ele dá por ataque
                    tipo: "neutro", // Tipos: "amigo", "neutro", "inimigo", "desconhecido"
                }
            ]
        }
    ]

    // Dados//Mensagens;

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
                        link1 : "b1",// Linkado com B1
                        
                        npc1: "Desconhecido",
                        musica1: 0,
                        adicionaHP1: 0,
                        dano1: 0,
                        adicionaLVL1: 0,
                        custoDeCoins1: 0,
                        
                        resposta2: "Você foi chamado pelo rei, para um assunto importante de estremo sigilo pelo que eu soube.",
                        link2 : "b2", // Linkado com B2

                        npc2: "Desconhecido",
                        musica2: 0,
                        adicionaHP2: 0,
                        dano2: 0,
                        adicionaLVL2: 0,
                        custoDeCoins2: 0,
    
                        resposta3: "Não posso falar muito, aqui é proibido falar sobre esse reino, então nem se quer nomeiam o nome, para que o mesmo sejá esquecido. Mas se que saber, só saiba que é contado por aí que era um reino cruel, e sombrio, possuia criaturas magicas e tudo mais, e muitos monstros, e era governado por um tirano, que destruia tudo que não fosse de seu reino. É só isso que posso dizer, você precisa ir de encontro com o rei logo, ele o aguarda.",
                        link3: "b3", // Linkado com B3

                        npc3: "Desconhecido",
                        musica3: 0,
                        adicionaHP3: 0,
                        dan3: 0,
                        adicionaLVL3: 0,
                        custoDeCoins3: 0,
    
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
    
                        resposta3: "Não posso falar muito, aqui é proibido falar sobre esse reino, então nem se quer nomeiam o nome, para que o mesmo sejá esquecido. Mas se que saber, só saiba que é contado por aí que era um reino cruel, e sombrio, possuia criaturas magicas e tudo mais, e muitos monstros, e era governado por um tirano, que destruia tudo que não fosse de seu reino. É só isso que posso dizer, você precisa ir de encontro com o rei logo, ele o aguarda.",
                        link3: "b3", // Linkado com B3
    
                        resposta4: "desistiu da História",
                        link4: "desistir", // Linkado com Desistir
    
                    },

                }
            ]
        },
        historia2 = {
            nomeDaHistoria : "História 2",
            descricao: "Sem informações no momento, essa história é para teste!!!",
            criador: "Kainan H.",
            tempoEstimado: "0 segundos",
            mensagemInicial : "Essa história ainda não existe:)",
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

    function inteligenciaCentral() {

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

        escolhidoHistoria = true;
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

    function encontraPersonagem(nome) {
        for(let i = 0; i < personagens[historiaSelecionada].personagens.length; i++) {

            if(nome == personagens[historiaSelecionada].personagens[i].nomeDoPersonagem) {
                return i;
            }
        }
    }

    function nucleoDeHistoria() {

        if(opcaoSelecionada == 1) {

            if(mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].respostas.npc1 == null) {
                saidaHistoria.innerHTML = `
                ${saidaHistoriaAnterior}
                <div class="mensagemJogadorContainer">
                    <div>
                        <img src="${personagens[historiaSelecionada].personagens[0].imagemDoPersonagem}">
                        <h2>${personagens[historiaSelecionada].personagens[0].nomeDoPersonagem}</h2>
                    </div>
                    <p class="mensagemJogador">${nomeDoJogador}: ${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].opcao1}</p>
                </div>

                <p class="mensagemSistema">${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].respostas.resposta1}</p>
                `
            } else {

                nomeDoNPC = mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].respostas.npc1;
                idDoNPC = encontraPersonagem(nomeDoNPC);

                saidaHistoria.innerHTML = `
                ${saidaHistoriaAnterior}
                <div class="mensagemJogadorContainer">
                    <div>
                        <img src="${personagens[historiaSelecionada].personagens[0].imagemDoPersonagem}">
                        <h2>${personagens[historiaSelecionada].personagens[0].nomeDoPersonagem}</h2>
                    </div>
                    <p class="mensagemJogador">${nomeDoJogador}: ${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].opcao1}</p>
                </div>

                <div class="mensagemSistemaContainer">
                    <p class="mensagemSistema">${mensagens[historiaSelecionada].opcoes[idDoLinkSelecionado].respostas.resposta1}</p>
                    <div>
                        <img src="${personagens[historiaSelecionada].personagens[idDoNPC].imagemDoPersonagem}">
                        <h2>${personagens[historiaSelecionada].personagens[idDoNPC].nomeDoPersonagem}</h2>
                    </div>
                </div>
                `
            }
            
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
        opcaoSelecionada = 0;
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