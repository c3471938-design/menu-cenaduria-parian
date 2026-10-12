# La Milpa · Una noche en El Parián

Adaptación del diseño aprobado, conservando fotografías, platillos y distribución. Nueva identidad inspirada en El Parián de San Pedro Tlaquepaque: barro rojo, verde de cantina, dorados, motivos de azulejo y flor vectorial. Tipografía local Manrope y recursos incluidos.

## Abrir y publicar

Abre index.html. Mantén styles.css, parian.css, config.js, experience.js y la carpeta assets a su lado. Funciona localmente sin internet; los enlaces de WhatsApp y mapa sí requieren conexión.

Sube estos archivos a la raíz del repositorio GitHub, activa GitHub Pages y usa la URL pública para el QR. Página pública: https://c3471938-design.github.io/menu-cenaduria-parian/ . El ZIP contiene solo los archivos para publicar; no incluye scripts de prueba ni respaldos.

## Música en vivo

Sección propia y enlace desde la portada y navegación. Viernes y sábado son la programación de ejemplo solicitada, NO días verificados del negocio. El sitio los identifica como programación propuesta, con días y horarios por confirmar. Confirma agenda, artistas, horarios y cualquier cargo antes de publicar. No se inventan horarios ni artistas.

Guitarra vectorial original, trazo progresivo, notas flotantes, cuerdas y barras animadas. No se reproduce audio. Animaciones de fotos, sellos y secciones, inclinación ligera de la foto con puntero en computadora y progreso de lectura. Respeta movimiento reducido. Sin JavaScript conserva todo el contenido.

## WhatsApp, ubicación y datos

Completa whatsapp en config.js con el número internacional real, solo dígitos. Hasta entonces el botón dirige al aviso pendiente. Al configurarlo abre WhatsApp con un mensaje precargado; el cliente confirma su envío. Confirma cobertura y envío antes de publicar.

El enlace al mapa apunta al conjunto El Parián, no a un local individual. Sustitúyelo por el enlace exacto del negocio cuando lo tengas. La ubicación del negocio en El Parián fue indicada por el usuario.

La Milpa sigue siendo un nombre de concepto. Edita precios, ingredientes, porciones y nombre en index.html; los platillos, porciones y precios se adaptaron a las tres imágenes de la carta proporcionadas por el usuario. Los precios de alcohol no aparecen en ellas y se muestran como Consultar. Confirma los datos antes de presentar la página como carta real.

## Referencia del lugar

El Parián, Turismo Guadalajara: https://tequiero.guadalajara.gob.mx/lugares/el-parian

## Imágenes

Fotos de referencia de Pexels; no de los productos reales del negocio:

- Pozole: https://www.pexels.com/photo/pozole-soup-in-a-bowl-14179986/
- Cerveza — Engin Akyurt: https://www.pexels.com/photo/close-up-shot-of-a-glass-of-beer-6223373/
- Tostadas — Amar Preciado: https://www.pexels.com/photo/mexican-tostadas-served-on-plate-11025876/
- Enchiladas: https://www.pexels.com/photo/enchiladas-in-hatch-red-chili-sauce-12097599/
- Flan — Teresa Jang: https://www.pexels.com/photo/spanish-flan-dessert-18089587/
- Margarita: https://www.pexels.com/photo/a-person-holding-a-glass-cup-with-margarita-7603330/

Licencia: https://www.pexels.com/license/

Fuentes de Google Fonts incluidas, con licencias SIL Open Font License en assets/fonts. La flor y guitarra son gráficos SVG creados para esta propuesta, no reproducciones de una pieza artesanal específica.

## Validación

Navegador a 320, 390, 430, 768 y 1440 px: fotos cargadas, títulos sin recortes, sin desbordamiento horizontal, navegación a música en vivo. Lectura sin JavaScript, movimiento reducido, días de agenda y enlace de WhatsApp configurable comprobados. No se enviaron mensajes en las pruebas.


## Carta completa compacta

El apartado Menú completo reúne 21 opciones con precio y espacio para fotografía, en las categorías Antojitos, Bebidas, Postres y Con alcohol. Muestra hasta tres opciones por página, con Anterior y Siguiente, sin desplazamiento interno. Las fotos disponibles se muestran; las restantes tienen un espacio Foto, sin representar otro producto. Añade sus imágenes y edita las filas directamente en index.html. Conserva también menu.js al abrir o publicar.

Validación: cinco tamaños de pantalla, categorías y precios, navegación con teclado, lectura sin JavaScript y altura total de la página igual o menor que la versión anterior.




## Contactos y carta proporcionada

WhatsApp flotante sin número, según lo solicitado. Los iconos Instagram y Facebook no enlazan a cuentas externas mientras sus campos en config.js estén vacíos. Completa whatsapp, instagram y facebook para conectar los contactos del negocio. Hasta entonces los botones dirigen al aviso de contacto pendiente.

Se copiaron tamaños MI/CH/M/G de pozole sin expandir abreviaturas no confirmadas; órdenes de enchiladas, tacos y flautas; precio por pieza de tostadas, gorditas, sopes y quesadillas; bebidas y los postres helados y jericillas. La receta y el precio de muestra anteriores se retiraron. No se inventan precios para alcohol.

Las fotografías existentes de platillos siguen siendo referencias; las fotos no disponibles tienen un espacio preparado. Los postres muestran una ilustración de sobremesa en lugar de presentar la antigua foto de flan como jericilla.



## Lectura y contactos depurados

Carta con hasta tres platillos por página: botones Anterior y Siguiente, categorías y contador. No requiere desplazar una lista interna. Las cantidades y precios se presentan en columnas separadas.

WhatsApp flotante con texto visible también en celular, mayor prioridad visual y respeto del área segura. Sin número, como se solicitó. Iconos sociales discretos y separados en el pie; icono SVG de moto para reparto.

Verificado: cinco tamaños de pantalla, paginación completa, cambio de categoría y botón WhatsApp visible por encima de los demás elementos.


## Widget de ubicación preparado

El mapa permanece como un espacio ilustrativo hasta recibir la ubicación exacta. No hay llamadas a Google Maps mientras mapsQuery esté vacío.

En config.js, mapsQuery acepta una dirección completa, nombre inequívoco de local o coordenadas latitud,longitud. mapsAddress es el texto de dirección visible. Con esos datos, map.js crea el mapa integrado con carga diferida y convierte Cómo llegar en un enlace de indicaciones. Mantén map.js junto a los demás archivos al publicar.

Si recibes un enlace corto de Maps, primero confirma la dirección o coordenadas a las que corresponde; no coloques el enlace corto como consulta del mapa.
