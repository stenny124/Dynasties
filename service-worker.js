const CACHE='dynasties-mechanics-v15';
const STATIC=[
  './index.html',
  './assets/team_blue_soldier.png',
  './assets/team_red_soldier.png',
  './assets/team_blue_archer.png',
  './assets/team_red_archer.png',
  './assets/team_blue_cavalry.png',
  './assets/team_red_cavalry.png',
  './assets/grass_tile.png',
  './assets/gold_icon.png',
  './assets/house_stark_crest.png',
  './assets/house_lannister_crest.png',
  './assets/winterfell.png',
  './assets/casterly_rock.png'
];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(STATIC)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(fetch(e.request).then(r=>{
    const copy=r.clone();
    caches.open(CACHE).then(c=>c.put(e.request,copy));
    return r;
  }).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));
});
