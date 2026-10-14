/* Night mode: remembers the choice, defaults to light. Loaded in <head> so there is no flash. */
(function(){
  var d=document.documentElement,K='sandeep-theme';
  function get(){try{return localStorage.getItem(K)}catch(e){return null}}
  function save(v){try{localStorage.setItem(K,v)}catch(e){}}
  var t=get();if(t!=='dark'&&t!=='light')t='light';
  d.setAttribute('data-theme',t);
  var MOON='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
  var SUN='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  function meta(){var m=document.querySelector('meta[name=theme-color]');if(m)m.setAttribute('content',d.getAttribute('data-theme')==='dark'?'#14130f':'#fdfcf6')}
  function make(){
    var b=document.createElement('button');b.type='button';b.className='tm';
    function paint(){
      var dk=d.getAttribute('data-theme')==='dark';
      b.setAttribute('aria-pressed',dk?'true':'false');
      b.setAttribute('aria-label',dk?'Switch to light mode':'Switch to night mode');
      b.title=dk?'Light mode':'Night mode';
      b.innerHTML=dk?SUN:MOON;meta();
    }
    b.addEventListener('click',function(){
      var n=d.getAttribute('data-theme')==='dark'?'light':'dark';
      d.setAttribute('data-theme',n);save(n);paint();
    });
    paint();return b;
  }
  document.addEventListener('DOMContentLoaded',function(){
    var nav=document.querySelector('.nav div'),b=make();
    if(nav&&nav.lastElementChild)nav.insertBefore(b,nav.lastElementChild);
    else{b.className+=' fl';document.body.appendChild(b)}
  });
})();
