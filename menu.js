(() => {
 const catalog=document.querySelector('.catalog-section');if(!catalog)return;
 const tabs=[...catalog.querySelectorAll('[role="tab"]')];
 const panels=[...catalog.querySelectorAll('.catalog-group')];
 const scroller=catalog.querySelector('.catalog-scroll');
 const pageSize=3;
 let currentPage=0;
 const paging=document.createElement('div');paging.className='catalog-paging';
 const back=document.createElement('button');back.type='button';back.textContent='← Anterior';
 const status=document.createElement('span');status.setAttribute('aria-live','polite');
 const next=document.createElement('button');next.type='button';next.textContent='Siguiente →';
 paging.append(back,status,next);scroller.after(paging);
 function renderPage(){
  const panel=panels.find(p=>!p.hidden);if(!panel)return;
  const rows=[...panel.querySelectorAll('.catalog-row')];
  const pages=Math.ceil(rows.length/pageSize);currentPage=Math.max(0,Math.min(currentPage,pages-1));
  rows.forEach((row,index)=>{row.hidden=index<currentPage*pageSize||index>=(currentPage+1)*pageSize});
  back.disabled=currentPage===0;next.disabled=currentPage===pages-1;
  status.textContent=`${currentPage*pageSize+1}–${Math.min((currentPage+1)*pageSize,rows.length)} de ${rows.length}`;
 }
 back.addEventListener('click',()=>{currentPage--;renderPage()});
 next.addEventListener('click',()=>{currentPage++;renderPage()});
 function select(tab,focus=false){
  tabs.forEach(t=>{const selected=t===tab;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1});
  panels.forEach(panel=>{panel.hidden=panel.id!==tab.getAttribute('aria-controls')});
  currentPage=0;renderPage();if(focus)tab.focus();
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
