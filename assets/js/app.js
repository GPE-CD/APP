import projeto from "../../conteudo/projeto.js";
import equipe from "../../conteudo/equipe.js";
import documentacao from "../../conteudo/documentacao.js";
import { modulos, modulosPorChave } from "../../conteudo/modulos.js";
import { iniciarRouter } from "./router.js";

const app = document.getElementById("app");

const arrow = "→";
const external = "↗";

function esc(v="") {
  return String(v)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;");
}

function icon(kind="file") {
  const paths = {
    monitoramento: '<polyline points="4 15 9 10 13 14 20 7"></polyline><line x1="20" y1="7" x2="20" y2="12"></line>',
    ail: '<path d="M4 19h16"></path><path d="M7 16V8"></path><path d="M12 16V5"></path><path d="M17 16v-4"></path>',
    "meta-avaliacao": '<circle cx="11" cy="11" r="6"></circle><line x1="16" y1="16" x2="21" y2="21"></line><path d="M8 11l2 2 4-5"></path>',
    "avaliacao-ex-post": '<path d="M5 17V9"></path><path d="M10 17V5"></path><path d="M15 17v-7"></path><path d="M20 17V7"></path>',
    "acompanhamento-proposicoes": '<path d="M5 4h11l3 3v13H5z"></path><path d="M16 4v4h4"></path><line x1="8" y1="12" x2="16" y2="12"></line><line x1="8" y1="16" x2="14" y2="16"></line>',
    "experiencia-senado": '<path d="M4 10h16"></path><path d="M6 10V7l6-3 6 3v3"></path><path d="M7 10v8"></path><path d="M12 10v8"></path><path d="M17 10v8"></path><path d="M4 20h16"></path>',
    documentacao: '<path d="M5 4h14v16H5z"></path><line x1="8" y1="9" x2="16" y2="9"></line><line x1="8" y1="13" x2="16" y2="13"></line>'
  };
  return `<svg class="modular-icon" viewBox="0 0 24 24" aria-hidden="true">${paths[kind] || paths.documentacao}</svg>`;
}

function link(href, label, cls="", attrs="") {
  const internal = href.startsWith("#/");
  return `<a href="${esc(href)}" class="${cls}" ${attrs}${internal ? ' data-route="1"' : ""}>${label}</a>`;
}

function header(route) {
  const active = (path) => route === path || (path === "/modulos" && route.startsWith("/modulos/"));
  return `
  <header class="site-header has-institutional-bar">
    <div class="institutional-bar">
      <div class="institutional-bar-inner">
        <span><strong>Projeto APP</strong> · O Legislativo e a Avaliação de Políticas Públicas</span>
        <span>Consultoria Legislativa da Câmara dos Deputados</span>
      </div>
    </div>
    <div class="nav-shell">
      <a href="#/" class="brand" aria-label="Ir para a página inicial do Projeto APP">
        <span class="brand-mark">APP</span>
        <span class="brand-text"><strong>Projeto APP</strong><small>GPE-Conle · Câmara dos Deputados</small></span>
      </a>
      <button class="menu-trigger" id="menu-trigger" aria-label="Abrir menu" aria-expanded="false">☰</button>
      <nav class="main-nav" aria-label="Navegação principal">
        <a href="#/o-projeto" class="${active("/o-projeto") ? "active" : ""}">O Projeto</a>
        <a href="#/modulos" class="${active("/modulos") ? "active" : ""}">Módulos</a>
        <a href="#/documentacao" class="${active("/documentacao") ? "active" : ""}">Documentação</a>
        <a href="#/equipe" class="${active("/equipe") ? "active" : ""}">Equipe</a>
      </nav>
    </div>
  </header>`;
}

function footer() {
  return `
  <footer class="site-footer">
    <div class="footer-grid">
      <div>
        <a href="#/" class="brand">
          <span class="brand-mark">APP</span>
          <span class="brand-text"><strong>Projeto APP</strong><small>GPE-Conle · Câmara dos Deputados</small></span>
        </a>
        <p class="footer-note">Pesquisa, documentação e produtos<br>do Projeto APP em acesso público.</p>
      </div>
      <div class="footer-links">
        <span class="eyebrow">Navegar</span>
        <a href="#/o-projeto">O Projeto</a>
        <a href="#/modulos">Módulos</a>
        <a href="#/documentacao">Documentação</a>
        <a href="#/equipe">Equipe</a>
      </div>
      <div class="footer-links app-gpe-links">
        <span class="eyebrow">GPE-Conle</span>
        <a href="${projeto.gpeSite}" target="_blank" rel="noopener noreferrer">Site do GPE-Conle <span aria-hidden="true">${external}</span></a>
        <a href="${projeto.gpeDgp}" target="_blank" rel="noopener noreferrer">DGP/CNPq <span aria-hidden="true">${external}</span></a>
        <a class="app-footer-email" href="mailto:${projeto.contato}">Contato do Projeto APP</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>Projeto “O Legislativo e a Avaliação de Políticas Públicas”</span>
      <span>Brasília · ${new Date().getFullYear()}</span>
    </div>
  </footer>`;
}

function layout(route, content) {
  return `<div class="app-shell">${header(route)}<main>${content}</main>${footer()}</div>`;
}

function moduleHomeCard(m) {
  return `<a class="home-v2-module-card home-v2-module-link" href="#/modulos/${m.key}" aria-label="Conheça o módulo ${esc(m.titulo)}">
    <div class="home-v2-card-number"><span>${m.numero}</span><span>Módulo</span></div>
    <h3>${esc(m.titulo)}</h3>
    <p>${esc(m.descricao)}</p>
    <span class="home-v2-card-action">Conheça o módulo ${arrow}</span>
  </a>`;
}

function home() {
  return `
    <section class="hero" data-home-v2="1">
      <div class="hero-orbit orbit-one"></div><div class="hero-orbit orbit-two"></div><div class="hero-grid"></div>
      <div class="hero-inner">
        <div class="hero-copy reveal">
          <span class="eyebrow light">${esc(projeto.home.heroEyebrow)}</span>
          <h1>${esc(projeto.home.heroLinha1)}<br><em>${esc(projeto.home.heroLinha2)}</em></h1>
          <p class="hero-lede">${esc(projeto.home.heroLede)}</p>
          <p class="home-v2-institution">${esc(projeto.home.heroInstituicao)}</p>
          <div class="hero-actions">
            <a href="#/o-projeto" class="button button-light">Conheça o projeto ${arrow}</a>
            <a href="#/modulos" class="text-link light-link">Conheça os módulos ${arrow}</a>
          </div>
          <div class="hero-meta">${projeto.home.heroMeta.map(x=>`<span>${esc(x)}</span>`).join("")}</div>
        </div>
      </div>
      <div class="hero-scroll"><span></span> Role para explorar</div>
    </section>

    <section class="manifesto section-pad" id="o-projeto">
      <div class="container split-layout">
        <div class="section-label"><span>01</span><i></i></div>
        <div class="manifesto-copy">
          <span class="eyebrow">O Projeto</span>
          <h2>${esc(projeto.home.manifestoTitulo)}</h2>
          <p>${esc(projeto.home.manifestoTexto)}</p>
          <p class="home-v2-project-focus">${esc(projeto.home.manifestoFoco)}</p>
          <a href="#/o-projeto" class="arrow-link">Conheça o projeto ${arrow}</a>
        </div>
        <div class="manifesto-stamp"><span>APP</span><small>Pesquisa · Extensão<br>Institucional</small></div>
      </div>
    </section>

    <section class="modules-preview section-pad home-v2-modules" id="modulos-projeto">
      <div class="container">
        <div class="section-heading-row">
          <div><span class="eyebrow">Módulos do Projeto</span><h2>Módulos do Projeto APP</h2></div>
          <a href="#/modulos" class="arrow-link hide-mobile">Ver todos os módulos ${arrow}</a>
        </div>
        <div class="home-v2-module-grid">${modulos.map(moduleHomeCard).join("")}</div>
        <a href="#/modulos" class="arrow-link show-mobile">Ver todos os módulos ${arrow}</a>
      </div>
    </section>

    <section id="documentacao-projeto" class="home-v2-documentation">
      <div class="container home-v2-doc-grid">
        <div>
          <span class="eyebrow">Documentação do Projeto</span>
          <h2>${esc(projeto.home.documentacaoTitulo)}</h2>
          <p>${esc(projeto.home.documentacaoTexto)}</p>
        </div>
        <div class="home-v2-doc-links">
          <a href="#/documentacao"><span>Projetos e versões</span><span>${arrow}</span></a>
          <a href="#/documentacao"><span>Relatórios de atividades</span><span>${arrow}</span></a>
        </div>
      </div>
    </section>

    <section class="team-teaser section-pad">
      <div class="container team-teaser-inner">
        <div><span class="eyebrow">Equipe</span><h2>Equipe do Projeto APP</h2></div>
        <div class="team-teaser-copy">
          <p>O projeto é desenvolvido no âmbito do Grupo de Pesquisa e Extensão Institucional da Consultoria Legislativa da Câmara dos Deputados, com uma equipe formada por pesquisadores e apoio de estágio.</p>
          <a href="#/equipe" class="arrow-link">Conheça a equipe ${arrow}</a>
        </div>
        <div class="team-initials" aria-label="Membros da equipe">
          ${equipe.slice(0,5).map(p=>`<span>${p.nome.split(/\s+/).slice(0,2).map(x=>x[0]).join("")}</span>`).join("")}
        </div>
      </div>
    </section>`;
}

function institutionalLinks() {
  return `<aside class="app-institutional-links" aria-label="Links do GPE-Conle">
    <div class="app-inst-label"><span class="eyebrow">GPE-Conle</span><strong>Grupo de pesquisa</strong></div>
    <a href="${projeto.gpeSite}" target="_blank" rel="noopener noreferrer">
      <strong>Site do GPE-Conle <span class="app-external-arrow">${external}</span></strong>
      <small>Página de apresentação do grupo e de seus projetos</small>
    </a>
    <a href="${projeto.gpeDgp}" target="_blank" rel="noopener noreferrer">
      <strong>DGP/CNPq <span class="app-external-arrow">${external}</span></strong>
      <small>Registro oficial do grupo no Diretório dos Grupos de Pesquisa</small>
    </a>
  </aside>`;
}

function projectPage() {
  const p = projeto.pagina;
  return `
  <div class="inner-page project-page">
    <div class="page-top band-olive">
      <div class="container">
        <span class="eyebrow">Projeto APP</span>
        <h1>${esc(projeto.nome)}</h1>
        <p class="project-page-subtitle">${esc(p.subtitulo)}</p>
      </div>
    </div>
    <div class="container project-content">
      <div class="institutional-breadcrumb"><b>Projeto APP</b><i></i><span>${esc(projeto.nome)}</span></div>

      <section class="project-section project-origin">
        <div class="project-section-label"><span class="eyebrow">Origem e fase atual</span><span class="project-section-number">01</span></div>
        <div class="project-prose">${p.origem.map((x,i)=>`<p${i===0?' class="lead"':''}>${esc(x)}</p>`).join("")}</div>
      </section>

      ${institutionalLinks()}

      <section class="project-section project-question">
        <div class="project-section-label"><span class="eyebrow">Problema de pesquisa</span><span class="project-section-number">02</span></div>
        <div class="project-prose"><p class="lead">${esc(p.problema.pergunta)}</p><p>${esc(p.problema.complemento)}</p></div>
      </section>

      <section class="project-objective">
        <span class="eyebrow">Objetivo geral</span>
        <blockquote>${esc(p.objetivo)}</blockquote>
        <p>${esc(p.objetivoComplemento)}</p>
      </section>

      <section class="project-modules">
        <div class="project-section-head">
          <div><span class="eyebrow">Organização do trabalho</span><h2>Seis módulos de pesquisa</h2></div>
          <p>Os módulos organizam linhas de trabalho complementares e reúnem seus próprios produtos e referências relevantes.</p>
        </div>
        <div class="project-module-grid">
          ${modulos.map(m=>`<a href="#/modulos/${m.key}" class="project-module-card"><span class="project-module-number">${m.numero}</span><div><strong>${esc(m.titulo)}</strong><p>${esc(m.descricao)}</p></div><span>${arrow}</span></a>`).join("")}
        </div>
      </section>

      <section class="project-transversal">
        <div class="project-section-label"><span class="eyebrow">Atividades transversais</span><span class="project-section-number">03</span></div>
        <div class="project-prose"><p class="lead">${esc(p.transversaisIntro)}</p><ul class="project-activity-list">${p.transversais.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
      </section>

      <div class="project-facts">${p.fatos.map(([n,l])=>`<div><span class="fact-number">${esc(n)}</span><span>${esc(l)}</span></div>`).join("")}</div>
      <div class="project-actions">
        <a href="#/modulos" class="button button-dark">Conheça os módulos ${arrow}</a>
        <a href="#/documentacao" class="button button-light">Documentação do Projeto ${arrow}</a>
      </div>
    </div>
  </div>`;
}

function moduleRow(m) {
  return `<a href="#/modulos/${m.key}" class="module-row current-module-row">
    <span class="row-number">${m.numero}</span>
    <span class="row-icon ${m.cor}">${icon(m.key)}</span>
    <span class="row-copy"><span class="module-scope">${esc(m.escopo)}</span><strong>${esc(m.titulo)}</strong><span>${esc(m.descricao)}</span></span>
    <span class="row-action">Conheça o módulo ${arrow}</span>
  </a>`;
}

function modulesPage() {
  return `
  <div class="inner-page modules-page">
    <div class="page-top band-sand">
      <div class="container">
        <span class="eyebrow">Projeto APP</span>
        <h1>Módulos do Projeto APP</h1>
        <h2>Seis frentes de pesquisa e desenvolvimento</h2>
        <p class="modules-page-subtitle">Os módulos organizam o trabalho substantivo do Projeto APP. Cada página reúne sua apresentação, os produtos associados e referências relevantes.</p>
      </div>
    </div>
    <div class="container modules-content">
      <div class="institutional-breadcrumb"><b>Projeto APP</b><i></i><span>Módulos do Projeto APP</span></div>
      <div class="modules-intro">
        <p>Na fase atual, Monitoramento, Avaliação de Impacto Legislativo, Meta-avaliação e Avaliação ex post concentram-se prioritariamente em políticas de saúde. Acompanhamento de proposições e Experiência do Senado Federal têm caráter transversal e abrangem diferentes áreas de políticas públicas.</p>
        <span class="small-note">6 módulos<br>fase 2026–2027</span>
      </div>
      <div class="current-module-list">${modulos.map(moduleRow).join("")}</div>
      <div class="modules-footer-note">
        <span class="eyebrow">Documentação transversal</span>
        <p>Projetos e versões e relatórios de atividades são mantidos separadamente dos módulos.</p>
        <a href="#/documentacao" class="arrow-link">Acessar a Documentação do Projeto ${arrow}</a>
      </div>
    </div>
  </div>`;
}

function catalogItem(item, moduleKey="") {
  const classes = ["catalog-item"];
  if (moduleKey === "monitoramento") {
    if (item.featured) classes.push("monitor-featured-product");
    else if (item.oficial) classes.push("monitor-official-product");
    else if (item.download) classes.push("monitor-download-product");
  }
  const attrs = item.download ? ' download' : ' target="_blank" rel="noopener noreferrer"';
  return `<a class="${classes.join(" ")}" href="${esc(item.href)}"${attrs}>
    <span class="catalog-item-icon">${icon("documentacao")}</span>
    <span class="catalog-item-copy">
      ${item.featured ? '<span class="monitor-featured-kicker">Principal produto disponível</span>' : ""}
      <strong>${esc(item.titulo)}</strong>
      <small>${esc(item.tipo)}</small>
    </span>
    <span class="catalog-item-action">${esc(item.acao || "Acessar →")}</span>
    <span class="catalog-item-arrow">${external}</span>
  </a>`;
}

function catalogGroup(group, moduleKey="") {
  const items = group.itens || [];
  return `<section class="catalog-group">
    <div class="catalog-heading"><span class="eyebrow">${esc(group.categoria)}</span><span>${items.length ? `${items.length} item${items.length>1?"s":""}` : ""}</span></div>
    ${items.length ? items.map(i=>catalogItem(i,moduleKey)).join("") : '<div class="catalog-empty">Ainda não há produtos publicados nesta categoria.</div>'}
  </section>`;
}

function instruments(data) {
  if (!data) return "";
  const cards = data.grupos.map(grupo => `
    <div class="monitor-source-group">
      <h3>${esc(grupo.titulo)}</h3>
      ${grupo.itens.map(item => `
        <article class="monitor-source-card">
          <div class="monitor-source-top">
            <div><h4 class="monitor-source-title">${esc(item.titulo)}</h4><p class="monitor-source-desc">${esc(item.descricao)}</p></div>
            <div class="monitor-source-links">${item.fontes.map(([l,u])=>`<a target="_blank" rel="noreferrer" href="${esc(u)}">${esc(l)} ${arrow}</a>`).join("")}</div>
          </div>
          <details class="monitor-source-details">
            <summary>Ver documentos por ano</summary>
            ${item.anos.map(([ano,links])=>`<div class="monitor-year"><strong>${esc(ano)}</strong><div class="monitor-year-links">${links.map(([l,u])=>`<a target="_blank" rel="noreferrer" href="${esc(u)}">${esc(l)}</a>`).join("")}</div></div>`).join("")}
          </details>
        </article>`).join("")}
    </div>`).join("");

  return `<section class="monitor-instruments">
    <div class="monitor-instruments-head">
      <div><span class="eyebrow">Instrumentos e fontes de monitoramento</span><h2>${esc(data.titulo)}</h2></div>
      <p>${esc(data.texto)}</p>
    </div>
    ${cards}
  </section>`;
}

function modulePage(m) {
  const moduleClass = {
    monitoramento:"monitor-module", ail:"ail-module", "meta-avaliacao":"meta-module",
    "avaliacao-ex-post":"expost-module", "acompanhamento-proposicoes":"acompanhamento-module",
    "experiencia-senado":"senado-module"
  }[m.key] || "";

  const painel = m.painel ? `<section class="monitor-panel-callout">
    <span class="eyebrow">${esc(m.painel.titulo)}</span>
    <h2>${esc(m.painel.subtitulo)}</h2>
    <p>${esc(m.painel.texto)}</p>
    <a class="monitor-panel-button" target="_blank" rel="noreferrer" href="${esc(m.painel.href)}">Acessar Painel RQPC-SUS ${arrow}</a>
  </section>` : "";

  const cats = m.categorias || [];
  const baseNormativa = m.key==="monitoramento" ? cats.filter(c=>c.categoria==="Base normativa") : [];
  const principais = m.key==="monitoramento" ? cats.filter(c=>c.categoria!=="Base normativa") : cats;

  return `
  <div class="inner-page ${moduleClass}">
    <div class="page-top band-${m.cor}">
      <div class="container module-page-head">
        <span class="eyebrow">${m.numero} · Módulo</span>
        <h1>${esc(m.titulo)}</h1>
        <p>${esc(m.descricao)}</p>
        <span class="head-icon">${icon(m.key)}</span>
      </div>
    </div>
    <div class="container inner-content module-detail">
      <div class="institutional-breadcrumb"><b>Projeto APP</b><i></i><span>${esc(m.titulo)}</span></div>
      <div class="detail-intro">
        <h2>Sobre o módulo</h2>
        <p>${esc(m.sobre)}</p>
        <p>${esc(m.complemento)}</p>
      </div>
      ${painel}
      <div class="catalog-list">
        ${principais.map(c=>catalogGroup(c,m.key)).join("")}
        ${m.key==="monitoramento" ? instruments(m.instrumentos) : ""}
        ${baseNormativa.map(c=>catalogGroup(c,m.key)).join("")}
      </div>
      <a class="back-link" href="#/modulos"><span class="back-chevron">${arrow}</span> Voltar aos módulos</a>
    </div>
  </div>`;
}

function documentationPage() {
  return `
  <div class="inner-page documentacao-page">
    <div class="page-top band-${documentacao.cor}">
      <div class="container module-page-head">
        <span class="eyebrow">Projeto APP · Documentação</span>
        <h1>${esc(documentacao.titulo)}</h1>
        <p>${esc(documentacao.descricao)}</p>
        <span class="head-icon">${icon("documentacao")}</span>
      </div>
    </div>
    <div class="container inner-content module-detail">
      <div class="institutional-breadcrumb"><b>Projeto APP</b><i></i><span>${esc(documentacao.titulo)}</span></div>
      <div class="detail-intro">
        <h2>Sobre esta documentação</h2>
        <p>${esc(documentacao.sobre)}</p>
        <p>${esc(documentacao.complemento)}</p>
      </div>
      <div class="catalog-list">${documentacao.categorias.map(c=>catalogGroup(c,"documentacao-projeto")).join("")}</div>
      <a class="back-link" href="#/"><span class="back-chevron">${arrow}</span> Voltar à página inicial</a>
    </div>
  </div>`;
}

function teamPage() {
  return `
  <div class="inner-page">
    <div class="page-top band-coral">
      <div class="container">
        <span class="eyebrow light">Equipe</span>
        <h1>Equipe do Projeto APP</h1>
      </div>
    </div>
    <div class="container inner-content">
      <div class="institutional-breadcrumb"><b>Projeto APP</b><i></i><span>Equipe do Projeto APP</span></div>
      <div class="team-intro">
        <p>O Projeto APP é desenvolvido no âmbito do Grupo de Pesquisa e Extensão Institucional da Consultoria Legislativa da Câmara dos Deputados, reunindo integrantes de diferentes áreas de atuação.</p>
        <span class="small-note">${equipe.length} integrantes<br>GPE-Conle</span>
      </div>
      <div class="team-list">
        ${equipe.map((p,i)=>`
          <div class="team-row">
            <span class="team-index">${String(i+1).padStart(2,"0")}</span>
            <strong>${esc(p.nome)}</strong>
            <span>${esc(p.funcao)}</span>
            <div class="team-links">
              <a href="${esc(p.lattes)}" target="_blank" rel="noopener noreferrer" aria-label="Abrir Currículo Lattes de ${esc(p.nome)}">Currículo Lattes <span class="app-external-arrow">${external}</span></a>
              ${p.email ? `<a href="mailto:${esc(p.email)}" class="team-email">E-mail</a>` : ""}
            </div>
          </div>`).join("")}
      </div>
      <section class="app-contact-card" aria-label="Contato do Projeto APP">
        <div><span class="eyebrow">Contato do projeto</span><h2>Contato</h2><p>Para contato com o Projeto APP, utilize o endereço eletrônico da coordenação.</p></div>
        <a class="app-contact-email" href="mailto:${projeto.contato}">${projeto.contato}</a>
      </section>
    </div>
  </div>`;
}

function notFound() {
  return `<section class="not-found"><span class="eyebrow">Página não encontrada</span><h1>Este caminho ainda<br><em>não está no arquivo.</em></h1><a class="button button-dark" href="#/">Voltar ao início ${arrow}</a></section>`;
}

function render(route) {
  let content;
  if (route === "/") content = home();
  else if (route === "/o-projeto") content = projectPage();
  else if (route === "/modulos") content = modulesPage();
  else if (route === "/equipe") content = teamPage();
  else if (route === "/documentacao") content = documentationPage();
  else if (route.startsWith("/modulos/")) {
    const key = route.split("/")[2];
    content = modulosPorChave[key] ? modulePage(modulosPorChave[key]) : notFound();
  } else content = notFound();

  app.innerHTML = layout(route, content);
  bindMenu();
}

function bindMenu() {
  const trigger = document.getElementById("menu-trigger");
  const header = document.querySelector(".site-header");
  if (!trigger || !header) return;
  trigger.addEventListener("click", () => {
    const open = header.classList.toggle("is-open");
    trigger.setAttribute("aria-expanded", open ? "true" : "false");
    trigger.textContent = open ? "✕" : "☰";
  });
}

document.addEventListener("click", async (e) => {
  const a = e.target.closest('a[download][href*="raw.githubusercontent.com/GPE-CD/APP/"]');
  if (!a) return;
  e.preventDefault();
  const url = a.href;
  const filename = decodeURIComponent(url.split("/").pop().split("?")[0]);
  try {
    const res = await fetch(url, { mode:"cors" });
    if (!res.ok) throw new Error("download");
    const blob = await res.blob();
    const objectUrl = URL.createObjectURL(blob);
    const linkEl = document.createElement("a");
    linkEl.href = objectUrl;
    linkEl.download = filename;
    document.body.appendChild(linkEl);
    linkEl.click();
    linkEl.remove();
    setTimeout(()=>URL.revokeObjectURL(objectUrl),1500);
  } catch {
    location.href = url;
  }
});

iniciarRouter(render);
