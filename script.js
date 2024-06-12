const $ = (parametro) => {
  return document.querySelector(parametro)
}

const $$ = (parametro) => {
  return document.querySelectorAll(parametro)
}

const questoes = [
  {
    questão: 1,
    pergunta:
      "O nome Partido Nacional-Socialista dos Trabalhadores Alemães significa que o Nazismo é de esquerda?",
    alternativas: [
      {
        número: 1,
        texto: "a) Sim, porque o partido defendia políticas socialistas.",
      },
      {
        número: 2,
        texto:
          'b) Não, pois o sentido de "socialista" usado pelos nazistas era diferente do cunhado por Marx e Engels, não refletindo, assim, a ideologia nazi',
      },
      {
        número: 3,
        texto: "c ) Sim, pois o socialismo é uma característica da esquerda.",
      },
      {
        número: 4,
        texto:
          "d) Não, porque o partido tinha políticas econômicas de esquerda, mas sociais de direita.",
      },
      {
        número: 5,
        texto:
          'e) Sim, uma vez que o termo "trabalhadores" é associado à esquerda.',
      },
    ],
    resposta: 2,
    explicacacao: `<strong>NÃO.</strong> Para Hitler e seus partidários, 'socialismo' significa sociedade alemã. Além disso, o nome do partido também é contraditório se considerarmos o socialismo marxista, uma vez que esse é <strong>internacionalista</strong>`,
  },
  {
    questão: 2,
    pergunta:
      "O fascismo, geralmente, ganha força em um contexto muito específico, o de: ",
    alternativas: [
      { número: 1, texto: "a) Estabilidade econômica e prosperidade." },
      { número: 2, texto: "b) Democracias consolidadas e pacíficas." },
      { número: 3, texto: "c) Crise econômica e insegurança social" },
      {
        número: 4,
        texto: "d) Períodos de alta imigração e diversidade cultural.",
      },
      {
        número: 5,
        texto: "e) Desenvolvimento tecnológico e avanços científicos.",
      },
    ],
    resposta: 3,
    explicacacao:
      'O fascimso usa bodes espiatórios e soluções simplistas para problemas complexos como uma forma de "solucionar" as crises vividas. O exemplo mais célebre é o dos nazistas, que colocavam a culpa dos problemas alemães nos políticos, comunistas, judeus e outros segmentos da sociedade consideros por eles "traidores pátria".',
  },
  {
    questão: 3,
    pergunta:
      '"Um típico líder fascista possui várias características, excluindo: "',
    alternativas: [
      { número: 1, texto: "a) Carisma e habilidade oratória" },
      { número: 2, texto: "b) Nacionalismo exacerbado" },
      { número: 3, texto: "c) Respeito aos direitos humanos" },
      { número: 4, texto: "d) Culto à personalidade" },
      { número: 5, texto: "e) Uso da propaganda para manipulação" },
    ],
    resposta: 3,
    explicacacao:
      "Líderes fascistas são conhecidos por seu desprezo pelos direitos humanos, promovendo a repressão política, a censura e a violência contra opositores. Eles buscam o controle total sobre o Estado e a sociedade, frequentemente violando direitos fundamentais para manter seu poder.",
  },
  {
    questão: "4",
    pergunta:
      "Qual parte da sociedade, receosa de uma “ameaça” comunista, sempre acaba apoiando os fascistas?",
    alternativas: [
      { número: 1, texto: "a) Trabalhadores" },
      { número: 2, texto: "b) Artistas" },
      { número: 3, texto: "c) Grandes empresários e proprietários de terras" },
      { número: 4, texto: "d) Intelectuais liberais" },
    ],
    resposta: 3,
    explicacacao:
      "Grandes empresários e proprietários de terras frequentemente apoiam movimentos fascistas porque temem a expropriação de suas propriedades e a perda de poder econômico sob regimes comunistas. O fascismo, apesar de ser autoritário, protege os interesses da elite econômica",
  },
  {
    questão: 5,
    pergunta: "São características fascistas, exceto:",
    alternativas: [
      { número: 1, texto: 'Tentativa de resgate de um passado "glorioso' },
      { número: 2, texto: "b) Militarismo" },
      { número: 3, texto: "c) Anti-liberalismo" },
      { número: 4, texto: "d) Irracionalismo" },
      { número: 5, texto: "e) Autoritarismo" },
    ],
    resposta: 3,
    explicacacao: `Fascistas são capitalistas, no entanto defendem a intervenção do Estado da ecnonimia. Lembre-se: <strong>capitalismo não significa necessariamente liberalismo</strong>.`,
  },
  {
    questão: 6,
    pergunta:
      "Por que a Itália, vencedora da Primeira Guerra Mundial, viu o fascismo tomar conta do país?",
    alternativas: [
      { número: 1, texto: "a) Devido ao sucesso econômico pós-guerra." },
      { número: 2, texto: "b) Devido à influência dos nazistas." },
      { número: 3, texto: "c) Por uma forte tradição democrática." },
      {
        número: 4,
        texto:
          "d)  Devido à crise econômica que passou a assolar o país, bem como pelo não comprimento de promessas da Tríplice Entente feitas quando de sua entrada no conflito",
      },
    ],
    resposta: 4,
    explicacacao:
      "O país se viu frustrado nas intenções de receber indenizações e grandes lotes territoriais após a decisão de se aliar aos vencedores. A grande crise econômica posterior, as desigualdades regionais e a existência de um operariado forte e uma esquerda articulada explica o surgimento do fascismo na Itália. De fato, ante a possibilidade de um crescimento das esquerdas, os banqueiros passaram a financiar grupos paramilitares de extermínio, como o Fasci de Combattimento, liderado por Mussolini.",
  },
  {
    questão: 7,
    pergunta:
      "Apesar da morte de Mussolini e Hitler e o consequente fim da Itália fascista e do terceiro Reich, em 1945, muitos regimes fascistas seguiram e surgiram após a Segunda Guerra Mundial, com exceção de:",
    alternativas: [
      { número: 1, texto: "a) Chile de Augusto Pinochet" },
      { número: 2, texto: "b) Iugoslávia do marechal Tito" },
      { número: 3, texto: "c) Estado Novo portugês" },
      { número: 4, texto: "d) Espanha de Francisco Franco" },
    ],
    resposta: 2,
    explicacacao: "A Iugoslávia era um regime socialista.",
  },
  {
    questão: 8,
    pergunta:
      "Qual a principal diferença entre o fascismo italiano e o alemão?",
    alternativas: [
      {
        número: 1,
        texto:
          "a) Os alemães defendiam uma política econômica liberal, enquanto os italianos a intervenção do Estado na economia",
      },
      {
        número: 2,
        texto:
          "b) Os italianos buscavam a expansão de seu território, como forma de 'reviver' o antigo Império Romano. Já os alemães, não tinham ambições expansionistas.",
      },
      {
        número: 3,
        texto:
          "c) Os italianos não tinham o antissemitismo como base de sua ideologia.",
      },
      {
        número: 4,
        texto:
          "d) O fascismo italiano surgiu antes da Primeira Guerra Mundial, enquanto o alemão apareceu após a Segunda Guerra Mundial",
      },
    ],
    resposta: 3,
    explicacacao:
      "Ainda que, alguns membros do partido pudessem ser eventualmente antissemitas, essa não era a ideologia do fascismo italiano, ao contrátio do Alemão",
  },
  {
    questão: 9,
    pergunta:
      'O Tratado de Versalhes era muito claro em relação às proibições impostas naquele momento à Alemanha, como limite da capacidade bélica e pagamento de gigantescas dívidas. No entanto, ao assumir o poder do país, Hitler, à medida que passavam os anos, desobedecia-os cada vez mais. Potências europeias vencedoras da Grande Guerra, como França e Reino Unido, por suas vez, pareciam fazer "vista grossa" para isso. Por qual razão isso ocorria?',
    alternativas: [
      {
        número: 1,
        texto:
          "a) Porque essas potências estavam economicamente debilitadas e não tinham capacidade de intervir.",
      },
      {
        número: 2,
        texto: "b) Porque acreditavam que Hitler traria estabilidade à região.",
      },
      { número: 3, texto: "c) Porque secretamente apoiavam o regime nazista" },
      {
        número: 4,
        texto:
          "d) No entreguerras, predominou uma 'política de apaziguamento', em que essas potências tentavam evitar uma nova guerra,ainda que isso significasse negligenciar os desmandos dos germânicos.",
      },
    ],
    resposta: 4,
    explicacacao:
      "Além de, motivados pelo trauma da Primeira Guerra, quererem evitar novos conflitos similares, eles acreditavam que, deixando a Alemanha mais forte em aspecto bélico, ela iria atacar a União Soviética, algo desejado por eles.",
  },
]

let questaoAtual = 0
let acertos = 0

const salvarEstadoJogo = () => {
  localStorage.setItem("questaoAtual", questaoAtual)
  localStorage.setItem("acertos", acertos)
}

// Função para carregar o estado do jogo do localStorage
const carregarEstadoJogo = () => {
  questaoAtual = Number(localStorage.getItem("questaoAtual")) || 0
  acertos = Number(localStorage.getItem("acertos")) || 0
  $("#acertos").innerHTML = `Acertos: ${acertos}`
  exibirQuestao()
}

window.onload = () => {
  // Certifique-se de que todas as questões estão carregadas
  if (questoes.length > 0) {
    carregarEstadoJogo()
  } else {
    // Se as questões ainda não estiverem carregadas, tente novamente após um breve intervalo
    setTimeout(carregarEstadoJogo, 100)
  }
}

// Função para exibir a questão atual
const exibirQuestao = () => {
  const questao = questoes[questaoAtual]
  $("#numero-questao").innerHTML = `Questão #${questao.questão}`
  $("#texto-questao").innerHTML = questao.pergunta

  const alternativasDiv = $("#alternativas")
  alternativasDiv.innerHTML = "" // Limpa as alternativas anteriores

  questao.alternativas.forEach((alternativa) => {
    const label = document.createElement("label")
    label.innerHTML = `<span class="flex w-fit bg-neutral-800 p-4 rounded-xl hover:bg-neutral-700 hover:cursor-pointer">
            <input type="radio" name="resposta" class="mx-4 color-red-600" value="${alternativa.número}"> ${alternativa.texto}
        </span>`
    alternativasDiv.appendChild(label)
  })

  salvarEstadoJogo()
}

// Função para verificar a resposta selecionada pelo usuário
const verificarResposta = () => {
  //   $("#responder-btn").classList.add("hidden")
  //   $("#responder-btn").disabled = true

  let nenhumaRespostaMarcada = 1

  document.querySelectorAll("input[type=radio]").forEach((r) => {
    r.checked ? (nenhumaRespostaMarcada = 0) : 1
  })

  if (nenhumaRespostaMarcada === 1) {
    $("#erro").classList.remove("hidden")
    return
  }

  const pergunta = questoes[questaoAtual]

  const respostaUsuario = $('input[name="resposta"]:checked')
  //   const mensagemErro = $("#erro")
  //   mensagemErro.classList.contains("hidden")
  //     ? mensagemErro.classList.remove("hidden")
  //     : mensagemErro.classList.add("hidden")

  if (respostaUsuario) {
    const resposta = respostaUsuario.value
    const condicao = pergunta.resposta == resposta
    const resultado = condicao ? 1 : 0

    console.log(respostaUsuario.parentElement)
    condicao
      ? respostaUsuario.parentElement.classList.add("resposta-certa")
      : respostaUsuario.parentElement.classList.add("resposta-errada")

    const respostaElement = $("#resposta")
    const textoResposta = $("#texto-resposta")
    textoResposta.innerHTML = pergunta.explicacacao

    if (condicao) {
      acertos++
      //   alert("Resposta correta")
      textoResposta.innerHTML =
        "<p class='font-bold text-2xl'>Sua resposta está <span class='text-emerald-500'>correta</span><p>" +
        pergunta.explicacacao
    } else {
      textoResposta.innerHTML =
        "<p class='font-bold text-2xl'>Sua resposta está <span class='text-red-600'>incorreta</span><p>" +
        pergunta.explicacacao
      //   alert("Resposta incorreta")
    }

    respostaElement.classList.toggle("hidden")

    document.querySelectorAll("input[type=radio]").forEach((e) => {
      e.parentElement.classList.add("hidden")
      e.checked = false
    })

    $("#acertos").innerHTML = `Acertos: ${acertos}`

    questaoAtual++
    console.log(questoes.length)
    const proximoBtn = document.createElement("button")
    proximoBtn.setAttribute(
      "class",
      "bg-zinc-50 text-neutral-900 hover:text-red-600 rounded-xl p-4 mx-auto my-4"
    )
    proximoBtn.innerHTML =
      questaoAtual < questoes.length ? "Próximo" : "Finalizar"
    $("#questao-container").appendChild(proximoBtn)

    proximoBtn.addEventListener("click", () => {
    if(document.querySelector("#responder-btn").classList.contains('hidden')) $("#responder-btn").classList.remove("hidden")
      salvarEstadoJogo()
      proximoBtn.classList.add("hidden")
      textoResposta.innerHTML = ""
      $("#resposta").classList.contains("hidden")
        ? ""
        : $("#resposta").classList.add("hidden")

      if (questaoAtual < questoes.length) exibirQuestao()
      else {
        const percentualAcertos = (acertos / questoes.length) * 100
        $("#responder-btn").classList.add("hidden")

        $("#alternativas").innerHTML = ""
        const questaoContainer = $("#questao-container")

        const btnFim = document.createElement("button")
        btnFim.innerHTML = "Finalizar jogo"
        btnFim.setAttribute('class','flex gap-2 bg-zinc-50 text-neutral-900 hover:bg-zinc-200 rounded-xl p-4 mx-auto my-4')
        questaoContainer.appendChild(btnFim)

        btnFim.addEventListener("click", () => {
          questaoContainer.classList.add("hidden")
          $("#jogo-stats").classList.remove("hidden")
          $("#porcentagem-acertos").innerHTML = `Você acertou ${acertos} de ${
            questoes.length
          } questões (${percentualAcertos.toFixed(2)}%).`
        })
      }
    })
  } else {
    alert("Você deve selecionar uma alternativa")
  }
}

// Função para voltar à questão anterior
const voltarQuestao = () => {
  if (questaoAtual > 0) {
    questaoAtual--
    exibirQuestao()
  }
}

// Adiciona o ouvinte de evento para o botão de voltar
// $("#voltar-btn").addEventListener("click", voltarQuestao)

// Carrega o estado do jogo quando a página é carregada
window.onload = () => {
  if (questoes.length > 0) {
    carregarEstadoJogo()
  } else {
    setTimeout(carregarEstadoJogo, 100)
  }
}

// Adiciona o ouvinte de evento para o botão de responder
$("#responder-btn").addEventListener("click", verificarResposta)
$("#responder-btn").addEventListener("click", () => {
    $("#responder-btn").classList.add("hidden")
})

// Inicializa a exibição da questão
exibirQuestao()

$("#restart").addEventListener("click", () => {
  localStorage.setItem("questaoAtual", 0)
  localStorage.setItem("acertos", 0)
  location.reload()
})
