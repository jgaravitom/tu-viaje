/* Mejoras de itinerarios: planes diferenciados, selección del cliente e imágenes compartidas. */
(() => {
  const PLANES = {
    naturaleza: { label: 'Naturaleza', keywords: /parque|bosque|jard[ií]n|playa|isla|cenote|cascad|monta[nñ]a|volc[aá]n|sender|reserva|ecol[oó]g|r[ií]o|laguna|glaciar|valle|mirador|bamb[uú]|desierto|termas|safari/i },
    fiesta: { label: 'Fiesta nocturna', keywords: /noche|bar|pub|discotec|club|casino|fiesta|mercado|calle|zona|barrio|entretenimiento|show|lounge|rooftop|hostel|party|karaoke/i },
    recorrido: { label: 'Recorrido turístico', keywords: /templo|museo|palacio|castillo|monumento|catedral|iglesia|torre|plaza|hist[oó]ric|arquitect|patrimonio|ruinas|teatro|puente|santuario|centro|coliseo|fortaleza/i }
  };
  const META_URL = 'img/itinerarios.json';
  let metadata = {};

  const normalizar = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  const idItem = (destinoId, tipo, texto) => normalizar(destinoId + '-' + tipo + '-' + texto)
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 120);

  async function cargarMetadata() {
    try {
      const response = await fetch(META_URL + '?v=' + Date.now(), { cache: 'no-store' });
      if (response.ok) metadata = await response.json();
    } catch (_) { metadata = {}; }
  }

  function rutaImagen(destino, tipo, texto, indice) {
    const destinoData = metadata[destino.id] || {};
    const key = idItem(destino.id, tipo, texto);
    return (destinoData.shared && destinoData.shared[tipo] && destinoData.shared[tipo][key])
      || (destinoData.plans && destinoData.plans[app.estado.tipoPlan] && destinoData.plans[app.estado.tipoPlan][tipo] && destinoData.plans[app.estado.tipoPlan][tipo][key])
      || (tipo === 'destino' ? 'img/' + destino.img : '');
  }

  function clasificar(items, tipo, plan) {
    if (plan === 'todas') return items.map((texto, i) => ({ texto, indice: i }));
    const cfg = PLANES[plan];
    const puntajes = items.map((texto, i) => ({ texto, indice: i, score: cfg.keywords.test(texto) ? 2 : 0 }));
    // Cada categoría recibe una selección propia. Si los datos originales no tienen
    // suficientes etiquetas semánticas, se distribuyen por posición sin repetir.
    let elegidos = puntajes.filter(x => x.score > 0);
    if (elegidos.length < 2) {
      const orden = plan === 'naturaleza' ? [0, 3, 1, 4, 2]
        : plan === 'fiesta' ? [1, 4, 2, 0, 3]
        : [2, 0, 3, 1, 4];
      elegidos = orden.map(i => puntajes[i]).filter(Boolean).slice(0, Math.min(3, items.length));
    } else {
      elegidos = elegidos.slice(0, Math.min(4, items.length));
    }
    return elegidos.map(({ texto, indice }) => ({ texto, indice }));
  }

  function crearTarjeta(dest, tipo, item, i, selectable) {
    const src = rutaImagen(dest, tipo, item.texto, item.indice);
    const wrap = document.createElement('label');
    wrap.className = 'relative overflow-hidden bg-slate-800/80 border border-slate-700/80 rounded-2xl shadow-md flex flex-col cursor-pointer hover:border-blue-500 transition';
    const inputType = tipo === 'hospedaje' ? 'radio' : 'checkbox';
    const group = 'seleccion-' + tipo;
    wrap.innerHTML = `
      ${src ? '<img class="w-full h-36 object-cover" alt="" src="' + src.replace(/"/g, '&quot;') + '" onerror="this.style.display=\'none\'">' : ''}
      <div class="p-4 flex items-start gap-3">
        <input type="${inputType}" name="${group}" value="${item.indice}" ${tipo === 'hospedaje' ? '' : 'checked'} class="mt-1 accent-blue-500 w-4 h-4">
        <span class="text-slate-100 text-sm font-medium">${i + 1}. ${item.texto}</span>
      </div>`;
    if (!selectable) wrap.querySelector('input').disabled = true;
    return wrap;
  }

  function renderLista(dest, tipo, items, plan) {
    const container = document.getElementById('res-' + (tipo === 'lugares' ? 'lugares' : tipo === 'comida' ? 'comida' : 'hotel') + '-grid');
    container.innerHTML = '';
    const seleccion = clasificar(items, tipo, plan);
    seleccion.forEach((item, i) => container.appendChild(crearTarjeta(dest, tipo, item, i, true)));
  }

  function seleccionados(dest, tipo, items, plan) {
    const subset = clasificar(items, tipo, plan);
    const containerId = tipo === 'lugares' ? 'res-lugares-grid' : tipo === 'comida' ? 'res-comida-grid' : 'res-hotel-grid';
    const container = document.getElementById(containerId);
    const checked = [...container.querySelectorAll('input:checked')].map(el => Number(el.value));
    return subset.filter(item => checked.includes(item.indice)).map(item => ({
      texto: item.texto, tipo, indice: item.indice,
      image: rutaImagen(dest, tipo, item.texto, item.indice)
    }));
  }

  function instalarEstilos() {
    if (document.getElementById('estilos-itinerario')) return;
    const style = document.createElement('style');
    style.id = 'estilos-itinerario';
    style.textContent = '#screen-6 input[type=checkbox],#screen-6 input[type=radio]{accent-color:#3b82f6}#screen-6 label:has(input:checked){border-color:#3b82f6;box-shadow:0 0 0 1px #3b82f6}';
    document.head.appendChild(style);
  }

  const originalPoblar = app.poblarResultadosFinales.bind(app);
  app.poblarResultadosFinales = function () {
    originalPoblar();
    instalarEstilos();
    const d = this.estado.destinoSeleccionado, plan = this.estado.tipoPlan || 'todas';
    renderLista(d, 'lugares', d.lugares || [], plan);
    renderLista(d, 'comida', d.comida || [], plan);
    renderLista(d, 'hospedaje', d.hospedaje || [], plan);
    const title = document.querySelector('#screen-6 .text-center h2');
    if (title) title.insertAdjacentHTML('afterend', '<p class="mt-2 text-sm text-blue-300">Plan: ' + (PLANES[plan]?.label || 'Todas las experiencias') + ' · Puedes elegir tus recomendaciones favoritas.</p>');
  };

  const originalPDF = app.descargarPDF.bind(app);
  app.descargarPDF = async function () {
    const d = this.estado.destinoSeleccionado;
    const plan = this.estado.tipoPlan || 'todas';
    const grupos = [
      { tipo: 'lugares', titulo: traducciones[this.lang].res_places_title, color: [26,122,184] },
      { tipo: 'comida', titulo: traducciones[this.lang].res_food_title, color: [245,130,32] },
      { tipo: 'hospedaje', titulo: traducciones[this.lang].res_hotel_title, color: [16,160,110] }
    ];
    const seleccion = grupos.map(g => ({ ...g, items: seleccionados(d, g.tipo, d[g.tipo] || [], plan) }));
    const jsPDF = window.jspdf && window.jspdf.jsPDF;
    if (!jsPDF) return originalPDF();
    const limpiar = s => String(s).replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const doc = new jsPDF({ unit: 'mm', format: 'a4' }), W = 210, M = 16, ancho = W - 2*M;
    let y = 20;
    doc.setFillColor(20,67,122); doc.rect(0,0,W,34,'F');
    doc.setTextColor(255,255,255); doc.setFont('helvetica','bold'); doc.setFontSize(19);
    doc.text(limpiar(d.nombre), M, 17);
    doc.setFont('helvetica','normal'); doc.setFontSize(10);
    doc.text('Tu Guía · ' + (PLANES[plan]?.label || 'Todas las experiencias'), M, 26);
    y = 46;
    const imagen = async path => {
      if (!path) return null;
      const url = path.startsWith('http') ? path : path;
      return this.cargarImagen(url);
    };
    for (const grupo of seleccion) {
      if (!grupo.items.length) continue;
      if (y > 265) { doc.addPage(); y = 20; }
      doc.setFillColor(...grupo.color); doc.rect(M,y-5,2.5,7,'F');
      doc.setTextColor(20,67,122); doc.setFont('helvetica','bold'); doc.setFontSize(13);
      doc.text(limpiar(grupo.titulo),M+6,y); y += 9;
      for (const item of grupo.items) {
        const img = await imagen(item.image);
        const lines = doc.splitTextToSize(limpiar(item.texto), ancho - (img ? 42 : 12));
        const alto = Math.max(img ? 27 : 8, lines.length*5.2+3);
        if (y + alto > 280) { doc.addPage(); y = 20; }
        if (img) {
          const ratio = img.w / img.h, iw = Math.min(34, 34*ratio), ih = Math.min(25, 25/ratio);
          doc.addImage(img.url,'PNG',M+8,y-3,iw,ih);
        }
        doc.setTextColor(45,55,70); doc.setFont('helvetica','normal'); doc.setFontSize(10.5);
        doc.text(lines,M+(img?48:10),y+3); y += alto+4;
      }
      y += 5;
    }
    const pages = doc.getNumberOfPages();
    for(let p=1;p<=pages;p++){doc.setPage(p);doc.setFontSize(8);doc.setTextColor(120,130,145);doc.text('Tu Guía · '+new Date().toLocaleDateString(this.lang)+' · '+p+'/'+pages,W/2,291,{align:'center'});}
    doc.save('Itinerario_'+d.id+'.pdf');
  };

  cargarMetadata();
})();
