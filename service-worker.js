const CACHE_NAME = "safety-commands-hub-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",

 "./icons/PPE1.png",
"./icons/material.png",
"./icons/crane2.png",
"./icons/harness.png",
"./icons/fire.png",
"./icons/elec.png",
"./icons/steel.png",
"./icons/alert2.png",
"./icons/like2.png"

  "./videos/bannervideo2.mp4",
  
"./MP3/helmet.mp3",
"./MP3/คาดสายรัดคาง.mp3",
"./MP3/safety_harness.mp3",
"./MP3/hook.mp3",
"./MP3/safety_shoe.mp3",
"./MP3/ใส่หน้ากาก.mp3",
"./MP3/ใส่ถุงมือ.mp3",

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
"./MP3/เครื่องไม่ได้ระดับ.mp3",

"./MP3/ระวังหัว.mp3",
"./MP3/ระวังมือ.mp3",
"./MP3/ระวังตก.mp3",
"./MP3/ห้ามปีนราวกั้นกระเช้า.mp3",
"./MP3/จิ๊บบูมยกขึ้น.mp3",
"./MP3/จิ๊บบูมลดลง.mp3",
"./MP3/บูมหลักยกขึ้น.mp3",
"./MP3/บูมหลักลดลง.mp3",
"./MP3/เดินหน้า.mp3",
"./MP3/ถอยหลัง.mp3",
"./MP3/เลี้ยวซ้าย.mp3",
"./MP3/เลี้ยวขวา.mp3",
"./MP3/ลดกระเช้า.mp3",
"./MP3/ยกกระเช้า.mp3",
"./MP3/เกี่ยวตะขอด้วย.mp3",

"./MP3/ระวังของล้ม.mp3",
"./MP3/พื้นเอียง.mp3",
"./MP3/สูงเกินไป.mp3",
"./MP3/บล็อกไม้.mp3",
"./MP3/ใช้เชือกมัด.mp3",
"./MP3/ใช้ตาข่ายคลุม.mp3",
"./MP3/วางแนวตั้ง.mp3",
"./MP3/วางแนวนอน.mp3",
"./MP3/จัดของให้เรียบร้อย.mp3",

"./MP3/เกี่ยวตะขอ.mp3",
"./MP3/ติดตั้งเชือกช่วยชีวิต.mp3",
"./MP3/ล็อกบันไดให้แน่น.mp3",
"./MP3/บันไดชำรุด.mp3",
"./MP3/จับบันไดไว้.mp3",
"./MP3/ขยับบันไดใหม่.mp3",
"./MP3/อย่าเอื้อมตัว.mp3",

"./MP3/ถังดับเพลิง.mp3",
"./MP3/ผู้ควบคุมไฟ.mp3",
"./MP3/ผ้าคลุมไฟ.mp3",
"./MP3/เครื่องตรวจวัดก๊าซ.mp3",
"./MP3/ติดตั้งแนวกั้นไฟ.mp3",
"./MP3/ระวังประกายไฟ.mp3",
"./MP3/ไฟไหม้.mp3",
"./MP3/ย้ายวัสดุไวไฟ.mp3",
"./MP3/ต้องมีการระบายอากาศ.mp3",
"./MP3/ใช้ใบตัดให้ถูกต้อง.mp3",
"./MP3/ห้ามเอียงถังแก๊ส.mp3",
"./MP3/อุปกรณ์ป้องกันไฟย้อนกลับ.mp3",

"./MP3/ใบอนุญาตทำงาน.mp3",
"./MP3/ตัดไฟ.mp3",
"./MP3/ติดตั้งสายดิน.mp3",
"./MP3/สายไฟชำรุด.mp3",
"./MP3/ระวังไฟช็อต.mp3",
"./MP3/วางอุปกรณ์ให้ห่างจากน้ำ.mp3",
"./MP3/ไฟรั่ว.mp3",
"./MP3/ฉนวนป้องกันไฟฟ้า.mp3",

"./MP3/ติดตั้งเชือกช่วยชีวิตก่อนยกบีมขึ้น.mp3",
"./MP3/ติดตั้งตาข่ายนิรภัย.mp3",
"./MP3/ติดตั้งราวกั้น.mp3",
"./MP3/เกี่ยวตะขอนิรภัย.mp3",
"./MP3/ระวังอุปกรณ์ตก.mp3",
"./MP3/ขันน็อตให้แน่น.mp3"
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
