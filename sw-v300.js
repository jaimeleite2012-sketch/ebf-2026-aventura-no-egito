const CACHE='jose-palacio-v3.0.5-audio-sincronizado';
const FILES=['./','./index.html','./style-v300.css','./game-v300.css','./questions-v300.js','./app-v300.js','./manifest-v300.webmanifest','./jose-jornada.png','./logo-igreja.png','./icon-192.png','./icon-512.png','./capa-whatsapp-v3.png','./casa-jaco.png','./campo-irmaos.png','./viagem-egito.png','./casa-potifar.png','./prisao.png','./palacio-farao.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))});
