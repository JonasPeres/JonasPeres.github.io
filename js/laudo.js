/**
 * Assistente de Laudo Vöiston (offline).
 *
 * Cada exame tem:
 *   - paginas[]   : 1+ imagens (PDFs multi-página viram array)
 *   - cabecalho   : { paciente, tipo, equipamento, data }
 *   - medidas     : { tabela: [{medida, od, os}], extras?: [{titulo, linhas}], observacao? }
 *                   (opcional — exames qualitativos podem não ter)
 *   - laudo       : { descricao: [{sub, texto}], conclusao, observacao? }
 */
const EXAMES = [
  {
    id: 1,
    titulo: "Campo Visual",
    paginas: [
      "assets/exames/campo-visual-1.jpg",
      "assets/exames/campo-visual-2.jpg",
    ],
    cabecalho: {
      paciente: "PACIENTE ANÔNIMO",
      tipo: "Campo visual computadorizado 24-2",
      equipamento: "Humphrey Field Analyzer (HFA II 750)",
      data: "04/10/2017",
    },
    medidas: {
      tabela: [
        { medida: "Olho examinado",        od: "Right",                  os: "Left" },
        { medida: "Estratégia",            od: "SITA-Fast",              os: "SITA-Fast" },
        { medida: "Fixation monitor",      od: "Gaze/Blind Spot",        os: "Gaze/Blind Spot" },
        { medida: "Fixation target",       od: "Central",                os: "Central" },
        { medida: "Stimulus",              od: "III, White",             os: "III, White" },
        { medida: "Background",            od: "31.5 ASB",               os: "31.5 ASB" },
        { medida: "Fixation losses",       od: "0/11",                   os: "0/10" },
        { medida: "False positive errors", od: "9%",                     os: "8%" },
        { medida: "False negative errors", od: "10%",                    os: "0%" },
        { medida: "Test duration",         od: "03:21",                  os: "03:02" },
        { medida: "Fovea",                 od: "37 dB",                  os: "37 dB" },
        { medida: "GHT",                   od: "Within Normal Limits",   os: "Outside Normal Limits" },
        { medida: "VFI",                   od: "99%",                    os: "98%" },
        { medida: "MD",                    od: "-2.05 dB; P < 5%",       os: "-1.06 dB" },
        { medida: "PSD",                   od: "1.59 dB",                os: "1.57 dB" },
        { medida: "Data / horário",        od: "04/10/2017; 15:51",      os: "04/10/2017; 15:57" },
        { medida: "Idade no exame",        od: "29 anos",                os: "29 anos" },
      ],
      observacao: "Incluídas apenas as medidas numéricas e parâmetros globais legíveis com segurança no exame fornecido."
    },
    laudo: {
      descricao: [
        { sub: "OLHO DIREITO",
          texto: "Índices de confiabilidade adequados, com perdas de fixação de 0/11, falsos positivos de 9% e falsos negativos de 10%. Sensibilidade foveal de 37 dB. GHT dentro dos limites da normalidade. VFI: 99%. MD: -2.05 dB. PSD: 1.59 dB. Mapas de desvio total e padrão demonstram discretas alterações localizadas sem padrão glaucomatoso típico estabelecido." },
        { sub: "OLHO ESQUERDO",
          texto: "Índices de confiabilidade adequados, com perdas de fixação de 0/10, falsos positivos de 8% e ausência de falsos negativos. Sensibilidade foveal de 37 dB. GHT fora dos limites da normalidade. VFI: 98%. MD: -1.06 dB. PSD: 1.57 dB. Mapas de desvio total e padrão demonstram pequenos defeitos localizados paracentrais, sem perda difusa significativa." }
      ],
      conclusao: "Exame confiável em ambos os olhos. Olho direito sem alterações significativas. Olho esquerdo apresenta discretas alterações localizadas, com GHT fora dos limites da normalidade, recomendando correlação clínica e seguimento evolutivo.",
      observacao: "A interpretação adequada do exame deve ser realizada em conjunto com os dados clínicos, pressão intraocular, avaliação estrutural do nervo óptico e demais exames complementares."
    }
  },

  {
    id: 2,
    titulo: "OCT - RNFL",
    paginas: ["assets/exames/oct-rnfl-1.jpg"],
    cabecalho: {
      paciente: "PACIENTE ANÔNIMO",
      tipo: "OCT RNFL",
      equipamento: "Heidelberg Spectralis",
      data: "23/10/2024",
    },
    medidas: {
      tabela: [
        { medida: "Qualidade do scan (Q)",       od: "25",                          os: "24" },
        { medida: "Ângulo IR",                   od: "-7.6°",                       os: "-3.5°" },
        { medida: "RNFL - Superior",             od: "146 µm",                      os: "163 µm" },
        { medida: "RNFL - Nasal",                od: "99 µm",                       os: "98 µm" },
        { medida: "RNFL - Inferior",             od: "154 µm",                      os: "135 µm" },
        { medida: "RNFL - Temporal",             od: "68 µm",                       os: "64 µm" },
        { medida: "RNFL - Global (G)",           od: "117 µm",                      os: "115 µm" },
        { medida: "RNFL - Temporal Superior (TS)", od: "166 µm (ref. 134 µm)",       os: "171 µm (ref. 134 µm)" },
        { medida: "RNFL - Nasal Superior (NS)",  od: "126 µm (ref. 102 µm)",        os: "154 µm (ref. 102 µm)" },
        { medida: "RNFL - Nasal (N)",            od: "99 µm (ref. 72 µm)",          os: "98 µm (ref. 72 µm)" },
        { medida: "RNFL - Nasal Inferior (NI)",  od: "129 µm (ref. 105 µm)",        os: "110 µm (ref. 105 µm)" },
        { medida: "RNFL - Temporal Inferior (TI)", od: "179 µm (ref. 141 µm)",      os: "160 µm (ref. 141 µm)" },
        { medida: "RNFL - Temporal (T)",         od: "68 µm (ref. 74 µm)",          os: "64 µm (ref. 74 µm)" },
        { medida: "Classificação",               od: "Within Normal Limits",        os: "Within Normal Limits" },
      ],
      extras: [
        { titulo: "Assimetria OD − OS",
          cols: ["Setor", "Assimetria"],
          linhas: [
            ["Superior",          "-17 µm"],
            ["Nasal",             "1 µm"],
            ["Temporal",          "5 µm"],
            ["Inferior",          "19 µm"],
            ["Nasal Superior",    "-28 µm"],
            ["Temporal Superior", "-6 µm"],
            ["Global",            "3 µm"],
            ["Nasal Inferior",    "19 µm"],
            ["Temporal Inferior", "19 µm"],
          ]
        }
      ]
    },
    laudo: {
      descricao: [
        { sub: "OLHO DIREITO",
          texto: "Espessura média da camada de fibras nervosas dentro dos limites da normalidade. Curva TSNIT preservada, sem afinamentos focais significativos. Análise setorial demonstrando quadrantes dentro dos padrões esperados para faixa etária. Classificação automática do equipamento: Within Normal Limits." },
        { sub: "OLHO ESQUERDO",
          texto: "Espessura média da camada de fibras nervosas dentro dos limites da normalidade. Curva TSNIT preservada, sem defeitos estruturais significativos. Análise setorial sem assimetrias relevantes. Classificação automática do equipamento: Within Normal Limits." },
        { sub: "ANÁLISE COMPARATIVA",
          texto: "Sem evidência de assimetria estrutural significativa entre os olhos." }
      ],
      conclusao: "Exame tomográfico da camada de fibras nervosas da retina dentro dos padrões de normalidade em ambos os olhos, sem evidências estruturais sugestivas de neuropatia óptica glaucomatosa.",
      observacao: "Os achados devem ser correlacionados com avaliação clínica, pressão intraocular, campimetria computadorizada e acompanhamento oftalmológico."
    }
  },

  {
    id: 3,
    titulo: "Autofluorescência",
    paginas: ["assets/exames/autofluorescencia-1.jpg"],
    cabecalho: {
      paciente: "PACIENTE ANÔNIMO",
      tipo: "Retinografia autofluorescente",
      equipamento: "HRA Spectralis / Topcon",
      data: "24/02/2026",
    },
    medidas: null,    // exame qualitativo
    laudo: {
      descricao: [
        { sub: "OLHO DIREITO",
          texto: "Imagem autofluorescente demonstrando extensa área central de alteração do sinal autofluorescente em região macular, compatível com alterações atróficas do epitélio pigmentar da retina. Áreas periféricas sem alterações significativas evidentes." },
        { sub: "OLHO ESQUERDO",
          texto: "Padrão semelhante ao olho direito, com extensa alteração autofluorescente central envolvendo a mácula. Sem focos evidentes de hiperautofluorescência ativa periférica." },
        { sub: "CONSIDERAÇÃO",
          texto: "Achados bilaterais compatíveis com processo degenerativo macular crônico." }
      ],
      conclusao: "Autofluorescência evidenciando alterações atróficas maculares bilaterais, compatíveis com comprometimento do epitélio pigmentar da retina. Orienta-se correlação com exames complementares e exame físico.",
      observacao: ""
    }
  },

  {
    id: 4,
    titulo: "Retinografia / OCT Macular",
    paginas: [
      "assets/exames/retinografia-1.jpg",
      "assets/exames/retinografia-2.jpg",
    ],
    cabecalho: {
      paciente: "PACIENTE ANÔNIMO",
      tipo: "Retinografia colorida + OCT macular radial",
      equipamento: "Topcon Triton / IMAGEnet",
      data: "24/02/2026",
    },
    medidas: {
      tabela: [
        { medida: "Image Quality",            od: "93",                       os: "89" },
        { medida: "Analysis mode",            od: "Fine (2.0.7)",             os: "Fine (2.0.7)" },
        { medida: "Scan",                     od: "Radial 12.0 mm - 1024×12", os: "Radial 12.0 mm - 1024×12" },
        { medida: "Campo / ângulo de imagem", od: "45°",                      os: "45°" },
        { medida: "Average Thickness",        od: "198,7 µm",                 os: "207,0 µm" },
        { medida: "ETDRS - Central",          od: "205 µm",                   os: "214 µm" },
        { medida: "ETDRS - Superior externo", od: "190 µm",                   os: "206 µm" },
        { medida: "ETDRS - Superior interno", od: "175 µm",                   os: "191 µm" },
        { medida: "ETDRS - Nasal externo",    od: "224 µm",                   os: "200 µm" },
        { medida: "ETDRS - Nasal interno",    od: "241 µm",                   os: "207 µm" },
        { medida: "ETDRS - Inferior externo", od: "202 µm",                   os: "209 µm" },
        { medida: "ETDRS - Inferior interno", od: "204 µm",                   os: "202 µm" },
        { medida: "ETDRS - Temporal externo", od: "176 µm",                   os: "221 µm" },
        { medida: "ETDRS - Temporal interno", od: "178 µm",                   os: "200 µm" },
      ],
      observacao: "Nomenclatura nasal/temporal padronizada considerando a orientação anatômica de cada olho."
    },
    laudo: {
      descricao: [
        { sub: "OLHO DIREITO",
          texto: "Meios transparentes. Papila óptica com coloração preservada, limites parcialmente visíveis e sem sinais evidentes de edema. Vasos retinianos de trajeto preservado. Área macular apresentando extensa alteração atrófica/degenerativa central, associada a alterações do epitélio pigmentar da retina. Ausência de hemorragias extensas ou exsudação evidente nas imagens fornecidas." },
        { sub: "OLHO ESQUERDO",
          texto: "Meios transparentes. Papila óptica sem alterações grosseiras evidentes. Vasos retinianos de trajeto preservado. Área macular com extensa alteração atrófica/degenerativa central, semelhante ao olho contralateral. Sem sinais evidentes de neovascularização ativa nas imagens analisadas." }
      ],
      conclusao: "Retinografia e OCT macular demonstrando alterações maculares bilaterais de padrão atrófico/degenerativo, com comprometimento central em ambos os olhos.",
      observacao: "Sugere-se correlação com autofluorescência e avaliação clínica especializada."
    }
  },

  {
    id: 5,
    titulo: "Microscopia Especular",
    paginas: ["assets/exames/microscopia-especular-1.jpg"],
    cabecalho: {
      paciente: "PACIENTE ANÔNIMO",
      tipo: "Microscopia especular corneana",
      equipamento: "NIDEK",
      data: "03/03/2021",
    },
    medidas: {
      tabela: [
        { medida: "Number of Cells (NUM)",        od: "55 cells",      os: "27 cells" },
        { medida: "Cell Density (CD)",            od: "2.712 cells/mm²", os: "3.158 cells/mm²" },
        { medida: "Average Area (AVG)",           od: "369 µm²",       os: "317 µm²" },
        { medida: "Standard Deviation (SD)",      od: "106 µm²",       os: "85 µm²" },
        { medida: "Coefficient of Variation (CV)", od: "31%",          os: "28%" },
        { medida: "Max Area (MAX)",               od: "1.467 µm²",     os: "531 µm²" },
        { medida: "Min Area (MIN)",               od: "149 µm²",       os: "132 µm²" },
        { medida: "Hexagonal Cells (HEX)",        od: "69%",           os: "70%" },
        { medida: "Corneal Thickness (CT)",       od: "540 µm",        os: "544 µm" },
      ]
    },
    laudo: {
      descricao: [
        { sub: "OLHO DIREITO",
          texto: "Densidade celular endotelial de 2712 células/mm². Polimegatismo discreto, com coeficiente de variação de 31%. Pleomorfismo preservado, com 69% de células hexagonais. Espessura corneana central de 540 µm. Morfologia endotelial globalmente preservada, sem sinais de guttata ou descompensação corneana." },
        { sub: "OLHO ESQUERDO",
          texto: "Densidade celular endotelial de 3158 células/mm². Polimegatismo discreto, com coeficiente de variação de 28%. Pleomorfismo preservado, com 70% de células hexagonais. Espessura corneana central de 544 µm. Aspecto morfológico endotelial preservado." },
        { sub: "ANÁLISE COMPARATIVA",
          texto: "Comparativamente, observa-se densidade celular adequada em ambos os olhos, sem evidências de perda endotelial significativa." }
      ],
      conclusao: "Microscopia especular evidenciando endotélio corneano preservado bilateralmente, com densidade celular adequada e sem sinais de insuficiência endotelial.",
      observacao: "Os achados devem ser correlacionados com a avaliação clínica, biomicroscopia e demais exames complementares."
    }
  }
];

function renderExamesGrid() {
  const grid = document.getElementById('exames-grid');
  grid.innerHTML = '';
  EXAMES.forEach(ex => {
    const btn = document.createElement('button');
    btn.className = 'exame-btn';
    btn.dataset.id = ex.id;
    btn.textContent = ex.titulo;
    btn.addEventListener('click', () => mostrarLaudo(ex.id));
    grid.appendChild(btn);
  });
}

/* ========================================================
 * Estado global
 * ======================================================== */
let _laudoRunId  = 0;     // cancela streamings antigos
let _exameAtual  = null;
let _paginaThumb = 0;
let _paginaModal = 0;
let _abaAtual    = 'medidas'; // 'medidas' | 'laudo' — compartilhada main + modal

const STAGES = [
  { label: "Carregando imagem do exame",     ms: 1100 },
  { label: "Analisando estruturas com IA",   ms: 2200 },
  { label: "Identificando achados clínicos", ms: 2000 },
  { label: "Redigindo laudo",                ms: 1300 },
];

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function typewrite(el, texto, runId, charPerTick = 3, tickMs = 12) {
  el.textContent = '';
  for (let i = 0; i < texto.length; i += charPerTick) {
    if (runId !== _laudoRunId) return;
    el.textContent = texto.slice(0, i + charPerTick);
    el.scrollIntoView({ block: 'nearest' });
    await sleep(tickMs);
  }
  el.textContent = texto;
}

/* ========================================================
 * Helpers de render
 * ======================================================== */

function htmlCabecalho(exame) {
  const c = exame.cabecalho;
  return `
    <header class="exame-header">
      <h2 class="exame-titulo">${c.tipo}</h2>
      <dl class="exame-meta">
        <div><dt>Paciente</dt>      <dd>${c.paciente}</dd></div>
        <div><dt>Equipamento</dt>   <dd>${c.equipamento}</dd></div>
        <div><dt>Data do exame</dt> <dd>${c.data}</dd></div>
      </dl>
    </header>
  `;
}

function htmlTabelaMedidas(med) {
  if (!med) {
    return `<p class="medidas-vazio">Este exame é qualitativo — não há medidas numéricas extraídas.</p>`;
  }
  const linhasPrincipais = med.tabela.map(r => `
    <tr><th scope="row">${r.medida}</th><td>${r.od}</td><td>${r.os}</td></tr>
  `).join('');

  const extras = (med.extras || []).map(ex => {
    const cols = ex.cols || ['Setor', 'Valor'];
    const ths  = cols.map(c => `<th>${c}</th>`).join('');
    const trs  = ex.linhas.map(l => `<tr>${l.map((v,i)=> i===0 ? `<th scope="row">${v}</th>` : `<td>${v}</td>`).join('')}</tr>`).join('');
    return `
      <h4 class="extras-titulo">${ex.titulo}</h4>
      <table class="medidas-tbl">
        <thead><tr>${ths}</tr></thead>
        <tbody>${trs}</tbody>
      </table>
    `;
  }).join('');

  const obs = med.observacao ? `<p class="medidas-obs"><strong>Observação:</strong> ${med.observacao}</p>` : '';

  return `
    <table class="medidas-tbl">
      <thead>
        <tr><th>Medida</th><th>OD</th><th>OS</th></tr>
      </thead>
      <tbody>${linhasPrincipais}</tbody>
    </table>
    ${extras}
    ${obs}
  `;
}

function htmlLaudoCompleto(exame) {
  const l = exame.laudo;
  const blocos = l.descricao.map(d => `<h4>${d.sub}</h4><p>${d.texto}</p>`).join('');
  const obs = l.observacao ? `<h3>Observação</h3><p>${l.observacao}</p>` : '';
  return `
    <h3>Descrição do Exame</h3>
    ${blocos}
    <h3>Conclusão</h3>
    <p>${l.conclusao}</p>
    ${obs}
  `;
}

/* === Conversão para texto plain (botão Copiar) === */
function medidasToText(exame) {
  const c = exame.cabecalho, m = exame.medidas;
  let out = `${c.tipo}\nPaciente: ${c.paciente}\nEquipamento: ${c.equipamento}\nData do exame: ${c.data}\n\n`;
  if (!m) { out += "Exame qualitativo — sem medidas numéricas extraídas."; return out; }
  out += "Medida\tOD\tOS\n";
  out += m.tabela.map(r => `${r.medida}\t${r.od}\t${r.os}`).join('\n');
  (m.extras || []).forEach(ex => {
    out += `\n\n${ex.titulo}\n` + (ex.cols || []).join('\t') + '\n' + ex.linhas.map(l => l.join('\t')).join('\n');
  });
  if (m.observacao) out += `\n\nObservação: ${m.observacao}`;
  return out;
}
function laudoToText(exame) {
  const c = exame.cabecalho, l = exame.laudo;
  let out = `${c.tipo}\nPaciente: ${c.paciente}\nEquipamento: ${c.equipamento}\nData do exame: ${c.data}\n\nDESCRIÇÃO DO EXAME\n`;
  out += l.descricao.map(d => `${d.sub}\n${d.texto}`).join('\n\n');
  out += `\n\nCONCLUSÃO\n${l.conclusao}`;
  if (l.observacao) out += `\n\nObservação: ${l.observacao}`;
  return out;
}

async function copiarTexto(texto, btn) {
  try {
    await navigator.clipboard.writeText(texto);
  } catch {
    // fallback
    const ta = document.createElement('textarea');
    ta.value = texto; document.body.appendChild(ta);
    ta.select(); document.execCommand('copy'); ta.remove();
  }
  if (btn) {
    const original = btn.dataset.originalLabel || btn.innerHTML;
    btn.dataset.originalLabel = original;
    btn.classList.add('copied');
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg>
      Copiado!`;
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = original;
    }, 1600);
  }
}

/* ========================================================
 * Renderização da view principal (Assistente de Laudo)
 * ======================================================== */

function renderPaginadorThumb() {
  const ex = _exameAtual;
  const wrap = document.getElementById('thumb-paginator');
  if (!wrap || !ex || ex.paginas.length < 2) {
    if (wrap) wrap.hidden = true;
    return;
  }
  wrap.hidden = false;
  wrap.innerHTML = `
    <button type="button" class="pg-arrow" data-pg-act="prev" aria-label="Página anterior">‹</button>
    <span class="pg-info">${_paginaThumb + 1} / ${ex.paginas.length}</span>
    <button type="button" class="pg-arrow" data-pg-act="next" aria-label="Próxima página">›</button>
  `;
  wrap.querySelectorAll('[data-pg-act]').forEach(b => {
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      const dir = b.dataset.pgAct === 'next' ? 1 : -1;
      _paginaThumb = (_paginaThumb + dir + ex.paginas.length) % ex.paginas.length;
      const img = document.querySelector('#laudo-img-wrap img');
      if (img) img.src = ex.paginas[_paginaThumb];
      renderPaginadorThumb();
    });
  });
}

function bindAbasMain() {
  document.querySelectorAll('#tabs-main [data-tab]').forEach(t => {
    t.addEventListener('click', () => trocarAba(t.dataset.tab));
  });
}
function trocarAba(nome) {
  _abaAtual = nome;
  document.querySelectorAll('[data-tab]').forEach(t => {
    t.setAttribute('aria-selected', t.dataset.tab === nome ? 'true' : 'false');
  });
  document.querySelectorAll('[data-tab-panel]').forEach(p => {
    p.hidden = p.dataset.tabPanel !== nome;
  });
}

async function mostrarLaudo(id) {
  const exame = EXAMES.find(e => e.id === id);
  if (!exame) return;

  const runId = ++_laudoRunId;
  _exameAtual = exame;
  _paginaThumb = 0;
  _abaAtual = 'medidas';

  document.querySelectorAll('.exame-btn').forEach(b => {
    b.classList.toggle('active', Number(b.dataset.id) === id);
  });

  const primeiraPagina = exame.paginas[0];
  const temMedidas = !!exame.medidas;

  const area = document.getElementById('laudo-area');
  area.innerHTML = `
    <div class="laudo-conteudo">
      ${htmlCabecalho(exame)}
      <div class="laudo-body">
        <aside class="laudo-img-col">
          <button class="laudo-img laudo-img-thumb is-processing" id="laudo-img-wrap"
                  type="button" disabled
                  onclick="abrirImagemExame(${exame.id})"
                  title="Aguarde o processamento">
            <img src="${primeiraPagina}" alt="${exame.titulo}"
                 onerror="this.remove(); document.getElementById('laudo-img-wrap').classList.add('placeholder');"/>
            <div class="img-scan-overlay"><span class="img-scan-line"></span></div>
            <span class="img-expand-hint" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>
              </svg>
              <span class="img-expand-hint-text">Tela cheia</span>
            </span>
          </button>
          <div class="thumb-paginator" id="thumb-paginator" hidden></div>
        </aside>

        <div class="laudo-content-col">
          <div class="laudo-processing" id="laudo-processing">
            <div class="proc-title">
              <span class="proc-spinner"></span>
              <span>Vöiston · análise em andamento</span>
            </div>
            <ul class="proc-steps" id="proc-steps">
              ${STAGES.map((s, i) => `
                <li data-step="${i}">
                  <span class="proc-step-ico"></span>
                  <span class="proc-step-label">${s.label}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="tabs-wrapper" id="tabs-wrapper" hidden>
            <div class="tabs" id="tabs-main" role="tablist">
              <button type="button" role="tab" data-tab="medidas" aria-selected="true"  ${temMedidas ? '' : 'disabled title="Exame qualitativo"'}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
                Medidas
              </button>
              <button type="button" role="tab" data-tab="laudo"   aria-selected="false">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
                Laudo
              </button>
            </div>

            <section class="tab-panel" data-tab-panel="medidas">
              <header class="tab-panel-header">
                <h3 class="tab-panel-titulo">Medidas extraídas</h3>
                <button type="button" class="btn-copy" data-copy="medidas">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  Copiar
                </button>
              </header>
              <div class="medidas-area">${htmlTabelaMedidas(exame.medidas)}</div>
            </section>

            <section class="tab-panel" data-tab-panel="laudo" hidden>
              <header class="tab-panel-header">
                <h3 class="tab-panel-titulo">Laudo gerado</h3>
                <button type="button" class="btn-copy" data-copy="laudo">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  Copiar
                </button>
              </header>
              <div class="laudo-texto" id="laudo-texto"></div>
            </section>
          </div>
        </div>
      </div>
    </div>
  `;

  // Etapas sequenciais
  const stepsEl = document.getElementById('proc-steps');
  for (let i = 0; i < STAGES.length; i++) {
    if (runId !== _laudoRunId) return;
    const li = stepsEl.querySelector(`li[data-step="${i}"]`);
    li.classList.add('active');
    await sleep(STAGES[i].ms);
    if (runId !== _laudoRunId) return;
    li.classList.remove('active');
    li.classList.add('done');
  }

  if (runId !== _laudoRunId) return;

  // Esconde processamento, mostra abas
  document.getElementById('laudo-processing').hidden = true;
  document.getElementById('tabs-wrapper').hidden = false;

  // Se exame não tem medidas, abre direto na aba Laudo
  if (!temMedidas) trocarAba('laudo');
  bindAbasMain();

  // Libera o botão de ampliar + paginador
  const imgBtn = document.getElementById('laudo-img-wrap');
  if (imgBtn) {
    imgBtn.disabled = false;
    imgBtn.classList.remove('is-processing');
    imgBtn.classList.add('is-ready');
    imgBtn.title = 'Toque para ampliar em tela cheia';
  }
  renderPaginadorThumb();

  // Bind dos botões "Copiar"
  document.querySelectorAll('.btn-copy[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tipo = btn.dataset.copy;
      const texto = tipo === 'medidas' ? medidasToText(exame) : laudoToText(exame);
      copiarTexto(texto, btn);
    });
  });

  // Streaming do laudo (na aba "Laudo", mesmo se estiver oculta o texto vai sendo escrito)
  const textoEl = document.getElementById('laudo-texto');
  const append = (html) => {
    const wrap = document.createElement('div');
    wrap.innerHTML = html;
    while (wrap.firstChild) textoEl.appendChild(wrap.firstChild);
    return textoEl.lastElementChild;
  };

  append('<h3>Descrição do Exame</h3>');
  for (const d of exame.laudo.descricao) {
    if (runId !== _laudoRunId) return;
    append(`<h4>${d.sub}</h4>`);
    const p = append('<p class="streaming"></p>');
    await typewrite(p, d.texto, runId);
    p.classList.remove('streaming');
  }

  if (runId !== _laudoRunId) return;
  append('<h3>Conclusão</h3>');
  const pConc = append('<p class="streaming"></p>');
  await typewrite(pConc, exame.laudo.conclusao, runId);
  pConc.classList.remove('streaming');

  if (exame.laudo.observacao) {
    if (runId !== _laudoRunId) return;
    append('<h3>Observação</h3>');
    const pObs = append('<p class="streaming"></p>');
    await typewrite(pObs, exame.laudo.observacao, runId);
    pObs.classList.remove('streaming');
  }
}

/* ========================================================
 * Modal expandido (imagem ampliada + abas com cabeçalho)
 * ======================================================== */

function abrirImagemExame(exameId) {
  fecharImagemExame();
  const exame = EXAMES.find(e => e.id === exameId);
  if (!exame) return;
  _paginaModal = _paginaThumb;
  const total = exame.paginas.length;
  const temMedidas = !!exame.medidas;
  const abaInicial = _abaAtual || (temMedidas ? 'medidas' : 'laudo');

  const paginadorModal = total > 1 ? `
    <div class="modal-paginator">
      <button type="button" class="pg-arrow" data-pg-act="prev" aria-label="Página anterior">‹</button>
      <span class="pg-info" id="modal-pg-info">${_paginaModal + 1} / ${total}</span>
      <button type="button" class="pg-arrow" data-pg-act="next" aria-label="Próxima página">›</button>
    </div>
  ` : '';

  const modal = document.createElement('div');
  modal.className = 'img-modal';
  modal.id = 'img-modal';
  modal.innerHTML = `
    <button class="img-modal-close" type="button" aria-label="Fechar">×</button>
    <div class="img-modal-content">
      <figure class="img-modal-figure">
        <img id="modal-img" src="${exame.paginas[_paginaModal]}" alt="${exame.titulo}">
        ${paginadorModal}
      </figure>
      <aside class="img-modal-side">
        ${htmlCabecalho(exame)}
        <div class="tabs-wrapper">
          <div class="tabs" role="tablist">
            <button type="button" role="tab" data-mtab="medidas"
                    aria-selected="${abaInicial === 'medidas'}"
                    ${temMedidas ? '' : 'disabled'}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
              Medidas
            </button>
            <button type="button" role="tab" data-mtab="laudo"
                    aria-selected="${abaInicial === 'laudo'}">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
              Laudo
            </button>
          </div>
          <section class="tab-panel" data-mtab-panel="medidas" ${abaInicial === 'medidas' ? '' : 'hidden'}>
            <header class="tab-panel-header">
              <h3 class="tab-panel-titulo">Medidas extraídas</h3>
              <button type="button" class="btn-copy" data-copy="medidas">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                Copiar
              </button>
            </header>
            <div class="medidas-area">${htmlTabelaMedidas(exame.medidas)}</div>
          </section>
          <section class="tab-panel" data-mtab-panel="laudo" ${abaInicial === 'laudo' ? '' : 'hidden'}>
            <header class="tab-panel-header">
              <h3 class="tab-panel-titulo">Laudo gerado</h3>
              <button type="button" class="btn-copy" data-copy="laudo">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                Copiar
              </button>
            </header>
            <div class="img-modal-laudo-body">${htmlLaudoCompleto(exame)}</div>
          </section>
        </div>
      </aside>
    </div>
  `;

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('img-modal-close')) fecharImagemExame();
  });

  // Paginação
  modal.querySelectorAll('[data-pg-act]').forEach(b => {
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      const dir = b.dataset.pgAct === 'next' ? 1 : -1;
      _paginaModal = (_paginaModal + dir + total) % total;
      modal.querySelector('#modal-img').src = exame.paginas[_paginaModal];
      modal.querySelector('#modal-pg-info').textContent = (_paginaModal + 1) + ' / ' + total;
    });
  });

  // Abas do modal
  modal.querySelectorAll('[data-mtab]').forEach(t => {
    t.addEventListener('click', () => {
      const nome = t.dataset.mtab;
      modal.querySelectorAll('[data-mtab]').forEach(x => x.setAttribute('aria-selected', x.dataset.mtab === nome ? 'true' : 'false'));
      modal.querySelectorAll('[data-mtab-panel]').forEach(p => p.hidden = p.dataset.mtabPanel !== nome);
    });
  });

  // Botões copiar (no modal)
  modal.querySelectorAll('.btn-copy[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tipo = btn.dataset.copy;
      const texto = tipo === 'medidas' ? medidasToText(exame) : laudoToText(exame);
      copiarTexto(texto, btn);
    });
  });

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
}

function fecharImagemExame() {
  const m = document.getElementById('img-modal');
  if (m) m.remove();
  document.body.style.overflow = '';
}

function resetLaudo() {
  fecharImagemExame();
  _laudoRunId++;
  _exameAtual  = null;
  _paginaThumb = 0;
  _paginaModal = 0;
  _abaAtual    = 'medidas';
  document.querySelectorAll('.exame-btn').forEach(b => b.classList.remove('active'));
  const area = document.getElementById('laudo-area');
  area.innerHTML = `
    <div class="laudo-placeholder">
      <h2>Assistente de Laudo Vöiston</h2>
      <p>Selecione um exame acima para iniciar a análise.</p>
    </div>
  `;
}
