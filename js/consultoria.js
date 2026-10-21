/* ==========================================================================
   Página de consultoria. Conteúdo em consultoria-data.js; contato em data.js.
   ========================================================================== */
(function () {
  "use strict";

  var C = window.CONSULTING;
  var P = (window.PORTFOLIO && window.PORTFOLIO.profile) || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var UI = {
    pt: {
      "meta.title": "Consultoria — Victor Hugo Costa",
      "skip": "Pular para o conteúdo",
      "nav.portfolio": "Portfólio", "nav.audience": "Para quem", "nav.services": "Serviços", "nav.contact": "Contato",
      "nav.menu": "Menu", "nav.close": "Fechar menu",
      "theme.toDark": "Ativar tema escuro", "theme.toLight": "Ativar tema claro",
      "index.title": "Índice de serviços",
      "audience.title": "Para quem é",
      "services.title": "Serviços",
      "services.lead": "Escolha a área e toque nos serviços que fazem sentido para o seu projeto. A seleção vira uma lista pronta para mandar por e-mail ou LinkedIn.",
      "services.count": "{n} serviços",
      "service.add": "Adicionar à lista: {s}",
      "contact.title": "Vamos conversar sobre o seu projeto",
      "contact.lead": "Me conte em que fase o jogo está e onde precisa de ajuda. Respondo com uma proposta de escopo.",
      "contact.email": "E-mail", "contact.copy": "Copiar e-mail", "contact.copied": "E-mail copiado ✓", "contact.linkedin": "LinkedIn",
      "footer.back": "Voltar ao portfólio",
      "tray.count1": "1 serviço selecionado", "tray.countN": "{n} serviços selecionados",
      "tray.clear": "Limpar", "tray.copy": "Copiar lista", "tray.copied": "Lista copiada ✓",
      "tray.fallback": "Selecione e copie o texto abaixo:",
      "tray.intro": "Olá, Victor! Tenho interesse nestes serviços de consultoria:",
      "tray.outro": "Sobre o projeto:"
    },
    en: {
      "meta.title": "Consulting — Victor Hugo Costa",
      "skip": "Skip to content",
      "nav.portfolio": "Portfolio", "nav.audience": "Who it's for", "nav.services": "Services", "nav.contact": "Contact",
      "nav.menu": "Menu", "nav.close": "Close menu",
      "theme.toDark": "Switch to dark theme", "theme.toLight": "Switch to light theme",
      "index.title": "Services index",
      "audience.title": "Who it's for",
      "services.title": "Services",
      "services.lead": "Pick an area and tap the services that fit your project. Your selection becomes a ready-to-send list for email or LinkedIn.",
      "services.count": "{n} services",
      "service.add": "Add to list: {s}",
      "contact.title": "Let's talk about your project",
      "contact.lead": "Tell me what stage the game is at and where you need help. I'll reply with a scope proposal.",
      "contact.email": "Email", "contact.copy": "Copy email", "contact.copied": "Email copied ✓", "contact.linkedin": "LinkedIn",
      "footer.back": "Back to portfolio",
      "tray.count1": "1 service selected", "tray.countN": "{n} services selected",
      "tray.clear": "Clear", "tray.copy": "Copy list", "tray.copied": "List copied ✓",
      "tray.fallback": "Select and copy the text below:",
      "tray.intro": "Hi Victor! I'm interested in these consulting services:",
      "tray.outro": "About the project:"
    }
  };

  var state = { lang: "pt", area: C.areas[0].id, picked: [] };

  function store(key, val) {
    try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch (e) { return null; }
  }
  function tr(v) { if (v == null) return ""; if (typeof v === "string") return v; return v[state.lang] != null ? v[state.lang] : (v.pt || ""); }
  function t(key, vars) {
    var s = UI[state.lang][key] || UI.pt[key] || key;
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
  function slug(s) { return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }
  function key(ai, ci, si) { return ai + "." + ci + "." + si; }
  function selectText(node) {
    try { var r = document.createRange(); r.selectNodeContents(node); var sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); } catch (e) {}
  }
  function copy(text, ok, fail) {
    try { navigator.clipboard.writeText(text).then(ok, fail); } catch (e) { fail(); }
  }
  function totalServices(area) { return area.categories.reduce(function (n, c) { return n + c.services.length; }, 0); }

  /* ---------- Contato (abertura e rodapé) ---------- */
  function emailButton(cls) {
    var btn = el("button", { type: "button", class: cls, text: t("contact.email"), "aria-label": t("contact.copy") });
    var addr = el("span", { class: "email-addr", text: P.email || "", hidden: true });
    var timer = null;
    btn.addEventListener("click", function () {
      copy(P.email, function () {
        btn.textContent = t("contact.copied");
        clearTimeout(timer); timer = setTimeout(function () { btn.textContent = t("contact.email"); }, 2000);
      }, function () { addr.hidden = false; selectText(addr); });
    });
    return [btn, addr];
  }
  function renderContact() {
    var hero = $("#cHeroActions"); hero.textContent = "";
    if (P.email) emailButton("btn btn--solid").forEach(function (n) { hero.appendChild(n); });
    if (P.linkedin) hero.appendChild(el("a", { class: "btn", href: P.linkedin, target: "_blank", rel: "noopener", text: t("contact.linkedin") }));

    var c = $("#contactLinks"); c.textContent = "";
    if (P.linkedin) c.appendChild(el("li", null, [el("a", { href: P.linkedin, target: "_blank", rel: "noopener", text: t("contact.linkedin") })]));
    if (P.email) c.appendChild(el("li", { class: "footer__email" }, emailButton("email-btn")));
  }

  /* ---------- Abertura e índice ---------- */
  function renderIntro() {
    $("#cTitle").textContent = tr(C.intro.title);
    $("#cLead").textContent = tr(C.intro.lead);
    var idx = $("#cIndex"); idx.textContent = "";
    C.areas.forEach(function (a, ai) {
      idx.appendChild(el("div", { class: "c-index__area" }, [
        el("h3", null, [tr(a.name), el("span", { class: "c-index__n", text: " " + totalServices(a) })]),
        el("ul", null, a.categories.map(function (cat, ci) {
          return el("li", null, [el("a", {
            href: "#cat-" + a.id + "-" + ci, text: tr(cat.name),
            onclick: function (e) { e.preventDefault(); showArea(a.id); var target = document.getElementById("cat-" + a.id + "-" + ci); if (target) target.scrollIntoView({ behavior: "smooth", block: "start" }); }
          })]);
        }))
      ]));
    });
  }

  /* ---------- Públicos ---------- */
  function renderAudience() {
    var root = $("#cAudience"); root.textContent = "";
    C.audiences.forEach(function (a) {
      root.appendChild(el("li", { class: "c-aud" }, [
        el("h3", { class: "c-aud__title", text: tr(a.title) }),
        el("p", { class: "c-aud__text", text: tr(a.text) })
      ]));
    });
  }

  /* ---------- Serviços: abas por área, categorias, seleção ---------- */
  function renderServices() {
    var tabs = $("#cTabs"), panels = $("#cPanels");
    tabs.textContent = ""; panels.textContent = "";
    C.areas.forEach(function (a, ai) {
      var selected = a.id === state.area;
      tabs.appendChild(el("button", {
        type: "button", role: "tab", class: "c-tab", id: "tab-" + a.id, "aria-controls": "panel-" + a.id,
        "aria-selected": selected ? "true" : "false", tabindex: selected ? "0" : "-1",
        onclick: function () { showArea(a.id); }
      }, [tr(a.name), el("span", { class: "c-tab__n", text: String(totalServices(a)) })]));

      var panel = el("div", { class: "c-panel", role: "tabpanel", id: "panel-" + a.id, "aria-labelledby": "tab-" + a.id, hidden: !selected || null });
      var grid = el("div", { class: "c-cats" });
      a.categories.forEach(function (cat, ci) {
        var list = el("ul", { class: "c-list" });
        cat.services.forEach(function (sv, si) {
          var k = key(ai, ci, si);
          var on = state.picked.indexOf(k) > -1;
          list.appendChild(el("li", null, [el("button", {
            type: "button", class: "c-svc", "aria-pressed": on ? "true" : "false", "data-key": k,
            "aria-label": t("service.add", { s: tr(sv.name) }),
            onclick: function () { toggle(k); }
          }, [
            el("span", { class: "c-svc__mark", "aria-hidden": "true" }),
            el("span", { class: "c-svc__body" }, [
              el("span", { class: "c-svc__name", text: tr(sv.name) }),
              el("span", { class: "c-svc__desc", text: tr(sv.desc) })
            ])
          ])]));
        });
        grid.appendChild(el("section", { class: "c-cat", id: "cat-" + a.id + "-" + ci, "aria-labelledby": "cat-h-" + a.id + "-" + ci }, [
          el("h3", { class: "c-cat__title", id: "cat-h-" + a.id + "-" + ci }, [tr(cat.name), el("span", { class: "c-cat__n", text: String(cat.services.length) })]),
          list
        ]));
      });
      panel.appendChild(grid);
      panels.appendChild(panel);
    });
  }
  function showArea(id) {
    state.area = id;
    $$(".c-tab").forEach(function (b) {
      var on = b.id === "tab-" + id;
      b.setAttribute("aria-selected", on ? "true" : "false"); b.tabIndex = on ? 0 : -1;
    });
    $$(".c-panel").forEach(function (p) { p.hidden = p.id !== "panel-" + id; });
  }
  $("#cTabs").addEventListener("keydown", function (e) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    var ids = C.areas.map(function (a) { return a.id; });
    var i = ids.indexOf(state.area) + (e.key === "ArrowRight" ? 1 : -1);
    i = (i + ids.length) % ids.length;
    showArea(ids[i]); $("#tab-" + ids[i]).focus();
  });

  function toggle(k) {
    var i = state.picked.indexOf(k);
    if (i > -1) state.picked.splice(i, 1); else state.picked.push(k);
    var btn = $('.c-svc[data-key="' + k + '"]');
    if (btn) btn.setAttribute("aria-pressed", i > -1 ? "false" : "true");
    updateTray();
  }
  function lookup(k) {
    var p = k.split(".").map(Number);
    var a = C.areas[p[0]], cat = a.categories[p[1]], sv = cat.services[p[2]];
    return { area: tr(a.name), cat: tr(cat.name), name: tr(sv.name) };
  }
  function listText() {
    var lines = [t("tray.intro"), ""];
    var lastArea = null;
    state.picked.slice().sort().forEach(function (k) {
      var x = lookup(k);
      if (x.area !== lastArea) { if (lastArea) lines.push(""); lines.push(x.area); lastArea = x.area; }
      lines.push("• " + x.name + " (" + x.cat + ")");
    });
    lines.push("", t("tray.outro"), "");
    return lines.join("\n");
  }
  function updateTray() {
    var n = state.picked.length;
    var tray = $("#cTray");
    tray.hidden = n === 0;
    document.body.classList.toggle("has-tray", n > 0);
    $("#cTrayCount").textContent = n === 1 ? t("tray.count1") : t("tray.countN", { n: n });
    $("#cTrayFallback").hidden = true;
  }
  $("#cTrayClear").addEventListener("click", function () {
    state.picked = [];
    $$(".c-svc").forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
    updateTray();
  });
  $("#cTrayCopy").addEventListener("click", function () {
    var btn = this, text = listText();
    copy(text, function () {
      btn.textContent = t("tray.copied");
      setTimeout(function () { btn.textContent = t("tray.copy"); }, 2000);
    }, function () {
      var fb = $("#cTrayFallback");
      fb.hidden = false; fb.textContent = "";
      fb.appendChild(el("span", { text: t("tray.fallback") }));
      var pre = el("pre", { text: text }); fb.appendChild(pre); selectText(pre);
    });
  });

  /* ---------- Tema ---------- */
  var darkMQ = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  function effectiveTheme() {
    var set = document.documentElement.getAttribute("data-theme");
    if (set === "dark" || set === "light") return set;
    return darkMQ && darkMQ.matches ? "dark" : "light";
  }
  function syncThemeButton() {
    var dark = effectiveTheme() === "dark", btn = $("#themeBtn");
    btn.setAttribute("aria-label", t(dark ? "theme.toLight" : "theme.toDark"));
    btn.setAttribute("title", t(dark ? "theme.toLight" : "theme.toDark"));
    btn.dataset.mode = dark ? "dark" : "light";
  }
  $("#themeBtn").addEventListener("click", function () {
    var mode = effectiveTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", mode); store("vhc-theme", mode); syncThemeButton();
  });
  if (darkMQ && darkMQ.addEventListener) darkMQ.addEventListener("change", syncThemeButton);

  /* ---------- Idioma ---------- */
  function applyStatic() {
    document.documentElement.lang = state.lang === "pt" ? "pt-BR" : "en";
    document.title = t("meta.title");
    $$("[data-c]").forEach(function (n) { n.textContent = t(n.dataset.c); });
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.lang === state.lang ? "true" : "false"); });
  }
  function setLang(lang) {
    state.lang = lang === "en" ? "en" : "pt";
    store("vhc-lang", state.lang);
    applyStatic(); renderIntro(); renderAudience(); renderServices(); renderContact(); updateTray(); syncThemeButton();
    $$('a[href="index.html"]').forEach(function (a) { a.href = "index.html" + (state.lang === "en" ? "?lang=en" : ""); });
  }
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.lang); }); });

  /* ---------- Menu mobile e topo ---------- */
  var menuBtn = $("#menuBtn"), nav = $("#nav");
  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.querySelector(".sr-only").textContent = t(open ? "nav.close" : "nav.menu");
  }
  menuBtn.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
  $$("#nav a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); menuBtn.focus(); } });
  var topbar = $("#topbar");
  function onScroll() { topbar.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* ---------- Início ---------- */
  // Sempre abrir no topo (o navegador às vezes restaura a rolagem da página anterior)
  try { if ("scrollRestoration" in history) history.scrollRestoration = "manual"; } catch (e) {}
  function toTop() {
    if (location.hash && document.getElementById(location.hash.slice(1))) return;
    var html = document.documentElement, prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
  }
  window.addEventListener("load", toTop);
  window.addEventListener("pageshow", toTop);

  var fromUrl = new URLSearchParams(location.search).get("lang");
  var saved = store("vhc-lang");
  var browserEn = (navigator.language || "pt").toLowerCase().indexOf("pt") !== 0;
  $("#year").textContent = new Date().getFullYear();
  setLang(fromUrl || saved || (browserEn ? "en" : "pt"));
  toTop();
  requestAnimationFrame(toTop);
})();
