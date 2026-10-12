(() => {
 const config=window.MILPA_CONFIG||{};
 const query=String(config.mapsQuery||'').trim();
 if(!query)return;
 const container=document.getElementById('map-preview');if(!container)return;
 const frame=document.createElement('iframe');
 frame.title='Ubicación de la cenaduría en Google Maps';
 frame.src='https://maps.google.com/maps?q='+encodeURIComponent(query)+'&output=embed';
 frame.loading='lazy';frame.referrerPolicy='no-referrer-when-downgrade';
 frame.allowFullscreen=true;frame.className='google-map-frame';
 container.replaceChildren(frame);
 document.getElementById('map-address').textContent=config.mapsAddress||query;
 document.getElementById('map-status').textContent='Consulta la ruta desde tu ubicación en Google Maps.';
 const link=document.getElementById('map-directions');
 link.href='https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(query);
 link.target='_blank';link.rel='noopener noreferrer';
})();
