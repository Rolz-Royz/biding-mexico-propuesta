import { url, arrow } from '../config.mjs';

export function HomeInsights() {
  return `<section class="section wrap home-insights">
    <div class="insights-heading"><h2>Conocimiento que ayuda a tomar mejores decisiones.</h2><p>Un espacio para entender la prevención, la seguridad logística y la continuidad de negocio.</p></div>
    <div class="home-insights-grid"><figure class="insights-photo"><img src="${url('assets/hero-mobile.webp')}" width="1000" height="563" loading="lazy" alt="Carretera y transporte de carga como contexto de la seguridad logística"><figcaption>Seguridad en transporte</figcaption></figure>
    <div class="insights-editorial"><span class="status-label">Línea editorial propuesta · Contenidos en preparación</span><div class="editorial-topics"><h3>Seguridad en transporte</h3><h3>Prevención de pérdidas</h3><h3>Continuidad de negocio</h3></div><a class="text-link" href="${url('insights/')}">Conocer el espacio de Insights ${arrow}</a></div></div>
  </section>`;
}
