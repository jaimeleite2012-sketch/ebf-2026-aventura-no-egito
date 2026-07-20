const CACHE='jose-palacio-v2.2.1';
const FILES=['./','./index.html','./style-v221.css','./game-v221.css','./questions-v221.js','./app-v221.js','./manifest-v221.webmanifest','./jose-jornada.png','./logo-igreja.png','./icon-192.png','./icon-512.png','./casa-jaco.png','./campo-irmaos.png','./viagem-egito.png','./casa-potifar.png','./prisao.png','./palacio-farao.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))});
