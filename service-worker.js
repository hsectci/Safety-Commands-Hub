const CACHE_NAME = "safety-commands-hub-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",

  "./icons/PPE1.png",
  "./icons/crane2.png",
  "./icons/alert2.png",
  "./icons/like2.png",

  "./videos/bannervideo2.mp4",

  "./MP3/helmet.mp3",
  "./MP3/safety_harness.mp3",
  "./MP3/hook.mp3",
  "./MP3/safety_shoe.mp3",
  "./MP3/dangerous.mp3",
  "./MP3/step_away.mp3",
  "./MP3/stop1.mp3",
  "./MP3/stop_doing.mp3",
  "./MP3/watchout.mp3",
  "./MP3/goodjob.mp3",
  "./MP3/Awesome.mp3",
  "./MP3/thankyou.mp3",
  "./MP3/cooperation.mp3",
  "./MP3/กั้นพื้นที่.mp3",
  "./MP3/อย่ายืนข้างใต้ของที่ยก.mp3",
  "./MP3/ใช้เชือกคุมทิศทาง.mp3",
  "./MP3/มัดใหม่มันไม่แน่น.mp3",
  "./MP3/ยกบูม.mp3",
  "./MP3/นอนบูม.mp3",
  "./MP3/ยึดบูม.mp3",
  "./MP3/หดบูม.mp3",
  "./MP3/ใช้รอกใหญ่.mp3",
  "./MP3/ใช้รอกเล็ก.mp3",
  "./MP3/เลื่อนรอกขึ้น.mp3",
  "./MP3/เลื่อนรอกลง.mp3",
  "./MP3/ขยับรอกขึ้นช้าๆ.mp3",
  "./MP3/ขยับรอกลงช้าๆ.mp3",
  "./MP3/เลื่อนรอกไปทางซ้าย.mp3",
  "./MP3/เลื่อนรอกไปทางขวา.mp3",
  "./MP3/เครื่องขัดข้อง.mp3",
  "./MP3/น้ำหนักเกิน.mp3",
  "./MP3/เครื่องไม่ได้ระดับ.mp3"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );

  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );

  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
