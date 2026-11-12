(function(){
  /* Carta: n = nombre, d = ingredientes, p = precios [[etiqueta, valor], ...] */
  var MENU = {
    "Calientes":[
      {note:"Clásicos"},
      {n:"Espresso",d:"Corto e intenso. La base de todo.",p:[["","1.00"]]},
      {n:"Americano",d:"Espresso alargado con agua. Limpio y suave.",p:[["","1.50"]]},
      {n:"Latte",d:"Espresso y leche cremosa.",p:[["","2.00"],["con vainilla o canela","2.50"]]},
      {n:"Cappuccino",d:"Espresso, leche y una corona de crema.",p:[["","2.00"],["con canela o vainilla","2.50"],["caramelo","3.00"]]},
      {n:"Mochaccino",d:"Espresso, leche y cacao al 100% bajo una nube de crema.",p:[["","3.00"]]},
      {n:"Chocolate caliente",d:"El Toddy de siempre, bien caliente.",p:[["","3.00"]]},
      {note:"De autor"},
      {n:"Americano especiado",d:"Clavo, canela en rama y piel de limón. Huele a hogar.",p:[["","2.50"]]},
      {n:"Café bombón",d:"Leche condensada, espresso y crema, por capas.",p:[["","2.50"]]},
      {n:"Café honey ginger",d:"Miel y jengibre fresco: dulce, con un toque picante.",p:[["","3.00"]]},
      {n:"Chocolate bombón",d:"Chocolate, leche condensada y café.",p:[["","3.00"]]},
      {n:"Chai latte",d:"Té chai especiado con leche y crema.",p:[["","3.00"]]},
      {n:"Matcha latte",d:"Matcha y leche. Suave y verde.",p:[["","2.50"]]}
    ],
    "Fríos":[
      {note:"Cold brew de 24 horas, servido por capas."},
      {n:"Ice coffee",d:"Cold brew de 24 horas sobre hielo.",p:[["","2.00"],["con leche","2.50"]]},
      {n:"Ice tea coffee",d:"Cold brew con limón. El más refrescante.",p:[["","2.50"]]},
      {n:"Ice coffee de sabor",d:"Cold brew con leche y chocolate o caramelo.",p:[["","3.50"]]},
      {n:"Affogato",d:"Espresso caliente sobre helado.",p:[["","3.50"]]},
      {n:"Frappuccino",d:"Cremoso, dulce y bien frío.",p:[["","4.00"]]}
    ],
    "De la casa":[
      {note:"Nuestras recetas de autor. Todas se pueden pedir sin azúcar o sin leche."},
      {n:"Haven ice coffee",d:"Nuestra firma: jamaica, té de canela y cold brew con leche. ♡ Va bien con Torta Red Velvet.",p:[["","4.00"]]},
      {n:"Kofuku",d:"«Felicidad» en japonés. Naranja y miel sobre cold brew, con nuez moscada. ♡ Va bien con Torta de Chocolate Doble.",p:[["","4.00"]]},
      {n:"Kokonatt",d:"Coco, canela y leche condensada con cold brew. Tropical y cremoso. ♡ Va bien con Galleta Craquelada.",p:[["","4.00"]]},
      {n:"Furu",d:"Parchita y frutos rojos con cold brew y leche. Frutal y fresco. ♡ Va bien con Brownie con Helado.",p:[["","4.50"]]}
    ],
    "Matcha":[
      {n:"Orange matcha",d:"Matcha sobre jugo de naranja.",p:[["","4.00"]]},
      {n:"Ice milk matcha",d:"Matcha, leche y crema.",p:[["","4.50"]]},
      {n:"Ice infusión matcha",d:"Matcha, té y leche con hielo.",p:[["","4.00"]]}
    ],
    "Tés":[
      {n:"Té negro",d:"",p:[["caliente","1.00"],["frío","1.50"]]},
      {n:"Té verde",d:"",p:[["caliente","1.00"],["frío","1.50"]]},
      {n:"Té chai",d:"",p:[["caliente","1.00"],["frío","1.50"]]},
      {n:"Té frutos amarillos",d:"",p:[["caliente","1.00"],["frío","1.50"]]},
      {n:"Té frutos rojos",d:"",p:[["caliente","1.00"],["frío","1.50"]]},
      {n:"Nestea",d:"",p:[["frío","2.50"]]}
    ],
    "Postres":[
      {note:"Hechos para acompañar tu café. Junto a cada uno te sugerimos la bebida que mejor le va."},
      {n:"Torta de chocolate doble",d:"Doble chocolate, para los que no se conforman con poco. ♡ Va bien con Kofuku.",p:[["","5.00"]]},
      {n:"Torta red velvet terciopelo",d:"Miga suave y aterciopelada. El clásico rojo de la casa. ♡ Va bien con Haven Ice Coffee.",p:[["","5.00"]]},
      {n:"Brownie con helado tailandés",d:"Brownie y helado tailandés: el contraste perfecto. ♡ Va bien con Furu.",p:[["","5.00"]]},
      {n:"Waffle con helado",d:"Dorados y esponjosos, con helado. Pídelos con frutas extra. ♡ Va bien con Latte de canela.",p:[["","5.00"]]},
      {n:"Pie de limón / parchita",d:"Fresco y ácido. Elige tu fruta. ♡ Va bien con Té verde.",p:[["","4.00"]]},
      {n:"Galleta craquelada",d:"Crujiente por fuera, suave por dentro. ♡ Va bien con Kokonatt.",p:[["","2.00"]]},
      {n:"Galletas Chips Ahoy",d:"Las de siempre, para mojar en tu café. ♡ Va bien con Latte.",p:[["","2.00"]]},
      {n:"Mochis",d:"Suaves y elásticos. Un bocado de Japón. ♡ Va bien con Ice Milk Matcha.",p:[["","3.50"]]},
      {n:"Galletas de matcha",d:"Con el sabor verde y delicado del matcha. ♡ Va bien con Matcha Latte.",p:[["","3.50"]]},
      {n:"Sándwich de crema",d:"Relleno de crema y fresas. Suave, ligero y fresco. ♡ Va bien con Chai Latte.",p:[["","3.50"]]}
    ],
    "Salados":[
      {note:"Para el hambre de media mañana o de media tarde, siempre con su café al lado."},
      {n:"Sándwich Haven",d:"Extra queso y tocineta crujiente. El favorito de la casa. ♡ Va bien con Haven Ice Coffee.",p:[["","4.00"]]},
      {n:"Sándwich clásico",d:"Jamón y queso. El que nunca falla. ♡ Va bien con Cappuccino.",p:[["","3.00"]]},
      {n:"Sándwich pesto",d:"Con el toque herbal y fresco del pesto. ♡ Va bien con Ice Tea Coffee.",p:[["","4.00"]]},
      {n:"Sándwich primavera",d:"Jamón, queso, tomate y lechuga. Fresco y completo. ♡ Va bien con Ice Coffee.",p:[["","4.00"]]},
      {n:"Waffles salados",d:"Dorados por fuera, salados y para quedarse. ♡ Va bien con Americano.",p:[["","4.00"]]}
    ]
  };
  var tabs=document.getElementById('tabs'), list=document.getElementById('list');
  function render(cat){
    list.innerHTML='';
    MENU[cat].forEach(function(it,i){
      var li=document.createElement('li'); li.style.setProperty('--i',i);
      if(it.note){li.className='cat-note';li.textContent=it.note;list.appendChild(li);return}
      li.className='item';
      li.innerHTML='<div class="row"><h3></h3><span class="dots"></span><span class="price"></span></div>'+(it.d?'<p></p>':'');
      li.querySelector('h3').textContent=it.n;
      if(it.d) li.querySelector('p').textContent=it.d;
      var pr=li.querySelector('.price');
      it.p.forEach(function(x){
        var sp=document.createElement('span'); sp.className='pr';
        if(x[0]){var sm=document.createElement('small'); sm.textContent=x[0]; sp.appendChild(sm)}
        sp.appendChild(document.createTextNode('$'+x[1])); pr.appendChild(sp);
      });
      list.appendChild(li);
    });
    Array.prototype.forEach.call(tabs.children,function(b){var s=b.dataset.c===cat;b.setAttribute('aria-selected',String(s));b.tabIndex=s?0:-1});
  }
  Object.keys(MENU).forEach(function(c){
    var b=document.createElement('button'); b.className='tab'; b.type='button'; b.setAttribute('role','tab');
    b.dataset.c=c; b.textContent=c; b.addEventListener('click',function(){render(c)}); tabs.appendChild(b);
  });
  render('Calientes');
  /* Pestañas con flechas del teclado */
  tabs.addEventListener('keydown',function(e){
    var d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0; if(!d) return;
    var all=tabs.children, i=Array.prototype.indexOf.call(all,document.activeElement);
    var n=all[(i+d+all.length)%all.length]; e.preventDefault(); render(n.dataset.c); n.focus();
  });

  /* Lightbox de la galería */
  var lb=document.getElementById('lb'), big=document.getElementById('big'), cap=document.getElementById('lbcap');
  document.getElementById('gal').addEventListener('click',function(e){
    var b=e.target.closest('.fr'); if(!b) return;
    var cs=getComputedStyle(b);
    big.style.setProperty('--sz',cs.getPropertyValue('--sz').trim()||'cover');
    big.style.setProperty('--pos',cs.getPropertyValue('--pos').trim()||'center');
    cap.textContent=b.dataset.cap||'';
    if(lb.showModal){lb.showModal()}else{lb.setAttribute('open','')}
  });
  document.getElementById('lbx').addEventListener('click',function(){lb.close()});
  lb.addEventListener('click',function(e){if(e.target===lb)lb.close()});

  /* Estado abierto/cerrado según la hora de Mérida (Caracas) */
  (function(){
    try{
      var parts=new Intl.DateTimeFormat('en-US',{timeZone:'America/Caracas',weekday:'short',hour:'numeric',minute:'numeric',hour12:false}).formatToParts(new Date());
      var g=function(t){return parts.filter(function(p){return p.type===t})[0].value};
      var map={Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6};
      var day=map[g('weekday')], mins=(parseInt(g('hour'),10)%24)*60+parseInt(g('minute'),10);
      var open=day>=1&&day<=6&&mins>=600&&mins<1140;
      var el=document.getElementById('status'), tx=document.getElementById('stTxt');
      var chip=document.querySelector('#days [data-d="'+day+'"]'); if(chip) chip.classList.add('hoy');
      el.classList.add(open?'on':'off');
      if(open) tx.textContent='Abierto ahora · cerramos a las 7:00 pm';
      else if(day>=1&&day<=6&&mins<600) tx.textContent='Cerrado · abrimos hoy a las 10:00 am';
      else if(day===6||day===0) tx.textContent='Cerrado · abrimos el lunes a las 10:00 am';
      else tx.textContent='Cerrado · abrimos mañana a las 10:00 am';
    }catch(e){}
  })();

  var burger=document.getElementById('burger'), nav=document.getElementById('nav');
  function setNav(o){nav.classList.toggle('open',o);burger.setAttribute('aria-expanded',String(o));burger.setAttribute('aria-label',o?'Cerrar menú':'Abrir menú')}
  burger.addEventListener('click',function(){setNav(!nav.classList.contains('open'))});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A')setNav(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('open')){setNav(false);burger.focus()}});
  document.addEventListener('click',function(e){if(!e.target.closest('header.top'))setNav(false)});

  var toast=document.getElementById('toast');
  function say(t){toast.textContent=t;toast.hidden=false;clearTimeout(say.t);say.t=setTimeout(function(){toast.hidden=true},3600)}
  document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault();
    var f=e.target, n=f.nombre.value.trim();
    var dia=f.fecha.value?new Date(f.fecha.value+'T12:00').toLocaleDateString('es-VE',{weekday:'long',day:'numeric',month:'long'}):'';
    var txt='Hola Haven, soy '+n+'. Quisiera reservar para '+f.personas.value+' persona(s)'+
      (dia?' el '+dia:'')+(f.hora.value?' a las '+f.hora.value:'')+'.'+(f.msg.value.trim()?' '+f.msg.value.trim():'');
    var url='https://wa.me/584126438711?text='+encodeURIComponent(txt);
    document.getElementById('out').innerHTML='Si WhatsApp no se abrió, <a href="'+url+'" target="_blank" rel="noopener">toca aquí</a>.';
    say('Abriendo WhatsApp con tu mensaje.');
    window.open(url,'_blank','noopener');
  });
  /* Reserva: no se puede elegir un día pasado ni un domingo */
  var fecha=document.getElementById('fecha'), hoy=new Date();
  fecha.min=hoy.getFullYear()+'-'+('0'+(hoy.getMonth()+1)).slice(-2)+'-'+('0'+hoy.getDate()).slice(-2);
  fecha.addEventListener('input',function(){
    fecha.setCustomValidity(fecha.value&&new Date(fecha.value+'T12:00').getDay()===0?'Los domingos estamos cerrados. Elige de lunes a sábado.':'');
  });

  /* Movimiento: entradas al hacer scroll, enlace activo del menú y pausa de bucles fuera de pantalla */
  if(!('IntersectionObserver' in window)) return;
  var q=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
  if(matchMedia('(prefers-reduced-motion: no-preference)').matches){
    var seen=new IntersectionObserver(function(es){
      es.forEach(function(en){
        if(!en.isIntersecting) return;
        var el=en.target; seen.unobserve(el); el.classList.add('in');
        /* al terminar se quitan las clases para no retrasar los hover propios del elemento */
        if(el.classList.contains('rv')) setTimeout(function(){el.classList.remove('rv','in');el.style.removeProperty('--d')},1500+(parseInt(el.style.getPropertyValue('--d'),10)||0));
      });
    },{threshold:.15,rootMargin:'0px 0px -6% 0px'});
    q('.head,.story .txt,.exp article,.rev,.ticket,.addr,#form').forEach(function(el){
      var i=Array.prototype.indexOf.call(el.parentNode.children,el);
      if(el.matches('.exp article,.rev')) el.style.setProperty('--d',i*90+'ms');
      el.classList.add('rv'); seen.observe(el);
    });
    /* la galería se observa por el contenedor: un fotograma recortado a cero nunca cuenta como visible */
    q('.collage,.gal').forEach(function(el){el.classList.add('asm');seen.observe(el)});
    var loops=new IntersectionObserver(function(es){es.forEach(function(en){en.target.classList.toggle('off',!en.isIntersecting)})});
    q('.hero,.blobs').forEach(function(el){loops.observe(el)});
  }
  var spy=new IntersectionObserver(function(es){
    es.forEach(function(en){
      var a=nav.querySelector('a[href="#'+en.target.id+'"]'); if(!a) return;
      if(en.isIntersecting) a.setAttribute('aria-current','true'); else a.removeAttribute('aria-current');
    });
  },{rootMargin:'-45% 0px -50% 0px'});
  q('main section[id]').forEach(function(s){spy.observe(s)});
})();
