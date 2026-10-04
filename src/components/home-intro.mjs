import { url, arrow } from '../config.mjs';

export function HomeIntro() {
  return `<section class="section wrap home-intro">
    <div class="intro-copy">
      <h2>Prevenir comienza<br> por entender el riesgo.</h2>
      <p class="lead">Tu operación es un sistema.<br> Su protección también debe serlo.</p>
      <p>Personas, activos, transporte, seguridad y procesos legales están conectados. En Biding México abordamos el riesgo desde distintas disciplinas para ayudarte a prevenir pérdidas y mantener la continuidad.</p>
      <a class="text-link" href="${url('nosotros/')}">Conoce nuestro enfoque ${arrow}</a>
    </div>
    <figure class="operation-diagram">
      <svg viewBox="0 0 560 410" role="img" aria-labelledby="operation-title operation-desc">
        <title id="operation-title">El riesgo operativo está conectado</title>
        <desc id="operation-desc">Personas, activos, transporte, seguridad y procesos legales se relacionan con la continuidad de la operación. Diagrama conceptual sin datos cuantitativos.</desc>
        <g class="diagram-guides" fill="none">
          <circle cx="280" cy="205" r="140"/>
          <path d="M280 42V365M85 205H475"/>
          <path d="M146 88L414 322M146 322L414 88"/>
        </g>
        <g class="diagram-links" fill="none">
          <path d="M280 95V177M427 155L332 190M388 325L315 230M170 325L245 230M130 155L228 190"/>
          <path d="M280 95L427 155L388 325L170 325L130 155Z"/>
        </g>
        <g class="diagram-junctions"><circle cx="280" cy="95" r="5"/><circle cx="427" cy="155" r="5"/><circle cx="388" cy="325" r="5"/><circle cx="170" cy="325" r="5"/><circle cx="130" cy="155" r="5"/></g>
        <rect class="diagram-core" x="214" y="176" width="132" height="58"/>
        <g class="diagram-labels" text-anchor="middle"><text x="280" y="70">Personas</text><text x="455" y="132">Activos</text><text x="410" y="356">Transporte</text><text x="145" y="356">Seguridad</text><text x="97" y="125">Procesos legales</text></g>
        <text class="diagram-core-label" x="280" y="211" text-anchor="middle">Tu operación</text>
      </svg>
      <figcaption>Una perspectiva integral del riesgo.</figcaption>
    </figure>
  </section>`;
}
