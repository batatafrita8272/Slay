/* ============================================================================
 *  COMPÊNDIO — lógica da interface
 *  Sem dependências. Renderiza abas, busca, filtros e fichas expansíveis.
 * ========================================================================== */

(function () {
  "use strict";

  const { MONSTROS, RELIQUIAS, LEGENDA = [] } = window.COMPENDIO;

  const RARIDADE_ORDEM = [
    "Starter", "Common", "Uncommon", "Rare", "Ancient", "Shop", "Event", "Special"
  ];

  const state = {
    aba: "reliquias",          // "reliquias" | "monstros"
    busca: "",
    raridade: "todas",         // filtro de relíquias
    origem: "todas",           // filtro de relíquias
    ato: "todos",              // filtro de monstros
    abertos: new Set()         // ids das fichas expandidas
  };

  const els = {
    tabs: document.querySelectorAll(".tab"),
    search: document.getElementById("search"),
    filtros: document.getElementById("filtros"),
    legenda: document.getElementById("legenda"),
    resumo: document.getElementById("resumo"),
    list: document.getElementById("list"),
    counts: {
      reliquias: document.querySelector('[data-count="reliquias"]'),
      monstros: document.querySelector('[data-count="monstros"]')
    }
  };

  els.counts.reliquias.textContent = RELIQUIAS.length;
  els.counts.monstros.textContent = MONSTROS.length;

  /* ---------- Utilidades ---------- */

  function esc(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  function normaliza(str) {
    return String(str)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, ""); // remove acentos p/ busca
  }

  const CHEVRON = `<svg class="chev" viewBox="0 0 24 24" fill="none" stroke-width="2.5"
    stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;

  const RARIDADES = RARIDADE_ORDEM.filter((r) =>
    RELIQUIAS.some((x) => x.raridade === r));

  const ORIGENS = [...new Set(RELIQUIAS.map((x) => x.categoria))].sort((a, b) => {
    if (a === "Qualquer") return -1;
    if (b === "Qualquer") return 1;
    return a.localeCompare(b);
  });

  const ATOS = [...new Set(MONSTROS.map((x) => x.ato))]
    .sort((a, b) => a.localeCompare(b, "pt", { numeric: true }));

  /* ---------- Filtragem ---------- */

  function itensFiltrados() {
    if (state.aba === "monstros") {
      const q = normaliza(state.busca.trim());
      return MONSTROS.filter((m) => {
        if (state.ato !== "todos" && m.ato !== state.ato) return false;
        if (!q) return true;
        return normaliza([
          m.nome, m.tipo, m.ato, m.descricao,
          ...m.habilidades.flatMap((h) => [h.nome, h.descricao])
        ].join(" ")).includes(q);
      });
    }

    const q = normaliza(state.busca.trim());
    return RELIQUIAS.filter((r) => {
      if (state.raridade !== "todas" && r.raridade !== state.raridade) return false;
      if (state.origem !== "todas" && r.categoria !== state.origem) return false;
      if (!q) return true;
      return normaliza([r.nome, r.categoria, r.raridade, r.efeito, r.descricao]
        .join(" ")).includes(q);
    });
  }

  /* ---------- Templates ---------- */

  function fichaMonstro(m) {
    const aberto = state.abertos.has(m.id);
    const stats = [
      { k: "Vida", v: m.stats.vida, cls: "hp" },
      { k: "Força", v: m.stats.forca, cls: "" },
      { k: "Defesa", v: m.stats.defesa, cls: "" },
      { k: "Veloc.", v: m.stats.velocidade, cls: "" }
    ];

    return `
      <article class="card ${aberto ? "open" : ""}" data-id="${esc(m.id)}">
        <button class="card-head" aria-expanded="${aberto}">
          <span class="icon">${esc(m.icone)}</span>
          <span class="card-title">
            <span class="name">${esc(m.nome)}</span>
            <span class="sub">${esc(m.tipo)} · ${esc(m.ato)} · <b>Nível ${esc(m.nivel)}</b> · ${m.stats.vida} PV</span>
          </span>
          <span class="card-aside">
            <span class="badge">${esc(m.tipo)}</span>
            ${CHEVRON}
          </span>
        </button>
        <div class="card-body"><div><div class="card-body-inner">
          <div>
            <div class="section-label">Atributos</div>
            <div class="stats">
              ${stats.map((s) => `
                <div class="stat ${s.cls}">
                  <div class="v">${esc(s.v)}</div>
                  <div class="k">${esc(s.k)}</div>
                </div>`).join("")}
            </div>
          </div>
          <div>
            <div class="section-label">Habilidades</div>
            <div class="abilities">
              ${m.habilidades.map((h) => `
                <div class="ability">
                  <div class="an">${esc(h.nome)}</div>
                  <div class="ad">${esc(h.descricao)}</div>
                </div>`).join("")}
            </div>
          </div>
          <div class="meta-grid">
            <div>
              <div class="section-label">Tipo</div>
              <p class="desc">${esc(m.tipo)}</p>
            </div>
            <div>
              <div class="section-label">Ato</div>
              <p class="desc">${esc(m.ato)}</p>
            </div>
          </div>
          <div>
            <div class="section-label">Descrição</div>
            <p class="desc">${esc(m.descricao)}</p>
          </div>
        </div></div></div>
      </article>`;
  }

  function fichaReliquia(r) {
    const aberto = state.abertos.has(r.id);
    const temDesc = r.descricao && r.descricao.trim().length > 0;
    return `
      <article class="card ${aberto ? "open" : ""}" data-id="${esc(r.id)}">
        <button class="card-head" aria-expanded="${aberto}">
          <span class="icon">${esc(r.icone)}</span>
          <span class="card-title">
            <span class="name">${esc(r.nome)}</span>
            <span class="sub">${esc(r.categoria)} · ${esc(r.efeito)}</span>
          </span>
          <span class="card-aside">
            <span class="badge rar-${esc(r.raridade)}">${esc(r.raridade)}</span>
            ${CHEVRON}
          </span>
        </button>
        <div class="card-body"><div><div class="card-body-inner">
          <div>
            <div class="section-label">Efeito</div>
            <div class="effect"><b>&#9670;</b> ${esc(r.efeito)}</div>
          </div>
          <div class="meta-grid">
            <div>
              <div class="section-label">Raridade</div>
              <p class="desc">${esc(r.raridade)}</p>
            </div>
            <div>
              <div class="section-label">Origem</div>
              <p class="desc">${esc(r.categoria)}</p>
            </div>
          </div>
          ${temDesc ? `
          <div>
            <div class="section-label">Notas</div>
            <p class="desc">${esc(r.descricao)}</p>
          </div>` : ""}
        </div></div></div>
      </article>`;
  }

  /* ---------- Guia de símbolos (apenas relíquias) ---------- */

  if (LEGENDA.length) {
    els.legenda.innerHTML = `
      <details class="legenda" open>
        <summary>Guia de símbolos <span class="leg-count">${LEGENDA.length}</span></summary>
        <div class="leg-grid">
          ${LEGENDA.map((l) => `
            <span class="leg-item">
              <span class="leg-emoji">${esc(l.emoji)}</span>
              <span class="leg-nome">${esc(l.nome)}</span>
            </span>`).join("")}
        </div>
      </details>`;
  }

  function renderLegenda() {
    els.legenda.hidden = !(LEGENDA.length && state.aba === "reliquias");
  }

  /* ---------- Filtros ---------- */

  function chipsHTML(attr, valores) {
    const tudo = attr === "rar" ? "todas" : "todos";
    const rotulo = attr === "rar" ? "Todas" : "Todos";
    return [`<button class="chip" data-${attr}="${tudo}">${rotulo}</button>`]
      .concat(valores.map((v) =>
        `<button class="chip" data-${attr}="${esc(v)}">${esc(v)}</button>`))
      .join("");
  }

  function renderFiltros() {
    els.filtros.hidden = false;

    if (state.aba === "monstros") {
      els.filtros.innerHTML =
        `<div class="chips" role="group" aria-label="Filtrar por ato">${
          chipsHTML("ato", ATOS)}</div>`;
      els.filtros.querySelectorAll(".chip").forEach((c) => {
        c.classList.toggle("on", c.dataset.ato === state.ato);
      });
      return;
    }

    const opts = ['<option value="todas">Todas as origens</option>']
      .concat(ORIGENS.map((o) =>
        `<option value="${esc(o)}">${esc(o)}</option>`))
      .join("");

    els.filtros.innerHTML = `
      <div class="chips" role="group" aria-label="Filtrar por raridade">${
        chipsHTML("rar", RARIDADES)}</div>
      <select id="origem" aria-label="Filtrar por origem">${opts}</select>`;

    els.filtros.querySelectorAll(".chip").forEach((c) => {
      c.classList.toggle("on", c.dataset.rar === state.raridade);
    });
    els.filtros.querySelector("#origem").value = state.origem;
  }

  /* ---------- Render ---------- */

  function render() {
    els.tabs.forEach((t) => {
      t.setAttribute("aria-selected", t.dataset.aba === state.aba);
    });

    els.search.placeholder =
      state.aba === "monstros"
        ? "Buscar monstro, tipo, habilidade…"
        : "Buscar relíquia, origem, efeito…";

    renderLegenda();
    renderFiltros();

    const itens = itensFiltrados();
    const total = state.aba === "monstros" ? MONSTROS.length : RELIQUIAS.length;
    els.resumo.textContent = itens.length === total
      ? `${total} ${state.aba === "monstros" ? "monstros" : "relíquias"}`
      : `${itens.length} de ${total}`;

    if (!itens.length) {
      els.list.innerHTML = `<div class="empty">Nada encontrado com os filtros atuais.</div>`;
      return;
    }

    const tpl = state.aba === "monstros" ? fichaMonstro : fichaReliquia;
    els.list.innerHTML = itens.map(tpl).join("");
  }

  /* ---------- Eventos ---------- */

  els.tabs.forEach((t) => {
    t.addEventListener("click", () => {
      if (state.aba === t.dataset.aba) return;
      state.aba = t.dataset.aba;
      state.busca = "";
      state.raridade = "todas";
      state.origem = "todas";
      state.ato = "todos";
      state.abertos.clear();
      els.search.value = "";
      render();
    });
  });

  els.search.addEventListener("input", (e) => {
    state.busca = e.target.value;
    render();
  });

  els.filtros.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    if (chip.dataset.ato !== undefined) state.ato = chip.dataset.ato;
    else state.raridade = chip.dataset.rar;
    state.abertos.clear();
    render();
  });

  els.filtros.addEventListener("change", (e) => {
    if (e.target.id !== "origem") return;
    state.origem = e.target.value;
    state.abertos.clear();
    render();
  });

  // Expandir / recolher (delegação de evento)
  els.list.addEventListener("click", (e) => {
    const head = e.target.closest(".card-head");
    if (!head) return;
    const card = head.closest(".card");
    const id = card.dataset.id;

    if (state.abertos.has(id)) {
      state.abertos.delete(id);
      card.classList.remove("open");
      head.setAttribute("aria-expanded", "false");
    } else {
      state.abertos.add(id);
      card.classList.add("open");
      head.setAttribute("aria-expanded", "true");
    }
  });

  /* ---------- Início ---------- */
  render();
})();
