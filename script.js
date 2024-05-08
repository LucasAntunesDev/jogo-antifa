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
            { número: 1, texto: 'Sim' },
            { número: 2, texto: 'Não' },
        ],
        resposta: 2,
        explicacacao: 'O sentido da palavra "socialista" usado pelos nazistas é diferente da usada por partidários de esquerda.'
    },
    {
        questão: 2,
        pergunta: 'Por qual razão camadas da população consideradas moderadas, como partidos da direita tradicional e o empresariado apoiaram ideias tão radicais como as do fascismo?',
        alternativas: [
            { número: 1, texto: 'Medo do Comunismo' },
            { número: 2, texto: 'Sei lá' },
        ],
        resposta: 1,
        explicacacao: 'Ainda que muitos "torcessem o nariz" para os nazistas, consideravam um perigo maior o comunismo do que o nazismo. Ainda para alguns, era possível "domar" os nazistas, moderando-os.'
    },
]

const nomeUsuario = $('#nome-usuario')
const usuario = localStorage.getItem('usuario')
nomeUsuario.innerHTML = usuario != '' || usuario != null ? 'Usuário: ' + usuario : 'Usuário: '

let questaoAtual = 0
let acertos = 0
$('#acertos').innerHTML = `Acertos: ${acertos}`

const exibirQuestao = () => {
    const questao = questoes[questaoAtual]
    $('#numero-questao').innerHTML = `Questão #${questao.questão}`
    $('#texto-questao').innerHTML = questao.pergunta

    const alternativasDiv = $('#alternativas')

    questao.alternativas.forEach((alternativa) => {
        const label = document.createElement('label');
        label.innerHTML = `<span class="flex row w-fit questao-span hover">
            <input type="radio" name="resposta" value="${alternativa.número}"> ${alternativa.texto}
        </span>`
        alternativasDiv.appendChild(label)
    });

};

const verificarResposta = () => {
    let nenhumaRespostaMarcada = 1

    document.querySelectorAll('input[type=radio]').forEach(r => {
        r.checked ? nenhumaRespostaMarcada = 0 : 1
    })

    if (nenhumaRespostaMarcada === 1) {
        $('#erro').classList.remove('hidden')
        return
    }

    const pergunta = questoes[questaoAtual]

    const respostaUsuario = $('input[name="resposta"]:checked')
    const mensagemErro = $('#erro')
    mensagemErro.classList.contains('hidden') ? mensagemErro.classList.remove('hidden') : mensagemErro.classList.add('hidden')

    const resposta = $('#resposta')
    const textoResposta = $('#texto-resposta')
    textoResposta.innerHTML = pergunta.explicacacao
    resposta.classList.toggle('hidden')

    if (respostaUsuario) {
        const resposta = respostaUsuario.value
        const condicao = pergunta.resposta == resposta
        const resultado = condicao ? 1 : 0

        console.log(respostaUsuario.parentElement)
        condicao ? respostaUsuario.parentElement.classList.add('resposta-certa') : respostaUsuario.parentElement.classList.add('resposta-errada')

        if (condicao) acertos++

        document.querySelectorAll('input[type=radio]').forEach(e => {
            e.parentElement.classList.add('hidden')
            e.checked = false
        })

        $('#acertos').innerHTML = `Acertos: ${acertos}`

        questaoAtual++
        console.log(questoes.length)
        const proximoBtn = document.createElement('button')
        proximoBtn.innerHTML = questaoAtual < questoes.length ? 'PRÓXIMO' : 'Finalizar'
        $('#questao-container').appendChild(proximoBtn)

        proximoBtn.addEventListener('click', () => {
            proximoBtn.classList.add('hidden')
            textoResposta.innerHTML = ''
            $('#resposta').classList.contains('hidden') ? '' : $('#resposta').classList.add('hidden')

            if (questaoAtual < questoes.length) exibirQuestao()
            else {
                const percentualAcertos = (acertos / questoes.length) * 100
                $('#responder-btn').classList.add('hidden')

                $('#alternativas').innerHTML = ''
                const questaoContainer = $('#questao-container')

                const btnFim = document.createElement('button')
                btnFim.innerHTML = 'Finalizar jogo'
                questaoContainer.appendChild(btnFim)

                btnFim.addEventListener('click', () => {
                    questaoContainer.classList.add('hidden')
                    $('#jogo-stats').classList.remove('hidden')
                    $('#porcentagem-acertos').innerHTML = `Você acertou ${acertos} de ${questoes.length} questões (${percentualAcertos.toFixed(2)}%).`
                })
            }
        })
    } else {
        $('#erro').classList.remove('hidden')
    }
};

exibirQuestao()
$('#responder-btn').addEventListener('click', verificarResposta)