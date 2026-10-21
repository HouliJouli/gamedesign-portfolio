/* ==========================================================================
   CONSULTORIA — conteúdo da página consultoria.html
   Estrutura: área (função) → categoria → serviço { name, desc }.
   Os textos em `pt` foram transcritos da sua tabela; `en` é a tradução.
   ========================================================================== */

window.CONSULTING = {

  /* Textos de abertura e públicos: PROPOSTA — ajuste à vontade */
  intro: {
    title: { pt: "Consultoria de game design e produção", en: "Game design and production consulting" },
    lead: {
      pt: "Ajudo estúdios, devs indie e empresas a tirar jogos e sistemas gamificados do papel: do desenho de mecânicas, economia e narrativa à organização do pipeline de produção.",
      en: "I help studios, indie developers and companies get games and gamified systems off the ground: from designing mechanics, economy and narrative to organizing the production pipeline."
    }
  },

  audiences: [
    {
      title: { pt: "Estúdios e devs indie", en: "Indie studios and developers" },
      text: {
        pt: "Game design, balanceamento, documentação e organização da produção para times pequenos que precisam ganhar tração.",
        en: "Game design, balancing, documentation and production planning for small teams that need to gain traction."
      }
    },
    {
      title: { pt: "Estúdios médios e grandes", en: "Mid-size and large studios" },
      text: {
        pt: "Reforço pontual em features, economia, liveops e metagame, ou um diagnóstico de design e pipeline com olhar de fora.",
        en: "Targeted support on features, economy, live ops and metagame, or an outside look at your design and pipeline."
      }
    },
    {
      title: { pt: "Empresas (gamificação)", en: "Companies (gamification)" },
      text: {
        pt: "Sistemas de progressão, missões, rankings e fidelidade aplicados a plataformas e programas de engajamento.",
        en: "Progression systems, missions, rankings and loyalty applied to engagement platforms and programs."
      }
    }
  ],

  /* Serviços — transcritos da tabela */
  areas: [
    {
      id: "game-design",
      name: { pt: "Game Design", en: "Game Design" },
      categories: [
        {
          name: { pt: "Core Design", en: "Core Design" },
          services: [
            { name: { pt: "Criação de Mecânicas de Jogo", en: "Game Mechanics Creation" },
              desc: { pt: "Conceito, lógica, balanceamento inicial e loops de gameplay.", en: "Concept, logic, initial balancing and gameplay loops." } },
            { name: { pt: "Design de Sistema de Progressão", en: "Progression System Design" },
              desc: { pt: "Estrutura de níveis, XP, upgrades e ritmo de crescimento.", en: "Level structure, XP, upgrades and growth pacing." } },
            { name: { pt: "Balanceamento de Atributos e Dificuldade", en: "Attribute and Difficulty Balancing" },
              desc: { pt: "Ajuste de parâmetros de combate, inimigos, moedas e tempo.", en: "Tuning combat, enemy, currency and time parameters." } },
            { name: { pt: "Design de Economia (Soft/Hard Currency)", en: "Economy Design (Soft/Hard Currency)" },
              desc: { pt: "Planejamento de precificação, fluxos de moedas e pacing econômico.", en: "Pricing planning, currency flows and economic pacing." } }
          ]
        },
        {
          name: { pt: "Narrativa & Mundo", en: "Narrative & World" },
          services: [
            { name: { pt: "Criação de Personagens Jogáveis e NPCs", en: "Playable Character and NPC Creation" },
              desc: { pt: "Perfis, personalidades, habilidades, falas e papel narrativo.", en: "Profiles, personalities, abilities, lines and narrative role." } },
            { name: { pt: "Worldbuilding / Lore", en: "Worldbuilding / Lore" },
              desc: { pt: "Desenvolvimento de mundo, regiões, facções e ambientação.", en: "World, regions, factions and setting development." } },
            { name: { pt: "Roteiro de Missões e Diálogos", en: "Quest and Dialogue Writing" },
              desc: { pt: "Escrita de diálogos, eventos e branching simples.", en: "Writing dialogue, events and simple branching." } },
            { name: { pt: "Criação de Narrativa Principal / História-base", en: "Main Narrative / Core Story" },
              desc: { pt: "Estrutura de 3 atos, personagens principais e conflito central.", en: "Three-act structure, main characters and central conflict." } }
          ]
        },
        {
          name: { pt: "Experiência & Interface", en: "Experience & Interface" },
          services: [
            { name: { pt: "Análise de UX e Fluxo de Jogo", en: "UX and Game Flow Analysis" },
              desc: { pt: "Avaliar menus, clareza de objetivos, e curvas de aprendizado.", en: "Evaluating menus, clarity of goals and learning curves." } },
            { name: { pt: "Wireframes ou mockups conceituais (UI/UX)", en: "Conceptual Wireframes or Mockups (UI/UX)" },
              desc: { pt: "Esboços de telas e navegação para GDD ou pitch.", en: "Screen and navigation sketches for a GDD or pitch." } },
            { name: { pt: "Design de Tutoriais e Onboarding", en: "Tutorial and Onboarding Design" },
              desc: { pt: "Planejamento da introdução e progressão inicial.", en: "Planning the introduction and early progression." } }
          ]
        },
        {
          name: { pt: "Documentação & Estratégia", en: "Documentation & Strategy" },
          services: [
            { name: { pt: "Game Design Document (GDD) completo", en: "Complete Game Design Document (GDD)" },
              desc: { pt: "Documento cobrindo gameplay, narrativa, economia e UI.", en: "A document covering gameplay, narrative, economy and UI." } },
            { name: { pt: "One-Pager / Pitch Deck de Game Design", en: "Game Design One-Pager / Pitch Deck" },
              desc: { pt: "Documento conciso para publisher ou investidor.", en: "A concise document for a publisher or investor." } },
            { name: { pt: "Feature Spec Document (detalhe técnico de sistema)", en: "Feature Spec Document (technical system detail)" },
              desc: { pt: "Blueprint detalhado de uma mecânica ou módulo.", en: "A detailed blueprint of a mechanic or module." } }
          ]
        },
        {
          name: { pt: "QA de Design & Feedback", en: "Design QA & Feedback" },
          services: [
            { name: { pt: "Teste de Jogabilidade (Game Feel)", en: "Gameplay Testing (Game Feel)" },
              desc: { pt: "Avaliar ritmo, responsividade e engajamento da gameplay.", en: "Evaluating gameplay pacing, responsiveness and engagement." } },
            { name: { pt: "Teste de onboarding e tutorial", en: "Onboarding and Tutorial Testing" },
              desc: { pt: "Verificar se o jogador entende as mecânicas iniciais sem frustração.", en: "Checking that players understand the early mechanics without frustration." } },
            { name: { pt: "Teste de Economia / Progressão", en: "Economy / Progression Testing" },
              desc: { pt: "Jogar builds e analisar ritmo de recompensas e custos.", en: "Playing builds and analyzing the pacing of rewards and costs." } },
            { name: { pt: "Relatório de QA de Design completo", en: "Complete Design QA Report" },
              desc: { pt: "Diagnóstico de gameplay, UX e loop de engajamento.", en: "A diagnosis of gameplay, UX and the engagement loop." } },
            { name: { pt: "Playtest com feedback gravado (vídeo + relatório)", en: "Recorded Playtest Feedback (video + report)" },
              desc: { pt: "Sessão de jogo narrada + insights em PDF.", en: "A narrated play session + insights in PDF." } }
          ]
        },
        {
          name: { pt: "Consultoria & Estratégia", en: "Consulting & Strategy" },
          services: [
            { name: { pt: "Consultoria de Design por hora", en: "Hourly Design Consulting" },
              desc: { pt: "Sessões de mentoria ou análise de projeto em andamento.", en: "Mentoring sessions or analysis of a project in progress." } },
            { name: { pt: "Avaliação de Retenção / Monetização", en: "Retention / Monetization Review" },
              desc: { pt: "Análise de loops, funis e estratégias de engajamento.", en: "Analysis of loops, funnels and engagement strategies." } },
            { name: { pt: "Revisão de GDD / feedback estruturado", en: "GDD Review / Structured Feedback" },
              desc: { pt: "Leitura crítica e recomendações profissionais.", en: "A critical read and professional recommendations." } },
            { name: { pt: "Mentoria de Game Design", en: "Game Design Mentoring" },
              desc: { pt: "Acompanhamento contínuo com feedbacks e direcionamento.", en: "Ongoing support with feedback and direction." } }
          ]
        }
      ]
    },
    {
      id: "producao",
      name: { pt: "Produção", en: "Production" },
      categories: [
        {
          name: { pt: "Planejamento & Organização", en: "Planning & Organization" },
          services: [
            { name: { pt: "Criação de cronograma de produção (milestones)", en: "Production Schedule (milestones)" },
              desc: { pt: "Definir etapas, entregas, sprints e marcos do projeto.", en: "Defining the project's phases, deliverables, sprints and milestones." } },
            { name: { pt: "Planejamento de sprint / roadmap", en: "Sprint / Roadmap Planning" },
              desc: { pt: "Organização de tarefas em metodologia ágil (Scrum/Kanban).", en: "Organizing tasks with agile methods (Scrum/Kanban)." } },
            { name: { pt: "Definição de pipeline de produção", en: "Production Pipeline Definition" },
              desc: { pt: "Estruturar fluxos entre design, arte, programação e QA.", en: "Structuring the flow between design, art, programming and QA." } },
            { name: { pt: "Gerenciamento de backlog / priorização de features", en: "Backlog Management / Feature Prioritization" },
              desc: { pt: "Análise de escopo, custos e impacto das tarefas.", en: "Analysis of scope, cost and impact of tasks." } }
          ]
        },
        {
          name: { pt: "Gestão de Equipe & Comunicação", en: "Team Management & Communication" },
          services: [
            { name: { pt: "Reuniões de alinhamento e acompanhamento", en: "Alignment and Follow-up Meetings" },
              desc: { pt: "Conduzir stand-ups, retrospectivas e reuniões semanais.", en: "Running stand-ups, retrospectives and weekly meetings." } },
            { name: { pt: "Criação de documentação de produção (confluence, notion)", en: "Production Documentation (Confluence, Notion)" },
              desc: { pt: "Documentar status, responsabilidades e dependências.", en: "Documenting status, responsibilities and dependencies." } },
            { name: { pt: "Gestão de fornecedores e freelancers", en: "Vendor and Freelancer Management" },
              desc: { pt: "Contratação, briefing, controle de entregas e pagamentos.", en: "Hiring, briefing, tracking deliverables and payments." } },
            { name: { pt: "Onboarding de equipe", en: "Team Onboarding" },
              desc: { pt: "Preparar guias, templates e ferramentas de trabalho.", en: "Preparing guides, templates and working tools." } }
          ]
        },
        {
          name: { pt: "Supervisão Criativa & Produção Executiva", en: "Creative Oversight & Executive Production" },
          services: [
            { name: { pt: "Supervisão de gameplay / narrativa / arte", en: "Gameplay / Narrative / Art Oversight" },
              desc: { pt: "Acompanhar entregas criativas e garantir coesão de produto.", en: "Following creative deliverables and ensuring product cohesion." } },
            { name: { pt: "Análise de builds e relatórios de progresso", en: "Build Review and Progress Reports" },
              desc: { pt: "Avaliar entregas, coletar feedbacks e gerar relatórios executivos.", en: "Evaluating deliverables, gathering feedback and producing executive reports." } },
            { name: { pt: "Gestão de mudanças de escopo (scope management)", en: "Scope Change Management" },
              desc: { pt: "Analisar impacto de novas features e replanejar cronograma.", en: "Analyzing the impact of new features and replanning the schedule." } },
            { name: { pt: "Planejamento de roadmap de lançamento / marketing", en: "Launch / Marketing Roadmap Planning" },
              desc: { pt: "Coordenação entre produto, publishing e comunidade.", en: "Coordination between product, publishing and community." } }
          ]
        },
        {
          name: { pt: "Orçamento & Produção Executiva", en: "Budget & Executive Production" },
          services: [
            { name: { pt: "Estimativa de custos de produção", en: "Production Cost Estimate" },
              desc: { pt: "Calcular horas, recursos, equipe e cronograma financeiro.", en: "Calculating hours, resources, team and financial schedule." } },
            { name: { pt: "Gestão de orçamento e controle financeiro", en: "Budget Management and Financial Control" },
              desc: { pt: "Acompanhar gastos, projeções e margens de lucro.", en: "Tracking spending, projections and profit margins." } },
            { name: { pt: "Elaboração de pitch financeiro / de produção", en: "Financial / Production Pitch" },
              desc: { pt: "Preparar material de apresentação para investidores.", en: "Preparing presentation material for investors." } },
            { name: { pt: "Relatório executivo de status de projeto", en: "Executive Project Status Report" },
              desc: { pt: "Documento periódico com riscos, entregas e KPIs.", en: "A periodic document with risks, deliverables and KPIs." } }
          ]
        },
        {
          name: { pt: "Coordenação Técnica & Pipeline", en: "Technical Coordination & Pipeline" },
          services: [
            { name: { pt: "Integração entre áreas (tech, arte, design)", en: "Cross-discipline Integration (tech, art, design)" },
              desc: { pt: "Facilitar comunicação entre disciplinas e prazos.", en: "Facilitating communication across disciplines and deadlines." } },
            { name: { pt: "Setup de ferramentas de gestão (Trello, Jira, Notion)", en: "Management Tool Setup (Trello, Jira, Notion)" },
              desc: { pt: "Configurar boards, automações e fluxos.", en: "Setting up boards, automations and workflows." } },
            { name: { pt: "QA de pipeline de produção", en: "Production Pipeline QA" },
              desc: { pt: "Identificar gargalos e propor otimizações no fluxo de trabalho.", en: "Identifying bottlenecks and proposing workflow optimizations." } },
            { name: { pt: "Produção de sprint report + planejamento da próxima", en: "Sprint Report + Next Sprint Planning" },
              desc: { pt: "Analisar resultados e ajustar plano de trabalho.", en: "Analyzing results and adjusting the work plan." } }
          ]
        },
        {
          name: { pt: "Consultoria Estratégica", en: "Strategic Consulting" },
          services: [
            { name: { pt: "Mentoria de Produção / Gerência de Projetos", en: "Production / Project Management Mentoring" },
              desc: { pt: "Sessões de orientação sobre fluxo, escopo e prazos.", en: "Guidance sessions on workflow, scope and deadlines." } },
            { name: { pt: "Avaliação de pipeline de produção", en: "Production Pipeline Assessment" },
              desc: { pt: "Diagnóstico de equipe, ferramentas e gargalos.", en: "A diagnosis of team, tools and bottlenecks." } },
            { name: { pt: "Planejamento de LiveOps / Pós-lançamento", en: "LiveOps / Post-launch Planning" },
              desc: { pt: "Organização de updates, eventos e roadmap pós-release.", en: "Organizing updates, events and the post-release roadmap." } }
          ]
        }
      ]
    }
  ]
};
