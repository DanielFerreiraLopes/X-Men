//busca um id do html:
//document.getElementById('ciclope');

//busca todas os id com a classe personagem:
const personagens = document.querySelectorAll('.personagem');

//seleciona o os personagens do cursor
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {
        
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`

        //Altera nome: 
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        //Altera descricao:
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})