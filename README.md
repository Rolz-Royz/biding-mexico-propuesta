# Biding México · Propuesta de rediseño

Propuesta independiente de sitio corporativo. No es el sitio oficial ni modifica sus sistemas.

Sitio: https://rolz-royz.github.io/biding-mexico-propuesta/

## Desarrollo

Requiere Node.js 20 o superior. No necesita instalar dependencias.

```sh
npm run build
npm test
npm run dev
```

Vista local: http://127.0.0.1:4173/biding-mexico-propuesta/

- `src/components/`: componentes compartidos que producen HTML durante el build.
- `src/content.mjs`: contenido editable de cinco servicios y cinco sectores.
- `src/pages.mjs`: composición de las 16 páginas.
- `src/config.mjs`: URL base y configuración compartida.
- `public/assets/`: CSS, JavaScript, imágenes y fuente local.
- `scripts/`: generación, verificación y servidor de preview.
- `docs/`: sitio estático generado y publicado en GitHub Pages.

## Publicación

GitHub Pages publica desde `main`, carpeta `/docs`. Después de editar: ejecutar build y pruebas, confirmar los archivos fuente y `docs`, y hacer push. No se requieren secretos ni servicios externos en runtime. `BASE_PATH` y `SITE_ORIGIN` permiten adaptar el destino de publicación. No se incluye dominio personalizado.

## Alcance y límites

Incluye Inicio, Nosotros, Servicios, cinco páginas de especialidad, Sectores, cinco páginas sectoriales, Insights y Contacto. Navegación responsive y por teclado, campos etiquetados, metadatos únicos, imágenes WebP y fuente local.

El formulario valida datos de ejemplo y muestra un resultado explícitamente demostrativo. No envía, guarda ni registra información. El botón permanece deshabilitado si no carga JavaScript. No existe backend, CRM, analítica ni autenticación nuevos.

Acceso a Clientes dirige a `https://bidingmexico.com/login.aspx`. Se mantienen enlaces a contacto oficial y a los PDF de privacidad y no discriminación. No se ha probado la autenticación real ni la entrega del formulario oficial.

Insights muestra temas propuestos, no artículos ficticios. La historia y acreditaciones están pendientes de información validada. No se afirma una fecha de fundación ni se inventan clientes o estadísticas.

La propuesta usa `noindex,nofollow` y robots restrictivo. Antes de una publicación oficial: validar contenido y derechos, integrar y probar el backend de contacto, auditar el portal, decidir URLs/301, cambiar origen/canonical, habilitar indexación y añadir datos estructurados de organización verificados. No aplicar redirecciones al dominio actual desde esta propuesta.

## Identidad y recursos

- Logo: archivo original `https://bidingmexico.com/Images/headLogo.png`. Identidad conservada; pertenece a su titular. Uso para esta propuesta de rediseño, sin reclamar propiedad.
- Portada: imagen ilustrativa creada con la herramienta integrada de generación de imágenes de OpenAI. No representa infraestructura, clientes ni empleados reales de Biding. Archivo final `public/assets/hero.webp`, versión móvil `hero-mobile.webp`, social `social.jpg`.
- Prompt de portada: fotografía editorial realista, vista aérea de un tractocamión blanco sin marcas sobre una carretera curva entre montañas semiáridas del norte de México, luz cálida, vegetación oliva, vehículo a la derecha y espacio negativo a la izquierda; sin texto, logos ni efectos futuristas.
- Fotografía logística: Unsplash, recurso `photo-1586528116311-ad8dd3c8310d`, descargado de `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85`. Imagen de contexto, no instalación de Biding. Verificar selección definitiva de fotografía con el cliente. Licencia: https://unsplash.com/license.
- Manrope: Google Fonts, SIL Open Font License; licencia incluida en `public/assets/manrope-LICENSE.txt`.

## Verificación

`npm test` comprueba las 16 páginas, un H1 por página, títulos únicos, presencia de enlaces legales y portal, noindex y existencia de enlaces/recursos locales. QA de navegador: responsive, navegación móvil con Escape, validación de formulario y preselección de servicio. No se afirman métricas de Core Web Vitals ni certificación WCAG.
