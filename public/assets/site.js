const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu(){menu?.setAttribute('aria-expanded','false');nav?.classList.remove('is-open');}
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
document.addEventListener('keydown',event=>{if(event.key==='Escape' && menu?.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('.header')) closeMenu();});
nav?.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
matchMedia('(min-width: 1200px)').addEventListener('change',closeMenu);
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const form=document.querySelector('#contact-form');
if(form){
 const selected=new URLSearchParams(location.search).get('servicio');
 const field=form.elements.servicio;
 if([...field.options].some(o=>o.value===selected))field.value=selected;
 form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const status=document.querySelector('#form-status');status.textContent='Demostración completada. No se envió ni se guardó tu información. Para una solicitud real, utiliza el contacto del sitio oficial.';status.classList.add('is-visible');status.focus();});
 form.querySelector('button[type="submit"]').disabled=false;
}
