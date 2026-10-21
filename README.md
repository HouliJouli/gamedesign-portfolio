# Portfólio — Victor Hugo Costa

Site estático (HTML, CSS e JavaScript puro), sem build, pronto para o GitHub Pages.
Bilíngue PT/EN, responsivo, com tema claro e escuro.

## Estrutura

```
index.html          → página principal (portfólio)
consultoria.html    → página de consultoria (serviços em js/consultoria-data.js)
css/style.css       → visual (cores e fontes no topo, em :root)
js/data.js          → TODO o conteúdo: jogos, mentorias, projetos gamificados, projetos para a comunidade, habilidades, links
js/i18n.js          → textos da interface em português e inglês
(o tema claro/escuro segue o sistema até a pessoa escolher no botão do topo; a escolha fica salva no navegador)
js/avatar.js        → o retrato em pixel art (32×32) usado na animação do topo
js/main.js          → comportamento (filtros, ficha do jogo, idioma, menu)
img/                → capas dos jogos, mentorias, avatar, favicon e imagem de compartilhamento
.nojekyll           → avisa o GitHub Pages para servir os arquivos como estão
```

## Publicar no GitHub Pages

1. Crie um repositório. Se ele se chamar `houlijouli.github.io`, o site fica na raiz
   (`https://houlijouli.github.io/`). Com outro nome (ex.: `portfolio`), fica em
   `https://houlijouli.github.io/portfolio/`.
2. Envie **o conteúdo desta pasta** (não a pasta em si) para a branch `main`.
3. No repositório: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, pasta `/ (root)`. Salve.
4. Em um ou dois minutos o link aparece no topo da mesma tela.

Para testar no computador antes de subir: dentro da pasta, rode `python3 -m http.server`
e abra `http://localhost:8000`.

## Editar o conteúdo

Tudo fica em `js/data.js`. Cada texto tem uma versão `pt` e outra `en`.

- **Adicionar um jogo:** copie um bloco de `games`, troque o `slug` (sem espaços nem acentos),
  coloque a capa em `img/games/` e aponte o campo `cover` para ela.
- **Destacar um jogo:** `featured: true`. O primeiro destacado ganha o espaço grande.
- **Capas quadradas ou logos:** use `fit: "contain"` para a imagem não ser cortada.
- **"O que eu fiz":** fica em `contributions` e reproduz a Job description de cada jogo no Notion.
  A seção só aparece quando há conteúdo (hoje só Dano Colateral não tem).
- **Screenshots:** liste os arquivos em `shots` (ficam em `img/shots/`). Aparecem na ficha do jogo
  e abrem ampliados ao clicar.
- **Projetos gamificados e da comunidade:** ficam em `gamified.items` e `community.items`, no mesmo
  formato de card com ficha. Imagens com legenda vão em `shotGroups` (grupos com título).
- **Contato:** `profile.email` e `profile.cv` (coloque o PDF na raiz).
  Os botões aparecem sozinhos quando preenchidos.
- **Contadores de função:** são calculados a partir dos `roles` de cada jogo — não há número
  para atualizar à mão.

- **Consultoria:** os serviços ficam em `js/consultoria-data.js`, organizados em área → categoria →
  serviço (nome e descrição). O texto de abertura e os públicos também estão lá.

## Links diretos

Cada jogo e projeto tem um link próprio, útil para mandar a um recrutador:
`https://seu-site/#jogo/smashing-four`, `#projeto/pontos-de-lealdade` ou `#mentoria/umbra`. Para abrir já em inglês: `?lang=en`.

## Imagem de compartilhamento

Depois de publicar, troque em `index.html` o `og:image` pelo endereço completo
(ex.: `https://houlijouli.github.io/img/og-image.png`) — LinkedIn e WhatsApp
só leem o caminho absoluto.

## Créditos das imagens

Capas e artes pertencem aos respectivos estúdios e equipes (Geewa, Supernova Games,
Creative Hand, Chill Dev Games, Estante Mágica, Legends of Learning e as equipes
mentoradas) e são usadas apenas para identificar os projetos.
