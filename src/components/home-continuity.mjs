import { url, arrow } from '../config.mjs';

export function HomeContinuity() {
  return `<section class="home-continuity">
    <div class="wrap continuity-grid"><div class="continuity-copy">
      <h2>El impacto de un riesgo no termina en el incidente.</h2>
      <p>Un robo, un accidente o una interrupción puede afectar a las personas, el patrimonio y la reputación de tu organización. Prevenir es proteger todo lo que permite seguir operando.</p>
      <a class="text-link light" href="${url('servicios/administracion-riesgos/')}">Pensar en continuidad ${arrow}</a>
    </div><figure class="continuity-photo"><img src="${url('assets/continuity.webp')}" srcset="${url('assets/continuity-mobile.webp')} 720w, ${url('assets/continuity.webp')} 1600w" sizes="(max-width: 767px) 100vw, 55vw" width="1600" height="900" loading="lazy" alt="Imagen ilustrativa de un centro de distribución con actividad al anochecer"></figure></div>
    <div class="wrap continuity-dimensions" aria-label="Dimensiones del impacto"><span>Personas</span><span>Activos</span><span>Reputación</span><strong>Continuidad</strong></div>
  </section>`;
}
