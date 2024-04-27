const questoes = [
    {
        questão: 1,
        pergunta: 'Qual é a primeira letra do alfabeto?',
        resposta: 'a',
    },
    {
        questão: 2,
        pergunta: 'Qual é a segunda letra do alfabeto?',
        resposta: 'c',
    },
    {
        questão: 3,
        pergunta: 'Qual é a terceira letra do alfabeto?',
        resposta: 'c',
    },
    {
        questão: 4,
        pergunta: 'Qual é a quarta letra do alfabeto?',
        resposta: 'd',
    }
]

const nomeUsuario = document.querySelector('#nome-usuario')
const usuario = localStorage.getItem('usuario')
nomeUsuario.innerHTML = usuario != '' || usuario != null ? 'Usuário: ' + usuario : 'Usuário: '
console.log(usuario)

const form = document.querySelector("#form")
form.addEventListener('submit', (event) => {
    event.preventDefault()

    console.log(questoes.map((q) => q.resposta))
    // console.log(form.value)

    const resposta = questoes[0].resposta
    console.log(document.querySelectorAll('.resposta')[1].checked)
    // document.querySelectorAll('.resposta').forEach((resp) => console.log(`${resp.value} está ativo? ${resp.checked}`))
    const verificarAcerto = document.querySelectorAll('.resposta').forEach((resp) => {
        resp === resposta && resp.checked ? true : false
    })

    console.log(verificarAcerto)
    // console.log(document.querySelectorAll('.resposta').map((r) => (r)))

    // alert(questoes[0].resposta)
    // alert(document.querySelector(".resposta").value)
})