/* Itinerarios diferenciados y selección de recomendaciones para Tu Guía. */
(() => {
  const PLANES = {
    naturaleza: {label:'Naturaleza', re:/parque|bosque|jard[ií]n|playa|isla|cenote|cascad|monta[nñ]a|volc[aá]n|sender|reserva|ecol[oó]g|r[ií]o|laguna|glaciar|valle|mirador|bamb[uú]|desierto|termas|safari|circuito|cerro/i},
    fiesta: {label:'Fiesta nocturna', re:/noche|bar|pub|discotec|club|casino|fiesta|calle|zona|barrio|entretenimiento|show|lounge|rooftop|party|karaoke|mercado/i},
    recorrido: {label:'Recorrido turístico', re:/templo|museo|palacio|castillo|monumento|catedral|iglesia|torre|plaza|hist[oó]ric|arquitect|patrimonio|ruinas|teatro|puente|santuario|centro|coliseo|fortaleza|acrópolis|acropolis/i}
  };
  const META_URL='img/itinerarios.json'; let metadata={}; let metadataPromise;
  const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  const itemId=(dest,tipo,txt)=>norm(dest+'-'+tipo+'-'+txt).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,120);
  async function cargarMetadata(){if(!metadataPromise) metadataPromise=fetch(META_URL+'?v='+Date.now(),{cache:'no-store'}).then(r=>r.ok?r.json():{}).then(x=>metadata=x||{}).catch(()=>metadata={});return metadataPromise;}
  function ruta(dest,tipo,txt,idx,plan){
    const d=metadata[dest.id]||{}, key=itemId(dest.id,tipo,txt), p=d.plans&&d.plans[plan];
    return (d.shared&&d.shared[tipo]&&d.shared[tipo][key])||(p&&p[tipo]&&p[tipo][key])||
      (d[tipo]&&d[tipo][idx])||(d[kindLegacy(tipo)]&&d[kindLegacy(tipo)][idx])||
      (tipo==='destino'?'img/'+dest.img:'');
  }
  function kindLegacy(t){return t==='lugares'?'lugares':t==='comida'?'comida':'hospedaje';}
  function filtrar(items,tipo,plan){
    const arr=(items||[]).map((texto,indice)=>({texto,indice}));
    if(plan==='todas'||tipo!=='lugares') return arr;
    const cfg=PLANES[plan]; return cfg?arr.filter(x=>cfg.re.test(x.texto)):[];
  }
  function tarjeta(dest,tipo,item,pos,plan){
    const label=document.createElement('label');
    label.className='relative overflow-hidden bg-slate-800/80 border border-slate-700 rounded-2xl flex flex-col cursor-pointer hover:border-blue-500 transition';
    const src=ruta(dest,tipo,item.texto,item.indice,plan), input=tipo==='hospedaje'?'radio':'checkbox';
    const img=src?'<img class="w-full h-36 object-cover" alt="" src="'+src.replace(/"/g,'&quot;')+'" onerror="this.remove()">':'';
    label.innerHTML=img+'<div class="p-4 flex gap-3 items-start"><input type="'+input+'" name="seleccion-'+tipo+'" value="'+item.indice+'" '+'checked'+' class="mt-1 accent-blue-500"><span class="text-slate-100 text-sm">'+(pos+1)+'. '+item.texto.replace(/</g,'&lt;').replace(/>/g,'&gt;')+'</span></div>';
    return label;
  }
  function render(dest,tipo,plan){
    const id=tipo==='lugares'?'res-lugares-grid':tipo==='comida'?'res-comida-grid':'res-hotel-grid', box=document.getElementById(id);
    if(!box)return; box.innerHTML='';
    const items=filtrar(dest[tipo],tipo,plan);
    if(!items.length){box.innerHTML='<p class="text-sm text-slate-400 col-span-full rounded-xl border border-slate-700 p-4">No hay recomendaciones de esta categoría clasificadas con suficiente certeza para este plan. No se asignaron elementos al azar.</p>';return;}
    items.forEach((it,i)=>box.appendChild(tarjeta(dest,tipo,it,i,plan)));
    if(tipo!=='lugares'&&plan!=='todas'){
      const note=document.createElement('p');note.className='text-xs text-slate-400 col-span-full';note.textContent='Opciones complementarias del destino; selecciona las que quieras incluir.';box.appendChild(note);
    }
  }
  function elegidos(dest,tipo,plan){
    const id=tipo==='lugares'?'res-lugares-grid':tipo==='comida'?'res-comida-grid':'res-hotel-grid', box=document.getElementById(id);
    if(!box)return [];
    const checks=[...box.querySelectorAll('input:checked')].map(x=>Number(x.value));
    return filtrar(dest[tipo],tipo,plan).filter(x=>checks.includes(x.indice)).map(x=>({texto:x.texto,image:ruta(dest,tipo,x.texto,x.indice,plan)}));
  }
  const original=app.poblarResultadosFinales.bind(app);
  app.poblarResultadosFinales=async function(){
    await cargarMetadata();
    original(); const d=this.estado.destinoSeleccionado, p=this.estado.tipoPlan||'todas';
    render(d,'lugares',p);render(d,'comida',p);render(d,'hospedaje',p);
    const old=document.getElementById('plan-description'); if(old)old.remove();
    const heading=document.querySelector('#screen-6 .text-center h2');
    if(heading){const n=document.createElement('p');n.id='plan-description';n.className='mt-2 text-sm text-blue-300';n.textContent='Plan: '+(PLANES[p]?.label||'Todas las experiencias')+'. Marca las opciones que deseas incluir en tu PDF.';heading.insertAdjacentElement('afterend',n);}
  };
  // PDF personalizado: conserva las selecciones y añade las imágenes de cada recomendación.
  const descargarPDFOriginal = app.descargarPDF.bind(app);
  app.descargarPDF = async function(){
    const jsPDF = window.jspdf && window.jspdf.jsPDF;
    if (!jsPDF) return descargarPDFOriginal();

    try {
      await cargarMetadata();
      const d = this.estado.destinoSeleccionado;
      if (!d) return;

      const plan = this.estado.tipoPlan || 'todas';
      const t = (typeof traducciones !== 'undefined' && traducciones[this.lang]) || {};
      const limpiar = s => String(s == null ? '' : s)
        .replace(/[\\u2018\\u2019]/g, "'").replace(/[\\u201C\\u201D]/g, '"')
        .replace(/[\\u2013\\u2014]/g, '-').replace(/ı/g, 'i').replace(/İ/g, 'I')
        .normalize('NFD').replace(/[\\u0300-\\u036f]/g, '')
        .replace(/[^\\x20-\\xFF]/g, '');

      const grupos = [
        {tipo:'lugares', titulo:t.res_places_title || 'Lugares turísticos recomendados', color:[37,99,180]},
        {tipo:'comida', titulo:t.res_food_title || 'Comidas típicas para probar', color:[220,119,38]},
        {tipo:'hospedaje', titulo:t.res_hotel_title || 'Opciones de hospedaje', color:[22,145,105]}
      ].map(g => ({...g, items:elegidos(d,g.tipo,plan)}));

      const doc = new jsPDF({unit:'mm', format:'a4'});
      const W=210, M=15, ANCHO=W-M*2, LIMITE=282;
      let y=49;
      const cargar = async src => {
        if (!src) return null;
        try { return await this.cargarImagen(src); } catch (_) { return null; }
      };
      const paginaSiHaceFalta = alto => {
        if (y + alto > LIMITE) { doc.addPage(); y=20; }
      };
      const texto = (valor, ancho) => doc.splitTextToSize(limpiar(valor), ancho);

      // Cabecera y logo
      doc.setFillColor(20,67,122);
      doc.rect(0,0,W,39,'F');
      const logo = await cargar('img/Logo.png');
      let xTitulo=M;
      if (logo && logo.w && logo.h) {
        const h=22, w=Math.min(48,h*logo.w/logo.h);
        doc.setFillColor(255,255,255);
        doc.roundedRect(M,8,w+6,h+4,2,2,'F');
        doc.addImage(logo.url,'PNG',M+3,10,w,h);
        xTitulo=M+w+12;
      }
      doc.setTextColor(255,255,255);
      doc.setFont('helvetica','bold'); doc.setFontSize(18);
      const nombre=texto(d.nombre || d.id || 'Itinerario',W-xTitulo-M);
      doc.text(nombre,xTitulo,18);
      doc.setFont('helvetica','normal'); doc.setFontSize(9);
      const clima=document.getElementById('res-clima-badge')?.textContent || '';
      doc.text(texto(clima,W-xTitulo-M),xTitulo,29);
      y=49;

      doc.setFont('helvetica','bold'); doc.setFontSize(11);
      doc.setTextColor(20,67,122);
      const epoca=texto(d.epoca || '',ANCHO);
      if(epoca.length){doc.text(epoca,M,y);y+=Math.max(7,epoca.length*5);}
      if(plan!=='todas'){
        doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(95,105,120);
        doc.text(texto('Plan: '+(PLANES[plan]?.label || plan),ANCHO),M,y);y+=7;
      }

      for (const grupo of grupos) {
        if (!grupo.items.length) continue;
        paginaSiHaceFalta(17);
        doc.setFillColor(...grupo.color);
        doc.roundedRect(M,y-5,2.5,7,1,1,'F');
        doc.setFont('helvetica','bold');doc.setFontSize(12);doc.setTextColor(20,67,122);
        doc.text(texto(grupo.titulo,ANCHO-8),M+6,y);
        y+=9;

        for (let i=0;i<grupo.items.length;i++) {
          const item=grupo.items[i];
          const img=await cargar(item.image);
          const lineas=texto((i+1)+'. '+item.texto, img ? ANCHO-43 : ANCHO-8);
          const altoTexto=Math.max(8,lineas.length*5);
          const altoImagen=img ? 29 : 0;
          const alto=Math.max(altoTexto,altoImagen)+7;
          paginaSiHaceFalta(alto+2);

          doc.setDrawColor(225,230,237);
          doc.setFillColor(249,250,252);
          doc.roundedRect(M,y-4,ANCHO,alto,2,2,'FD');
          let xTexto=M+5;
          if(img && img.w && img.h){
            const maxW=36,maxH=27;
            const escala=Math.min(maxW/img.w,maxH/img.h);
            const w=img.w*escala,h=img.h*escala;
            const ix=M+4+(maxW-w)/2, iy=y-1+(maxH-h)/2;
            doc.addImage(img.url,'PNG',ix,iy,w,h);
            xTexto=M+44;
          }
          doc.setFont('helvetica','normal');doc.setFontSize(9.5);doc.setTextColor(45,55,70);
          doc.text(lineas,xTexto,y+Math.max(3,(altoTexto-5)/2));
          y+=alto+3;
        }
        y+=4;
      }

      const total=doc.getNumberOfPages();
      for(let i=1;i<=total;i++){
        doc.setPage(i);
        doc.setFont('helvetica','normal');doc.setFontSize(8);doc.setTextColor(125,135,148);
        doc.text('Tu Guia - Viaja, Explora, Descubre  |  '+new Date().toLocaleDateString(this.lang)+'  |  '+i+'/'+total,W/2,291,{align:'center'});
      }
      doc.save('Itinerario_'+limpiar(d.id || 'viaje')+'.pdf');
    } catch(error) {
      console.error('No fue posible generar el PDF con imágenes:',error);
      alert('No se pudo generar el PDF con imágenes. Se intentará descargar la versión básica.');
      return descargarPDFOriginal();
    }
  };

  cargarMetadata();
})();