/* NOOR | global offline bootstrap */
(function(){
  'use strict';
  const THEME_KEY='noor_theme';
  const NOOR_FONT_SCALE='noor_font_scale';
  function applyFontScale(){
    const n=parseFloat(localStorage.getItem(NOOR_FONT_SCALE)||'1');
    const scale=Math.max(.85,Math.min(1.45,Number.isFinite(n)?n:1));
    document.documentElement.style.setProperty('--noor-font-scale',String(scale));
    document.documentElement.style.fontSize=(16*scale)+'px';
  }
  function applyTheme(){
    const t=localStorage.getItem(THEME_KEY);
    if(t==='dark') document.documentElement.classList.add('noor-dark');
    else document.documentElement.classList.remove('noor-dark');
  }
  try{ applyTheme(); applyFontScale(); }catch(e){}
  if('serviceWorker' in navigator){
    window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js',{scope:'./'}).catch(()=>{}));
  }
  window.addEventListener('pageshow',()=>{ try{applyTheme();applyFontScale();}catch(e){} });
})();
