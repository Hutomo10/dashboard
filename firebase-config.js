// firebase-config.js
export const firebaseConfig = {
  apiKey: "AIzaSyBrTrDzjpLJcp4M0sFlRYKzg6tfuWHBSTw",
  authDomain: "esp32-health-f1015.firebaseapp.com",
  databaseURL: "https://esp32-health-f1015-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "esp32-health-f1015",
  storageBucket: "esp32-health-f1015.firebasestorage.app",
  messagingSenderId: "834956472248",
  appId: "1:834956472248:web:53ff03433c34f3770ee94d"
};

// Ambang batas untuk pengecekan kesehatan (dipakai di debug.html dan dashboard.html)
export const THRESHOLDS = {
  staleMs: 15000,        // lebih dari ini dianggap OFFLINE
  rssiWarn: -67,         // dBm
  rssiFail: -75,
  freeHeapWarn: 20000,   // byte
  freeHeapFail: 10000,
  minHeapWarn: 15000,
  tempWarn: 60,          // °C
  tempFail: 70,
  reconnectWarn: 1,
  reconnectFail: 5
};
