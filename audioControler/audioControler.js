        // Musica

        function playSound(url, modo){
            var audio = document.createElement('audio');
            audio.style.display = "none";
            audio.src = url;
            audio.autoplay = true;
            if(modo == "loop") {
                audio.loop = true;
            } else  if(modo == "pause") {
                audio.pause();
            }
            audio.onended = function(){
              audio.remove() //Remove when played.
            };
            document.body.appendChild(audio);
        };
    
        var musicaASerTocada = [
            "./music/musicBackgroudPrincipal.mp3",
            "./music/music1.mp3",
            // "./music/music2.mp3",
            // "./music/music3.mp3",
            // "./music/music4.mp3",
            "./music/5musicaDoWoodiks.mp3",
            // "./music/music6.mp3",
            // "./music/music7.mp3",
            "./music/music8.mp3",
            "./music/music9.mp3",
            "./music/music10.mp3",
            "./music/musicaDeSlov.mp3",
            "./music/music11.mp3",
            "./music/music12.mp3"
        ];
        var playListMusica = [
            "Vale dos Zoglins", // 0
            "Dança das Aranhas", // 1
            // "2", // 2
            // "3", // 3
            // "4", // 4
            "Música do Woodiks", // 5
            // "6",
            // "7",
            "Music 8",
            "Música do Palacio de Valácia",
            "Música do Rei de Insônia",
            "Flauta de Slov",
            "Musica 11",
            "Music 12"
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

        function proximaMusica() {
            musicaSelecionada++;

            if(musicaSelecionada < playListMusica.length) {
                // mudarMusica.textContent = `Próxima => ${playListMusica[musicaSelecionada + 1]}`;
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

        // function tocarSom(entrada) {
    
        //     if(entrada == 5){
        //         setInterval(playSound("./music/music5.mp3"), 51000)
        //     }
        // }

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