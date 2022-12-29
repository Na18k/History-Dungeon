// Import
    
    var selecionadorDeHistoria = document.getElementById("selecionadorDeHistoria");
    var enviarHistoriaButton = document.getElementById("enviarHistoria");
    var nomeDaHistoriaTitulo = document.getElementById("nomeDaHistoria");
    var nomeDoJogador = document.getElementById("nomeDoJogador").value;
    var avisoDeFaltaDeNome = document.getElementById("avisoDeFaltaDeNome");

    var carregarGameOptionNewHistory = document.getElementById("carregarGameOptionNewHistory");
    var carregarGameOptionSim = document.getElementById("carregarGameOptionSim")

    var escolhaNao = document.getElementById("escolhaNao");
    var escolhaSim = document.getElementById("escolhaSim");

    var saidaHistoria = document.getElementById("saidaHistoria");
    var stats = document.getElementById("stats")
    var opcoesDeEntrada = document.getElementById("opcoesDeEntrada");
    var opcao1Saida = document.getElementById("opcao1");
    var opcao2Saida = document.getElementById("opcao2");
    var opcao3Saida = document.getElementById("opcao3");
    var opcao4Saida = document.getElementById("opcao4");
    var enviarOpcao = document.getElementById("enviarOpcao");

    var opcaoSelecionadaMostrar = document.getElementById("opcaoSelecionadaMostrar");

    // Variaveis principais.

    var numeroDaHistoriaSelecionada = 0;
    let linkSelecionado = "1";
    let idDoLinkSelecionado = 1;
    let opcaoSelecionada = 0;

    var nomeDaHistoriaSelecionada = "Nenhuma Selecionada"
    var saidaHistoriaAnterior = ``;
    var linksSalvos = [];

    var localDaMusica = [];
    var playlistMusicasNome = []

    var itens = ["espada"];
    var hp = 200;
    var lvl = 0;
    var coins = 100;
    var mana = 0

// ==================================================================
// DADOS
// ==================================================================

    var dados = {
    "historias" : [

        { // Historia 0
            "nomeDaHistoria" : "Historia Teste",
            "descricao" : "Sem informações no momento",
            "criador" : "Kainan H.",
            "tempoEstimado" : "sem informações",
            "mensagemInicial" : ":)",
            "bannerDaHistoria" : "img/insoniaEValacia/logo.png",
            "audio" : true,
            "guia" : true,
            "hp": 200,
            "lvl": 0,
            "coins": 0,
            "mana" : 0,
            "creditos" : {
                "principal" : [
                    {
                        "contribuicao" : "Criador",
                        "pessoa" : "Kainan H."
                    }
                ],
                "imagens" : [
                    {
                        "contribuicao" : "Steve",
                        "pessoa" : "Kainan H."
                    }
                ],
                "music" : [
                    {
                        "contribuicao" : "Todas as Músicas",
                        "pessoa" : "Nã18 (Kainan H.)"
                    },
                ],
                "agradecimentos" : [
                    {
                        "contribuicao" : "Ideias geniais",
                        "pessoa" : "Vic"
                    }
                ]
            },
            "batalha": {
                "personagem" : {
                    "ataque": [
                        {
                            "nomeDoAtaque" : "Normal",
                            "informacoes" : "",
                            "dano" : 10,
                            "custoMana" : 0,
                            "som" : "../music/insoniaEValacia/effects/dano.mp3",
                            "animacao": "pisca"
                        },
                        {
                            "nomeDoAtaque" : "Mágico",
                            "informacoes" : "",
                            "dano" : 20,
                            "custoMana" : 10,
                            "som" : "../music/insoniaEValacia/effects/magico.mp3",
                            "animacao": "magico1"
                        }
                    ],
                    "acao" : [
                        {
                            "nomeDaAcao": "Conversar",
                            "informacoes" : "",
                            "custoMana" : 0,
                            "lvl" : 0,
                            "entrada" : "Você tenta conversar",
                            "tipo" : "conversa"
                        },
                        {
                            "nomeDaAcao": "Fugir",
                            "informacoes" : "",
                            "custoMana" : 0,
                            "lvl" : "-1",
                            "entrada" : "Você tenta fugir",
                            "tipo" : "fuga"
                        }
                    ]
                },
                "inimigos" : [
                    {
                        "id" : 0,
                        "nomeDoInimigo": "O rei da Morte",
                        "informacoes" : "",
                        "hp": 200,
                        "imagem" : "../img/banner.png",
                        "ataques" : [
                            {
                                "nome": "Dano Físico",
                                "dano" : 10,
                                "animacao" : "piscar1"
                            },
                            {
                                "nome": "Magia Sombria",
                                "dano" : 30,
                                "animacao" : "magico2"
                            }
                        ],
                        "cmd" : ""
                    },
                    {
                        "id" : 1,
                        "nomeDoInimigo": "Mago",
                        "informacoes" : "",
                        "hp": 200,
                        "imagem" : "../img/banner.jpg",
                        "ataques" : [
                            {
                                "nome": "Magia Sombria",
                                "dano" : 30,
                                "animacao" : "magico2"
                            }
                        ],
                        "cmd" : ""
                    }
                ]
            },
            "playlistMusicas" : [
                {
                    "nomeDaMusica" : "Vale dos Zoglins",
                    "local" : "./music/insoniaEValacia/valeDosZoglins.mp3"
                },
                {
                    "nomeDaMusica" : "Dança das Aranhas",
                    "local" : "./music/insoniaEValacia/dancaDasAranhas.mp3"
                },
                {
                    "nomeDaMusica" : "Música do Woodiks",
                    "local" : "./music/insoniaEValacia/musicaDoWoodiks.mp3"
                },
                {
                    "nomeDaMusica" : "Music 8",
                    "local" : "./music/insoniaEValacia/music8.mp3"
                },
                {
                    "nomeDaMusica" : "Música do Palacio de Valácia",
                    "local" : "./music/insoniaEValacia/musicaDoPalaciodeValacia.mp3"
                },
                {
                    "nomeDaMusica" : "Música do Rei de Insônia",
                    "local" : "./music/insoniaEValacia/musicaDoReiDeInsonia.mp3"
                },
                {
                    "nomeDaMusica" : "Flauta de Slov",
                    "local" : "./music/insoniaEValacia/flautaDeSlov.mp3"
                },
                {
                    "nomeDaMusica" : "Music 11",
                    "local" : "./music/insoniaEValacia/music11.mp3"
                },
                {
                    "nomeDaMusica" : "Music 12",
                    "local" : "./music/insoniaEValacia/music12.mp3"
                },
                {
                    "nomeDaMusica" : "Music 13",
                    "local" : "./music/insoniaEValacia/music13.mp3"
                },
                {
                    "nomeDaMusica" : "Music 14",
                    "local" : "./music/insoniaEValacia/music14.mp3"
                },
            ],
            "links_e_opcoes_da_historia" : [
                {
                    "linkDaOpcao" : 0
                },
                {
                    "linkDaOpcao" : 1,
                    "opcoes" : [
                        {
                            "opcao" : "LINK 1",
                            "resposta": "Ir para 2",
                            "link" : 2,
                            "banner" : "",
                            "npc": "",
                            "stats": {
                                "hp": "0", // '-(N)' ou '(N)'
                                "lvl": "0", // '-(N)' ou '(N)'
                                "coins": "0", // '-(N)' ou '(N)'
                                "mana": "0", // '-(N)' ou '(N)'
                            },
                            "cmd": ["/msg;Bem-Vindo; Espero que goste desta história, não esqueca, você pode olhar o [Guia da História]"]
                        },
                        {
                            "opcao" : "LINK 1",
                            "resposta": "Ir para 2",
                            "link" : 2,
                            "banner" : "img/banner.png",
                            "npc": "",
                            "stats": {
                                "hp": "0", // '-(N)' ou '(N)'
                                "lvl": "0", // '-(N)' ou '(N)'
                                "coins": "0", // '-(N)' ou '(N)'
                                "mana": "0", // '-(N)' ou '(N)'
                            },
                            "cmd": []
                        },
                        {
                            "opcao" : "LINK 1",
                            "resposta": "Ir para 2",
                            "link" : 2,
                            "banner" : "",
                            "npc": "",
                            "stats": {
                                "hp": "0", // '-(N)' ou '(N)'
                                "lvl": "0", // '-(N)' ou '(N)'
                                "coins": "0", // '-(N)' ou '(N)'
                                "mana": "0", // '-(N)' ou '(N)'
                            },
                            "cmd": []
                        },
                        {
                            "opcao": "Desistir desta história.", 
                            "resposta": "...",
                            "link" : 0,
                            "banner" : "",
                            "npc": "",
                            "stats": {
                                "hp": "0", // '-(N)' ou '(N)'
                                "lvl": "0", // '-(N)' ou '(N)'
                                "coins": "0", // '-(N)' ou '(N)'
                                "mana": "0", // '-(N)' ou '(N)'
                            },
                            "cmd": []
                        }
                    ]
                },
                {
                    "linkDaOpcao" : 1,
                    "opcoes" : [
                        {
                            "opcao" : "LINK 2",
                            "resposta": "Ir para 1",
                            "link" : 1,
                            "banner" : "",
                            "npc": "",
                            "stats": {
                                "hp": "0", // '-(N)' ou '(N)'
                                "lvl": "0", // '-(N)' ou '(N)'
                                "coins": "0", // '-(N)' ou '(N)'
                                "mana": "0", // '-(N)' ou '(N)'
                            },
                            "cmd": []
                        },
                        {
                            "opcao" : "LINK 2",
                            "resposta": "Ir para 1",
                            "link" : 1,
                            "banner" : "",
                            "npc": "",
                            "stats": {
                                "hp": "0", // '-(N)' ou '(N)'
                                "lvl": "0", // '-(N)' ou '(N)'
                                "coins": "0", // '-(N)' ou '(N)'
                                "mana": "0", // '-(N)' ou '(N)'
                            },
                            "cmd": []
                        },
                        {
                            "opcao" : "LINK 2",
                            "resposta": "Ir para 1",
                            "link" : 1,
                            "banner" : "",
                            "npc": "",
                            "stats": {
                                "hp": "0", // '-(N)' ou '(N)'
                                "lvl": "0", // '-(N)' ou '(N)'
                                "coins": "0", // '-(N)' ou '(N)'
                                "mana": "0", // '-(N)' ou '(N)'
                            },
                            "cmd": []
                        },
                        {
                            "opcao": "Desistir desta história.", 
                            "resposta": "...",
                            "link" : 0,
                            "banner" : "",
                            "npc": "",
                            "stats": {
                                "hp": "0", // '-(N)' ou '(N)'
                                "lvl": "0", // '-(N)' ou '(N)'
                                "coins": "0", // '-(N)' ou '(N)'
                                "mana": "0", // '-(N)' ou '(N)'
                            },
                            "cmd": []
                        }
                    ]
                }
            ]
        }
    
    ]
}

// ==================================================================
// FUNCIONALIDADES DO PROGRAMA
// ==================================================================

    function mudaOpcoes() {
        opcao1Saida.textContent = `1: ${dados.historias[numeroDaHistoriaSelecionada].links_e_opcoes_da_historia[idDoLinkSelecionado].opcoes[0].opcao} `;
        opcao2Saida.textContent = `2: ${dados.historias[numeroDaHistoriaSelecionada].links_e_opcoes_da_historia[idDoLinkSelecionado].opcoes[1].opcao} `;
        opcao3Saida.textContent = `3: ${dados.historias[numeroDaHistoriaSelecionada].links_e_opcoes_da_historia[idDoLinkSelecionado].opcoes[2].opcao} `;
        opcao4Saida.textContent = `4: ${dados.historias[numeroDaHistoriaSelecionada].links_e_opcoes_da_historia[idDoLinkSelecionado].opcoes[3].opcao} `;
    };

    function statsAtualizar(HP, LVL, COINS, MANA) {

        elementoHP = document.getElementById("hp");
        elementoLVL = document.getElementById("lvl");
        elementoCOINS = document.getElementById("coins");
        elementoMANA = document.getElementById("mana");

        elementoHP.textContent = `HP: ${HP}`;
        elementoLVL.textContent = `Level: ${LVL}`;
        elementoCOINS.textContent = `Coins: ${COINS}`;
        elementoMANA.textContent = `Coins: ${MANA}`;
    }

    function alterarVisibilidade(elemento, visibilidade) {
        if(visibilidade == "esconder") {
            document.getElementById(elemento).classList.add("esconder");

        } else if("aparecer") {
            document.getElementById(elemento).classList.remove("esconder");
        }
    }

    function adiciona_informacoes_da_historia() {
        informacoes_da_historia = `
            <div class="informacoesDaHistoria">
                <div class="bannerDaHistoria">
                    <img src="${dados.historias[numeroDaHistoriaSelecionada].bannerDaHistoria}" alt="Banner da Historia">
                </div>
                <div class="descricaoContainer">
                    <p class="descricao">Descrição: ${dados.historias[numeroDaHistoriaSelecionada].descricao}</p>
                    <p class="descricao">Criado por: ${dados.historias[numeroDaHistoriaSelecionada].criador}</p>
                    <p class="descricao">Tempo estimado: ${dados.historias[numeroDaHistoriaSelecionada].tempoEstimado}</p>
                </div>
            </div>
        `;

        saidaHistoria.innerHTML = informacoes_da_historia;
        saidaHistoriaAnterior += informacoes_da_historia

        saidaHistoria.innerHTML = `
            ${saidaHistoriaAnterior}
            <p class="mensagemSistema rodarAnimacao">${dados.historias[numeroDaHistoriaSelecionada].mensagemInicial}</p>
        `;
        saidaHistoriaAnterior += `
            <p class="mensagemSistema rodarAnimacao">${dados.historias[numeroDaHistoriaSelecionada].mensagemInicial}</p>
        `;
    }


    // ==================================================================
    // SISTEMA DE BATALHA
    // ==================================================================

    // var nomeDoInimigo = document.getElementById("nomeDoInimigo");
    // var vidaInimigo = document.getElementById("vidaInimigo");
    // var inimigoImagem = document.getElementById("inimigoImagem");
    // var ataque = document.getElementById("ataque");
    // var acao = document.getElementById("acao");
    // var usarItem = document.getElementById("usarItem");
    // var enviarBatalha = document.getElementById("enviarBatalha");
    // var ataqueOptions = document.getElementById("ataqueOptions");
    // var acaoOptions = document.getElementById("acaoOptions");
    // var usarItemOptions = document.getElementById("usarItemOptions")
    // var infoBatalhas = document.getElementById("infoBatalhas");
    // var quadroDeBatalha = document.getElementById("quadroDeBatalha")

    // var idDaBatalha = undefined;

    // ataque.onclick = function() {
    //     alterarVisibilidade("ataqueOptions", "aparecer");
    //     alterarVisibilidade("acaoOptions", "esconder");
    //     alterarVisibilidade("usarItemOptions", "esconder");

    //     ataque.classList.add("optionsBattleBorder");
    //     acao.classList.remove("optionsBattleBorder");
    //     usarItem.classList.remove("optionsBattleBorder");
    // };
    // acao.onclick = function() {
    //     alterarVisibilidade("ataqueOptions", "esconder");
    //     alterarVisibilidade("acaoOptions", "aparecer");
    //     alterarVisibilidade("usarItemOptions", "esconder");

    //     ataque.classList.remove("optionsBattleBorder");
    //     acao.classList.add("optionsBattleBorder");
    //     usarItem.classList.remove("optionsBattleBorder");
    // };
    // usarItem.onclick = function() {
    //     alterarVisibilidade("ataqueOptions", "esconder");
    //     alterarVisibilidade("acaoOptions", "esconder");
    //     alterarVisibilidade("usarItemOptions", "aparecer");

    //     ataque.classList.remove("optionsBattleBorder");
    //     acao.classList.remove("optionsBattleBorder");
    //     usarItem.classList.add("optionsBattleBorder");
    // };

    // var opcaoSelecionadaBatalha = 0;
    // var animacaoAnteriorBatalha = "piscar";

    // function mandarBatalha() {

    //     alterarVisibilidade("ataqueOptions", "aparecer");
    //     alterarVisibilidade("acaoOptions", "esconder");
    //     alterarVisibilidade("usarItemOptions", "esconder");
    //     ataque.classList.add("optionsBattleBorder");
    //     acao.classList.remove("optionsBattleBorder");
    //     usarItem.classList.remove("optionsBattleBorder");

    //     infoBatalhas.innerHTML = `
    //         <h5>${dados.historias[numeroDaHistoriaSelecionada].batalha.personagem.ataque[opcaoSelecionadaBatalha].nomeDoAtaque}</h5>
    //         <p>${dados.historias[numeroDaHistoriaSelecionada].batalha.personagem.ataque[opcaoSelecionadaBatalha].informacoes}</p>
    //         <div>
    //             <p>Custo:</p>
    //             <p id="manaSave">MANA: ${dados.historias[numeroDaHistoriaSelecionada].batalha.personagem.ataque[opcaoSelecionadaBatalha].custoMana}</p>
    //         </div>
    //     `;

    //     quadroDeBatalha.classList.remove(animacaoAnteriorBatalha);
    //     animacaoAnteriorBatalha = dados.historias[numeroDaHistoriaSelecionada].batalha.personagem.ataque[opcaoSelecionadaBatalha].animacao
    //     quadroDeBatalha.classList.add(animacaoAnteriorBatalha);


        
    // }

    // enviarBatalha.onclick = mandarBatalha;

    // function batalha(idDaBatalha) {
    //     alterarVisibilidade("sectionHistoria", "esconder");
    //     alterarVisibilidade("sectionStats", "esconder");
    //     alterarVisibilidade("sectionOpcoes", "esconder")
    //    ; statsAtualizar(hp, lvl, coins, mana);
    // }

    // ==================================================================
    // SISTEMA DE BATALHA [FIM FIM FIM]
    // ==================================================================

    function comandos(HS, LDP, OP) {
        // HS ==> História selecionada.
        // LDP ==> Link da opção selecionada.
        // OP ==> Opção selecionada.

        var entradaComandos = dados.historias[HS].links_e_opcoes_da_historia[LDP].opcoes[OP].cmd

        for(let i = 0; i < entradaComandos.length; i++) {

            // Separa os argumentos do comando
            var comandoExecutavel = entradaComandos[i].split(";");

            if(comandoExecutavel[0] == "/msg") {

                alterarVisibilidade("msgInbox", "aparecer")
                var msgTitulo = document.getElementById("msgInbox")
                msgInbox.innerHTML = `
                <div class="animationMsgInbox">
                    <h4 id="msgTitulo">${comandoExecutavel[1]}</h4>
                    <p id="msgMensagem">${comandoExecutavel[2]}</p>
                </div>
                `;

            } else if(comandoExecutavel[0] == "/tocarmusica") {

                // NÂO EXISTE AINDA
                tocarMusica(comandoExecutavel[1])

            } else if(comandoExecutavel[0] == "/batalha") {

                if(dados.historias[numeroDaHistoriaSelecionada].batalhas == true) {
                    batalha(comandoExecutavel[2])
                } else {
                    console.log('O modo BATALHAS NÃO está ativado!')
                }

                
            }
        }

    }
    function mudaLinkOpcao(numero) {
        return dados.historias[numeroDaHistoriaSelecionada].links_e_opcoes_da_historia[idDoLinkSelecionado].opcoes[numero].link
    }
    function obtemOpcao(numero) {
        return dados.historias[numeroDaHistoriaSelecionada].links_e_opcoes_da_historia[idDoLinkSelecionado].opcoes[numero].opcao
    }
    function obtemResposta(numero) {
        return dados.historias[numeroDaHistoriaSelecionada].links_e_opcoes_da_historia[idDoLinkSelecionado].opcoes[numero].resposta
    }
    function obtemNPC(numero) {
        return dados.historias[numeroDaHistoriaSelecionada].links_e_opcoes_da_historia[idDoLinkSelecionado].opcoes[numero].npc
    }
    function obtemBanner(numero) {
        return dados.historias[numeroDaHistoriaSelecionada].links_e_opcoes_da_historia[idDoLinkSelecionado].opcoes[numero].banner
    }

    function mensagemEnviar(jogador, mensagemOpcao, npc, mensagemResposta, banner) {

        if(banner !== "" && banner !== undefined) {

            saidaHistoria.innerHTML = `
                ${saidaHistoriaAnterior}
                <div class="bannerContainer">
                       <img src="${banner}" alt="BANNER" class="banner rodarAnimacao">
                </div>
            `;

            saidaHistoriaAnterior += `
                <div class="bannerContainer">
                       <img src="${banner}" alt="BANNER" class="banner">
                </div>
            `;
        }

        saidaHistoria.innerHTML = `
            ${saidaHistoriaAnterior}
            <p class="mensagemJogador rodarAnimacao">${jogador} : ${mensagemOpcao}</p>
            <p class="mensagemSistema rodarAnimacao">${npc} ${mensagemResposta}</p>
        `;
        saidaHistoriaAnterior += `
            <p class="mensagemJogador">${jogador} : ${mensagemOpcao}</p>
            <p class="mensagemSistema">${npc} ${mensagemResposta}</p>
        `;
    }

    function creditos() {
        var resultadoFinal = `
            <p id="hp">HP: ${hp}</p>
            <p id="lvl">Level: ${lvl}</p>
            <p id="coins">Coins: ${coins}</p>
            <p id="mana">Mana: ${mana}</p>
        `;
        var creditosSaida = ``;

        for(let i0 = 0; i0 < dados.historias[numeroDaHistoriaSelecionada].creditos.principal.length; i0++) {
            creditosSaida += `<p class="credCriador">${dados.historias[numeroDaHistoriaSelecionada].creditos.principal[i0].contribuicao} : ${dados.historias[numeroDaHistoriaSelecionada].creditos.principal[i0].pessoa}</p>`;
        };
        creditosSaida += `
            <span class="separarCred"></span>
            <p class="credImg">Imagens:</p>
        `;
        for(let i1 = 0; i1 < dados.historias[numeroDaHistoriaSelecionada].creditos.imagens.length; i1++) {
            creditosSaida += `<p class="cred"> ${dados.historias[numeroDaHistoriaSelecionada].creditos.imagens[i1].contribuicao} : ${dados.historias[numeroDaHistoriaSelecionada].creditos.imagens[i1].pessoa}</p>`;
        };
        creditosSaida += `
            <span class="separarCred"></span>
            <p class="credMusic">Musicas:</p>
        `;
        for(let i2 = 0; i2 < dados.historias[numeroDaHistoriaSelecionada].creditos.music.length; i2++) {
            creditosSaida += `<p class="cred">${dados.historias[numeroDaHistoriaSelecionada].creditos.music[i2].contribuicao} : ${dados.historias[numeroDaHistoriaSelecionada].creditos.music[i2].pessoa}</p>`;
        };
        creditosSaida += `
            <span class="separarCred"></span>
            <p class="credAgr">Agradecimentos:</p>
        `;
        for(let i3 = 0; i3 < dados.historias[numeroDaHistoriaSelecionada].creditos.agradecimentos.length; i3++) {
            creditosSaida += `<p class="cred">${dados.historias[numeroDaHistoriaSelecionada].creditos.agradecimentos[i3].contribuicao} : ${dados.historias[numeroDaHistoriaSelecionada].creditos.agradecimentos[i3].pessoa}</p>`;
        };

        saidaHistoria.innerHTML = `
            ${saidaHistoriaAnterior}
            <div class="fimDeGame">
                <div class="resultadoFinal"><h3>Resultado Final:</h3>
                    ${resultadoFinal}
                </div>
                <div class="creditos" id="creditos">
                    ${creditosSaida}
                </div>
            </div>
        `;
    }

    function saveGame(tipo, acessarKey) {

        if(tipo == "get") {
            if(acessarKey == "save_game" || acessarKey == "" || acessarKey == undefined) {
                return localStorage.getItem("save_game");

            } else if(acessarKey == "game_salvo") {
                return localStorage.getItem("game_salvo");

            } else if(acessarKey == "name_player") {
                return localStorage.getItem("name_player");

            } else if(acessarKey == "hp_player") {
                return localStorage.getItem("hp_player");

            } else if(acessarKey == "lvl_player") {
                return localStorage.getItem("lvl_player")

            } else if(acessarKey == "coins_player") {
                return localStorage.getItem("coins_player");

            } else if(acessarKey == "mana_player") {
                return localStorage.getItem("mana_player");

            } else if(acessarKey == "itens_player") {
                return localStorage.getItem("itens_player");

            } else if(acessarKey == "name_history") {
                return localStorage.getItem("name_history");

            } else if(acessarKey == "link_history") {
                return localStorage.getItem("link_history");

            } else if(acessarKey == "N_history") {
                return localStorage.getItem("N_history");
            }
           

        } else if(tipo == "gravar") {
            localStorage.setItem("game_salvo", true);

            nomeDaHistoriaSelecionada = dados.historias[numeroDaHistoriaSelecionada].nomeDaHistoria;

            localStorage.setItem("name_history", nomeDaHistoriaSelecionada);
            localStorage.setItem("save_game", saidaHistoriaAnterior);
            localStorage.setItem("link_history", idDoLinkSelecionado);
            localStorage.setItem("N_history", numeroDaHistoriaSelecionada);

            localStorage.setItem("name_player", nomeDoJogador);
            localStorage.setItem("itens_player", itens);
            localStorage.setItem("hp_player", hp);
            localStorage.setItem("lvl_player", lvl)
            localStorage.setItem("coins_player", coins);
            localStorage.setItem("mana_player", mana)

        } else if(tipo == "clear") {
            localStorage.clear()
            localStorage.setItem("game_salvo", false);
            console.log('O saveGame da história foi DELETADO!')
        }
    }

    function visualizarJogoSalvo() {

        if(saveGame("get", "game_salvo") == "true") {

            alterarVisibilidade("sectionEscolherHistoria", "esconder");
            alterarVisibilidade("sectionCarregarGame", "aparecer");
        
            document.getElementById("historiaSave").textContent = saveGame("get", "name_history");
            document.getElementById("hpSave").textContent = `HP: ${saveGame("get", "hp_player")}`;
            document.getElementById("lvlSave").textContent = `LVL: ${saveGame("get", "lvl_player")}`;
            document.getElementById("coinsSave").textContent = `COINS: ${saveGame("get", "coins_player")}`;
            document.getElementById("manaSave").textContent = `MANA: ${saveGame("get", "mana_player")}`;

            document.getElementById("nameSave").textContent = saveGame("get", "name_player");
            document.getElementById("linkSave").textContent = `Link: ${saveGame("get", "link_history")}`;
        
        } else if(saveGame("get", "game_salvo") == "false") {
            alterarVisibilidade("sectionEscolherHistoria", "aparecer");
            alterarVisibilidade("sectionCarregarGame", "esconder");

        }
    }

    function carregaSave() {
        alterarVisibilidade("sectionCarregarGame", "esconder");

        saidaHistoriaAnterior = saveGame("get", "save_game");
        idDoLinkSelecionado = saveGame("get", "link_history");
        nomeDoJogador = saveGame("get", "name_player");
        itens = saveGame("get", "itens_player");
        nomeDaHistoria = saveGame("get", "name_history");
        numeroDaHistoriaSelecionada = saveGame("get", "N_history");

        hp = saveGame("get", "hp_player");
        lvl = saveGame("get", "lvl_player");
        coins = saveGame("get", "coins_player");
        mana = saveGame("get", "mana_player");

        saidaHistoria.innerHTML = `
            ${saidaHistoriaAnterior}
        `;

        alterarVisibilidade("sectionEscolherHistoria", "esconder");
        alterarVisibilidade("sectionHistoria", "aparecer");
        alterarVisibilidade("sectionStats", "aparecer");
        alterarVisibilidade("sectionOpcoes", "aparecer");
        alterarVisibilidade("sectionAudio", "aparecer");

        mudaOpcoes(numeroDaHistoriaSelecionada)
        statsAtualizar(hp, lvl, coins, mana);
        nomeDaHistoriaTitulo.textContent = saveGame("get", "name_history")

        pegaMusicas();
    }


// ==================================================================
// FUNÇOES DA HISTÓRIA
// ==================================================================


    function encerraHistoria() {
        mensagemEnviar(
                nomeDoJogador,
                obtemOpcao(3),
                obtemNPC(3),
                obtemResposta(3),
                obtemBanner(3)
        )
        alterarVisibilidade("sectionDeConfirmacaoDesistir", "esconder");
        saveGame("clear");
        creditos();
    }
    function voltarHistoria() {
        alterarVisibilidade("sectionStats", "aparecer");
        alterarVisibilidade("sectionOpcoes", "aparecer");
        alterarVisibilidade("sectionDeConfirmacaoDesistir", "esconder");
    }

    function encerrarConfirmar() {
        alterarVisibilidade("sectionStats", "esconder");
        alterarVisibilidade("sectionOpcoes", "esconder");
        alterarVisibilidade("sectionDeConfirmacaoDesistir", "aparecer")
    }

    function iniciarHistoria() {

        // Prepara toda a história a ser apresentada
        // Essa function só é executada UMA VEZ!

        // Pega o nome informado pelo jogador
        nomeDoJogador = document.getElementById("nomeDoJogador").value;

        if(nomeDoJogador == "") {
            avisoDeFaltaDeNome.textContent = "Por favor informe um nome para jogar!"
        } else {
            saveGame("clear");

            var selecionarHistoria = document.getElementById("selecionarHistoria").value;
            numeroDaHistoriaSelecionada = parseInt(selecionarHistoria);
            nomeDaHistoriaTitulo.textContent = dados.historias[numeroDaHistoriaSelecionada].nomeDaHistoria
            nomeDaHistoriaSelecionada = dados.historias[numeroDaHistoriaSelecionada].nomeDaHistoria
            adiciona_informacoes_da_historia()

            alterarVisibilidade("sectionEscolherHistoria", "esconder");
            alterarVisibilidade("sectionHistoria", "aparecer");
            alterarVisibilidade("sectionStats", "aparecer");
            mudaOpcoes(numeroDaHistoriaSelecionada)
            alterarVisibilidade("sectionOpcoes", "aparecer");

            if(dados.historias[numeroDaHistoriaSelecionada].audio == true) {
                alterarVisibilidade("sectionAudio", "aparecer");
                pegaMusicas();
            }
        
            // Pega os Status da história nos dados.
            hp = dados.historias[numeroDaHistoriaSelecionada].hp
            lvl = dados.historias[numeroDaHistoriaSelecionada].lvl
            coins = dados.historias[numeroDaHistoriaSelecionada].coins
            mana = dados.historias[numeroDaHistoriaSelecionada].mana
            statsAtualizar(hp, lvl, coins, mana);
            saveGame("gravar");
        }
    }

    function historiaEXE() {

        if(opcaoSelecionada == 0) {
            comandos(numeroDaHistoriaSelecionada, idDoLinkSelecionado, 0)

            mensagemEnviar(
                nomeDoJogador,
                obtemOpcao(0),
                obtemNPC(0),
                obtemResposta(0),
                obtemBanner(0)
            )

            idDoLinkSelecionado = mudaLinkOpcao(0)

        } else if(opcaoSelecionada == 1) {
            comandos(numeroDaHistoriaSelecionada, idDoLinkSelecionado, 1)
            
            mensagemEnviar(
                nomeDoJogador,
                obtemOpcao(1),
                obtemNPC(1),
                obtemResposta(1),
                obtemBanner(1) 
            )

            idDoLinkSelecionado = mudaLinkOpcao(1)

        } else if(opcaoSelecionada == 2) {
            comandos(numeroDaHistoriaSelecionada, idDoLinkSelecionado, 2)
            
            mensagemEnviar(
                nomeDoJogador,
                obtemNPC(2),
                obtemResposta(2),
                obtemBanner(2)
            )

            idDoLinkSelecionado = mudaLinkOpcao(2)
        
        } else if(opcaoSelecionada == 3) {
            comandos(numeroDaHistoriaSelecionada, idDoLinkSelecionado, 3)
            
            if(obtemOpcao(3) == "Desistir desta história." || obtemOpcao(3) == "Desistir." || obtemResposta(3) == "Desistiu..." || obtemOpcao(3) == "Desistiu") {

                encerrarConfirmar()
            } else {
                mensagemEnviar(
                    nomeDoJogador,
                    obtemOpcao(3),
                    obtemNPC(3),
                    obtemResposta(3),
                    obtemBanner(3)
                )
                idDoLinkSelecionado = mudaLinkOpcao(3)
            }
            
        }
        mudaOpcoes()
    }

// ==================================================================
// AUDIO CONTROLLER FUNCTIONS
// ==================================================================

    function pegaMusicas() {
        for(let i = 0; i < dados.historias[numeroDaHistoriaSelecionada].playlistMusicas.length; i++) {
            playlistMusicasNome.push(dados.historias[numeroDaHistoriaSelecionada].playlistMusicas[i].nomeDaMusica);
        };
        for(let i = 0; i < dados.historias[numeroDaHistoriaSelecionada].playlistMusicas.length; i++) {
            localDaMusica.push(dados.historias[numeroDaHistoriaSelecionada].playlistMusicas[i].local);
        };
    }
    
    var audio = document.getElementById("audioMusica");

    var tituloDaMusica = document.getElementById("tituloDaMusica")    
    var tocarMusica = document.getElementById("audioMusicaPlay");
    var pausarMusica = document.getElementById("audioMusicaPause");
    var loopMusica = document.getElementById("audioMusicaLoop");
    var muteMusica = document.getElementById("muteMusica");
    var mudarMusica = document.getElementById("mudarMusica");
    var volumeControler = document.getElementById("volumeControler");

    var volumeNumber = 0.5
    
    var estadoDoLoop = true;
    var estadoMute = true;
    var musicaSelecionada = 0;
    
    function playMusica() {
        audio.src = localDaMusica[musicaSelecionada];
        audio.play();
        audio.volume = volumeNumber;
        if(estadoDoLoop == true) {
            audio.loop = true
            loopMusica.textContent = "Loop (Sim)";
        }
    }
    tocarMusica.onclick = playMusica;


    pausarMusica.onclick = function() {
        audio.pause();
    }
    loopMusica.onclick = function() {
        if(estadoDoLoop == true) {
            audio.loop = false;
            loopMusica.textContent = "Loop (Não)";
            estadoDoLoop = false;
    
        } else if(estadoDoLoop == false) {
            audio.loop = true
            loopMusica.textContent = "Loop (Sim)";
            estadoDoLoop = true;
        }
    }
    volumeControler.onchange = function() {

        if(volumeControler.valueAsNumber < 10) {
            volumeNumber = "0." + volumeControler.valueAsNumber;
        } else if(volumeControler.valueAsNumber == 10) {
            volumeNumber = 1;
        }
        audio.volume = volumeNumber;
    }

    function proximaMusica() {
        musicaSelecionada++;

        if(musicaSelecionada < playlistMusicasNome.length) {
            mudarMusica.textContent = `Próxima =>`;
            tituloDaMusica.textContent = `${playlistMusicasNome[musicaSelecionada]}`;
            playMusica();
            
        } else if(musicaSelecionada >= playlistMusicasNome.length) {
            mudarMusica.textContent = `Acabou! :(`;
        }
    };

    mudarMusica.onclick = proximaMusica;
    mudarMusica.textContent = `Próxima => ${playlistMusicasNome[musicaSelecionada +1]}`;
    mudarMusica.textContent = `Próxima =>`;
    var audioControlerButton = document.getElementById("audioControlerButton");
    var audioControlerContainer = document.getElementById("audioControlerContainer");
    var escondido = true;
    audioControlerButton.onclick = function() {

        tituloDaMusica.textContent = `${playlistMusicasNome[musicaSelecionada]}`;
        pegaMusicas();

        if(escondido == true) {
            audioControlerContainer.classList.remove("audioControlerEsconder");
            audioControlerContainer.classList.add("audioControlerMobile");
            escondido = false;

        } else if(escondido == false) {
            audioControlerContainer.classList.remove("audioControlerMobile");
            audioControlerContainer.classList.add("audioControlerEsconder");
            escondido = true;
        }    
    }
    
// ==================================================================
// EXECUÇÃO DO PROGRAMA (ONCLICK USER)
// ==================================================================

    enviarHistoria.onclick = iniciarHistoria;

    opcao1Saida.onclick = function() {
        opcaoSelecionada = 0;
        opcaoSelecionadaMostrar.textContent = "Opção selecionada: 1";
    }
    opcao2Saida.onclick = function() {
        opcaoSelecionada = 1;
        opcaoSelecionadaMostrar.textContent = "Opção selecionada: 2";
    }
    opcao3Saida.onclick = function() {
        opcaoSelecionada = 2;
        opcaoSelecionadaMostrar.textContent = "Opção selecionada: 3";
    }
    opcao4Saida.onclick = function() {
        opcaoSelecionada = 3;
        opcaoSelecionadaMostrar.textContent = "Opção selecionada: 4";
    }

    enviarOpcao.onclick = function() {
        historiaEXE();
        saveGame("clear");
        saveGame("gravar");
    } ;

    escolhaNao.onclick = voltarHistoria;
    escolhaSim.onclick = encerraHistoria;

    carregarGameOptionNewHistory.onclick = function() {
        alterarVisibilidade("sectionEscolherHistoria", "aparecer");
        alterarVisibilidade("sectionCarregarGame", "esconder");
        saveGame("clear");
    }
    carregarGameOptionSim.onclick = carregaSave;
    visualizarJogoSalvo()
    

    // Linha Final
    // console.log("Carregado o script!")
