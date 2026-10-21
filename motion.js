'use strict';
(() => {
  const root=document.documentElement;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const fine=matchMedia('(hover: hover) and (pointer: fine)');
  const toggle=document.querySelector('.motion-toggle');
  const art=document.querySelector('.hero-art');
  let preference=null;
  try{const saved=localStorage.getItem('ss-motion');if(saved==='off'||saved==='on')preference=saved;}catch{}
  let enabled=false;
  let artVisible=true;
  let frame=0;
  let lastTime=0;
  let lastPaint=0;
  let width=0,height=0;
  const canvas=document.createElement('canvas');canvas.className='network-canvas';canvas.setAttribute('aria-hidden','true');art.prepend(canvas);
  const ctx=canvas.getContext('2d');
  const colors=['198,255,58','83,220,235','175,154,255','255,156,134'];
  const points=Array.from({length:matchMedia('(max-width: 600px)').matches?20:32},(_,i)=>({x:.08+Math.random()*.84,y:.08+Math.random()*.84,vx:(Math.random()-.5)*.000022,vy:(Math.random()-.5)*.000022,color:colors[i%colors.length]}));
  let pointer=null;
  function draw(delta=0){
    if(!ctx||!width||!height)return;
    ctx.clearRect(0,0,width,height);
    const reach=Math.min(110,width*.27);
    points.forEach(p=>{p.x+=p.vx*delta;p.y+=p.vy*delta;if(p.x<.04||p.x>.96){p.vx=-p.vx;p.x=Math.max(.04,Math.min(.96,p.x));}if(p.y<.04||p.y>.96){p.vy=-p.vy;p.y=Math.max(.04,Math.min(.96,p.y));}});
    for(let i=0;i<points.length;i++){
      const a=points[i],x=a.x*width,y=a.y*height;
      for(let j=i+1;j<points.length;j++){const b=points[j],bx=b.x*width,by=b.y*height;const distance=Math.hypot(x-bx,y-by);if(distance<reach){ctx.strokeStyle=`rgba(${a.color},${(1-distance/reach)*.24})`;ctx.lineWidth=.7;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(bx,by);ctx.stroke();}}
      if(pointer){const d=Math.hypot(x-pointer.x,y-pointer.y);if(d<140){ctx.strokeStyle=`rgba(${a.color},${(1-d/140)*.4})`;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(pointer.x,pointer.y);ctx.stroke();}}
      ctx.fillStyle=`rgba(${a.color},.6)`;ctx.beginPath();ctx.arc(x,y,1.25,0,Math.PI*2);ctx.fill();
    }
  }
  function tick(time){frame=0;if(!enabled||!artVisible||document.hidden)return;if(time-lastPaint>=32){draw(lastTime?Math.min(time-lastTime,70):0);lastTime=time;lastPaint=time;}frame=requestAnimationFrame(tick);}
  function start(){if(enabled&&artVisible&&!document.hidden&&!frame&&ctx){lastTime=0;frame=requestAnimationFrame(tick);}}
  function stop(){if(frame)cancelAnimationFrame(frame);frame=0;lastTime=0;}
  function resize(){const r=art.getBoundingClientRect();width=r.width;height=r.height;const scale=Math.min(devicePixelRatio||1,1.5);canvas.width=Math.round(width*scale);canvas.height=Math.round(height*scale);if(ctx)ctx.setTransform(scale,0,0,scale,0,0);draw();}
  new ResizeObserver(resize).observe(art);
  const track=document.querySelector('.ticker');
  const group=document.createElement('div');group.className='ticker-group';
  while(track.firstChild)group.appendChild(track.firstChild);
  const moving=document.createElement('div');moving.className='ticker-track';moving.appendChild(group);const duplicate=group.cloneNode(true);duplicate.setAttribute('aria-hidden','true');moving.appendChild(duplicate);track.appendChild(moving);
  const reveals=[...document.querySelectorAll('.about-grid>*,.section-heading,.program-row,.steps article,.knowledge-list>button,.partner-heading>*,.support-options article,.faq>*,.contact-section>h2')];
  reveals.forEach((el,i)=>{el.classList.add('reveal');el.style.setProperty('--reveal-delay',`${(i%3)*65}ms`);});
  if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.08,rootMargin:'0px 0px -25px 0px'});reveals.forEach(el=>observer.observe(el));const artObserver=new IntersectionObserver(entries=>{artVisible=entries[0].isIntersecting;if(artVisible)start();else stop();},{rootMargin:'100px'});artObserver.observe(art);}else reveals.forEach(el=>el.classList.add('is-visible'));
  const progress=document.createElement('div');progress.className='reading-progress';progress.setAttribute('aria-hidden','true');document.body.prepend(progress);
  const steps=document.querySelector('.steps');let scrollQueued=false;
  function updateScroll(){scrollQueued=false;const distance=document.documentElement.scrollHeight-innerHeight;root.style.setProperty('--read-progress',distance>0?Math.min(1,Math.max(0,scrollY/distance)):0);if(enabled){const rect=steps.getBoundingClientRect();const flow=Math.max(0,Math.min(1,(innerHeight*.85-rect.top)/(innerHeight*.65)));steps.style.setProperty('--flow-progress',flow);}}
  addEventListener('scroll',()=>{if(!scrollQueued){scrollQueued=true;requestAnimationFrame(updateScroll);}},{passive:true});addEventListener('resize',updateScroll,{passive:true});updateScroll();
  art.addEventListener('pointermove',e=>{if(!enabled||!fine.matches)return;const r=art.getBoundingClientRect();pointer={x:e.clientX-r.left,y:e.clientY-r.top};art.style.setProperty('--pointer-x',((pointer.x/r.width)-.5)*2);art.style.setProperty('--pointer-y',((pointer.y/r.height)-.5)*2);},{passive:true});
  art.addEventListener('pointerleave',()=>{pointer=null;art.style.setProperty('--pointer-x',0);art.style.setProperty('--pointer-y',0);});
  document.querySelectorAll('.program-row,.knowledge-list>button,.action').forEach(el=>{el.addEventListener('pointermove',e=>{if(!enabled||!fine.matches)return;const r=el.getBoundingClientRect();el.style.setProperty('--spot-x',`${e.clientX-r.left}px`);el.style.setProperty('--spot-y',`${e.clientY-r.top}px`);if(el.classList.contains('action')){el.style.setProperty('--magnet-x',`${((e.clientX-r.left)/r.width-.5)*5}px`);el.style.setProperty('--magnet-y',`${((e.clientY-r.top)/r.height-.5)*5}px`);}},{passive:true});el.addEventListener('pointerleave',()=>{el.style.setProperty('--magnet-x','0px');el.style.setProperty('--magnet-y','0px');});});
  const result=document.querySelector('.finder-result');document.querySelectorAll('[data-audience]').forEach(b=>b.addEventListener('click',()=>{if(!enabled)return;result.classList.remove('is-changing');void result.offsetWidth;result.classList.add('is-changing');}));result.addEventListener('animationend',()=>result.classList.remove('is-changing'));
  const L=k=>(window.SS?window.SS.t(k):k); // labels follow the active language
  function apply(){enabled=!reduce.matches&&preference!=='off';root.classList.toggle('motion-enabled',enabled);root.classList.toggle('motion-off',!enabled);toggle.setAttribute('aria-pressed',String(enabled));toggle.setAttribute('aria-label',enabled?L('motion.pauseAria'):L('motion.playAria'));toggle.innerHTML=enabled?`${L('motion.pause')} <span aria-hidden="true">Ⅱ</span>`:`${L('motion.play')} <span aria-hidden="true">▶</span>`;toggle.disabled=reduce.matches;if(reduce.matches){toggle.textContent=L('motion.reduced');toggle.setAttribute('aria-label',L('motion.reducedAria'));}if(enabled)start();else{stop();pointer=null;draw();}updateScroll();}
  toggle.addEventListener('click',()=>{preference=enabled?'off':'on';try{localStorage.setItem('ss-motion',preference);}catch{}apply();});reduce.addEventListener('change',apply);document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else start();});
  if(window.SS&&SS.onChange)SS.onChange(apply); // relabel the motion toggle when language changes
  apply();resize();
})();
