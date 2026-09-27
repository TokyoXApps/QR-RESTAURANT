// Firebase Configuration using Firebase Compat SDK (Works on file:// protocol and static hosting)
(function() {
  const firebaseConfig = {
    apiKey: "AIzaSyDfyS3QrbDWoMQBTLrcYXwvTNLuJ_-0W8A",
    authDomain: "qr-restaurant-b7638.firebaseapp.com",
    databaseURL: "https://qr-restaurant-b7638-default-rtdb.firebaseio.com",
    projectId: "qr-restaurant-b7638",
    storageBucket: "qr-restaurant-b7638.firebasestorage.app",
    messagingSenderId: "28097192413",
    appId: "1:28097192413:web:4ad6c81140b2e28e2d1634",
    measurementId: "G-LGZ6MSQ81R"
  };

  if (typeof firebase !== 'undefined') {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    window.db = firebase.database();
  }
})();
