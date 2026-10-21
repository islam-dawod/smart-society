'use strict';
/* Interactions for Smart Society. All copy is read from the active language
   (window.SS / window.I18N) at render time, so switching language updates
   every panel, row and result in place. */

const t = k => SS.t(k);
const panel = document.getElementById('content-panel');
const content = document.getElementById('dialog-content');
let activeAudience = 'school';
let returnFocus = null;
let currentView = null; // {type:'program'|'guide'|'info'|'request', key}

/* ---- Content builders (return an HTML string for #dialog-content) ------ */
function programHtml(key){
 const p = SS.data().programs[key];
 const rows = p.sessions.map((s,i)=>`<li><b>${String(i+1).padStart(2,'0')}</b><span><strong>${s[0]}</strong><br>${s[1]}</span></li>`).join('');
 return `<h2 id="dialog-title">${p.title}</h2><p>${p.intro}</p>`+
  `<h3>${t('dialog.whatLearn')}</h3><ol class="schedule">${rows}</ol>`+
  `<h3>${t('dialog.whatKnow')}</h3><p>${p.closing}</p>`+
  `<p class="dialog-note">${t('dialog.programNote')}</p>`+
  `<button class="action" type="button" data-dialog-request="${key}">${t('dialog.requestBtn')} <span class="arrow" aria-hidden="true">↙</span></button>`;
}
function guideHtml(key){
 const g = SS.data().guides[key];
 return `<h2 id="dialog-title">${g.title}</h2>${g.body}<p class="dialog-note">${t('guide.note')}</p>`;
}
function infoHtml(key){
 const g = SS.data().infos[key];
 return `<h2 id="dialog-title">${g.title}</h2>${g.body}`;
}
function requestHtml(type){
 const partner = type==='partnership';
 return `<h2 id="dialog-title">${partner?t('request.partnerTitle'):t('request.activityTitle')}</h2>`+
  `<p>${t('request.intro')}</p>`+
  `<form class="request-form">`+
  `<label for="request-org">${t('request.org')} <span>${t('request.optional')}</span><input id="request-org" name="organization" maxlength="100" autocomplete="organization"></label>`+
  `<label for="request-type">${t('request.type')}<select id="request-type" name="type">`+
  `<option value="school">${t('request.optSchool')}</option>`+
  `<option value="community">${t('request.optCommunity')}</option>`+
  `<option value="business">${t('request.optBusiness')}</option>`+
  `<option value="partnership">${t('request.optPartner')}</option></select></label>`+
  `<label for="request-goal">${t('request.goal')} <span>${t('request.required')}</span><textarea id="request-goal" name="goal" required maxlength="2000" placeholder="${t('request.goalPh')}"></textarea></label>`+
  `<p class="request-note">${t('request.note')}</p>`+
  `<button class="action" type="submit">${t('request.submit')} <span aria-hidden="true">↓</span></button>`+
  `<p class="request-success" role="status" hidden></p></form>`;
}
function viewContent(view){
 const d = SS.data();
 switch(view.type){
  case 'program': return {label:d.programs[view.key].label, html:programHtml(view.key)};
  case 'guide':   return {label:d.guides[view.key].label,   html:guideHtml(view.key)};
  case 'info':    return {label:d.infos[view.key].label,    html:infoHtml(view.key)};
  case 'request': return {label:view.key==='partnership'?t('request.partnerLabel'):t('request.activityLabel'), html:requestHtml(view.key)};
 }
 return {label:'',html:''};
}

/* ---- Panel open / refresh / close ------------------------------------- */
function wireContent(){
 const dlgReq = content.querySelector('[data-dialog-request]');
 if(dlgReq) dlgReq.addEventListener('click',()=>showView({type:'request',key:dlgReq.dataset.dialogRequest}));
 const form = content.querySelector('form.request-form');
 if(form) wireForm(form);
}
function showView(view){
 currentView = view;
 const {label,html} = viewContent(view);
 const active = document.activeElement;
 const origin = panel.contains(active) ? returnFocus : active;
 if(returnFocus?.isConnected) returnFocus.setAttribute('aria-expanded','false');
 returnFocus = origin;
 const section = origin?.closest('section');
 const host = section?.id==='finder' ? section.querySelector('.finder-grid') : section || document.querySelector('.footer');
 host.appendChild(panel);
 document.getElementById('dialog-label').textContent = label;
 content.innerHTML = html;
 panel.hidden = false;
 panel.dataset.tone = origin?.dataset.program || origin?.dataset.guide || (view.type==='info'?view.key:activeAudience);
 if(origin?.matches('button')){origin.setAttribute('aria-expanded','true');origin.setAttribute('aria-controls','content-panel');}
 wireContent();
 const heading = content.querySelector('h2');
 if(heading){heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});}
 requestAnimationFrame(()=>panel.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'nearest'}));
}
function refreshView(){ // re-render the open panel in the current language, without moving focus
 if(panel.hidden || !currentView) return;
 const {label,html} = viewContent(currentView);
 document.getElementById('dialog-label').textContent = label;
 content.innerHTML = html;
 wireContent();
}
function closeContent(){
 panel.hidden = true;
 if(returnFocus?.isConnected){returnFocus.setAttribute('aria-expanded','false');returnFocus.focus({preventScroll:true});}
}
panel.querySelector('.detail-close').addEventListener('click',closeContent);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden){e.preventDefault();closeContent();}});

/* ---- Request form behaviour (file download, nothing leaves the device) - */
function wireForm(form){
 form.elements.type.value = currentView.key==='partnership' ? 'partnership' : (SS.data().programs[currentView.key] ? currentView.key : 'community');
 form.addEventListener('submit',e=>{
  e.preventDefault();
  if(!form.reportValidity()) return;
  const data = new FormData(form);
  const selected = form.elements.type.selectedOptions[0].textContent;
  const text = `${t('request.fileTitle')}\n\n`+
   `${t('request.fileOrg')}: ${data.get('organization')||t('request.fileNotSpecified')}\n`+
   `${t('request.fileDomain')}: ${selected}\n\n`+
   `${t('request.filePromote')}\n${data.get('goal')}\n\n`+
   `${t('request.fileFooter')}\n`;
  const blob = new Blob(['﻿'+text],{type:'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url; link.download = 'smart-society-request.txt';
  document.body.appendChild(link); link.click(); link.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
  const status = form.querySelector('[role=status]');
  status.hidden = false; status.textContent = t('request.success');
 });
}

/* ---- Finder ----------------------------------------------------------- */
function updateFinder(){
 const p = SS.data().programs[activeAudience];
 document.getElementById('result-title').textContent = p.title;
 document.getElementById('result-copy').textContent = p.copy;
 document.getElementById('result-length').textContent = p.length;
 document.getElementById('result-output').textContent = p.output;
}

/* ---- Static rows + guide cards (filled from the active language) ------- */
function setField(el,obj){
 const path = el.dataset.pf || el.dataset.gf;
 const val = path.split('.').reduce((o,k)=>o&&o[k],obj);
 if(val==null) return;
 if(String(val).indexOf('<')>-1) el.innerHTML = val; else el.textContent = val;
}
function renderStatic(){
 document.querySelectorAll('.program-row').forEach(row=>{
  const p = SS.data().programs[row.dataset.program];
  row.querySelectorAll('[data-pf]').forEach(el=>setField(el,p));
 });
 document.querySelectorAll('[data-guide]').forEach(btn=>{
  const g = SS.data().guides[btn.dataset.guide];
  btn.querySelectorAll('[data-gf]').forEach(el=>setField(el,g));
 });
}

/* ---- Event wiring ----------------------------------------------------- */
document.querySelectorAll('[data-program]').forEach(b=>b.addEventListener('click',()=>showView({type:'program',key:b.dataset.program})));
document.querySelectorAll('[data-guide]').forEach(b=>b.addEventListener('click',()=>showView({type:'guide',key:b.dataset.guide})));
document.querySelectorAll('[data-info]').forEach(b=>b.addEventListener('click',()=>showView({type:'info',key:b.dataset.info})));
document.querySelectorAll('[data-request]').forEach(b=>b.addEventListener('click',()=>showView({type:'request',key:b.dataset.request})));
document.querySelectorAll('[data-audience]').forEach(b=>b.addEventListener('click',()=>{
 activeAudience = b.dataset.audience;
 document.querySelectorAll('[data-audience]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
 updateFinder();
}));
document.getElementById('result-button').addEventListener('click',()=>showView({type:'program',key:activeAudience}));

/* Language switcher */
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>SS.setLang(b.dataset.lang)));
SS.onChange(()=>{ renderStatic(); updateFinder(); refreshView(); });

/* Mobile menu */
const menuButton = document.querySelector('.menu-toggle');
const menu = document.getElementById('mobile-menu');
menuButton.addEventListener('click',()=>{const expanded=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!expanded));menu.hidden=expanded;});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.hidden=true;menuButton.setAttribute('aria-expanded','false');}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){menu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.focus();}});

/* Initial render */
renderStatic();
updateFinder();
