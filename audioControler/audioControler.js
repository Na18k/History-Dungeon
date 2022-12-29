    function pegaAudios(oque) {
        var saidaAudio = [];

        if(oque == "nome") {

            for(let i = 0; i < dados.historias[numeroDaHistoriaSelecionada].playlistMusicas.length; i++) {
                saidaAudio.push(dados.historias[numeroDaHistoriaSelecionada].playlistMusicas[i].nomeDaMusica);
            };

        } else if(oque == "local") {

            for(let i = 0; i < dados.historias[numeroDaHistoriaSelecionada].playlistMusicas.length; i++) {
                saidaAudio.push(dados.historias[numeroDaHistoriaSelecionada].playlistMusicas[i].local);
            };
        }
        return saidaAudio;
    }
    
        var musicaASerTocada = [
            "./music/valeDosZoglins.mp3",
            "./music/dancaDasAranhas.mp3",
            "./music/musicaDoWoodiks.mp3",
            "./music/music8.mp3",
            "./music/musicaDoPalaciodeValacia.mp3",
            "./music/musicaDoReiDeInsonia.mp3",
            "./music/flautaDeSlov.mp3",
            "./music/music11.mp3",
            "./music/music12.mp3",
            "./music/music13.mp3",
            "./music/music14.mp3"
        ];
        var playListMusica = [
            "Vale dos Zoglins", // 0
            "Dança das Aranhas", // 1
            "Música do Woodiks", // 5
            "Music 8",
            "Música do Palacio de Valácia",
            "Música do Rei de Insônia",
            "Flauta de Slov",
            "Musica 11",
            "Music 12",
            "Music 13",
            "Music 14"

        ]
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

        tituloDaMusica.textContent = `${playListMusica[musicaSelecionada]}`;
    
        function playMusica() {
            audio.src = musicaASerTocada[musicaSelecionada];
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

            if(musicaSelecionada < playListMusica.length) {

                mudarMusica.textContent = `Próxima =>`;
                tituloDaMusica.textContent = `${playListMusica[musicaSelecionada]}`;
                playMusica();
            
            } else if(musicaSelecionada >= playListMusica.length) {
                mudarMusica.textContent = `Acabou! :(`;
            }
        };

        mudarMusica.onclick = proximaMusica;
        mudarMusica.textContent = `Próxima => ${playListMusica[musicaSelecionada +1]}`;
        mudarMusica.textContent = `Próxima =>`;

        var audioControlerButton = document.getElementById("audioControlerButton");
        var audioControlerContainer = document.getElementById("audioControlerContainer");

        var escondido = true;
        audioControlerButton.onclick = function() {

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