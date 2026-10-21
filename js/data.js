/* ==========================================================================
   CONTEÚDO DO PORTFÓLIO
   Tudo o que aparece no site sai daqui. Para editar um texto, troque o valor
   de `pt` e/ou `en`. Para adicionar um jogo, copie um bloco de `games` e
   ajuste os campos. Campos vazios ("" ou []) simplesmente não aparecem.
   ========================================================================== */

window.PORTFOLIO = {

  /* ----------------------------------------------------------------------
     Dados pessoais e links
     ---------------------------------------------------------------------- */
  profile: {
    name: "Victor Hugo Costa",
    linkedin: "https://www.linkedin.com/in/victor-hugo-costa/",
    mentoring: "https://mentoriasgamesbr.ementor.com.br/mentor/victorhugocosta/",
    email: "victorhugomcc@gmail.com",
    cv: "",             // ex.: "cv-victor-hugo-costa.pdf" — coloque o PDF na raiz do repositório
    yearsInTech: 9,
    commercialGames: 15
  },

  /* ----------------------------------------------------------------------
     Funções (disciplinas). A ordem aqui é a ordem das barras de filtro.
     ---------------------------------------------------------------------- */
  roles: {
    "game-design":      { pt: "Game Design",      en: "Game Design" },
    "game-director":    { pt: "Game Director",    en: "Game Director" },
    "level-design":     { pt: "Level Design",     en: "Level Design" },
    "producer":         { pt: "Produção",         en: "Production" },
    "balance-design":   { pt: "Balance Design & Economia", en: "Balance Design & Economy" },
    "narrative-design": { pt: "Narrative Design", en: "Narrative Design" },
    "quest-design":     { pt: "Quest Design",     en: "Quest Design" },
    "qa":               { pt: "QA",               en: "QA" },
    "mentor":           { pt: "Mentor",           en: "Mentor" }
  },

  /* ----------------------------------------------------------------------
     Jogos em que trabalhei
     featured: true  → aparece no topo, em formato grande
     wide            → imagem panorâmica usada no destaque (opcional)
     fit: "contain"  → para capas quadradas/logos que não podem ser cortadas
     contributions   → O MAIS IMPORTANTE para recrutadores: o que VOCÊ fez.
     ---------------------------------------------------------------------- */
  games: [
    {
      slug: "smashing-four",
      title: { pt: "Smashing Four", en: "Smashing Four" },
      featured: true,
      cover: "img/games/smashing-four.webp",
      wide: "img/games/smashing-four.webp",
      roles: ["game-design", "level-design", "narrative-design", "balance-design"],
      platform: { pt: "Mobile (Android e iOS)", en: "Mobile (Android & iOS)" },
      studio: "By Aliens",
      year: { pt: "Em operação", en: "Live" },
      genre: { pt: "PvP em tempo real · cartas colecionáveis com física de bilhar", en: "Real-time PvP · collectible cards with pool physics" },
      logline: {
        pt: "PvP 1v1 em tempo real onde heróis colecionáveis se enfrentam com física de bilhar.",
        en: "Real-time 1v1 PvP where collectible heroes clash with pool-table physics."
      },
      summary: {
        pt: "Jogo estratégico de cartas colecionáveis em que cada tacada conta: o jogador monta um deck de heróis, mira e lança cada um pela arena, e usa habilidades que mudam a física da partida. Clãs, troféus e rankings sustentam o metagame de longo prazo.",
        en: "A strategic collectible card game where every shot counts: players build a deck of heroes, aim and launch them across the arena, and trigger abilities that bend the match's physics. Clans, trophies and leaderboards drive the long-term metagame."
      },
      contributions: {
        pt: ["Desenvolvimento de funções do jogo, criando sistemas, regras, jogabilidade e balanceamento, garantindo que seja jogável, divertido e envolvente;", "Escrita e organização de GDD;", "Aplicação de Frameworks de Game Design;", "Conceituação e desenvolvimento de personagens, regras, cenários e narrativas;", "Testes e prototipagem;", "Unity.", "Gestão de eventos de LiveOps e promoções da loja;", "Análise de metagame e participação ativa na estratégia de negócio em conjunto com o Game Director,", "Criação e desenvolvimento de gameplay e de personagens"],
        en: ["Developing game functions, creating systems, rules, gameplay and balancing ensuring it is playable, fun and engaging;", "GDD writing and organization;", "Game Design Frameworks' application;", "Conceptualization and development of characters, rules, scenarios and narratives;", "Testing & Prototyping;", "Unity.", "LiveOps Events and Shop Promotions Management;", "Meta-Game Analysis and active participation in business strategy in conjunction with the Game Director,", "Gameplay and Character Creation and Development"]
      },
      shots: ["img/shots/smashing-four-1.webp", "img/shots/smashing-four-2.webp", "img/shots/smashing-four-3.webp", "img/shots/smashing-four-4.webp"],
      links: [{ label: { pt: "Ver no Google Play", en: "View on Google Play" }, url: "https://play.google.com/store/apps/details?id=com.geewa.smashingfour" }]
    },
    {
      slug: "versos-e-feiticos",
      title: { pt: "Versos & Feitiços", en: "Cordels & Spells" },
      featured: true,
      cover: "img/games/versos-e-feiticos.webp",
      wide: "img/games/versos-e-feiticos-wide.webp",
      roles: ["game-design", "game-director", "producer", "level-design", "balance-design", "narrative-design"],
      platform: { pt: "PC (Steam)", en: "PC (Steam)" },
      studio: "Supernova Games",
      year: { pt: "2026", en: "2026" },
      genre: { pt: "Ação e aventura · roguelike com geração procedural", en: "Action-adventure · procedural roguelike" },
      logline: {
        pt: "Roguelike de ação no sertão do Ceará do século XIX, inspirado na literatura de cordel.",
        en: "Action roguelike set in 19th-century Ceará, Brazil, built on cordel folk literature."
      },
      summary: {
        pt: "Ação e aventura com níveis gerados de forma procedural a cada partida, exploração, combate e morte permanente. Narrativa, jogabilidade e estética nascem da cultura de cordel: o objetivo é recuperar os Cordéis Enfeitiçados derrotando os Comandantes do Sertão e o chefe dos bandidos, Ferrozé do Sertão.",
        en: "Action-adventure with procedurally generated levels every run, exploration, combat and permadeath. Story, gameplay and art all grow out of Brazilian cordel literature: the goal is to recover the Bewitched Cordels by defeating the Commanders of the Sertão and the bandit chief, Ferrozé."
      },
      contributions: {
        pt: ["Desenvolvimento funções do jogo, criando sistemas, regras, jogabilidade e balanceamento garantindo que seja jogável, divertido e envolvente;", "Estruturação de Level Design;", "Construção de GDD;", "Aplicação de Frameworks de Game Design;", "Conceituação e desenvolvimento personagens, regras, cenários e narrativas;", "Teste e Prototipagem;", "Unity.", "Gerenciamento do processo de desenvolvimento de jogos com aplicação de metodologias ágeis, execução e acompanhamento do pipeline de produção do jogo, análise de mercado, pitch e jornada do produto/projeto;"],
        en: ["Developing game functions, creating systems, rules, gameplay and balancing, ensuring it is playable, fun and engaging;", "Level Design structuring;", "GDD writing;", "Game Design Frameworks' application;", "Conceptualization and development of characters, rules, scenarios and narratives;", "Testing and Prototyping;", "Unity.", "Management of the game development process with agile methodologies, execution and monitoring of the game's production pipeline, market analysis, pitch and product/project journey;"]
      },
      shots: ["img/shots/versos-e-feiticos-1.webp", "img/shots/versos-e-feiticos-2.webp", "img/shots/versos-e-feiticos-3.webp"],
      links: [{ label: { pt: "Ver na Steam", en: "View on Steam" }, url: "https://store.steampowered.com/app/3543070/Cordels__Spells/" }]
    },
    {
      slug: "fourspell-survivors-online",
      title: { pt: "Fourspell Survivors Online", en: "Fourspell Survivors Online" },
      featured: true,
      cover: "img/games/fourspell-survivors-online.webp",
      wide: "img/games/fourspell-survivors-online-wide.webp",
      roles: ["game-design", "producer", "level-design"],
      platform: { pt: "PC e Mac (Steam)", en: "PC & Mac (Steam)" },
      studio: "Supernova Games",
      year: { pt: "Em breve", en: "Coming soon" },
      genre: { pt: "Roguelike de ação cooperativo · survivors-like online", en: "Co-op action roguelike · online survivors-like" },
      logline: {
        pt: "Survivors-like online e cooperativo: magias evoluem, hordas não acabam.",
        en: "Online co-op survivors-like: evolving spells, endless hordes."
      },
      summary: {
        pt: "Roguelike de ação para jogar com amigos online contra hordas infinitas de monstros. O jogador evolui magias, derrota chefes e combina personagens únicos em formações de equipe — cooperação é o que mantém o grupo vivo.",
        en: "An action roguelike played online with friends against endless monster hordes. Players evolve spells, defeat bosses and combine unique characters into team builds — cooperation is what keeps the group alive."
      },
      contributions: {
        pt: ["Desenvolvimento funções do jogo, criando sistemas, regras, jogabilidade e balanceamento garantindo que seja jogável, divertido e envolvente;", "Estruturação de Level Design;", "Construção de GDD;", "Aplicação de Frameworks de Game Design;", "Conceituação e desenvolvimento personagens, regras, cenários e narrativas;", "Gerenciamento do processo de desenvolvimento de jogos com aplicação de metodologias ágeis, execução e acompanhamento do pipeline de produção do jogo, análise de mercado, pitch e jornada do produto/projeto."],
        en: ["Developing game functions, creating systems, rules, gameplay and balancing, ensuring it is playable, fun and engaging;", "Level Design structuring;", "GDD writing;", "Game Design Frameworks' application;", "Conceptualization and development of characters, rules, scenarios and narratives;", "Management of the game development process with agile methodologies, execution and monitoring of the game's production pipeline, market analysis, pitch and product/project journey."]
      },
      shots: ["img/shots/fourspell-survivors-online-1.webp", "img/shots/fourspell-survivors-online-2.webp", "img/shots/fourspell-survivors-online-3.webp"],
      links: [{ label: { pt: "Ver na Steam", en: "View on Steam" }, url: "https://store.steampowered.com/app/2158750/Fourspell_Survivors_Online/" }]
    },
    {
      slug: "cupid-island",
      title: { pt: "Cupid Island", en: "Cupid Island" },
      cover: "img/games/cupid-island.webp",
      wide: "img/games/cupid-island-wide.webp",
      roles: ["game-design", "producer", "level-design", "quest-design"],
      platform: { pt: "PC (Steam)", en: "PC (Steam)" },
      studio: "Supernova Games",
      year: { pt: "Em breve", en: "Coming soon" },
      genre: { pt: "Simulação de vida · construção", en: "Life sim · island building" },
      logline: {
        pt: "Simulador de vida em que você é o Cupido: forma casais e constrói a ilha com o amor deles.",
        en: "A life sim where you play Cupid: match couples and grow the island with their love."
      },
      summary: {
        pt: "Um simulador de vida fofo sobre formar casais e cuidar de seus relacionamentos. Como Cupido, o jogador descobre casais, acompanha suas histórias de amor e usa o Amor, a Alegria e a Paixão produzidos pelos moradores para construir, customizar e expandir a ilha.",
        en: "A cozy life sim about matching couples and nurturing their relationships. As Cupid, players discover couples, follow their love stories and spend the Love, Joy and Passion the villagers produce to build, customize and expand the island."
      },
      contributions: {
        pt: ["Desenvolvimento funções do jogo, criando sistemas, regras, jogabilidade e balanceamento garantindo que seja jogável, divertido e envolvente;", "Estruturação de Level Design e Quest Design;", "Construção de GDD;", "Aplicação de Frameworks de Game Design;", "Gerenciamento do processo de desenvolvimento de jogos com aplicação de metodologias ágeis, execução e acompanhamento do pipeline de produção do jogo, análise de mercado, pitch e jornada do produto/projeto."],
        en: ["Developing game functions, creating systems, rules, gameplay and balancing, ensuring it is playable, fun and engaging;", "Level Design and Quest Design structuring;", "GDD writing;", "Game Design Frameworks' application;", "Management of the game development process with agile methodologies, execution and monitoring of the game's production pipeline, market analysis, pitch and product/project journey."]
      },
      shots: ["img/shots/cupid-island-1.webp", "img/shots/cupid-island-2.webp", "img/shots/cupid-island-3.webp"],
      links: [{ label: { pt: "Ver na Steam", en: "View on Steam" }, url: "https://store.steampowered.com/app/1357320/Cupid_Island/" }]
    },
    {
      slug: "tiny-witch",
      title: { pt: "Tiny Witch", en: "Tiny Witch" },
      featured: true,
      cover: "img/games/tiny-witch.webp",
      wide: "img/games/tiny-witch-wide.webp",
      roles: ["game-design", "level-design", "balance-design"],
      platform: { pt: "PC (Steam)", en: "PC (Steam)" },
      studio: "Creative Hand",
      year: { pt: "2023", en: "2023" },
      genre: { pt: "Simulação · gestão de loja", en: "Simulation · shop management" },
      logline: {
        pt: "Gestão de uma loja de lacaios para mestres de masmorra exigentes.",
        en: "Run a minion shop for demanding dungeon masters."
      },
      summary: {
        pt: "Como uma pequena bruxa, o jogador administra uma loja de lacaios: combina os recursos certos para criar cada criatura e garantir que a clientela — mestres de masmorra exigentes — saia satisfeita.",
        en: "As a tiny witch, the player runs a minion shop: combining the right resources to craft each creature and keep a demanding clientele of dungeon masters happy."
      },
      contributions: {
        pt: ["Desenvolvimento funções do jogo, criando sistemas, regras, jogabilidade e balanceamento garantindo que seja jogável, divertido e envolvente;", "Estruturação de Level Design;"],
        en: ["Developing game functions, creating systems, rules, gameplay and balancing, ensuring it is playable, fun and engaging;", "Level Design structuring;"]
      },
      shots: ["img/shots/tiny-witch-1.webp", "img/shots/tiny-witch-2.webp", "img/shots/tiny-witch-3.webp", "img/shots/tiny-witch-4.webp"],
      links: [{ label: { pt: "Ver na Steam", en: "View on Steam" }, url: "https://store.steampowered.com/app/1740310/Tiny_Witch/" }]
    },
    {
      slug: "fertiliel",
      title: { pt: "Fertiliel", en: "Fertiliel" },
      cover: "img/games/fertiliel.webp",
      roles: ["game-design", "producer", "level-design", "quest-design"],
      platform: { pt: "PC (Steam)", en: "PC (Steam)" },
      studio: "Supernova Alt Games",
      year: { pt: "2024", en: "2024" },
      genre: { pt: "Visual novel · simulação de encontros", en: "Visual novel · dating sim" },
      logline: {
        pt: "Visual novel em que o Cupido conduz conversas e encontros para repovoar a Terra.",
        en: "A visual novel where Cupid steers conversations and dates to repopulate Earth."
      },
      summary: {
        pt: "Como Cupido, o jogador ajuda casais a terem boas conversas e a se encontrarem em encontros. Os casais formados terão muitos filhos e ajudarão a repovoar a Terra.",
        en: "As Cupid, the player helps couples hold good conversations and meet on dates. The couples you form will have many children and help repopulate Earth."
      },
      contributions: {
        pt: ["Desenvolvimento funções do jogo, criando sistemas, regras, jogabilidade e balanceamento garantindo que seja jogável, divertido e envolvente;", "Estruturação de Level Design e Quest Design;", "Aplicação de Frameworks de Game Design;", "Gerenciamento do processo de desenvolvimento de jogos com aplicação de metodologias ágeis, execução e acompanhamento do pipeline de produção do jogo, análise de mercado, pitch e jornada do produto/projeto."],
        en: ["Developing game functions, creating systems, rules, gameplay and balancing, ensuring it is playable, fun and engaging;", "Level Design and Quest Design structuring;", "Game Design Frameworks' application;", "Management of the game development process with agile methodologies, execution and monitoring of the game's production pipeline, market analysis, pitch and product/project journey."]
      },
      shots: ["img/shots/fertiliel-1.webp", "img/shots/fertiliel-2.webp", "img/shots/fertiliel-3.webp"],
      links: [{ label: { pt: "Ver na Steam", en: "View on Steam" }, url: "https://store.steampowered.com/app/1786860/Fertiliel__Cupid_Simulator/" }]
    },
    {
      slug: "magic-land",
      title: { pt: "Magic Land", en: "Magic Land" },
      cover: "img/games/magic-land.webp",
      roles: ["game-design", "producer", "qa"],
      platform: { pt: "Mobile (Android)", en: "Mobile (Android)" },
      studio: "Estante Mágica",
      year: { pt: "", en: "" },
      genre: { pt: "Educativo · criação de mundos", en: "Educational · world building" },
      logline: {
        pt: "Os desenhos que crianças fazem em sala de aula viram mundos para explorar.",
        en: "Drawings kids make in class become worlds to explore."
      },
      summary: {
        pt: "Jogo para celular da Estante Mágica que conecta histórias e ilustrações criadas por crianças em sala de aula a um espaço para criar, explorar e interagir com mundos e experiências personalizadas.",
        en: "A mobile game by Estante Mágica that connects stories and illustrations children create in class to a space where they build, explore and interact with personalised worlds."
      },
      contributions: {
        pt: ["Responsável por desenvolver as funções do jogo, criando sistemas, regras e jogabilidade garantindo que seja jogável, divertido e envolvente.", "Supervisão da base e execução das mecânicas de jogo e da experiência geral do usuário, planejando, programando e acompanhando as tarefas da equipe de desenvolvimento utilizando metodologias ágeis.", "Produtor de uma equipe que atualmente conta com 3 desenvolvedores e 1 Artista/Game Designer"],
        en: ["Responsible for developing the game's functions, creating systems, rules and gameplay, ensuring it is playable, fun and engaging.", "Oversight of the foundation and execution of the game mechanics and the overall user experience, planning, scheduling and tracking the development team's tasks using agile methodologies.", "Producer of a team that currently has 3 developers and 1 Artist/Game Designer"]
      },
      shots: ["img/shots/magic-land-1.webp", "img/shots/magic-land-2.webp", "img/shots/magic-land-3.webp"],
      links: [{ label: { pt: "Ver no Google Play", en: "View on Google Play" }, url: "https://play.google.com/store/apps/details?id=com.EstanteMagica.MagicLand" }]
    },
    {
      slug: "species-quest",
      title: { pt: "Species Quest", en: "Species Quest" },
      cover: "img/games/species-quest.webp",
      fit: "contain",
      roles: ["game-design", "producer", "level-design", "narrative-design", "balance-design"],
      platform: { pt: "Navegador · Legends of Learning", en: "Browser · Legends of Learning" },
      studio: "",
      year: { pt: "", en: "" },
      genre: { pt: "Educativo · point-and-click em tabuleiro", en: "Educational · board-like point-and-click" },
      logline: {
        pt: "Ensina competição, predação e mutualismo a alunos de 11 a 14 anos.",
        en: "Teaches competition, predation and mutualism to students aged 11–14."
      },
      summary: {
        pt: "O jogador precisa superar ou conviver com os animais da floresta para alcançar os frutos mágicos, sem esgotar os pontos da própria espécie — o que levaria à extinção. A mecânica de apontar e clicar com um level design em formato de tabuleiro foi criada para ensinar dinâmicas de competitividade, predação, mutualismo e ecossistemas a estudantes de 11 a 14 anos.",
        en: "Players must outwit or coexist with forest animals to reach the magic fruits without running out of their species' points — which would mean extinction. Point-and-click mechanics on a board-like level layout were designed to teach competition, predation, mutualism and ecosystems to students aged 11 to 14."
      },
      partner: { label: "Legends of Learning", url: "https://www.legendsoflearning.com/" },
      contributions: {
        pt: ["Desenvolvimento funções do jogo, criando sistemas, regras, jogabilidade e balanceamento garantindo que seja jogável, divertido e envolvente;", "Estruturação de Level Design;", "Construção de GDD;", "Aplicação de Frameworks de Game Design;", "Conceituação e desenvolvimento personagens, regras, cenários e narrativas;", "Gerenciamento do processo de desenvolvimento de jogos com aplicação de metodologias ágeis, execução e acompanhamento do pipeline de produção do jogo, análise de mercado, pitch e jornada do produto/projeto.", "Negociação com empresa parceira"],
        en: ["Developing game functions, creating systems, rules, gameplay and balancing, ensuring it is playable, fun and engaging;", "Level Design structuring;", "GDD writing;", "Game Design Frameworks' application;", "Conceptualization and development of characters, rules, scenarios and narratives;", "Management of the game development process with agile methodologies, execution and monitoring of the game's production pipeline, market analysis, pitch and product/project journey.", "Negotiation with the partner company"]
      },
      shots: ["img/shots/species-quest-1.webp", "img/shots/species-quest-2.webp", "img/shots/species-quest-3.webp"],
      links: []
    },
    {
      slug: "balance-keeper-earth",
      title: { pt: "Balance Keeper: Earth", en: "Balance Keeper: Earth" },
      cover: "img/games/balance-keeper-earth.webp",
      fit: "contain",
      roles: ["game-design", "producer", "level-design", "balance-design", "narrative-design"],
      platform: { pt: "", en: "" },
      studio: "",
      year: { pt: "", en: "" },
      genre: { pt: "Decisões por cartas · por turnos", en: "Card-based decisions · turn-based" },
      logline: {
        pt: "Aceite ou recuse propostas e mantenha quatro pilares do mundo em equilíbrio.",
        en: "Accept or refuse proposals and keep four world pillars in balance."
      },
      summary: {
        pt: "Primeiro jogo da franquia Balance Keeper. A cada turno, o Guardião do Mundo aceita ou recusa uma carta-proposta que afeta população, ciência e tecnologia, economia e recursos naturais. Desafios crescentes e eventos imprevistos forçam o jogador a pesar consequências de curto e longo prazo; quando um pilar chega a um extremo, o mundo se desequilibra e um novo Guardião assume.",
        en: "First game in the Balance Keeper franchise. Each turn, the World Keeper accepts or refuses a proposal card that shifts population, science & technology, economy and natural resources. Escalating challenges and surprise events force players to weigh short- and long-term consequences; when any pillar hits an extreme, the world tips out of balance and a new Keeper takes over."
      },
      contributions: {
        pt: ["Desenvolvimento funções do jogo, criando sistemas, regras, jogabilidade e balanceamento garantindo que seja jogável, divertido e envolvente;", "Estruturação de Level Design;", "Construção de GDD;", "Aplicação de Frameworks de Game Design;", "Conceituação e desenvolvimento personagens, regras, cenários e narrativas;", "Gerenciamento do processo de desenvolvimento de jogos com aplicação de metodologias ágeis, execução e acompanhamento do pipeline de produção do jogo, análise de mercado, pitch e jornada do produto/projeto.", "Negociação com empresa parceira"],
        en: ["Developing game functions, creating systems, rules, gameplay and balancing, ensuring it is playable, fun and engaging;", "Level Design structuring;", "GDD writing;", "Game Design Frameworks' application;", "Conceptualization and development of characters, rules, scenarios and narratives;", "Management of the game development process with agile methodologies, execution and monitoring of the game's production pipeline, market analysis, pitch and product/project journey.", "Negotiation with the partner company"]
      },
      shots: ["img/shots/balance-keeper-earth-1.webp"],
      links: []
    },
    {
      slug: "balance-keeper-life",
      title: { pt: "Balance Keeper: Life", en: "Balance Keeper: Life" },
      cover: "img/games/balance-keeper-life.webp",
      fit: "contain",
      roles: ["game-design", "producer", "level-design", "balance-design", "narrative-design"],
      platform: { pt: "", en: "" },
      studio: "",
      year: { pt: "", en: "" },
      genre: { pt: "Decisões por cartas · por turnos", en: "Card-based decisions · turn-based" },
      logline: {
        pt: "O mesmo sistema de pilares, agora aplicado à biodiversidade.",
        en: "The same pillar system, now applied to biodiversity."
      },
      summary: {
        pt: "Segundo jogo da franquia. Como Guardião da Biodiversidade, o jogador decide carta a carta e equilibra fauna, flora, clima e água. O jogo termina com sucesso quando todas as situações previstas são superadas sem que nenhum pilar se esgote.",
        en: "Second game in the franchise. As Keeper of Biodiversity, the player decides card by card while balancing fauna, flora, climate and water. A run succeeds when every scripted situation is cleared without any pillar running dry."
      },
      contributions: {
        pt: ["Desenvolvimento funções do jogo, criando sistemas, regras, jogabilidade e balanceamento garantindo que seja jogável, divertido e envolvente;", "Estruturação de Level Design;", "Construção de GDD;", "Aplicação de Frameworks de Game Design;", "Conceituação e desenvolvimento personagens, regras, cenários e narrativas;", "Gerenciamento do processo de desenvolvimento de jogos com aplicação de metodologias ágeis, execução e acompanhamento do pipeline de produção do jogo, análise de mercado, pitch e jornada do produto/projeto.", "Negociação com empresa parceira"],
        en: ["Developing game functions, creating systems, rules, gameplay and balancing, ensuring it is playable, fun and engaging;", "Level Design structuring;", "GDD writing;", "Game Design Frameworks' application;", "Conceptualization and development of characters, rules, scenarios and narratives;", "Management of the game development process with agile methodologies, execution and monitoring of the game's production pipeline, market analysis, pitch and product/project journey.", "Negotiation with the partner company"]
      },
      shots: [],
      links: []
    },
    {
      slug: "buddy-care",
      title: { pt: "Buddy Care", en: "Buddy Care" },
      cover: "img/games/buddy-care.webp",
      fit: "contain",
      roles: ["game-design", "producer", "level-design", "balance-design", "narrative-design"],
      platform: { pt: "Navegador · Legends of Learning", en: "Browser · Legends of Learning" },
      studio: "",
      year: { pt: "", en: "" },
      genre: { pt: "Educativo · tamagotchi-like", en: "Educational · Tamagotchi-like" },
      logline: {
        pt: "Cuidar de um bichinho e de uma planta, do nascimento à fase adulta.",
        en: "Raise a virtual pet and a plant from birth to adulthood."
      },
      summary: {
        pt: "Um tamagotchi-like em que o jogador cuida de dois organismos — um bichinho virtual e uma planta — garantindo suas necessidades básicas enquanto enfrenta desafios que refletem padrões reais de crescimento e desenvolvimento dos seres vivos.",
        en: "A Tamagotchi-like where the player raises two organisms — a virtual pet and a plant — meeting their basic needs while facing challenges modeled on real growth and development patterns in living things."
      },
      partner: { label: "Legends of Learning", url: "https://www.legendsoflearning.com/" },
      contributions: {
        pt: ["Desenvolvimento funções do jogo, criando sistemas, regras, jogabilidade e balanceamento garantindo que seja jogável, divertido e envolvente;", "Estruturação de Level Design;", "Construção de GDD;", "Aplicação de Frameworks de Game Design;", "Conceituação e desenvolvimento personagens, regras, cenários e narrativas;", "Gerenciamento do processo de desenvolvimento de jogos com aplicação de metodologias ágeis, execução e acompanhamento do pipeline de produção do jogo, análise de mercado, pitch e jornada do produto/projeto.", "Negociação com empresa parceira."],
        en: ["Developing game functions, creating systems, rules, gameplay and balancing, ensuring it is playable, fun and engaging;", "Level Design structuring;", "GDD writing;", "Game Design Frameworks' application;", "Conceptualization and development of characters, rules, scenarios and narratives;", "Management of the game development process with agile methodologies, execution and monitoring of the game's production pipeline, market analysis, pitch and product/project journey.", "Negotiation with the partner company."]
      },
      shots: ["img/shots/buddy-care-1.webp", "img/shots/buddy-care-2.webp", "img/shots/buddy-care-3.webp", "img/shots/buddy-care-4.webp", "img/shots/buddy-care-5.webp"],
      links: []
    },
    {
      slug: "boom-boom-castle",
      title: { pt: "Boom! Boom! Castle", en: "Boom! Boom! Castle" },
      cover: "img/games/boom-boom-castle.webp",
      roles: ["game-design", "level-design", "producer", "qa", "balance-design"],
      platform: { pt: "PC (itch.io)", en: "PC (itch.io)" },
      studio: "Alternative Control",
      year: { pt: "", en: "" },
      genre: { pt: "Plataforma 2D · tower defense · tiro", en: "2D platformer · tower defense · shooter" },
      logline: {
        pt: "Um mago destrutivo defende o castelo — e tenta não destruí-lo junto.",
        en: "A clumsy, destructive wizard defends the castle — and tries not to wreck it himself."
      },
      summary: {
        pt: "Plataforma 2D com fortes inspirações em tower defense e mecânicas de tiro. Um mago desastradamente destrutivo é convocado para defender um castelo contra monstros e precisa lidar com o poder dos próprios feitiços para não pôr tudo abaixo — e aguentar a ira do Rei.",
        en: "A 2D platformer with strong tower-defense and shooter influences. A clumsily destructive wizard is summoned to defend a castle from monsters and has to tame his own spells before he brings the place down — and faces the King's wrath."
      },
      contributions: {
        pt: ["Mecânicas e sistemas", "Gestão do processo de desenvolvimento do jogo com aplicação de metodologias ágeis, execução e acompanhamento do pipeline de produção do jogo, análise de mercado e jornada do produto/projeto;", "Conceituar e desenvolver personagens, regras, cenários e narrativas;", "Desenvolvimento de pitch e pesquisa de mercado;", "Prototipagem;", "Desenvolvimento de GDD;", "Controle de qualidade;", "Unity."],
        en: ["Mechanics and systems", "Management of the game's development process with the application of agile methodologies, execution and monitoring of the game's production pipeline, market analysis and product/project journey;", "Conceptualize and develop characters, rules, scenarios and narratives;", "Pitch development and market research;", "Prototyping;", "Development of GDD;", "Quality control;", "Unity."]
      },
      shots: ["img/shots/boom-boom-castle-1.webp", "img/shots/boom-boom-castle-2.webp", "img/shots/boom-boom-castle-3.webp", "img/shots/boom-boom-castle-4.webp"],
      links: [{ label: { pt: "Jogar no itch.io", en: "Play on itch.io" }, url: "https://alternative-control.itch.io/boom-boom-castle" }]
    },
    {
      slug: "quantum-cat",
      title: { pt: "The Quantum Cat", en: "The Quantum Cat" },
      cover: "img/games/quantum-cat.webp",
      roles: ["game-design", "level-design", "balance-design"],
      platform: { pt: "PC (Steam)", en: "PC (Steam)" },
      studio: "Chill Dev Games",
      year: { pt: "Em breve", en: "Coming soon" },
      genre: { pt: "Plataforma 2D · puzzle", en: "2D platformer · puzzle" },
      logline: {
        pt: "O gato de Schrödinger, vivo e morto, atravessando duas dimensões.",
        en: "Schrödinger's cat, alive and dead, crossing two dimensions."
      },
      summary: {
        pt: "Plataforma 2D com puzzles em que o jogador controla Nikus, um gato preso numa dimensão quântica onde está vivo e morto ao mesmo tempo. A regra central inverte a intuição: o Nikus vivo só transita na dimensão morta, e o Nikus morto só transita na dimensão viva.",
        en: "A 2D puzzle-platformer starring Nikus, a cat trapped in a quantum dimension where he is alive and dead at once. The core rule flips intuition: living Nikus can only move through the dead dimension, and dead Nikus only through the living one."
      },
      contributions: {
        pt: ["Mecânicas e sistemas", "Gestão do processo de desenvolvimento do jogo com aplicação de metodologias ágeis, execução e acompanhamento do pipeline de produção do jogo, análise de mercado e jornada do produto/projeto;", "Conceituar e desenvolver personagens, regras, cenários e narrativas;", "Prototipagem;", "Desenvolvimento de GDD;", "Controle de qualidade;", "Unity."],
        en: ["Mechanics and systems", "Management of the game's development process with the application of agile methodologies, execution and monitoring of the game's production pipeline, market analysis and product/project journey;", "Conceptualize and develop characters, rules, scenarios and narratives;", "Prototyping;", "Development of GDD;", "Quality control;", "Unity."]
      },
      shots: [],
      links: [{ label: { pt: "Ver na Steam", en: "View on Steam" }, url: "https://store.steampowered.com/app/1816120/The_Quantum_Cat" }]
    },
    {
      slug: "chasing-illusions",
      title: { pt: "Chasing Illusions", en: "Chasing Illusions" },
      cover: "img/games/chasing-illusions.webp",
      roles: ["game-design", "level-design", "narrative-design", "qa", "balance-design"],
      platform: { pt: "PC (itch.io)", en: "PC (itch.io)" },
      studio: "No Slopes",
      year: { pt: "", en: "" },
      genre: { pt: "Exploração · puzzle psicológico", en: "Exploration · psychological puzzle" },
      logline: {
        pt: "Uma lanterna no inconsciente de pacientes em transe: capture só as ilusões certas.",
        en: "A flashlight inside entranced patients' minds: catch only the right illusions."
      },
      summary: {
        pt: "O jogador entra na pele de pacientes de um terapeuta estranho que, com um pêndulo misterioso, os envia para o próprio inconsciente. Com uma lanterna, é preciso iluminar o caminho, identificar e capturar ilusões — mas só as que o paciente deseja, ou ele sai ainda mais perturbado.",
        en: "Players step into the shoes of a strange therapist's patients, sent into their own subconscious by a mysterious pendulum. With a flashlight, they light the way, identify and capture illusions — but only the ones the patient wants, or they leave more disturbed than before."
      },
      contributions: {
        pt: ["Mecânicas e sistemas", "Gestão do processo de desenvolvimento do jogo com aplicação de metodologias ágeis, execução e acompanhamento do pipeline de produção do jogo, análise de mercado e jornada do produto/projeto;", "Conceituar e desenvolver personagens, regras, cenários e narrativas;", "Prototipagem;", "Desenvolvimento de GDD;", "Controle de qualidade;", "Unity."],
        en: ["Mechanics and systems", "Management of the game's development process with the application of agile methodologies, execution and monitoring of the game's production pipeline, market analysis and product/project journey;", "Conceptualize and develop characters, rules, scenarios and narratives;", "Prototyping;", "Development of GDD;", "Quality control;", "Unity."]
      },
      shots: ["img/shots/chasing-illusions-1.webp", "img/shots/chasing-illusions-2.webp", "img/shots/chasing-illusions-3.webp"],
      links: [{ label: { pt: "Jogar no itch.io", en: "Play on itch.io" }, url: "https://no-slopes.itch.io/chasing-illusions" }]
    },
    {
      slug: "dano-colateral",
      title: { pt: "Dano Colateral", en: "Collateral Damage" },
      cover: "",
      roles: ["game-design"],
      platform: { pt: "", en: "" },
      studio: "",
      year: { pt: "", en: "" },
      genre: { pt: "Thriller · puzzle", en: "Thriller · puzzle" },
      logline: {
        pt: "Thriller de puzzles sobre um plano escondido nas profundezas de uma corporação.",
        en: "A puzzle thriller about a plan buried deep inside a corporation."
      },
      summary: {
        pt: "Malu, funcionária de uma grande empresa, cai numa emboscada ao descobrir a existência de um plano misterioso nas profundezas da companhia.",
        en: "Malu, an employee at a large company, walks into an ambush after discovering a mysterious plan hidden deep within the corporation."
      },
      contributions: {
        pt: [],
        en: []
      },
      shots: [],
      links: []
    }
  ],

  /* ----------------------------------------------------------------------
     Projetos Gamificados (textos copiados do portfólio no Notion)
     ---------------------------------------------------------------------- */
  gamified: {
    lead: {
      pt: "Possuo conhecimento em estruturas de gamificação aplicado em projetos reais que garantiram ganhos significativos relacionados a objetivos de negócios. Veja abaixo o detalhamento dos projetos:",
      en: "I have experience applying gamification structures to real projects that delivered significant gains tied to business goals. See the project details below:"
    },
    items: [
      {
        slug: "plataforma-gamificada-live-ops",
        kind: "project",
        title: { pt: "Plataforma Gamificada Live-Ops | White Label", en: "Live-Ops Gamified Platform | White Label" },
        cover: "img/gamified/liveops-cover.webp",
        roles: ["game-design", "narrative-design", "quest-design", "level-design"],
        platform: { pt: "Computador, Mobile", en: "Computer, Mobile" },
        text: { pt: "O Sistema Gamificado White Label permite ao administrador aplicar qualquer tipo de comunicação visual e textual que seja pertinente ao seu público. Todo o projeto é definido por duas progressões que trazem a base gamificada:\n- Progressão em Grupo: definida pela união dos usuários em prol de um objetivo comum, seja ganhar uma competição, aumentar o nível do seu grupo ou colaborar entre si. Esse tipo de progressão é definida pela construção de Guildas, Missões Mensais e Comunicação focada.\n- Progressão Individual: caracterizada por conquistas individuais, ou seja, tudo que o usuário faz em nossa plataforma que faz com que ele se torne ainda mais autoridade frente a outros usuários. Esse tipo de progressão é definida pela construção de Tier Ranks, Competições, Missões Semanais e Diárias e Mecânica de Gacha.\n\nInformações visuais podem ser abaixo do card.", en: "The White Label Gamified System lets the administrator apply any kind of visual and written communication relevant to their audience. The whole project is defined by two progressions that form its gamified foundation:\n- Group Progression: defined by users coming together toward a common goal, whether winning a competition, leveling up their group or collaborating with one another. This kind of progression is built through Guilds, Monthly Missions and focused Communication.\n- Individual Progression: characterized by individual achievements, that is, everything users do on our platform that makes them even more of an authority among other users. This kind of progression is built through Tier Ranks, Competitions, Weekly and Daily Missions and a Gacha Mechanic.\n\nVisual information can be found below the card." },
        contributions: {
          pt: ["Desenvolvimento funções do jogo, criando sistemas, regras, jogabilidade e balanceamento garantindo que seja jogável, divertido e envolvente", "Estruturação de Level Design;", "Construção de GDD;", "Aplicação de Frameworks de Game Design;", "Conceituação e desenvolvimento personagens, regras, cenários e narrativas;", "Teste e Prototipagem;", "Monetização in-game."],
          en: ["Developing game functions, creating systems, rules, gameplay and balancing, ensuring it is playable, fun and engaging", "Level Design structuring;", "GDD writing;", "Game Design Frameworks' application;", "Conceptualization and development of characters, rules, scenarios and narratives;", "Testing and Prototyping;", "In-game monetization."]
        },
        shotGroups: [
          {
            "title": {
              "pt": "Aplicação Narrativa e Contextual | Mafia",
              "en": "Narrative and Contextual Application | Mafia"
            },
            "shots": [
              {
                "src": "img/gamified/liveops-1.webp",
                "caption": {
                  "pt": "Character Design",
                  "en": "Character Design"
                }
              },
              {
                "src": "img/gamified/liveops-2.webp",
                "caption": {
                  "pt": "Quiz de Decisão",
                  "en": "Decision Quiz"
                }
              },
              {
                "src": "img/gamified/liveops-3.webp",
                "caption": {
                  "pt": "Quiz de Decisão",
                  "en": "Decision Quiz"
                }
              },
              {
                "src": "img/gamified/liveops-4.webp",
                "caption": {
                  "pt": "Página Principal",
                  "en": "Home Page"
                }
              },
              {
                "src": "img/gamified/liveops-5.webp",
                "caption": {
                  "pt": "Missões",
                  "en": "Missions"
                }
              },
              {
                "src": "img/gamified/liveops-6.webp",
                "caption": {
                  "pt": "Chat",
                  "en": "Chat"
                }
              },
              {
                "src": "img/gamified/liveops-7.webp",
                "caption": {
                  "pt": "Loja",
                  "en": "Shop"
                }
              },
              {
                "src": "img/gamified/liveops-8.webp",
                "caption": {
                  "pt": "Gacha Machine",
                  "en": "Gacha Machine"
                }
              }
            ]
          },
          {
            "title": {
              "pt": "Aplicação Narrativa e Contextual | Esportiva",
              "en": "Narrative and Contextual Application | Sports"
            },
            "shots": [
              {
                "src": "img/gamified/liveops-9.webp",
                "caption": {
                  "pt": "Character Design",
                  "en": "Character Design"
                }
              },
              {
                "src": "img/gamified/liveops-10.webp",
                "caption": {
                  "pt": "Página Principal",
                  "en": "Home Page"
                }
              },
              {
                "src": "img/gamified/liveops-11.webp",
                "caption": {
                  "pt": "Missões",
                  "en": "Missions"
                }
              },
              {
                "src": "img/gamified/liveops-12.webp",
                "caption": {
                  "pt": "Chat",
                  "en": "Chat"
                }
              }
            ]
          }
        ],
        links: []
      },
      {
        slug: "pontos-de-lealdade",
        kind: "project",
        title: { pt: "Pontos de Lealdade | White Label", en: "Loyalty Points | White Label" },
        cover: "img/gamified/loyalty-cover.webp",
        fit: "contain",
        roles: ["game-design", "level-design", "balance-design"],
        platform: { pt: "Computador, Mobile", en: "Computer, Mobile" },
        text: { pt: "Loyalty Points é um sistema de progressão gamificado baseado em conquista de pontos a partir conclusão de metas. Na prática, o jogador ganha pontos por cada tarefa concluída.\nQuanto mais pontos conquistados, maior o nível de experiência do jogador e, por consequência, seu nível na plataforma. Seu nível desbloqueia multiplicadores que aumentam ainda mais os pontos ganhos.\nOs jogadores podem trocar seus pontos acumulados em uma loja de troca garantindo ainda mais recompensas na plataforma.", en: "Loyalty Points is a gamified progression system based on earning points by completing goals. In practice, the player earns points for each completed task.\nThe more points earned, the higher the player's experience level and, consequently, their level on the platform. Their level unlocks multipliers that increase the points earned even further.\nPlayers can trade their accumulated points in an exchange shop, securing even more rewards on the platform." },
        contributions: {
          pt: ["Desenvolvimento funções do jogo, criando sistemas, regras, jogabilidade e balanceamento garantindo que seja jogável, divertido e envolvente", "Estruturação de Level Design;", "Construção de GDD;", "Aplicação de Frameworks de Game Design;", "Conceituação e desenvolvimento personagens, regras, cenários e narrativas;", "Teste e Prototipagem;", "Monetização in-game."],
          en: ["Developing game functions, creating systems, rules, gameplay and balancing, ensuring it is playable, fun and engaging", "Level Design structuring;", "GDD writing;", "Game Design Frameworks' application;", "Conceptualization and development of characters, rules, scenarios and narratives;", "Testing and Prototyping;", "In-game monetization."]
        },
        shots: ["img/gamified/loyalty-1.webp"],
        links: []
      }
    ]
  },

  /* ----------------------------------------------------------------------
     Projetos para a Comunidade (textos copiados do portfólio no Notion)
     ---------------------------------------------------------------------- */
  community: {
    lead: {
      pt: "Fui idealizador e criador de algumas ferramentas que foram disponibilizadas para a comunidade gratuitamente",
      en: "I conceived and created a few tools that were made available to the community for free"
    },
    items: [
      {
        slug: "newsletter",
        kind: "project",
        title: { pt: "Devaneios de um Game Designer | Newsletter", en: "Devaneios de um Game Designer | Newsletter" },
        cover: "img/community/newsletter.webp",
        fit: "contain",
        roles: [],
        platform: { pt: "Substack", en: "Substack" },
        text: {
          pt: "Newsletter para quem quer aprender sobre game design através de gameplay, sistemas, comportamento do jogador e a interseção entre mecânica e criatividade.",
          en: "A newsletter for people who want to learn game design through gameplay, systems, player behavior and the intersection between mechanics and creativity."
        },
        links: [{ label: { pt: "Ler e assinar a newsletter", en: "Read and subscribe" }, url: "https://devaneiosdeumgamedesigner.substack.com/" }]
      },
      {
        slug: "game-design-for-game-designers",
        kind: "project",
        title: { pt: "Game Design for Game Designers | ChatGPT", en: "Game Design for Game Designers | ChatGPT" },
        cover: "img/community/gd4gd.webp",
        fit: "contain",
        roles: ["game-design", "mentor"],
        platform: { pt: "Computador, Mobile", en: "Computer, Mobile" },
        text: { pt: "Comecei a estruturar e desenvolver um assistente especializado em Game Design para atuar como meu parceiro de trabalho no dia a dia com o GPT Personalizado.\n\nA ideia não é usar IA como gerador de ideias aleatórias, é construir um parceiro estratégico, baseado em referências reais de mercado, utilizando como base:\n\n- Conhecimentos obtidos através de livros, como: The Art of Game Design, Game Feel e mais.\n- Estruturas de Framework funcionais, como: MDA, 4 Keys 2 Fun e até o Octalysis para gamificação.\n- Palestras, análises e benchmarkings públicos.\n\nEm termos práticos, meu parceiro está me ajudando a:\n✔ Estruturar game loops\n✔ Refinar progressão e balanceamento\n✔ Integrar mecânica e narrativa\n✔ Melhorar Worldbuilding e Level Design\n✔ Documentar processos\n✔ Organizar sistemas e decisões com clareza\n✔ E até analisar e criticar minhas ideias com base em conhecimento real de mercado.\n\nPara isso, além do vasto conhecimento que ele pode conseguir online na web, ele usa mais de 15 arquivos contemplando mais de 5k páginas de conteúdo.\n\nÉ como ter um GD disponível para discutir decisões, trade-offs e experiência do jogador, sempre com base conceitual sólida.", en: "I started structuring and building an assistant specialized in Game Design to act as my day-to-day work partner, using a Custom GPT.\n\nThe idea isn't to use AI as a random idea generator, it's to build a strategic partner, grounded in real market references, using as a foundation:\n\n- Knowledge gathered from books such as The Art of Game Design, Game Feel and more.\n- Working framework structures such as MDA, 4 Keys 2 Fun and even Octalysis for gamification.\n- Public talks, analyses and benchmarks.\n\nIn practical terms, my partner is helping me to:\n✔ Structure game loops\n✔ Refine progression and balancing\n✔ Integrate mechanics and narrative\n✔ Improve Worldbuilding and Level Design\n✔ Document processes\n✔ Organize systems and decisions with clarity\n✔ And even analyze and critique my ideas based on real market knowledge.\n\nTo do this, beyond the vast knowledge it can pull from the web, it uses more than 15 files covering over 5k pages of content.\n\nIt's like having a GD available to discuss decisions, trade-offs and player experience, always on a solid conceptual foundation." },
        links: [{ label: { pt: "Abrir o GPT", en: "Open the GPT" }, url: "https://chatgpt.com/g/g-698a00e0f91481918eaf106111258643-game-design-for-game-designers" }]
      },
      {
        slug: "double-a",
        kind: "project",
        title: { pt: "Double A - Character Design Framework", en: "Double A - Character Design Framework" },
        cover: "img/community/double-a.webp",
        fit: "contain",
        roles: ["game-design", "narrative-design", "mentor"],
        platform: { pt: "Computador, Mobile", en: "Computer, Mobile" },
        text: { pt: "Criar personagens nunca foi sobre falta de ideia.\n\nSempre foi sobre falta de estrutura.\n\nDepois de perder horas (e energia) pulando entre referências, mecânicas e conceitos soltos, eu decidi transformar esse caos em sistema.\n\nNasceu o Double A - Character Design Framework.\n\nUm modelo simples:\nAtributos + Arquétipos → personagens mais consistentes, rápidos de criar e muito mais coerentes.\n\nEscrevi um artigo explicando todo o processo, passo a passo (https://medium.com/@victorhugomcc_26392/double-a-a-character-design-framework-c4c381db5b0a)\n\nSe você trabalha com game design, narrativa ou criação de personagens, acho que pode te ajudar bastante.", en: "Creating characters was never about a lack of ideas.\n\nIt was always about a lack of structure.\n\nAfter losing hours (and energy) jumping between references, mechanics and loose concepts, I decided to turn that chaos into a system.\n\nThat's how the Double A - Character Design Framework was born.\n\nA simple model:\nAttributes + Archetypes → characters that are more consistent, faster to create and far more coherent.\n\nI wrote an article explaining the whole process, step by step (https://medium.com/@victorhugomcc_26392/double-a-a-character-design-framework-c4c381db5b0a)\n\nIf you work with game design, narrative or character creation, I think it can help you a lot." },
        links: [
          { label: { pt: "Abrir o framework", en: "Open the framework" }, url: "https://houlijouli.github.io/double-a-framework/" },
          { label: { pt: "Ler o artigo no Medium", en: "Read the article on Medium" }, url: "https://medium.com/@victorhugomcc_26392/double-a-a-character-design-framework-c4c381db5b0a" }
        ]
      }
    ]
  },

  /* ----------------------------------------------------------------------
     Jogos que mentorei (textos copiados do portfólio no Notion)
     ---------------------------------------------------------------------- */
  mentoring: [
    {
      "slug": "mentoria-mia",
      "kind": "mentoring",
    "fit": "contain",
      "title": {
        "pt": "Mia na Terra das Marionetes",
        "en": "Mia na Terra das Marionetes"
      },
      "cover": "img/mentoring/mia.webp",
      "roles": [
        "mentor"
      ],
      "platform": {
        "pt": "Computador",
        "en": "Computer"
      },
      "text": {
        "pt": "Na calada da noite, a corajosa e humorada Mia parte em uma jornada para ajudar seus pais, vizinhos e amigos a saírem de um transe.\nAtravessando um portal apenas com seu fiel taser, ela se vê em um universo corrompido repleto de marionetes bizarras e quebra-cabeças controlados por uma força maligna.",
        "en": "In the dead of night, brave and witty Mia sets off on a journey to help her parents, neighbors and friends break free from a trance.\nCrossing a portal with only her trusty taser, she finds herself in a corrupted universe full of bizarre puppets and puzzles controlled by an evil force."
      },
      "contributions": {
        "pt": [
          "Mentoria no desenvolvimento funções do jogo, como sistemas, regras, jogabilidade garantindo que seja jogável, divertido e envolvente;"
        ],
        "en": [
          "Mentoring on developing the game's functions, such as systems, rules and gameplay, ensuring it is playable, fun and engaging;"
        ]
      },
      "links": [
        {
          "label": {
            "pt": "Jogar no itch.io",
            "en": "Play on itch.io"
          },
          "url": "https://misty-frog-studios.itch.io/mia-na-terra-das-marionetes"
        },
        {
          "label": {
            "pt": "Ver gameplay",
            "en": "Watch gameplay"
          },
          "url": "https://www.youtube.com/watch?v=sM5j2HKiUFo"
        }
      ]
    },
    {
      "slug": "mentoria-deep-dive",
      "kind": "mentoring",
    "fit": "contain",
      "title": {
        "pt": "Deep Dive",
        "en": "Deep Dive"
      },
      "cover": "img/mentoring/deep-dive.webp",
      "roles": [
        "mentor"
      ],
      "platform": {
        "pt": "Computador",
        "en": "Computer"
      },
      "text": {
        "pt": "Gabriel um homem de meia idade que não sai mais de sua cama e vive em sua mente com grande solidão, um dia por ironia do destino acorda dentro de sua mente com aquilo que ele mais temia em sua frente, a própria solidão. Então ele terá que enfrentar seus traumas para achar a fonte de tudo isso e entender que algumas coisas não foram bem assim como ele pensava.",
        "en": "Gabriel, a middle-aged man who no longer leaves his bed and lives inside his mind in deep loneliness, wakes up one day, by an irony of fate, inside his own mind, face to face with what he feared most: loneliness itself. He will have to confront his traumas to find the source of it all and understand that some things didn't happen quite the way he thought."
      },
      "contributions": {
        "pt": [
          "Mentoria no desenvolvimento funções do jogo, como sistemas, regras, jogabilidade garantindo que seja jogável, divertido e envolvente;"
        ],
        "en": [
          "Mentoring on developing the game's functions, such as systems, rules and gameplay, ensuring it is playable, fun and engaging;"
        ]
      },
      "links": [
        {
          "label": {
            "pt": "Jogar no itch.io",
            "en": "Play on itch.io"
          },
          "url": "https://ninja-gamess.itch.io/deep-dive"
        },
        {
          "label": {
            "pt": "Ver gameplay",
            "en": "Watch gameplay"
          },
          "url": "https://www.youtube.com/watch?v=QJSJ-nVPvpI"
        }
      ]
    },
    {
      "slug": "mentoria-umbra",
      "kind": "mentoring",
    "fit": "contain",
      "title": {
        "pt": "Umbra",
        "en": "Umbra"
      },
      "cover": "img/mentoring/umbra.webp",
      "roles": [
        "mentor"
      ],
      "platform": {
        "pt": "Computador",
        "en": "Computer"
      },
      "text": {
        "pt": "Mergulhe em um emocionante RPG de ação e aventura isométrico que narra a saga de Umbra, um modesto ser sombrio que anseia pela proteção do seu mundo contra os conquistadores celestiais que dominaram sua casa.  O jogo é focado em puzzles de exploração e interação com combate.",
        "en": "Dive into a thrilling isometric action-adventure RPG that tells the saga of Umbra, a humble shadow being who longs to protect his world from the celestial conquerors who took over his home.  The game focuses on exploration puzzles and interaction with combat."
      },
      "contributions": {
        "pt": [
          "Mentoria no desenvolvimento funções do jogo, como sistemas, regras, jogabilidade garantindo que seja jogável, divertido e envolvente;"
        ],
        "en": [
          "Mentoring on developing the game's functions, such as systems, rules and gameplay, ensuring it is playable, fun and engaging;"
        ]
      },
      "links": [
        {
          "label": {
            "pt": "Jogar no itch.io",
            "en": "Play on itch.io"
          },
          "url": "https://kaynaprestes.itch.io/umbra"
        },
        {
          "label": {
            "pt": "Ver gameplay",
            "en": "Watch gameplay"
          },
          "url": "https://www.youtube.com/watch?v=IlYO_rvWSmo"
        }
      ]
    },
    {
      "slug": "mentoria-recoil",
      "kind": "mentoring",
    "fit": "contain",
      "title": {
        "pt": "Recoil",
        "en": "Recoil"
      },
      "cover": "img/mentoring/recoil.webp",
      "roles": [
        "mentor"
      ],
      "platform": {
        "pt": "Computador",
        "en": "Computer"
      },
      "text": {
        "pt": "Recoil é um jogo de plataforma 2D com subtemas de quebra-cabeças e tiro ambientado em uma Terra futurista habitada apenas por robôs e gatos.",
        "en": "Recoil is a 2D platformer with puzzle and shooter sub-themes, set on a futuristic Earth inhabited only by robots and cats."
      },
      "contributions": {
        "pt": [
          "Mentoria no desenvolvimento funções do jogo, como sistemas, regras, jogabilidade garantindo que seja jogável, divertido e envolvente;"
        ],
        "en": [
          "Mentoring on developing the game's functions, such as systems, rules and gameplay, ensuring it is playable, fun and engaging;"
        ]
      },
      "links": [
        {
          "label": {
            "pt": "Jogar no itch.io",
            "en": "Play on itch.io"
          },
          "url": "https://luizdml.itch.io/recoil"
        },
        {
          "label": {
            "pt": "Ver gameplay",
            "en": "Watch gameplay"
          },
          "url": "https://www.youtube.com/watch?v=MAz3MqREmBI"
        }
      ]
    },
    {
      "slug": "mentoria-bagre-noturno",
      "kind": "mentoring",
    "fit": "contain",
      "title": {
        "pt": "Operação Bagre Noturno: Lux in Tenebris",
        "en": "Operação Bagre Noturno: Lux in Tenebris"
      },
      "cover": "img/mentoring/bagre-noturno.webp",
      "roles": [
        "mentor"
      ],
      "platform": {
        "pt": "Computador",
        "en": "Computer"
      },
      "text": {
        "pt": "Em um Brasil alternativo do ano de 2031, o jogo coloca os players no papel de um agente especial das Forças Armadas Brasileiras, encarregado de missões de infiltração, espionagem e sabotagem em cenários internacionais. Mesclando elementos de stealth, ação e comédia, o jogo oferece uma experiência única em ambientes variados, destacando a cultura e o cenário brasileiro. Com uma narrativa rica e personagens carismáticos, o jogador deverá utilizar uma variedade de habilidades e dispositivos para superar desafios, ao mesmo tempo em que lida com situações tensas e momentos de humor inesperado, garantindo uma jornada envolvente e divertida.",
        "en": "In an alternate Brazil in the year 2031, the game puts players in the role of a special agent of the Brazilian Armed Forces, tasked with infiltration, espionage and sabotage missions in international settings. Blending stealth, action and comedy, the game offers a unique experience across varied environments, highlighting Brazilian culture and settings. With a rich narrative and charismatic characters, the player must use a variety of skills and gadgets to overcome challenges while dealing with tense situations and unexpected moments of humor, ensuring an engaging and fun journey."
      },
      "contributions": {
        "pt": [
          "Mentoria no desenvolvimento funções do jogo, como sistemas, regras, jogabilidade garantindo que seja jogável, divertido e envolvente;"
        ],
        "en": [
          "Mentoring on developing the game's functions, such as systems, rules and gameplay, ensuring it is playable, fun and engaging;"
        ]
      },
      "links": [
        {
          "label": {
            "pt": "Jogar no itch.io",
            "en": "Play on itch.io"
          },
          "url": "https://jhorro.itch.io/operacao-bagre-noturno"
        },
        {
          "label": {
            "pt": "Ver gameplay",
            "en": "Watch gameplay"
          },
          "url": "https://www.youtube.com/watch?v=ZSiYa1pf1sk"
        }
      ]
    },
    {
      "slug": "mentoria-lens",
      "kind": "mentoring",
    "fit": "contain",
      "title": {
        "pt": "Lens",
        "en": "Lens"
      },
      "cover": "img/mentoring/lens.webp",
      "roles": [
        "mentor"
      ],
      "platform": {
        "pt": "Computador",
        "en": "Computer"
      },
      "text": {
        "pt": "Desperte em um mundo caído; o familiar e o desconhecido vão virar pó, virar ferrugem. Nenhum passado a ser lembrado.\nFeche os olhos, um de cada vez, e deixe a escuridão guiá-lo ao seu destino.",
        "en": "Awaken in a fallen world, the familiar and the unknown, will turn into dust, into rust. No past to be remembered.\nClose your eyes, one at a time, and let darkness guide you to it's destiny."
      },
      "contributions": {
        "pt": [
          "Mentoria no desenvolvimento funções do jogo, como sistemas, regras, jogabilidade garantindo que seja jogável, divertido e envolvente;"
        ],
        "en": [
          "Mentoring on developing the game's functions, such as systems, rules and gameplay, ensuring it is playable, fun and engaging;"
        ]
      },
      "links": [
        {
          "label": {
            "pt": "Jogar no itch.io",
            "en": "Play on itch.io"
          },
          "url": "https://harperbolic.itch.io/lens"
        },
        {
          "label": {
            "pt": "Ver gameplay",
            "en": "Watch gameplay"
          },
          "url": "https://www.youtube.com/watch?v=lyhFd4_eSuo"
        }
      ]
    },
    {
      "slug": "mentoria-sevita",
      "kind": "mentoring",
    "fit": "contain",
      "title": {
        "pt": "Sevita",
        "en": "Sevita"
      },
      "cover": "img/mentoring/sevita.webp",
      "roles": [
        "mentor"
      ],
      "platform": {
        "pt": "Computador",
        "en": "Computer"
      },
      "text": {
        "pt": "\"Sevita\" emerge como uma experiência envolvente e enigmática. Neste mundo imerso em sombras e segredos, os jogadores embarcam em uma jornada única, onde passado, presente e futuro se entrelaçam. No centro dessa narrativa intrigante está um protagonista incomum: um xamã singular que assume a forma de uma folha, residindo dentro de um antigo salgueiro-chorão.",
        "en": "\"Sevita\" emerges as an engaging and enigmatic experience. In this world steeped in shadows and secrets, players embark on a unique journey where past, present and future intertwine. At the center of this intriguing narrative is an unusual protagonist: a singular shaman who takes the form of a leaf, living inside an ancient weeping willow."
      },
      "contributions": {
        "pt": [
          "Mentoria no desenvolvimento funções do jogo, como sistemas, regras, jogabilidade garantindo que seja jogável, divertido e envolvente;"
        ],
        "en": [
          "Mentoring on developing the game's functions, such as systems, rules and gameplay, ensuring it is playable, fun and engaging;"
        ]
      },
      "links": [
        {
          "label": {
            "pt": "Jogar no itch.io",
            "en": "Play on itch.io"
          },
          "url": "https://uzinahgamestudio.itch.io/sevita-ctrl-alt-jam-3"
        },
        {
          "label": {
            "pt": "Ver gameplay",
            "en": "Watch gameplay"
          },
          "url": "https://www.youtube.com/watch?v=4ZU4gEjZx84&t=29s"
        }
      ]
    },
    {
      "slug": "mentoria-light-steps",
      "kind": "mentoring",
    "fit": "contain",
      "title": {
        "pt": "Light Steps",
        "en": "Light Steps"
      },
      "cover": "img/mentoring/light-steps.webp",
      "roles": [
        "mentor"
      ],
      "platform": {
        "pt": "Computador",
        "en": "Computer"
      },
      "text": {
        "pt": "Em \"Light Steps\", você assume o papel de um gecko mago corajoso que embarca em uma missão épica para trazer de volta a luz do sol, roubada por criaturas noturnas lideradas por um gecko maligno. Este emocionante jogo rogue-like desafia os jogadores a explorar ambientes sombrios e perigosos, enfrentando inimigos poderosos e coletando grimórios mágicos para aumentar seu poder.",
        "en": "In \"Light Steps\", you play a brave gecko mage who sets out on an epic quest to bring back the sunlight, stolen by nocturnal creatures led by an evil gecko. This exciting rogue-like challenges players to explore dark and dangerous environments, face powerful enemies and collect magical grimoires to increase their power."
      },
      "contributions": {
        "pt": [
          "Mentoria no desenvolvimento funções do jogo, como sistemas, regras, jogabilidade garantindo que seja jogável, divertido e envolvente;"
        ],
        "en": [
          "Mentoring on developing the game's functions, such as systems, rules and gameplay, ensuring it is playable, fun and engaging;"
        ]
      },
      "links": [
        {
          "label": {
            "pt": "Jogar no itch.io",
            "en": "Play on itch.io"
          },
          "url": "https://barilli.itch.io/light-steps"
        }
      ]
    },
    {
      "slug": "mentoria-mouse-n-chase",
      "kind": "mentoring",
    "fit": "contain",
      "title": {
        "pt": "Mouse 'N Chase",
        "en": "Mouse 'N Chase"
      },
      "cover": "img/mentoring/mouse-n-chase.webp",
      "roles": [
        "mentor"
      ],
      "platform": {
        "pt": "Computador",
        "en": "Computer"
      },
      "text": {
        "pt": "\"Mouse'n Chase\" é um jogo de corrida e ação inspirado nos desenhos clássicos das décadas de 1920 a 1940. Junte-se ao Mickey Mouse de 1928 em uma perseguição policial, com obstáculos, power-ups e ação em alta velocidade.",
        "en": "\"Mouse'n Chase\" is a racing and action game inspired by the classic cartoons of the 1920s to 1940s. Join Mickey Mouse 1928 in a police chase, featuring obstacles, power-ups, and high-speed action."
      },
      "contributions": {
        "pt": [
          "Mentoria no desenvolvimento funções do jogo, como sistemas, regras, jogabilidade garantindo que seja jogável, divertido e envolvente;"
        ],
        "en": [
          "Mentoring on developing the game's functions, such as systems, rules and gameplay, ensuring it is playable, fun and engaging;"
        ]
      },
      "links": [
        {
          "label": {
            "pt": "Jogar no itch.io",
            "en": "Play on itch.io"
          },
          "url": "https://retrkill0.itch.io/mouse-n-chase"
        },
        {
          "label": {
            "pt": "Ver gameplay",
            "en": "Watch gameplay"
          },
          "url": "https://www.youtube.com/watch?v=NUqCauQBhwc"
        }
      ]
    },
    {
      "slug": "mentoria-eco-heroi",
      "kind": "mentoring",
    "fit": "contain",
      "title": {
        "pt": "Eco Herói",
        "en": "Eco Herói"
      },
      "cover": "img/mentoring/eco-heroi.webp",
      "roles": [
        "mentor"
      ],
      "platform": {
        "pt": "Computador",
        "en": "Computer"
      },
      "text": {
        "pt": "",
        "en": ""
      },
      "contributions": {
        "pt": [
          "Mentoria no desenvolvimento funções do jogo, como sistemas, regras, jogabilidade garantindo que seja jogável, divertido e envolvente;"
        ],
        "en": [
          "Mentoring on developing the game's functions, such as systems, rules and gameplay, ensuring it is playable, fun and engaging;"
        ]
      },
      "links": [
        {
          "label": {
            "pt": "Jogar no itch.io",
            "en": "Play on itch.io"
          },
          "url": "https://razvra.itch.io/eco-heroi"
        }
      ]
    },
    {
      "slug": "mentoria-pizzaria-do-pedro",
      "kind": "mentoring",
    "fit": "contain",
      "title": {
        "pt": "Pizzaria do Pedro",
        "en": "Pizzaria do Pedro"
      },
      "cover": "img/mentoring/pizzaria-do-pedro.webp",
      "roles": [
        "mentor"
      ],
      "platform": {
        "pt": "Computador",
        "en": "Computer"
      },
      "text": {
        "pt": "Se coloque na pele de Pedro, um guaxinim pizzaiolo em uma pequena vila japonesa. Enfrente o desafio de preparar pizzas deliciosas, realizar entregas e vasculhar os lixos das casas em busca de ingredientes especiais, enquanto tenta desesperadamente quitar uma dívida com a yakuza. Aventure-se pelas ruas, interaja com seus clientes e mergulhe em uma jornada cheia de aventura enquanto Pedro luta para manter sua pizzaria de pé e escapar das garras da grande máfia japonesa.",
        "en": "Step into the shoes of Pedro, a raccoon pizzaiolo in a small Japanese village. Take on the challenge of making delicious pizzas, delivering orders and rummaging through the neighbors' trash for special ingredients, while desperately trying to pay off a debt to the yakuza. Roam the streets, interact with your customers and dive into an adventure-filled journey as Pedro fights to keep his pizzeria afloat and escape the clutches of the great Japanese mafia."
      },
      "contributions": {
        "pt": [
          "Mentoria no desenvolvimento funções do jogo, como sistemas, regras, jogabilidade garantindo que seja jogável, divertido e envolvente;"
        ],
        "en": [
          "Mentoring on developing the game's functions, such as systems, rules and gameplay, ensuring it is playable, fun and engaging;"
        ]
      },
      "links": [
        {
          "label": {
            "pt": "Jogar no itch.io",
            "en": "Play on itch.io"
          },
          "url": "https://gabrielebonente.itch.io/pizzaria-do-pedro"
        },
        {
          "label": {
            "pt": "Ver gameplay",
            "en": "Watch gameplay"
          },
          "url": "https://www.youtube.com/watch?v=3BEAnjbIBPY"
        }
      ]
    },
    {
      "slug": "mentoria-conquistado",
      "kind": "mentoring",
    "fit": "contain",
      "title": {
        "pt": "Conquistado",
        "en": "Conquistado"
      },
      "cover": "img/mentoring/conquistado.webp",
      "roles": [
        "mentor"
      ],
      "platform": {
        "pt": "Computador",
        "en": "Computer"
      },
      "text": {
        "pt": "Enzo, um homem de 30 anos, enfrenta uma vida monótona e desmotivadora. Cansado da rotina sem graça, ele expressa seu desejo por algo novo antes de adormecer. No dia seguinte, desperta com um som peculiar que o introduz a um mundo onde suas ações são reconhecidas como conquistas. Guiado por um conjunto de objetivos, é desafiado a interagir com seu ambiente, cumprir tarefas cotidianas e alcançar realizações.",
        "en": "Enzo, a 30-year-old man, faces a monotonous and unmotivating life. Tired of his dull routine, he wishes for something new before falling asleep. The next day, he wakes up to a peculiar sound that introduces him to a world where his actions are recognized as achievements. Guided by a set of objectives, he is challenged to interact with his surroundings, complete everyday tasks and reach accomplishments."
      },
      "contributions": {
        "pt": [
          "Mentoria no desenvolvimento funções do jogo, como sistemas, regras, jogabilidade garantindo que seja jogável, divertido e envolvente;"
        ],
        "en": [
          "Mentoring on developing the game's functions, such as systems, rules and gameplay, ensuring it is playable, fun and engaging;"
        ]
      },
      "links": [
        {
          "label": {
            "pt": "Jogar no itch.io",
            "en": "Play on itch.io"
          },
          "url": "https://catfelps.itch.io/conquistado"
        }
      ]
    }
  ],

  /* ----------------------------------------------------------------------
     Sobre
     ---------------------------------------------------------------------- */
  skills: {
    pt: ["Game design de sistemas e mecânicas", "Level design", "Narrative design", "Testes com jogadores", "Análise de jogos e benchmarking", "Prototipagem iterativa", "Gestão de projetos", "Liderança de equipes", "Gamificação para negócios"],
    en: ["Systems & mechanics design", "Level design", "Narrative design", "Player testing", "Game analysis & benchmarking", "Iterative prototyping", "Project management", "Team leadership", "Gamification for business"]
  },
  tools: {
    pt: ["Unity", "Figma", "Miro", "Ferramentas de IA", "Monday", "Trello", "Metodologias ágeis", "Análise de dados, OKRs e indicadores"],
    en: ["Unity", "Figma", "Miro", "AI tools", "Monday", "Trello", "Agile methods", "Data analysis, OKRs & KPIs"]
  }
};
