const questoes = [
    {
        questão : 1,
        pergunta : 'Qual é a primeira letra do alfabeto?',
        resposta : 'a',
    },
    {
        questão : 2,
        pergunta : 'Qual é a segunda letra do alfabeto?',
        resposta : 'c',
    },
    {
        questão : 3,
        pergunta : 'Qual é a terceira letra do alfabeto?',
        resposta : 'c',
    },
    {
        questão : 4,
        pergunta : 'Qual é a quarta letra do alfabeto?',
        resposta : 'd',
    }
]

const nomeUsuario = document.querySelector('#nome-usuario')
const usuario = localStorage.getItem('usuario')
nomeUsuario.innerHTML = usuario != ''|| usuario != null ? 'Usuário: ' + usuario :  'Usuário: '
console.log(usuario)

const form = document.querySelector("#form")
form.addEventListener('submit', (event) => {
    event.preventDefault()

    console.log(questoes.map((q) => q.resposta))
    // console.log(form.value)

    const resp = document.querySelector("#resposta-1")

    // alert(document.querySelector(".resposta").value)
})