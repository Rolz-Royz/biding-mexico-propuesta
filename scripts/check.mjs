import {readFile,access} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {pages} from '../src/pages.mjs';
import {base} from '../src/config.mjs';
const titles=new Set();
for(const page of pages){const html=await readFile('docs/'+page.path+'index.html','utf8');assert.equal((html.match(/<h1[ >]/g)||[]).length,1,page.path+' needs one h1');assert(!titles.has(page.title),'Duplicate title');titles.add(page.title);assert(html.includes('noindex,nofollow'));assert(html.includes('https://bidingmexico.com/login.aspx'));assert(html.includes('Resources/privacidad.pdf'));assert(html.includes('Resources/nodisc.pdf'));for(const [,href]of html.matchAll(/(?:href|src)="([^"]+)"/g)){if(!href.startsWith(base+'/'))continue;let file='docs/'+href.slice(base.length+1).split(/[?#]/)[0];if(file.endsWith('/'))file+='index.html';await access(file);}}
console.log(`PASS: ${pages.length} pages, unique titles, single H1, local links/assets, original portal/legal links, proposal noindex.`);
