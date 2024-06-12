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
    explicacacao: `<strong>Resposta:</strong> NÃO. Para Hitler e seus partidários, 'socialismo' significa sociedade alemã. Além disso, o nome do partido também é contraditório se considerarmos o socialismo marxista, uma vez que esse é <strong>internacionalista</strong>`,
  },
  {
    questão: 2,
    pergunta:
      "O fascismo, geralmente, ganha força em um contexto muito específico, o de: ",
    alternativas: [
      { número: 1, texto: "Estabilidade econômica e prosperidade." },
      { número: 2, texto: "Democracias consolidadas e pacíficas." },
      { número: 3, texto: "Crise econômica e insegurança social" },
      {
        número: 4,
        texto: "Períodos de alta imigração e diversidade cultural.",
      },
      {
        número: 5,
        texto: "Desenvolvimento tecnológico e avanços científicos.",
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
      { número: 1, texto: "Carisma e habilidade oratória" },
      { número: 2, texto: "Nacionalismo exacerbado" },
      { número: 3, texto: "Respeito aos direitos humanos" },
      { número: 4, texto: "Culto à personalidade" },
      { número: 5, texto: "Uso da propaganda para manipulação" },
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
      { número: 1, texto: "Trabalhadores" },
      { número: 2, texto: "Artistas" },
      { número: 3, texto: "Grandes empresários e proprietários de terras" },
      { número: 4, texto: "Intelectuais liberais" },
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
      { número: 2, texto: "Militarismo" },
      { número: 3, texto: "Anti-liberalismo" },
      { número: 4, texto: "Irracionalismo" },
      { número: 5, texto: "Autoritarismo" },
    ],
    resposta: 3,
    explicacacao: `Fascistas são capitalistas, no entanto defendem a intervenção do Estado da ecnonimia. Lembre-se: <strong>capitalismo não significa necessariamente liberalismo</strong>.`,
  },
  {
    questão: 6,
    pergunta:
      "Por que a Itália, vencedora da Primeira Guerra Mundial, viu o fascismo tomar conta do país?",
    alternativas: [
      { número: 1, texto: "Devido ao sucesso econômico pós-guerra." },
      { número: 2, texto: "Devido à influência dos nazistas." },
      { número: 3, texto: "Por uma forte tradição democrática." },
      {
        número: 4,
        texto:
          "Devido à crise econômica que passou a assolar o páis, bem como pelo não comprimento de promessas da Tríplice Entente feitas quando de sua entrada no conflito",
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
      { número: 1, texto: "Chile de Augusto Pinochet" },
      { número: 2, texto: "Iugoslávia do marechal Tito" },
      { número: 3, texto: "Estado Novo portugês" },
      { número: 4, texto: "Espanha de Francisco Franco" },
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
          "Os alemães defendiam uma política econômica liberal, enquanto os italianos a intervenção do Estado na economia",
      },
      {
        número: 2,
        texto:
          "Os italianos buscavam a expensão de seu território, como forma de 'reviver' o antigo Imprério Romano. Já os alemães, não tinham ambições",
      },
      {
        número: 3,
        texto:
          "Os italianos buscavam a expensão de seu território, como forma de 'reviver' o antigo Imprério Romano. Já os alemães, não tinham ambições expansionistas.",
      },
      {
        número: 4,
        texto:
          "Os italianos não tinham o antissemitismo como base de sua ideologia.",
      },
      {
        número: 4,
        texto:
          "Ainda que, alguns membros do partido pudessem ser eventualmente antissemitas, essa não era a ideologia do fascismo italiano, ao contrátio do Alemão.",
      },
    ],
    resposta: 3,
    explicacacao:
      'Ainda que tenha vencido a guerra, a Itália sofreu o que ficou conhecido como <span class="italic">"Vittoria mutilata"</span> (vitória mutilada), uma vez que não ganhou as compensações prometidas pelos aliados antes da guerra. Dessa forma, crescreu entre os italianos um sentimento de ressentimento com esses Estados.',
  },
  {
    questão: 9,
    pergunta:
      'O Tratado de Versalhes era muito claro em relação às proibições impostas naquele momento à Alemanha, como limite da capacidade bélica e pagamento de gigantescas dívidas. No entanto, ao assumir o poder do país, Hitler, à medida que passavam os anos, desobedecia-os cada vez mais. Potências europeias vencedoras da Grande Guerra, como França e Reino Unido, por suas vez, pareciam fazer "vista grossa" para isso. Por qual razão isso ocorria?',
    alternativas: [
      {
        número: 1,
        texto:
          "Porque essas potências estavam economicamente debilitadas e não tinham capacidade de intervir.",
      },
      {
        número: 2,
        texto: "Porque acreditavam que Hitler traria estabilidade à região.",
      },
      { número: 3, texto: "Porque secretamente apoiavam o regime nazista" },
      {
        número: 4,
        texto:
          "No entreguerras, predominou uma 'política de apaziguamento', em que essas potências tentavam evitar uma nova guerra,ainda que isso significasse negligenciar os desmandos dos germânicos.",
      },
    ],
    resposta: 4,
    explicacacao:
      "Além de, motivados pelo trauma da Primeira Guerra, quererem evitar novos conflitos similares, eles acreditavam que, deixando a Alemanha mais forte em aspecto bélico, ela iria atacar a União Soviética, algo desejado por eles.",
  },
  // {
  //     questão:'' ,
  //     pergunta: '',
  //     alternativas: [
  //         { número: 1, texto: 'Medo do Comunismo' },
  //         { número: 2, texto: 'Sei lá' },
  //     ],
  //     resposta: 1,
  //     explicacacao: ''
  // },
]
// Definição inicial das variáveis de estado do jogo
let questaoAtual = 0
let acertos = 0

// Função para salvar o estado do jogo no localStorage
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
      carregarEstadoJogo();
    } else {
      // Se as questões ainda não estiverem carregadas, tente novamente após um breve intervalo
      setTimeout(carregarEstadoJogo, 100);
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
  const mensagemErro = $("#erro")
  mensagemErro.classList.contains("hidden")
    ? mensagemErro.classList.remove("hidden")
    : mensagemErro.classList.add("hidden")

  const resposta = $("#resposta")
  const textoResposta = $("#texto-resposta")
  textoResposta.innerHTML = pergunta.explicacacao
  resposta.classList.toggle("hidden")

  if (respostaUsuario) {
    const resposta = respostaUsuario.value
    const condicao = pergunta.resposta == resposta
    const resultado = condicao ? 1 : 0

    console.log(respostaUsuario.parentElement)
    condicao
      ? respostaUsuario.parentElement.classList.add("resposta-certa")
      : respostaUsuario.parentElement.classList.add("resposta-errada")

    if (condicao) {
      acertos++
      alert("Resposta correta")
    } else {
      alert("Resposta incorreta")
    }

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
      questaoAtual < questoes.length ? "PRÓXIMO" : "Finalizar"
    $("#questao-container").appendChild(proximoBtn)

    proximoBtn.addEventListener("click", () => {
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
    salvarEstadoJogo()
  } else {
    $("#erro").classList.remove("hidden")
  }
  salvarEstadoJogo()
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

// Inicializa a exibição da questão
exibirQuestao()
