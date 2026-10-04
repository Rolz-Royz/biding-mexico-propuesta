import { steps } from '../content.mjs';

export function HomeMethodology() {
  const phases = ['Identificar', 'Identificar', 'Prevenir', 'Actuar', 'Actuar'];
  return `<section class="section home-methodology"><div class="wrap">
    <h2>Un proceso claro.<br> Una operación mejor preparada.</h2>
    <div class="home-method-phases" aria-hidden="true"><span>Identificar</span><span>Prevenir</span><span>Actuar</span></div>
    <ol class="home-process">${steps.map(([name, text], i) => `<li><div class="process-node"><span>0${i+1}</span></div><div class="process-copy"><span class="process-phase">${phases[i]}</span><h3>${name}</h3><p>${text}</p></div></li>`).join('')}</ol>
  </div></section>`;
}
