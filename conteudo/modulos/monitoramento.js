export default {
  numero: "01",
  key: "monitoramento",
  titulo: "Monitoramento",
  kicker: "Políticas de saúde e indicadores",
  descricao: "Monitoramento de políticas de saúde, indicadores do SUS e agenda legislativa.",
  cor: "sage",
  escopo: "Foco atual: saúde",

  sobre: "O módulo de Monitoramento acompanha políticas públicas e instrumentos de monitoramento, com foco atual na área da saúde e nos indicadores do SUS. O Painel RQPC-SUS teve origem em protótipo desenvolvido no âmbito do Projeto APP e foi posteriormente institucionalizado no âmbito da Consultoria-Geral da Câmara dos Deputados, por meio do Núcleo de Análise de Dados. Na fase atual, a participação de membros do Projeto APP concentra-se no fornecimento de dados, quando necessário, e na elaboração de notas técnicas associadas aos Relatórios Quadrimestrais de Prestação de Contas do SUS (RQPC). O módulo também reúne e organiza instrumentos federais relevantes para o acompanhamento da execução, dos resultados e da prestação de contas das políticas públicas de saúde.",
  complemento: "A produção técnica associada ao módulo compreende notas técnicas elaboradas a partir de instrumentos oficiais de monitoramento e prestação de contas, com o objetivo de transformar dados de gestão em informação útil à atuação legislativa. Entre os produtos recentes estão notas técnicas sobre os RQPC e sobre os relatórios de gestão do Ministério da Saúde.",

  painel: {
    titulo: "Painel RQPC-SUS",
    subtitulo: "Acompanhamento dos RQPC",
    texto: "Ferramenta de acompanhamento dos RQPC, originada de protótipo desenvolvido no Projeto APP e atualmente institucionalizada no âmbito da Consultoria-Geral da Câmara dos Deputados, por meio do Núcleo de Análise de Dados.",
    href: "https://cd.leg.br/painelsus/"
  },

  categorias: [
    {
      categoria: "Produtos associados ao módulo",
      itens: [
        {
          titulo: "Síntese do 1º RQPC de 2026",
          tipo: "Nota técnica · Setembro de 2026 · Biblioteca Digital da Câmara dos Deputados",
          oficial: true,
          acao: "Acessar publicação →",
          href: "https://bd.camara.leg.br/bd/handle/bdcamara/57774"
        },
        {
          titulo: "Síntese do 3º RQPC de 2025",
          tipo: "Nota técnica · Agosto de 2026 · Biblioteca Digital da Câmara dos Deputados",
          oficial: true,
          acao: "Acessar publicação →",
          href: "https://bd.camara.leg.br/bd/handle/bdcamara/57753"
        },
        {
          titulo: "Relatórios de gestão do Ministério da Saúde de 2024",
          tipo: "Nota técnica · Novembro de 2025 · Biblioteca Digital da Câmara dos Deputados",
          oficial: true,
          acao: "Acessar publicação →",
          href: "https://bd.camara.leg.br/bd/handle/bdcamara/57290"
        },
        {
          titulo: "Atividades de monitoramento de políticas públicas com participação da Consultoria Legislativa da Câmara dos Deputados",
          tipo: "Nota técnica · Agosto de 2024 · PDF · fase 2023–2025",
          acao: "Baixar PDF",
          download: true,
          href: "https://raw.githubusercontent.com/GPE-CD/APP/main/01_Notas%20T%C3%A9cnicas/2024_10302_6%20NT%20Monitoramento%2008%202024.pdf"
        }
      ]
    },
    {
      categoria: "Base normativa",
      itens: [
        {
          titulo: "Lei Complementar nº 141, de 13 de janeiro de 2012",
          tipo: "Fiscalização, avaliação e controle das despesas com saúde · Presidência da República",
          acao: "Acessar texto oficial →",
          href: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp141.htm"
        }
      ]
    }
  ],

  instrumentos: {
    titulo: "Fontes oficiais para acompanhamento de políticas públicas",
    texto: "Reúne instrumentos oficiais do Governo Federal e do Ministério da Saúde que podem subsidiar o acompanhamento de políticas públicas, da execução orçamentária e financeira, dos resultados alcançados e da prestação de contas.",
    grupos: [
      {
        titulo: "Saúde",
        itens: [
          {
            titulo: "RQPC",
            descricao: "Instrumento periódico de prestação de contas e acompanhamento da execução das ações e serviços públicos de saúde.",
            fontes: [["Acessar fonte oficial","https://www.gov.br/saude/pt-br/acesso-a-informacao/gestao-do-sus/instrumentos-de-planejamento/rqpc"]],
            anos: [
              ["2026",[["1º RQPC — Acessar documento","https://bvsms.saude.gov.br/bvs/publicacoes/1_rqpc_2026.pdf"]]],
              ["2025",[["1º RQPC — Acessar documento","https://bvsms.saude.gov.br/bvs/publicacoes/relatorio_quadrimestral_prestacao_contas_1rqpc_2025.pdf"],["2º RQPC — Acessar documento","https://bvsms.saude.gov.br/bvs/publicacoes/2_rqpc_2025.pdf"],["3º RQPC — Acessar documento","https://bvsms.saude.gov.br/bvs/publicacoes/3_rqpc_2025.pdf"]]],
              ["2024",[["1º RQPC — Acessar documento","https://bvsms.saude.gov.br/bvs/publicacoes/1_rqpc_2024.pdf"],["2º RQPC — Acessar documento","https://www.gov.br/saude/pt-br/acesso-a-informacao/gestao-do-sus/instrumentos-de-planejamento/rqpc/relatorio-quadrimestral-de-prestacao-de-contas-2o-rqpc-2024"],["3º RQPC — Acessar documento","https://bvsms.saude.gov.br/bvs/publicacoes/3_rqpc_2024.pdf"]]],
              ["2023",[["1º RQPC — Acessar documento","https://www.gov.br/saude/pt-br/acesso-a-informacao/gestao-do-sus/instrumentos-de-planejamento/rqpc/relatorio-quadrimestral-de-prestacao-de-contas-1o-rqpc-2023"],["2º RQPC — Acessar documento","https://www.gov.br/saude/pt-br/acesso-a-informacao/gestao-do-sus/instrumentos-de-planejamento/rqpc/relatorio-quadrimestral-de-prestacao-de-contas-2o-rqpc-2023"],["3º RQPC — Acessar documento","https://www.gov.br/saude/pt-br/acesso-a-informacao/gestao-do-sus/instrumentos-de-planejamento/rqpc/relatorio-quadrimestral-de-prestacao-de-contas-3o-rqpc-2023"]]]
            ]
          },
          {
            titulo: "Relatório Anual de Gestão (RAG)",
            descricao: "Instrumento anual de prestação de contas da gestão do SUS, com informações sobre resultados, execução e cumprimento da programação anual.",
            fontes: [["Acessar fonte oficial","https://www.gov.br/saude/pt-br/acesso-a-informacao/gestao-do-sus/instrumentos-de-planejamento/rag"]],
            anos: [
              ["2025",[["RAG 2025 — Acessar PDF","https://bvsms.saude.gov.br/bvs/publicacoes/relatorio_anual_gestao_2025.pdf"]]],
              ["2024",[["RAG 2024 — Acessar PDF","https://bvsms.saude.gov.br/bvs/publicacoes/relatorio_anual_gestao_2024.pdf"]]],
              ["2023",[["RAG 2023 — Acessar PDF","https://bvsms.saude.gov.br/bvs/publicacoes/relatorio_anual_gestao_2023_versao_25_10_24.pdf"]]]
            ]
          },
          {
            titulo: "Relatório de Gestão Integrado do Ministério da Saúde",
            descricao: "Relatório anual de gestão elaborado para fins de prestação de contas e controle, inclusive perante o Tribunal de Contas da União.",
            fontes: [["Acessar fonte oficial","https://www.gov.br/saude/pt-br/acesso-a-informacao/auditorias/relatorio-integrado-de-gestao-do-ministerio-da-saude"]],
            anos: [
              ["2025",[["Relatório de Gestão Integrado — exercício 2025","https://www.gov.br/saude/pt-br/acesso-a-informacao/auditorias/2025/relatorio-de-gestao-integrado/@@download/file"]]],
              ["2024",[["Relatório de Gestão Integrado — exercício 2024","https://www.gov.br/saude/pt-br/acesso-a-informacao/auditorias/2024/relatorio-de-gestao-integrado/@@download/file"]]],
              ["2023",[["Relatório de Gestão Integrado — exercício 2023","https://www.gov.br/saude/pt-br/acesso-a-informacao/auditorias/2023/relatorio-de-gestao-integrado/@@download/file"]]]
            ]
          }
        ]
      },
      {
        titulo: "Planejamento e execução governamental",
        itens: [
          {
            titulo: "Relatório Anual de Monitoramento do Plano Plurianual",
            descricao: "Instrumento de acompanhamento da execução do PPA, com informações sobre dimensão estratégica, programas finalísticos, prioridades, execução orçamentária e financeira, investimentos e agendas transversais.",
            fontes: [
              ["PPA 2024–2027","https://www.gov.br/planejamento/pt-br/assuntos/planejamento/plano-plurianual/arquivos/arquivos-ppa-2024-2027/gestao-do-ppa-2024-2027/monitoramento-do-ppa-2024-2027"],
              ["PPA 2020–2023","https://www.gov.br/planejamento/pt-br/assuntos/planejamento/plano-plurianual/paginas/monitoramento-2020-2023"]
            ],
            anos: [
              ["2025",[
                ["Volume I — Dimensão Estratégica","https://www.gov.br/planejamento/pt-br/assuntos/planejamento/plano-plurianual/arquivos/arquivos-ppa-2024-2027/gestao-do-ppa-2024-2027/monitoramento-do-ppa-2024-2027/rmppa_2025___vol_i___dimensao_estrategica.pdf/@@display-file/file"],
                ["Volume II — Prioridades","https://www.gov.br/planejamento/pt-br/assuntos/planejamento/plano-plurianual/arquivos/arquivos-ppa-2024-2027/gestao-do-ppa-2024-2027/monitoramento-do-ppa-2024-2027/rmppa_2025___vol_ii___prioridades.pdf/@@display-file/file"],
                ["Volume III — Programas Finalísticos","https://www.gov.br/planejamento/pt-br/assuntos/planejamento/plano-plurianual/arquivos/arquivos-ppa-2024-2027/gestao-do-ppa-2024-2027/monitoramento-do-ppa-2024-2027/rmppa_2025___vol_iii___programas_finalisticos.pdf/@@display-file/file"],
                ["Volume IV — Agendas Transversais","https://www.gov.br/planejamento/pt-br/assuntos/planejamento/plano-plurianual/arquivos/arquivos-ppa-2024-2027/gestao-do-ppa-2024-2027/monitoramento-do-ppa-2024-2027/rmpaa_2025___vol_iv___agendas_transversais.pdf/@@display-file/file"],
                ["Volume V — Cenário Macroeconômico","https://www.gov.br/planejamento/pt-br/assuntos/planejamento/plano-plurianual/arquivos/arquivos-ppa-2024-2027/gestao-do-ppa-2024-2027/monitoramento-do-ppa-2024-2027/rmppa_2025___volume_v___cenario_macro_e_fiscal.pdf/@@display-file/file"],
                ["Volume VI — Execução Orçamentária e Financeira dos Programas Finalísticos","https://www.gov.br/planejamento/pt-br/assuntos/planejamento/plano-plurianual/arquivos/arquivos-ppa-2024-2027/gestao-do-ppa-2024-2027/monitoramento-do-ppa-2024-2027/rmppa_2025___vol_vi___exec_orc_e_fin_prog_finalisticos.pdf/@@display-file/file"],
                ["Volume VII — Investimentos Plurianuais","https://www.gov.br/planejamento/pt-br/assuntos/planejamento/plano-plurianual/arquivos/arquivos-ppa-2024-2027/gestao-do-ppa-2024-2027/monitoramento-do-ppa-2024-2027/rmppa_2025___vol_vii___investimentos_plurianuais.pdf/@@display-file/file"],
                ["Volume VIII — Programas de Gestão","https://www.gov.br/planejamento/pt-br/assuntos/planejamento/plano-plurianual/arquivos/arquivos-ppa-2024-2027/gestao-do-ppa-2024-2027/monitoramento-do-ppa-2024-2027/rmppa_2025___volume_viii___programas_de_gestao.pdf/@@display-file/file"]
              ]],
              ["2024",[
                ["Sumário Executivo","https://www.gov.br/planejamento/pt-br/assuntos/planejamento/plano-plurianual/arquivos/arquivos-ppa-2024-2027/gestao-do-ppa-2024-2027/monitoramento-ppa-2024-2027/2025_08_11_sumexec_rma2025.pdf/@@display-file/file"],
                ["Volume I — Monitoramento da Dimensão Estratégica","https://www.gov.br/planejamento/pt-br/assuntos/planejamento/repositorio-de-arquivos-legislacao-eleitoral/volume-i-monitoramento-da-dimensao-estrategica.pdf/@@display-file/file"],
                ["Volume II — Monitoramento dos Programas Finalísticos","https://www.gov.br/planejamento/pt-br/assuntos/planejamento/repositorio-de-arquivos-legislacao-eleitoral/volume-ii-monitoramento-dos-programas-finalisticos.pdf/@@display-file/file"],
                ["Volume III — Execução Orçamentária e Financeira dos Programas","https://www.gov.br/planejamento/pt-br/assuntos/planejamento/repositorio-de-arquivos-legislacao-eleitoral/volume-iii-execucao-orcamentaria-e-financeira-dos-programas.pdf/@@display-file/file"],
                ["Volume IV — Cenário Macroeconômico do PPA 2024–2027","https://www.gov.br/planejamento/pt-br/assuntos/planejamento/repositorio-de-arquivos-legislacao-eleitoral/volume-iv-cenario-macroeconomico-do-ppa-2024-2027.pdf/@@display-file/file"],
                ["Volume V — Monitoramento dos Investimentos Plurianuais","https://www.gov.br/planejamento/pt-br/assuntos/planejamento/repositorio-de-arquivos-legislacao-eleitoral/volume-v-monitoramento-dos-investimentos-plurianuais.pdf/@@display-file/file"],
                ["Volume VI — Monitoramento por Agenda Transversal","https://www.gov.br/planejamento/pt-br/assuntos/planejamento/repositorio-de-arquivos-legislacao-eleitoral/volume-vi-monitoramento-por-agenda-transversal.pdf/@@display-file/file"],
                ["Volume VII — Monitoramento por Prioridade","https://www.gov.br/planejamento/pt-br/assuntos/planejamento/repositorio-de-arquivos-legislacao-eleitoral/volume-vii-monitoramento-por-prioridade.pdf/@@display-file/file"]
              ]],
              ["2023",[
                ["Sumário Executivo","https://www.gov.br/planejamento/pt-br/assuntos/planejamento/plano-plurianual/arquivos/planos-plurianuais-anteriores/ppa-2020-2023/relatorio-anual-de-monitoramento-ppa-2020_2023.pdf/@@display-file/file"],
                ["Volume I — Monitoramento dos programas finalísticos","https://www.gov.br/planejamento/pt-br/assuntos/planejamento/plano-plurianual/arquivos/planos-plurianuais-anteriores/ppa-2020-2023/relatorio-2023-volume-i-completo.pdf/@@display-file/file"],
                ["Volume II — Execução dos recursos orçamentários e não orçamentários","https://www.gov.br/planejamento/pt-br/assuntos/planejamento/plano-plurianual/arquivos/planos-plurianuais-anteriores/ppa-2020-2023/relatorio-2023-volume-ii-completo.pdf/@@display-file/file"]
              ]]
            ]
          }
        ]
      },
      {
        titulo: "Prestação de contas e informações gerais do Governo Federal",
        itens: [
          {
            titulo: "Prestação de Contas do Presidente da República",
            descricao: "Conjunto anual de informações sobre a gestão do Governo Federal submetido ao processo constitucional de prestação de contas.",
            fontes: [["Acessar fonte oficial","https://www.gov.br/cgu/pt-br/assuntos/auditoria-e-fiscalizacao/avaliacao-da-gestao-dos-administradores/prestacao-de-contas-do-presidente-da-republica"]],
            anos: [
              ["2025",[["Prestação de Contas — exercício 2025","https://www.gov.br/cgu/pt-br/assuntos/auditoria-e-fiscalizacao/avaliacao-da-gestao-dos-administradores/prestacao-de-contas-do-presidente-da-republica/arquivos/2026/pcpr2025.pdf"],["Informações adicionais","https://www.gov.br/cgu/pt-br/assuntos/auditoria-e-fiscalizacao/avaliacao-da-gestao-dos-administradores/prestacao-de-contas-do-presidente-da-republica/2025/PCPR2025InformaesAdicionais.pdf"]]],
              ["2024",[["Prestação de Contas — exercício 2024","https://www.gov.br/cgu/pt-br/assuntos/auditoria-e-fiscalizacao/avaliacao-da-gestao-dos-administradores/prestacao-de-contas-do-presidente-da-republica/arquivos/2024/pcpr2024.pdf/@@download/file"]]],
              ["2023",[["Prestação de Contas — exercício 2023","https://www.gov.br/cgu/pt-br/assuntos/auditoria-e-fiscalizacao/avaliacao-da-gestao-dos-administradores/prestacao-de-contas-do-presidente-da-republica/arquivos/2023/PCPR2023_Final.pdf"]]]
            ]
          },
          {
            titulo: "Mensagem ao Congresso Nacional",
            descricao: "Documento anual encaminhado pelo Poder Executivo ao Congresso Nacional com informações sobre a situação do País e as ações governamentais.",
            fontes: [["Acessar acervo oficial","https://www.biblioteca.presidencia.gov.br/publicacoes-oficiais/mensagem-ao-congresso-nacional"]],
            anos: [
              ["2026",[["PDF oficial","https://www.gov.br/casacivil/pt-br/.arquivos/mensagem-ao-congresso-nacional-2026.pdf/@@download/file"]]],
              ["2025",[["PDF oficial","https://www.gov.br/planalto/pt-br/acesso-a-informacao/acoes-e-programas/governanca/mensagem-ao-congresso-nacional/mcn2025digitalv1.pdf"]]],
              ["2024",[["PDF oficial","https://www.gov.br/planalto/pt-br/acesso-a-informacao/acoes-e-programas/governanca/mensagem-ao-congresso-nacional/mensagemaocongressonacional2024_vf.pdf"],["Cópia alternativa — CONASS","https://www.conass.org.br/wp-content/uploads/2024/02/8.2-Mensagem-do-Congresso-Nacional-2024.pdf"]]],
              ["2023",[["PDF oficial","https://www.gov.br/planalto/pt-br/acesso-a-informacao/acoes-e-programas/governanca/mensagem-ao-congresso-nacional/MensagemaoCongressoNacional2023.pdf"],["Cópia alternativa — Tele.Síntese","https://telesintese.com.br/wp-content/uploads/2023/02/Mensagem-do-Presidente-ao-Congresso.pdf"]]]
            ]
          }
        ]
      }
    ]
  }
};
