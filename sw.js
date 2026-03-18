const CACHE_NAME = 'cms-cache-v3';

const urlsToCache = [
  './',
  './students.html',
  './messages.html',
  './dashboard.html',
  './tasks.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './photos/image.png',
  './style/header.css',
  './style/page.css',
  './style/table.css',
  './style/modal.css',
  './script/students-array.js',
  './script/student.js',
  './script/addStudent.js',
  './script/editStudent.js',
  './script/modal-behavoiur.js',
  './script/header-behaviour.js',
  './script/render-table.js',
  './script/check-all-checkboxes.js',
  './script/delete-student.js',
  './script/burger-menu.js',
  './script/add-event-listeners.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Відкрито кеш');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});