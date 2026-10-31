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
  // Se conserva el generador PDF original de app.js, que ya gestiona el documento completo.
  // La selección visual de planes no debe reemplazar la descarga estable.
  cargarMetadata();
})();