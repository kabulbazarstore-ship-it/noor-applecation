// NOOR | Service Worker — offline first
const CACHE_NAME='noor-2026-1405-v2';
const APP_FILES=[
  "./sw.js",
  "./Joushan-kabir.html",
  "./README-NOOR.md",
  "./aamal-rajab.html",
  "./aamal-shaban.html",
  "./abu-hamza.html",
  "./adil.html",
  "./afiat.html",
  "./ahd.html",
  "./amal.html",
  "./aman.html",
  "./arafeh.html",
  "./aramesh.html",
  "./arrafni.html",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/icon-72.png",
  "./athan.html",
  "./calendaar.html",
  "./calendar.html",
  "./chaharshanbeh.html",
  "./core/noor-global.js",
  "./core/noor-navigation.js",
  "./core/noor-offline.css",
  "./core/noor-unified.js",
  "./dafe-bala.html",
  "./daily.html",
  "./data/azkar.js",
  "./data/calendar.js",
  "./data/duas.js",
  "./data/events.js",
  "./data/hadith.js",
  "./data/imam-zaman.js",
  "./data/munajat.js",
  "./data/quran.js",
  "./data/sahife.js",
  "./data/speeches.js",
  "./data/taqibat.js",
  "./data/verses.js",
  "./data/ziyarat.js",
  "./delnishin-azan.mp3",
  "./doa.html",
  "./doshanbeh.html",
  "./estegatheh-zaman.html",
  "./fal-estekhareh.html",
  "./farag.html",
  "./faraj.html",
  "./favorite.html",
  "./fonts/Amiri-Bold.ttf",
  "./fonts/Amiri-Regular.ttf",
  "./fonts/AmiriQuran.ttf",
  "./fonts/DejaVuSans.ttf",
  "./fonts/DejaVuSerif.ttf",
  "./fonts/NotoKufiArabic-Bold.ttf",
  "./fonts/NotoKufiArabic-Regular.ttf",
  "./fonts/NotoNaskhArabic-Bold.ttf",
  "./fonts/NotoNaskhArabic-Regular.ttf",
  "./fonts/noor-fonts.css",
  "./gham.html",
  "./goshayesh.html",
  "./hadith.html",
  "./hajat-short.html",
  "./hajat-tawakkul.html",
  "./hajat.html",
  "./icon.svg",
  "./iftitah.html",
  "./imam.html",
  "./index.html",
  "./istighfar-rajab.html",
  "./jomeh.html",
  "./joushan-saghir.html",
  "./kumayl.html",
  "./list.html",
  "./makarim.html",
  "./manifest.json",
  "./moazzenzadeh.mp3",
  "./moghatel.html",
  "./monajat.html",
  "./mujir.html",
  "./munajat-shabaniyeh.html",
  "./murtaza-fatimi.mp3",
  "./nimah-shaban.html",
  "./nudbah.html",
  "./omreh-rajab.html",
  "./panjshanbeh.html",
  "./quran.html",
  "./quran.json",
  "./rajab-dua.html",
  "./ramadan.html",
  "./rizgh.html",
  "./sahifeh.html",
  "./sajjadieh7.html",
  "./salamati-zaman.html",
  "./samaat.html",
  "./samat.html",
  "./script.js",
  "./seshanbeh.html",
  "./shab.html",
  "./shaban-dua.html",
  "./shabaniyeh.html",
  "./shanbeh.html",
  "./shokr.html",
  "./sobh.html",
  "./sobhdel.mp3",
  "./sokan.html",
  "./sokhan.html",
  "./style.css",
  "./tahvil.html",
  "./taqibat.html",
  "./tavakol.html",
  "./tavassol-zaman.html",
  "./tavassol.html",
  "./view.html",
  "./yastashir.html",
  "./yekshanbeh.html",
  "./zekr.html",
  "./ziyarat.html"
];

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE_NAME);
    for(const url of APP_FILES){
      try{await cache.add(url);}catch(e){console.warn('NOOR cache skipped:',url,e);}
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin) return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE_NAME);
    const cached=await cache.match(req,{ignoreSearch:false});
    if(cached) return cached;
    try{
      const fresh=await fetch(req);
      if(fresh.ok) cache.put(req,fresh.clone()).catch(()=>{});
      return fresh;
    }catch(e){
      if(req.mode==='navigate'){
        const fallback=await cache.match('./index.html');
        if(fallback)return fallback;
      }
      return new Response('NOOR offline: file unavailable',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
    }
  })());
});

self.addEventListener('message',event=>{
  if(event.data && event.data.type==='NOOR_SHOW_NOTIFICATION'){
    const d=event.data;
    event.waitUntil(self.registration.showNotification(d.title||'نــــور | NOOR',{body:d.body||'',icon:'./assets/icon-192.png',badge:'./assets/icon-72.png',dir:'rtl',lang:'fa',tag:d.tag||'noor'}));
  }
});
