/* ==========================================================================
   Comportamento do portfólio. Você normalmente não precisa editar este
   arquivo: o conteúdo fica em data.js e os textos da interface em i18n.js.
   ========================================================================== */
(function () {
  "use strict";

  var D = window.PORTFOLIO;
  var UI = window.UI;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var state = { lang: "pt", role: null, caseIndex: -1, caseList: [], allMentees: false };

  /* ---------- Utilidades ---------- */
  function store(key, val) {
    try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch (e) { return null; }
  }
  function tr(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[state.lang] != null ? v[state.lang] : (v.pt || "");
  }
  function t(key, vars) {
    var s = (UI[state.lang] && UI[state.lang][key]) || UI.pt[key] || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.split("{" + k + "}").join(vars[k]); });
    return s;
  }
  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v == null || v === false) return;
      if (k === "class") n.className = v;
      else if (k === "text") n.textContent = v;
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? "" : v);
    });
    (children || []).forEach(function (c) { if (c != null) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function roleName(id) { return D.roles[id] ? tr(D.roles[id]) : id; }
  var vars = function () {
    return { games: D.profile.commercialGames, years: D.profile.yearsInTech, n: D.mentoring.length };
  };

  /* ---------- Mídia (capa normal, capa "contain" ou capa tipográfica) ---------- */
  function media(game, cls, wide) {
    var src = wide ? (game.wide || game.cover) : game.cover;
    var box = el("div", { class: cls + (game.fit === "contain" ? " " + cls + "--contain" : "") });
    if (!src) {
      box.appendChild(el("div", { class: "placeholder", "aria-hidden": "true" }, [
        el("span", { text: tr(game.title) }, [game.wip ? el("small", { text: tr(game.year) || t("games.wip") }) : null])
      ]));
      return box;
    }
    if (game.fit === "contain") {
      box.appendChild(el("img", { class: "card__blur", src: src, alt: "", loading: "lazy", decoding: "async", "aria-hidden": "true" }));
      box.appendChild(el("img", { class: "card__img case__img", src: src, alt: "", loading: "lazy", decoding: "async" }));
    } else {
      box.appendChild(el("img", { src: src, alt: "", loading: "lazy", decoding: "async" }));
    }
    return box;
  }

  /* ---------- Destaques ---------- */
  function renderFeatured() {
    var root = $("#featured");
    root.textContent = "";
    var list = D.games.filter(function (g) { return g.featured; });
    list.forEach(function (g, i) {
      var chips = el("div", { class: "feat__meta" }, g.roles.map(function (r) { return el("span", { class: "chip", text: roleName(r) }); }));
      var card = el("button", {
        class: "feat" + (i === 0 ? " feat--lead" : ""), type: "button",
        onclick: function () { openCase(g.slug, list); }
      }, [
        media(g, "feat__media", true),
        el("div", { class: "feat__body" }, [
          el("h3", { class: "feat__title", text: tr(g.title) }),
          el("p", { class: "feat__log", text: tr(g.logline) }),
          chips,
          el("span", { class: "feat__open", text: t("featured.open") })
        ])
      ]);
      root.appendChild(card);
    });
  }

  /* ---------- Ficha de funções (filtro) ---------- */
  function roleCounts() {
    var c = {};
    Object.keys(D.roles).forEach(function (r) { c[r] = 0; });
    D.games.forEach(function (g) { g.roles.forEach(function (r) { if (r in c) c[r]++; }); });
    return c;
  }
  function renderRoles() {
    var root = $("#roleBars");
    root.textContent = "";
    var counts = roleCounts();
    var total = D.games.length;
    var keys = Object.keys(D.roles);
    // Sempre em ordem decrescente de jogos; empates mantêm a ordem de data.js
    keys.slice().sort(function (a, b) { return (counts[b] - counts[a]) || (keys.indexOf(a) - keys.indexOf(b)); }).forEach(function (r) {
      if (!counts[r]) return;
      var pips = [];
      for (var i = 0; i < total; i++) pips.push(el("span", { class: "role__pip" + (i < counts[r] ? "" : " is-empty") }));
      var btn = el("button", {
        class: "role", type: "button", "aria-pressed": state.role === r ? "true" : "false", "data-role": r,
        onclick: function () { setRole(state.role === r ? null : r); }
      }, [
        el("span", { class: "role__name", text: roleName(r) }),
        el("span", { class: "role__count", text: String(counts[r]) }),
        el("span", { class: "role__bar", "aria-hidden": "true" }, pips)
      ]);
      root.appendChild(el("li", null, [btn]));
    });
  }
  function setRole(r) {
    state.role = r;
    $$(".role").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.role === r ? "true" : "false"); });
    $("#roleReset").hidden = !r;
    applyFilter();
  }

  /* ---------- Grade de jogos ---------- */
  function renderGrid() {
    var root = $("#gameGrid");
    root.textContent = "";
    D.games.forEach(function (g) {
      var btn = el("button", { class: "card__btn", type: "button", onclick: function () { openCase(g.slug, visibleGames()); } }, [
        media(g, "card__media"),
        el("h3", { class: "card__title", text: tr(g.title) }),
        el("p", { class: "card__log", text: tr(g.logline) }),
        el("p", { class: "card__roles", text: g.roles.map(roleName).join(", ") })
      ]);
      root.appendChild(el("li", { class: "card", "data-slug": g.slug }, [btn]));
    });
    applyFilter();
  }
  function visibleGames() {
    return D.games.filter(function (g) { return !state.role || g.roles.indexOf(state.role) > -1; });
  }
  function applyFilter() {
    var vis = visibleGames().map(function (g) { return g.slug; });
    $$("#gameGrid .card").forEach(function (li) { li.hidden = vis.indexOf(li.dataset.slug) === -1; });
    $("#gamesStatus").textContent = state.role
      ? t("games.countRole", { n: vis.length, total: D.games.length, role: roleName(state.role) })
      : t("games.count", { n: vis.length, total: D.games.length });
  }

  /* ---------- Projetos para a Comunidade ---------- */
  /* Texto do Notion: parágrafos separados por linha em branco,
     linhas "- " viram lista, linhas "✔" viram checklist, URLs viram links. */
  function linkify(text) {
    var frag = document.createDocumentFragment();
    var re = /(https?:\/\/[^\s)]+)/g, last = 0, m;
    while ((m = re.exec(text))) {
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      frag.appendChild(el("a", { href: m[1], target: "_blank", rel: "noopener", text: m[1] }));
      last = m.index + m[1].length;
    }
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    return frag;
  }
  function richText(text) {
    var box = el("div", { class: "rich" });
    text.split(/\n\s*\n/).forEach(function (para) {
      var lines = para.split("\n").filter(function (l) { return l.trim(); });
      if (!lines.length) return;
      var dash = lines.every(function (l) { return /^\s*-\s/.test(l); });
      var checks = lines.filter(function (l) { return /^\s*✔/.test(l); });
      if (dash) {
        box.appendChild(el("ul", { class: "rich__list" }, lines.map(function (l) { return el("li", null, [linkify(l.replace(/^\s*-\s*/, ""))]); })));
        return;
      }
      var intro = lines.filter(function (l) { return !/^\s*✔/.test(l); });
      if (intro.length) {
        var p = el("p");
        intro.forEach(function (l, i) { if (i) p.appendChild(el("br")); p.appendChild(linkify(l)); });
        box.appendChild(p);
      }
      if (checks.length) {
        box.appendChild(el("ul", { class: "rich__checks" }, checks.map(function (l) { return el("li", null, [linkify(l.replace(/^\s*✔\s*/, ""))]); })));
      }
    });
    return box;
  }
  function firstParagraph(text) {
    return (text || "").split(/\n/).map(function (l) { return l.trim(); }).filter(Boolean)[0] || "";
  }
  function renderProjects(group, gridSel, leadSel) {
    var G = D[group];
    $(leadSel).textContent = tr(G.lead);
    var root = $(gridSel);
    root.textContent = "";
    G.items.forEach(function (p) {
      var btn = el("button", { class: "card__btn", type: "button", onclick: function () { openCase(p.slug, G.items); } }, [
        media(p, "card__media"),
        el("h3", { class: "card__title", text: tr(p.title) }),
        el("p", { class: "card__log", text: firstParagraph(tr(p.text)) }),
        p.roles.length ? el("p", { class: "card__roles", text: p.roles.map(roleName).join(", ") }) : null
      ]);
      root.appendChild(el("li", { class: "card", "data-slug": p.slug }, [btn]));
    });
  }

  /* ---------- Mentorias ---------- */
  function renderMentees() {
    var root = $("#mentees");
    root.textContent = "";
    var more = $("#menteesMore");
    more.hidden = D.mentoring.length <= 6;
    more.textContent = t(state.allMentees ? "mentoring.less" : "mentoring.all");
    more.setAttribute("aria-expanded", state.allMentees ? "true" : "false");
    var LIMIT = 6;
    D.mentoring.forEach(function (m, i) {
      var text = firstParagraph(tr(m.text));
      root.appendChild(el("li", { class: "mentee", hidden: (!state.allMentees && i >= LIMIT) ? true : null }, [
        el("button", { type: "button", class: "mentee__btn", onclick: function () { openCase(m.slug, D.mentoring); } }, [
          el("span", { class: "mentee__media" }, [el("img", { src: m.cover, alt: "", loading: "lazy", decoding: "async" })]),
          el("span", { class: "mentee__title", text: tr(m.title) }),
          text ? el("span", { class: "mentee__text", text: text }) : null
        ])
      ]));
    });
  }

  $("#menteesMore").addEventListener("click", function () {
    var opening = !state.allMentees;
    state.allMentees = opening;
    renderMentees();
    if (opening) { var first = $$("#mentees .mentee__btn")[6]; if (first) first.focus({ preventScroll: true }); }
    else $("#mentorias").scrollIntoView({ block: "start" });
  });

  /* ---------- Sobre e contato ---------- */
  function renderAbout() {
    var s = $("#skills"), k = $("#tools");
    s.textContent = ""; k.textContent = "";
    tr(D.skills).forEach(function (x) { s.appendChild(el("li", { text: x })); });
    tr(D.tools).forEach(function (x) { k.appendChild(el("li", { text: x })); });

    var c = $("#contactLinks");
    c.textContent = "";
    var P = D.profile;
    var links = [
      P.linkedin && { href: P.linkedin, label: t("contact.linkedin"), ext: true },
      P.email && { href: "mailto:" + P.email, label: P.email, email: true },
      P.cv && { href: P.cv, label: t("contact.cv"), ext: true },
      P.mentoring && { href: P.mentoring, label: t("contact.mentoring"), ext: true }
    ].filter(Boolean);
    links.forEach(function (l) {
      if (l.email) {
        var btn = el("button", { type: "button", class: "email-btn", text: t("contact.email"), "aria-label": t("contact.copy") });
        var addr = el("span", { class: "email-addr", text: P.email, hidden: true });
        var reset = null;
        btn.addEventListener("click", function () {
          var ok = function () {
            btn.textContent = t("contact.copied");
            clearTimeout(reset); reset = setTimeout(function () { btn.textContent = t("contact.email"); }, 2000);
          };
          var fail = function () { addr.hidden = false; selectText(addr); };
          try { navigator.clipboard.writeText(P.email).then(ok, fail); } catch (e) { fail(); }
        });
        c.appendChild(el("li", { class: "footer__email" }, [btn, addr]));
        return;
      }
      c.appendChild(el("li", null, [el("a", { href: l.href, target: l.ext ? "_blank" : null, rel: l.ext ? "noopener" : null, text: l.label })]));
    });
    $("#heroLinkedin").href = P.linkedin;
    $("#mentoringCta").href = P.mentoring;
  }

  function selectText(node) {
    try { var r = document.createRange(); r.selectNodeContents(node); var sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); } catch (e) {}
  }

  /* ---------- Ficha do jogo ---------- */
  var dialog = $("#case");
  var lastFocus = null;

  function openCase(slug, list) {
    state.caseList = (list && list.length ? list : D.games);
    var idx = state.caseList.findIndex(function (g) { return g.slug === slug; });
    if (idx < 0) {
      [D.games, D.mentoring, D.gamified.items, D.community.items].some(function (l) {
        var j = l.findIndex(function (g) { return g.slug === slug; });
        if (j > -1) { state.caseList = l; idx = j; return true; }
        return false;
      });
    }
    if (idx < 0) return;
    if (!dialog.open) {
      lastFocus = document.activeElement;
      if (typeof dialog.showModal === "function") dialog.showModal(); else dialog.setAttribute("open", "");
      document.documentElement.style.overflow = "hidden";
    }
    showCase(idx);
  }
  function showCase(idx) {
    var list = state.caseList;
    state.caseIndex = (idx + list.length) % list.length;
    var g = list[state.caseIndex];
    var body = $("#caseBody");
    body.textContent = "";
    body.scrollTop = 0;

    var facts = el("dl", { class: "facts" });
    function fact(label, value) {
      if (!value) return;
      facts.appendChild(el("div", null, [el("dt", { text: label }), typeof value === "string" ? el("dd", { text: value }) : value]));
    }
    if (g.roles.length) fact(t("modal.roles"), el("dd", null, g.roles.map(function (r) {
      return el("span", { class: "chip" + (r === state.role ? " chip--hit" : ""), text: roleName(r) });
    })));
    fact(t("modal.platform"), tr(g.platform));
    fact(t("modal.studio"), g.studio);
    fact(t("modal.release"), tr(g.year));
    fact(t("modal.genre"), tr(g.genre));

    var contributions = tr(g.contributions) || [];
    var isProject = g.kind === "project";

    // Screenshots em grade (lista simples ou grupos com legenda)
    var groups = g.shotGroups ? g.shotGroups.map(function (gr) { return { title: tr(gr.title), shots: gr.shots }; })
      : (g.shots && g.shots.length ? [{ title: "", shots: g.shots }] : []);
    var flat = [];
    groups.forEach(function (gr) { gr.shots.forEach(function (sh) { flat.push(typeof sh === "string" ? { src: sh } : sh); }); });
    var shotsSection = null;
    if (flat.length) {
      var k = 0;
      shotsSection = el("section", { class: "case__section case__section--shots" }, [el("h3", { text: t(isProject ? "modal.images" : "modal.shots") })]);
      groups.forEach(function (gr) {
        if (gr.title) shotsSection.appendChild(el("h4", { class: "shots__group", text: gr.title }));
        shotsSection.appendChild(el("ul", { class: "shots" }, gr.shots.map(function (sh) {
          var item = typeof sh === "string" ? { src: sh } : sh;
          var idx = k++;
          var cap = item.caption ? tr(item.caption) : "";
          return el("li", null, [el("button", {
            type: "button", class: "shots__btn", "aria-label": t("modal.shot", { i: idx + 1, n: flat.length }) + (cap ? " — " + cap : ""),
            onclick: function () { openLightbox(flat, idx); }
          }, [
            el("span", { class: "shots__frame" }, [el("img", { src: item.src, alt: "", loading: "lazy", decoding: "async" })]),
            cap ? el("span", { class: "shots__cap", text: cap }) : null
          ])]);
        })));
      });
    }

    var content = el("div", { class: "case__content" }, [
      el("div", null, [
        el("h2", { class: "case__title", id: "caseTitle", text: tr(g.title) }),
        g.logline ? el("p", { class: "case__log", text: tr(g.logline) }) : null
      ]),
      facts,
      (g.text != null ? tr(g.text) : tr(g.summary)) ? el("section", { class: "case__section" }, [
        el("h3", { text: t(isProject ? "modal.project" : "modal.about") }),
        g.text != null ? richText(tr(g.text)) : el("p", { text: tr(g.summary) })
      ]) : null,
      shotsSection,
      contributions.length ? el("section", { class: "case__section" }, [
        el("h3", { text: t("modal.did") }),
        el("ul", null, contributions.map(function (c) { return el("li", { text: c }); }))
      ]) : null,
      g.partner ? el("p", { class: "case__partner" }, [t("modal.partner") + ": ", el("a", { href: g.partner.url, target: "_blank", rel: "noopener", text: g.partner.label })]) : null,
      (g.links && g.links.length) ? el("div", { class: "case__links" }, g.links.map(function (l, i) {
        return el("a", { class: "btn" + (i === 0 ? " btn--solid" : ""), href: l.url, target: "_blank", rel: "noopener", text: tr(l.label) });
      })) : null
    ]);

    var m = media(g, "case__media", true);
    body.appendChild(m);
    body.appendChild(content);
    var title = content.querySelector(".case__title");
    title.setAttribute("tabindex", "-1");
    title.focus({ preventScroll: true });

    $("#casePos").textContent = t("modal.position", { i: state.caseIndex + 1, n: list.length });
    var single = list.length < 2;
    $("#casePrev").hidden = single; $("#caseNext").hidden = single;
    setHash(g.kind === "project" ? "projeto/" + g.slug : g.kind === "mentoring" ? "mentoria/" + g.slug.replace(/^mentoria-/, "") : "jogo/" + g.slug);
  }
  function closeCase() {
    if (!dialog.open) return;
    dialog.close();
  }
  dialog.addEventListener("close", function () {
    if (lb.el.open) lb.el.close();
    document.documentElement.style.overflow = "";
    state.caseIndex = -1;
    setHash("");
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  });
  dialog.addEventListener("click", function (e) { if (e.target === dialog) closeCase(); });
  $("#caseClose").addEventListener("click", closeCase);
  $("#casePrev").addEventListener("click", function () { showCase(state.caseIndex - 1); });
  $("#caseNext").addEventListener("click", function () { showCase(state.caseIndex + 1); });
  /* Ampliação das screenshots (fica dentro do dialog, na mesma camada) */
  var lb = { list: [], i: 0, el: $("#lightbox"), opener: null };
  function openLightbox(list, i) {
    lb.list = list.map(function (x) { return typeof x === "string" ? { src: x } : x; });
    lb.opener = document.activeElement;
    if (!lb.el.open) { if (typeof lb.el.showModal === "function") lb.el.showModal(); else lb.el.setAttribute("open", ""); }
    showShot(i);
    $("#lightboxClose").focus({ preventScroll: true });
  }
  function showShot(i) {
    lb.i = (i + lb.list.length) % lb.list.length;
    var item = lb.list[lb.i];
    $("#lightboxImg").src = item.src;
    var cap = item.caption ? tr(item.caption) : "";
    $("#lightboxCap").textContent = cap; $("#lightboxCap").hidden = !cap;
    $("#lightboxPos").textContent = t("modal.position", { i: lb.i + 1, n: lb.list.length });
    var single = lb.list.length < 2;
    $("#lightboxPrev").hidden = single; $("#lightboxNext").hidden = single;
  }
  function closeLightbox() { if (lb.el.open) lb.el.close(); }
  lb.el.addEventListener("close", function () {
    $("#lightboxImg").removeAttribute("src");
    if (lb.opener && lb.opener.focus) lb.opener.focus({ preventScroll: true });
  });
  $("#lightboxPrev").addEventListener("click", function () { showShot(lb.i - 1); });
  $("#lightboxNext").addEventListener("click", function () { showShot(lb.i + 1); });
  $("#lightboxClose").addEventListener("click", closeLightbox);
  $("#lightboxStage").addEventListener("click", function (e) { if (e.target.id === "lightboxStage") closeLightbox(); });
  (function () {
    var x0 = null, y0 = null;
    lb.el.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    lb.el.addEventListener("touchend", function (e) {
      if (x0 == null) return;
      var dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) showShot(lb.i + (dx < 0 ? 1 : -1));
      x0 = null;
    }, { passive: true });
  })();

  document.addEventListener("keydown", function (e) {
    if (!dialog.open) return;
    var shots = lb.el.open;
    if (e.key === "ArrowLeft") { e.preventDefault(); shots ? showShot(lb.i - 1) : showCase(state.caseIndex - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); shots ? showShot(lb.i + 1) : showCase(state.caseIndex + 1); }
  });
  // Deslizar para trocar de jogo no celular
  (function () {
    var x0 = null, y0 = null;
    var inStrip = false;
    dialog.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; inStrip = !!(e.target.closest && e.target.closest(".shots")); }, { passive: true });
    dialog.addEventListener("touchend", function (e) {
      if (x0 == null) return;
      var dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.6 && !inStrip) {
        if (!lb.el.open) showCase(state.caseIndex + (dx < 0 ? 1 : -1));
      }
      x0 = null;
    }, { passive: true });
  })();

  /* ---------- Links diretos: #jogo/slug ---------- */
  var hashLock = false;
  function setHash(h) {
    hashLock = true;
    try {
      var url = location.pathname + location.search + (h ? "#" + h : "");
      history.replaceState(null, "", url);
    } catch (e) { /* ambientes sem history */ }
    hashLock = false;
  }
  function routeFromHash() {
    var m = location.hash.match(/^#(jogo|projeto|mentoria)\/([\w-]+)/);
    if (m) openCase((m[1] === "mentoria" ? "mentoria-" : "") + m[2]);
  }
  window.addEventListener("hashchange", function () { if (!hashLock) routeFromHash(); });

  /* ---------- Tema claro / escuro ---------- */
  var darkMQ = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  function effectiveTheme() {
    var set = document.documentElement.getAttribute("data-theme");
    if (set === "dark" || set === "light") return set;
    return darkMQ && darkMQ.matches ? "dark" : "light";
  }
  function syncThemeButton() {
    var dark = effectiveTheme() === "dark";
    var btn = $("#themeBtn");
    btn.setAttribute("aria-label", t(dark ? "theme.toLight" : "theme.toDark"));
    btn.setAttribute("title", t(dark ? "theme.toLight" : "theme.toDark"));
    btn.dataset.mode = dark ? "dark" : "light";
  }
  function setTheme(mode) {
    document.documentElement.setAttribute("data-theme", mode);
    store("vhc-theme", mode);
    syncThemeButton();
  }
  $("#themeBtn").addEventListener("click", function () { setTheme(effectiveTheme() === "dark" ? "light" : "dark"); });
  if (darkMQ && darkMQ.addEventListener) darkMQ.addEventListener("change", syncThemeButton);
  (function () {
    var saved = store("vhc-theme");
    if (saved === "dark" || saved === "light") document.documentElement.setAttribute("data-theme", saved);
  })();

  /* ---------- Idioma ---------- */
  function applyStatic() {
    document.documentElement.lang = state.lang === "pt" ? "pt-BR" : "en";
    document.title = t("meta.title");
    var md = $('meta[name="description"]'); if (md) md.setAttribute("content", t("meta.description"));
    $$("[data-i18n]").forEach(function (n) { n.textContent = t(n.dataset.i18n, vars()); });
    $$("[data-i18n-aria]").forEach(function (n) { n.setAttribute("aria-label", t(n.dataset.i18nAria)); });
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.lang === state.lang ? "true" : "false"); });
    $("#nav").setAttribute("aria-label", state.lang === "pt" ? "Principal" : "Main");
    $$('a[href^="consultoria.html"]').forEach(function (a) { a.href = "consultoria.html" + (state.lang === "en" ? "?lang=en" : ""); });
  }
  function setLang(lang) {
    state.lang = lang === "en" ? "en" : "pt";
    store("vhc-lang", state.lang);
    applyStatic();
    renderFeatured(); renderRoles(); renderGrid(); renderProjects("gamified", "#gamifiedGrid", "#gamifiedLead"); renderProjects("community", "#communityGrid", "#communityLead"); renderMentees(); renderAbout();
    syncThemeButton();
    if (dialog.open && state.caseIndex > -1) showCase(state.caseIndex);
  }
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.lang); }); });
  $("#roleReset").addEventListener("click", function () { setRole(null); });

  /* ---------- Menu mobile ---------- */
  var menuBtn = $("#menuBtn"), nav = $("#nav");
  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    var label = menuBtn.querySelector(".sr-only");
    label.textContent = t(open ? "nav.close" : "nav.menu");
  }
  menuBtn.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
  $$("#nav a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); menuBtn.focus(); } });

  /* ---------- Topo: borda ao rolar + seção ativa ---------- */
  var topbar = $("#topbar");
  function onScroll() { topbar.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if ("IntersectionObserver" in window) {
    var links = {};
    $$("#nav a").forEach(function (a) { var h = a.getAttribute("href"); if (h.charAt(0) === "#") links[h.slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        Object.keys(links).forEach(function (id) { links[id].classList.toggle("is-active", id === en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }

  /* ---------- Retrato em pixel art ---------- */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canvas = $("#avatarCanvas");
  var ctx = canvas.getContext("2d");
  var A = window.AVATAR;
  var KEYS = "0123456789abcdefghijklmnop";
  var running = null;

  function drawAll() {
    for (var i = 0; i < 1024; i++) {
      ctx.fillStyle = A.palette[KEYS.indexOf(A.pixels[i])];
      ctx.fillRect(i % 32, Math.floor(i / 32), 1, 1);
    }
  }
  function assemble() {
    if (reduceMotion) { drawAll(); return; }
    if (running) cancelAnimationFrame(running);
    ctx.fillStyle = A.palette[0];
    ctx.fillRect(0, 0, 32, 32);
    // Os pixels do retrato (tudo que não é o fundo vermelho) surgem em ordem
    // aleatória, de baixo para cima, como um sprite sendo montado.
    var order = [];
    for (var i = 0; i < 1024; i++) if (A.pixels[i] !== "0") order.push(i);
    order.sort(function (a, b) {
      var ya = Math.floor(a / 32), yb = Math.floor(b / 32);
      return (yb + Math.random() * 10) - (ya + Math.random() * 10);
    });
    var start = null, dur = 1100;
    function frame(ts) {
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      var upto = Math.floor(eased * order.length);
      ctx.fillStyle = A.palette[0];
      ctx.fillRect(0, 0, 32, 32);
      for (var k = 0; k < upto; k++) {
        var idx = order[k];
        ctx.fillStyle = A.palette[KEYS.indexOf(A.pixels[idx])];
        ctx.fillRect(idx % 32, Math.floor(idx / 32), 1, 1);
      }
      if (p < 1) running = requestAnimationFrame(frame); else { running = null; drawAll(); }
    }
    running = requestAnimationFrame(frame);
  }
  $("#portrait").addEventListener("click", assemble);

  /* ---------- Início ---------- */
  var fromUrl = new URLSearchParams(location.search).get("lang");
  var saved = store("vhc-lang");
  var browserEn = (navigator.language || "pt").toLowerCase().indexOf("pt") !== 0;
  state.lang = fromUrl || saved || (browserEn ? "en" : "pt");
  $("#year").textContent = new Date().getFullYear();
  setLang(state.lang);
  assemble();
  routeFromHash();
})();
