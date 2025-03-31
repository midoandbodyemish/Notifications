importScripts("https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/11.5.0/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyAJzK9G2MJieXHmeeHUBdULdDt8NwyxyKQ",
    authDomain: "khedma-fd534.firebaseapp.com",
    projectId: "khedma-fd534",
    storageBucket: "khedma-fd534.firebasestorage.app",
    messagingSenderId: "186556101962",
    appId: "1:186556101962:web:de1945009a23d99cf83db3",
    measurementId: "G-JNTZRQ2W4S"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// استقبال الإشعارات في الخلفية
messaging.onBackgroundMessage(payload => {
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: "/icon.png"
    });
});
