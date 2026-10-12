(() => {
 const catalog=document.querySelector('.catalog-section');if(!catalog)return;
 const tabs=[...catalog.querySelectorAll('[role="tab"]')],panels=[...catalog.querySelectorAll('.catalog-group')];
 const track=catalog.querySelector('.catalog-scroll'),count=catalog.querySelector('.swipe-count'),hint=catalog.querySelector('.swipe-hint');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 function activeRows(){return [...panels.find(p=>!p.hidden).querySelectorAll('.catalog-row')]}
 function updateCount(){const rows=activeRows();const step=rows[0].getBoundingClientRect().width+parseFloat(getComputedStyle(rows[0].parentElement).gap||0);const index=Math.min(rows.length-1,Math.max(0,Math.round(track.scrollLeft/step)));count.textContent=`${index+1} / ${rows.length}`;}
 function select(tab,focus=false){tabs.forEach(t=>{t.setAttribute('aria-selected',String(t===tab));t.tabIndex=t===tab?0:-1});panels.forEach(panel=>{panel.hidden=panel.id!==tab.getAttribute('aria-controls');panel.querySelectorAll('.catalog-row').forEach(row=>row.hidden=false)});track.scrollTo({left:0,behavior:'instant'});updateCount();if(focus)tab.focus()}
 tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>select(tab));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(index+1)%tabs.length;if(e.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();select(tabs[next],true)}})});
 let timer;track.addEventListener('scroll',()=>{clearTimeout(timer);timer=setTimeout(updateCount,120);if(track.scrollLeft>8)hint.classList.add('used')},{passive:true});
 track.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const rows=activeRows();track.scrollBy({left:(rows[0].getBoundingClientRect().width+20)*(e.key==='ArrowRight'?1:-1),behavior:reduced.matches?'instant':'smooth'})}});
 if(matchMedia('(pointer:fine)').matches){let dragging=false,startX,startScroll;track.addEventListener('pointerdown',e=>{if(e.button!==0)return;dragging=true;startX=e.clientX;startScroll=track.scrollLeft;track.setPointerCapture(e.pointerId);track.classList.add('dragging')});track.addEventListener('pointermove',e=>{if(dragging)track.scrollLeft=startScroll-(e.clientX-startX)});const end=()=>{if(dragging){dragging=false;track.classList.remove('dragging');updateCount()}};track.addEventListener('pointerup',end);track.addEventListener('pointercancel',end)}
 addEventListener('resize',updateCount);catalog.classList.add('catalog-enhanced','catalog-swipe');select(tabs[0]);
})();
