import {mkdir,writeFile,cp} from 'node:fs/promises';
import {pages} from '../src/pages.mjs';
import {Layout} from '../src/components/layout.mjs';
import {url} from '../src/config.mjs';
await mkdir('docs',{recursive:true});
await cp('public','docs',{recursive:true});
for(const page of pages){await mkdir('docs/'+page.path,{recursive:true});await writeFile('docs/'+page.path+'index.html',Layout(page));}
await writeFile('docs/404.html',Layout({title:'Página no encontrada',description:'La página solicitada no está disponible.',body:`<section class="page-hero wrap"><p class="eyebrow">404</p><h1>Retomemos el camino.</h1><p>No encontramos esta página.</p><a class="button" href="${url()}">Volver al inicio ↗</a></section>`}));
await writeFile('docs/.nojekyll','');
await writeFile('docs/robots.txt','User-agent: *\nDisallow: /\n');
console.log(`Built ${pages.length} static pages. Proposal intentionally noindex; no form backend.`);
