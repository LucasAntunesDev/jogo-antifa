const $ = (parametro) => {
    return document.querySelector(parametro)
}

const $$ = (parametro) => {
    return document.querySelectorAll(parametro)
}

const questoes = [
    {
        questão: 1,
        pergunta: 'O nome Partido Nacional-Socialista dos Trabalhadores Alemães significa que o Nazismo é de esquerda?',
        alternativas: [
            {número:  1, texto: 'Sim'},
            {número:  2, texto: 'Não'},
    ],
        resposta: 2,
        explicacacao: 'O sentido da palavra "socialista" usado pelos nazistas é diferente da usada por partidários de esquerda.'
    },
    {
        questão: 2,
        pergunta: 'Por qual razão camadas da população consideradas moderadas, como partidos da direita tradicional e o empresariado apoiaram ideias tão radicais como as do fascismo?',
        alternativas: [
            {número:  1, texto: 'Medo do Comunismo'},
            {número:  2, texto: 'Sei lá'},
    ],
        resposta: 1,
        explicacacao: 'Ainda que muitos "torcessem o nariz" para os nazistas, consideravam um perigo maior o comunismo do que o nazismo. Ainda para alguns, era possível "domar" os nazistas, moderando-os.'
    },
]

const nomeUsuario = $('#nome-usuario')
const usuario = localStorage.getItem('usuario')
nomeUsuario.innerHTML = usuario != '' || usuario != null ? 'Usuário: ' + usuario : 'Usuário: '
console.log(usuario)

// Função para embaralhar as perguntas
// const sortearQuestoes = () => {
//     const numeroQuestoes = 5

//     for (let i = 0; i <= 5; i++) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [questoes[i], questoes[j]] = [questoes[j], questoes[i]];
//     }
// };

let questaoAtual = 0
let acertos = 0
$('#acertos').innerHTML = `Acertos: ${acertos}`

const exibirQuestao = () => {
    const questao = questoes[questaoAtual]
    $('#numero-questao').innerHTML = `Questão # ${questao.questão}`
    $('#texto-questao').innerHTML = questao.pergunta

    const alternativasDiv = $('#alternativas')

    questao.alternativas.forEach((alternativa) => {
        const label = document.createElement('label');
        label.innerHTML = `<span class="flex row w-fit questao-span hover"><input type="radio" name="resposta" value="${alternativa.número}"> ${alternativa.texto}</span>`
        alternativasDiv.appendChild(label)
    });
};

const verificarResposta = () => {
    const pergunta = questoes[questaoAtual]

    const respostaUsuario = $('input[name="resposta"]:checked')
    const mensagemErro = $('#erro').classList
    mensagemErro.contains('hidden') ? mensagemErro.remove('hidden') : mensagemErro.add('hidden')

    const resposta = $('#resposta')
    const textoResposta = $('#texto-resposta')
    textoResposta.innerHTML = pergunta.explicacacao
    resposta.classList.toggle('hidden')

    if (respostaUsuario) {
        // $(input[type="checked"]).forEach((i) => {
        //     i.disabled = true
        // })   

        const resposta = respostaUsuario.value
        const condicao = pergunta.resposta == resposta
        const resultado = condicao ? 1 : 0

        console.log(respostaUsuario.parentElement)
        condicao ? respostaUsuario.parentElement.classList.add('resposta-certa') : respostaUsuario.parentElement.classList.add('resposta-errada')

        if (condicao) acertos++
        // console.log($$('input[type=radio]').parentElement)
        document.querySelectorAll('input[type=radio]').forEach(e => {
            e.parentElement.classList.add('hidden')
        })
        // if (condicao) questaoAtual++
        $('#acertos').innerHTML = `Acertos: ${acertos}`

        // Avança para a próxima questão ou finaliza o quiz
        questaoAtual++
        console.log(questoes.length)
        if (questaoAtual < questoes.length) exibirQuestao()
        else {
            const percentualAcertos = (acertos / questoes.length) * 100
            
            $('#responder-btn').classList.add('hidden')
            // $('#questao').innerHTML = 'Fim do Quiz'
            $('#alternativas').innerHTML = ''
            const questaoContainer =  $('#questao-container')

            const btnFim = document.createElement('button')
            btnFim.innerHTML = 'Finalizar jogo'
            questaoContainer.appendChild(btnFim)

            btnFim.addEventListener('click', () => {
                questaoContainer.classList.add('hidden')
                $('#jogo-stats').classList.remove('hidden')
                $('#porcentagem-acertos').innerHTML = `Você acertou ${acertos} de ${questoes.length} questões (${percentualAcertos.toFixed(2)}%).`
            })

        }
    } else {
        $('#erro').classList.remove('hidden')
    }
};

exibirQuestao()