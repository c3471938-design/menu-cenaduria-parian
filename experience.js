(() => {
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const sections=[...document.querySelectorAll('section[id]')];
 const links=[...document.querySelectorAll('.indice a')];
 if(!reduced.matches&&'IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.08});
  document.querySelectorAll('.section-heading,.cabecera,.signature,.platillo,.extras-wrap,.beer-stage,.foto-brindis,.flan,.delivery-action,.music-copy,.music-art').forEach((el,i)=>{el.classList.add('reveal');el.style.setProperty('--delay',`${el.classList.contains('signature')?i%3*70:0}ms`);observer.observe(el)});
  document.documentElement.classList.add('motion-ready');
 }
 const config=window.MILPA_CONFIG||{};
 const number=String(config.whatsapp||'').replace(/\D/g,'');
 if(number.length>=10&&number.length<=15){
  document.querySelectorAll('[data-whatsapp]').forEach(link=>{link.href=`https://wa.me/${number}?text=${encodeURIComponent(config.message||'Hola, quiero hacer un pedido a domicilio.')}`;link.target='_blank';link.rel='noopener noreferrer'});
  document.getElementById('contacto-pendiente').textContent='Confirma tu pedido, cobertura y entrega con nuestro equipo.';
 }
 let pending=false;const progress=document.querySelector('.reading-progress');
 function update(){
  const height=document.documentElement.scrollHeight-innerHeight;
  progress.style.transform=`scaleX(${height>0?Math.min(1,Math.max(0,scrollY/height)):0})`;
  let active;
  sections.forEach(section=>{if(section.getBoundingClientRect().top<innerHeight*.4)active=section});
  links.forEach(link=>{if(active&&link.hash==='#'+active.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')});pending=false;
 }
 addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(update)}},{passive:true});addEventListener('resize',update);
 reduced.addEventListener('change',()=>{if(reduced.matches)document.documentElement.classList.remove('motion-ready')});update();
 const photo=document.querySelector('.hero-photo');
 if(photo&&matchMedia('(hover: hover) and (pointer: fine)').matches){
  photo.addEventListener('pointermove',event=>{
   if(reduced.matches)return;
   const box=photo.getBoundingClientRect();
   const x=(event.clientX-box.left)/box.width-.5;
   const y=(event.clientY-box.top)/box.height-.5;
   photo.style.transform=`rotate(2deg) rotateY(${x*4}deg) rotateX(${-y*4}deg)`;
  });
  photo.addEventListener('pointerleave',()=>{photo.style.transform=''});
 }
})();
