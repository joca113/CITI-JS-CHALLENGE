const character = document.getElementsByClassName("character")[0]; //Pega do HTML tudo que está na classe character.
const containerCharacter = document.getElementsByClassName("container-character")[0]; //Pega do HTML tudo que está na classe container-character.


const VELOCITY = 10; //Cria uma constante que servirá para definir quantos pixels serão alterados a cada ação, dando uma idéia de velocidade.

const SCREEN_WIDTH = screen.width; //Retorna a largura da tela.
const SCREEN_HEIGHT = screen.height; //Retorna a altura da tela.

let xPosition = 500; //Variável que define onde o jogador está no momento segundo o eixo X.
let yPosition = 300; //Variável que define onde o jogador está no momento segundo o eixo Y.

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"] //Teclas que influenciam no jogo.
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"]; //Ações disponíveis no jogo.

window.addEventListener("keydown", (event) => { //Caso alguma tecla seja clicada, entra nessa parte do código.
    const key  = event.key; //key recebe a informação de qual tecla foi pressionada.

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => { //Verifica se a tecla pressionada está em 'keysAvaiable'
        return currentKey === key; //Caso verdade, retorna a tecla pressionada.
    })

    if(!keyPressedAvaiable) return; //Caso não haja retorno.

    directions.forEach((direction) => { //Verifica cada item de 'direction'.
        if(character.classList.contains(direction)) character.classList.remove(direction); //Remove a direção caso já haja uma.
    })


    if(key === "ArrowUp"){ //Caso a tecla pressionada seja 'ArrowUp'.
        character.classList.add("turnUp"); //Ativa a animação para cima.
        yPosition -= VELOCITY; //O jogador se movimenta para cima.
        if(yPosition < 0){ //Caso a posição do jogador ultrapasse a borda superior da tela...
            yPosition = 0 //...ele retorna a borda superior da tela.
        }
    }

    if(key === "ArrowDown"){ //Caso a tecla pressionada seja 'ArrowDown'.
        character.classList.add("turnDown"); //Ativa a animação para baixo.
        yPosition += VELOCITY; //O jogador se movimenta para baixo.
        if(yPosition > (SCREEN_HEIGHT - 190)){ //Caso a posição do jogador ultrapasse a borda inferior da tela...
            yPosition = SCREEN_HEIGHT - 190 //...ele retorna a borda inferior da tela.
        }
    }

    if(key === "ArrowLeft"){ //Caso a tecla pressionada seja 'ArrowLeft'.
        character.classList.add("turnLeft"); //Ativa a animação para a esquerda.
        xPosition -= VELOCITY; //O jogador se movimenta para a esquerda.
        if(xPosition < 0){ //Caso a posição do jogador ultrapasse a borda esquerda da tela...
            xPosition = 0 //...ele retorna a borda esquerda da tela.
        }
    }

    if(key === "ArrowRight"){ //Caso a tecla pressionada seja 'ArrowRight'
        character.classList.add("turnRight"); //Ativa a animação para a direita.
        xPosition += VELOCITY; //O jogador se movimenta para a direita.
        if(xPosition > (SCREEN_WIDTH - 120)){ //Caso a posição do jogador ultrapasse a borda direita da tela...
            xPosition = SCREEN_WIDTH - 120 //...ele retorna a borda direita da tela.
        }
    }

    containerCharacter.style.top = `${yPosition}px`; //Faz com que o desenho do jogador se mova de acordo com a sua posição no eixo X.
    containerCharacter.style.left = `${xPosition}px` //Faz com que o desenho do jogador se mova de acordo com a posição no wixo Y.
});
