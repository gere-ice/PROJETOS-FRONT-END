// esse é um comentário 
/*
O que precisamos fazer? - Quando passar o mouse em cima do personagem na lista temos que  adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome eo texto grande do personagem que está selecionado

OBJETIVO 1 - Quando passar o mouse em cima do personagem na listagem, devemos seleciona-lo
PASSO 1 - Pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles

PASSO 2 - Adicionar a classe selecionando o personagem que o usuário passar o cursor do mouse

PASSO 3 - Verificar se ja exista um personagem selecionado, se sim, devemos remover a seleção dele

OBJETIVO 2 - Quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
PASSO 1 - Pegar o elemento do personagem grande para adicionar as informações nele
PASSO 2 - Alterar a imagem do personagem grande
PASSO 3 - Alterar o nome do personagem grande
PASSO 4 - Alterar a descrição do personagem grande
*/
// OBJETIVO 1 - Quando passar o mouse em cima do personagem na listagem, devemos seleciona-lo
// PASSO 1 - Pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll('.personagem');

//PASSO 2 - Adicionar a classe selecionando o personagem que o usuário passar o cursor do mouse

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

         //PASSO 3 - Verificar se ja existe um personagem selecionado, se sim, devemos remover a seleção dele
         removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        //OBJETIVO 2 - Quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        
        //PASSO 1 - Pegar o elemento do personagem grande para adicionar as informações nele
        alterarImagemPersonagemSelecionado(personagem);

        //PASSO 3 - Alterar o nome do personagem grande
        alterarNomePersonagemSelecionado(personagem);

        //PASSO 4 - Alterar a descrição do personagem grande
        alterarDescricaoPersonagem(personagem);

       
    })
})



function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    //PASSO 2 - Alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

