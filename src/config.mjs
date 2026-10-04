export const base = process.env.BASE_PATH ?? '/biding-mexico-propuesta';
export const origin = process.env.SITE_ORIGIN ?? 'https://rolz-royz.github.io';
export const url = (path = '') => `${base}/${path.replace(/^\//, '')}`;
export const official = 'https://bidingmexico.com';
export const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const arrow = '<span aria-hidden="true">↗</span>';
export const cta = (label='Hablar con un especialista', style='', service='') => `<a class="button ${style}" href="${url('contacto/')}${service ? '?servicio='+encodeURIComponent(service) : ''}">${label}${arrow}</a>`;
