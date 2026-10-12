(() => {
 const catalog=document.querySelector('.catalog-section');if(!catalog)return;
 const track=catalog.querySelector('.catalog-scroll'),cards=[...catalog.querySelectorAll('.catalog-row')],links=[...catalog.querySelectorAll('.catalog-tabs a')];
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const guide=document.createElement('div');guide.className='carta-guide';guide.innerHTML='<span class="carta-direction"><span aria-hidden="true">↔</span> Desliza para explorar</span><span class="carta-meter" aria-hidden="true"><i></i></span><span class="carta-position" aria-live="polite"></span>';track.after(guide);
 cards.forEach((card,i)=>card.dataset.number=String(i+1).padStart(2,'0'));
 function nearest(){const edge=track.getBoundingClientRect().left;let best=Infinity,index=0;cards.forEach((c,i)=>{const d=Math.abs(c.getBoundingClientRect().left-edge);if(d<best){best=d;index=i}});return index}
 function update(){const index=nearest();guide.querySelector('.carta-position').textContent=`${String(index+1).padStart(2,'0')} / ${cards.length}`;links.forEach(a=>a.setAttribute('aria-current',String(a.dataset.category===cards[index].dataset.category)));const max=track.scrollWidth-track.clientWidth;guide.style.setProperty('--progress',`${max>0?11+89*Math.min(1,Math.max(0,track.scrollLeft/max)):100}%`)}
 function go(index,immediate=false){const card=cards[Math.max(0,Math.min(cards.length-1,index))];track.scrollTo({left:track.scrollLeft+card.getBoundingClientRect().left-track.getBoundingClientRect().left,behavior:immediate||reduced.matches?'instant':'smooth'})}
 links.forEach(link=>link.addEventListener('click',e=>{e.preventDefault();go(cards.findIndex(c=>c.dataset.category===link.dataset.category),true)}));
 track.addEventListener('scroll',update,{passive:true});track.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();go(nearest()+(e.key==='ArrowRight'?1:-1))}});
 // Solo el gesto horizontal pertenece a la carta; el vertical sigue siendo del navegador.
 let gesture=null;
 track.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button!==0)return;gesture={id:e.pointerId,x:e.clientX,y:e.clientY,left:track.scrollLeft,horizontal:false,mouse:e.pointerType==='mouse'}});
 track.addEventListener('pointermove',e=>{if(!gesture||e.pointerId!==gesture.id)return;const dx=e.clientX-gesture.x,dy=e.clientY-gesture.y;if(!gesture.horizontal){if(Math.abs(dy)>10&&Math.abs(dy)>Math.abs(dx)){gesture=null;return}if(Math.abs(dx)<10||Math.abs(dx)<=Math.abs(dy))return;gesture.horizontal=true;track.setPointerCapture(e.pointerId);track.classList.add('dragging')}e.preventDefault();track.scrollLeft=gesture.left-dx});
 function end(e){if(!gesture||e.pointerId!==gesture.id)return;const horizontal=gesture.horizontal;gesture=null;track.classList.remove('dragging');if(horizontal)go(nearest())}
 track.addEventListener('pointerup',end);track.addEventListener('pointercancel',e=>{if(gesture?.id===e.pointerId){gesture=null;track.classList.remove('dragging')}});addEventListener('resize',update);catalog.classList.add('catalog-enhanced','catalog-swipe');update();
})();
