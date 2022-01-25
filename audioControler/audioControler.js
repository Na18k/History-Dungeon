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
            "./music/music2.mp3",
            "./music/music3.mp3",
            "./music/music4.mp3",
            "./music/music5.mp3",
            "./music/music6.mp3",
            "./music/music7.mp3",
            "./music/music8.mp3",
            "./music/music9.mp3",
            "./music/music10.mp3"
        ];
        var playListMusica = [
            "Vale dos Zoglins", // 0
            "Dança das Aranhas", // 1
            "2", // 2
            "3", // 3
            "4", // 4
            "Música do Wood", // 5
            "6",
            "7",
            "8",
            "Música do Palacio de Valácia",
            "Música do Rei de Inônia"
        ]
        var audio = document.getElementById("audioMusica");

        var tituloDaMusica = document.getElementById("tituloDaMusica")    
        var tocarMusica = document.getElementById("audioMusicaPlay");
        var pausarMusica = document.getElementById("audioMusicaPause");
        var loopMusica = document.getElementById("audioMusicaLoop");
        var muteMusica = document.getElementById("muteMusica");
        var mudarMusica = document.getElementById("mudarMusica");
    
        var estadoDoLoop = true;
        var estadoMute = true;
        var musicaSelecionada = 0;

        tituloDaMusica.textContent = `${playListMusica[musicaSelecionada]}`;
    
        tocarMusica.onclick = function() {
            audio.src = musicaASerTocada[musicaSelecionada];
            audio.play();
            if(estadoDoLoop == true) {
                audio.loop = true
            }
        }
        pausarMusica.onclick = function() {
            audio.pause();
        }
        loopMusica.onclick = function() {
            if(estadoDoLoop == false) {
                audio.loop = false;
                loopMusica.textContent = "Loop (Não)";
                estadoDoLoop = true;
    
            } else if(estadoDoLoop == true) {
                audio.loop = true
                loopMusica.textContent = "Loop (Sim)";
                estadoDoLoop = false;
            }
        }
        muteMusica.onclick = function() {
            if(estadoMute == true) {
                audio.volume = 0;
                muteMusica.textContent = "Mute (Sim)";
                estadoMute = false;
    
            } else if(estadoMute == false) {
                audio.volume = 1;
                muteMusica.textContent = "Mute (Não)";
                estadoMute = true;
            }
            
        }

        function proximaMusica() {
            musicaSelecionada++;

            mudarMusica.textContent = `Próxima => ${playListMusica[musicaSelecionada + 1]}`;
            tituloDaMusica.textContent = `${playListMusica[musicaSelecionada]}`;
        };

        mudarMusica.onclick = proximaMusica;

        mudarMusica.textContent = `Próxima => ${playListMusica[musicaSelecionada +1]}`;
    
        // function tocarSom(entrada) {
    
        //     if(entrada == 5){
        //         setInterval(playSound("./music/music5.mp3"), 51000)
        //     }
        // }