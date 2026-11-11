const C='vp-v3',A=['./','index.html','manifest.json','icon-192.png','icon-512.png'];
self.oninstall=e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)));self.skipWaiting()};
self.onactivate=e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>clients.claim()));
self.onfetch=e=>{if(e.request.method!='GET')return;e.respondWith(caches.match(e.request).then(m=>{const n=fetch(e.request).then(r=>{if(r.ok){const c=r.clone();caches.open(C).then(x=>x.put(e.request,c))}return r}).catch(()=>m);return m||n}))};
