/* NOOR | Unified offline utilities */
(function(){
  'use strict';
  window.Noor={
    version:'2026.1405',
    solarMonths:['حمل','ثور','جوزا','سرطان','اسد','سنبله','میزان','عقرب','قوس','جدی','دلو','حوت'],
    faNumber:function(n){return String(n??'').replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]);},
    goBack:function(){return window.NoorBack?window.NoorBack():history.back();}
  };
})();
