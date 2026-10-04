import { services } from '../content.mjs';
import { url, arrow } from '../config.mjs';

export function HomeServices() {
  return `<section class="section home-services" id="servicios"><div class="wrap home-service-grid">
    <div class="home-service-feature">
      <h2>El riesgo se conecta.<br> Nosotros también.</h2>
      <p>Integramos distintas disciplinas para entender lo que está en juego y actuar donde más importa.</p>
      <figure class="analysis-photo"><img src="${url('assets/analysis.webp')}" srcset="${url('assets/analysis-mobile.webp')} 720w, ${url('assets/analysis.webp')} 1200w" sizes="(max-width: 767px) 100vw, 45vw" width="1200" height="800" loading="lazy" alt="Imagen ilustrativa de un análisis de rutas y documentos de operación"><figcaption>Análisis con contexto. Prevención con propósito.</figcaption></figure>
      <a class="text-link" href="${url('servicios/')}">Explorar servicios ${arrow}</a>
    </div>
    <div class="home-service-list">${services.map(s => `<a class="home-service-row" href="${url('servicios/' + s.slug + '/')}"><div><h3>${s.name}</h3><p>${s.short}</p><span class="home-service-cap">${s.capabilities.slice(0,2).join(' · ')}</span></div>${arrow}</a>`).join('')}</div>
  </div></section>`;
}
