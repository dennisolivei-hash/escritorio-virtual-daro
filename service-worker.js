// service-worker.js — bem mínimo, só pra satisfazer os requisitos de "app instalável".
// Não guarda nada em cache (o escritório é sempre ao vivo, não faz sentido funcionar offline).

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
