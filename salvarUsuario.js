const form = document.querySelector("#form")
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const usuario = document.querySelector('#nome').value
    console.log(usuario)
    // alert('Olá mundo!')
    localStorage.setItem("usuario", usuario)

    window.location.replace('jogo.html')
})

