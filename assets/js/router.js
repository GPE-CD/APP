export function rotaAtual() {
  const raw = location.hash.replace(/^#/, "") || "/";
  const path = raw.startsWith("/") ? raw : "/" + raw;
  return path.replace(/\/+$/, "") || "/";
}

export function navegar(path) {
  const normalized = path.startsWith("/") ? path : "/" + path;
  location.hash = "#" + normalized;
}

export function iniciarRouter(render) {
  const executar = () => {
    render(rotaAtual());
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  window.addEventListener("hashchange", executar);
  window.addEventListener("popstate", executar);
  executar();
}
