(() => {
 const catalog=document.querySelector('.catalog-section');if(!catalog)return;
 const tabs=[...catalog.querySelectorAll('[role="tab"]')];
 const panels=[...catalog.querySelectorAll('.catalog-group')];
 const scroller=catalog.querySelector('.catalog-scroll');
 function select(tab,focus=false){
  tabs.forEach(t=>{const selected=t===tab;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1});
  panels.forEach(panel=>{panel.hidden=panel.id!==tab.getAttribute('aria-controls')});
  scroller.scrollTop=0;if(focus)tab.focus();
 }
 tabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>select(tab));
  tab.addEventListener('keydown',event=>{
   let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;
   if(event.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;
   if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;
   if(next!==undefined){event.preventDefault();select(tabs[next],true)}
  });
 });
 catalog.classList.add('catalog-enhanced');select(tabs[0]);
})();
