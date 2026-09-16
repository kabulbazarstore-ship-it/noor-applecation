/* NOOR | Navigation — same-origin, history-aware back button */
(function(){
  'use strict';
  const APP='/';
  function sameOriginRef(){
    try { return document.referrer && new URL(document.referrer).origin===location.origin ? document.referrer : ''; }
    catch(e){ return ''; }
  }
  function goBack(){
    const ref=sameOriginRef();
    if(ref){ history.back(); return; }
    if(history.length>1){ history.back(); return; }
    if(!/\/index\.html?$/.test(location.pathname) && !location.pathname.endsWith('/')) location.assign('index.html');
  }
  window.NoorBack=goBack;
  window.goBack=window.goBack||goBack;
  document.addEventListener('click',function(e){
    const el=e.target.closest && e.target.closest('#btnBack,[data-noor-back],.noor-back,.back,.back-btn');
    if(!el) return;
    e.preventDefault(); e.stopImmediatePropagation(); goBack();
  },true);
})();
