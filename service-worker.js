// تثبيت الـ Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/icon.png',
        // أضف الملفات الأخرى التي تريد تخزينها في الكاش
      ]);
    })
  );
});

// تفعيل الـ Service Worker
self.addEventListener('activate', function(event) {
  // Code to manage updates or clean up old caches if needed
});

// جلب الطلبات من الكاش
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

// الاستماع إلى أحداث الدفع (push)
self.addEventListener('push', function(event) {
  const options = {
    body: 'هذا تذكير بذكر الله.',
    icon: '/icon.png',
    tag: 'dhikr-reminder'
  };
  event.waitUntil(
    self.registration.showNotification('أذكار المسلم', options)
  );
});

// الاستماع إلى النقر على الإشعارات
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});