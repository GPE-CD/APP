import monitoramento from "./modulos/monitoramento.js";
import ail from "./modulos/ail.js";
import metaAvaliacao from "./modulos/meta-avaliacao.js";
import avaliacaoExPost from "./modulos/avaliacao-ex-post.js";
import acompanhamento from "./modulos/acompanhamento-proposicoes.js";
import senado from "./modulos/experiencia-senado.js";

export const modulos = [
  monitoramento,
  ail,
  metaAvaliacao,
  avaliacaoExPost,
  acompanhamento,
  senado
];

export const modulosPorChave = Object.fromEntries(modulos.map(m => [m.key, m]));
