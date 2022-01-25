function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const sistema = document.querySelector('.mensagemJogador');
const jogador = document.querySelector('.mensagemJogador');
typeWrite(sistema);
typeWrite(jogador);
