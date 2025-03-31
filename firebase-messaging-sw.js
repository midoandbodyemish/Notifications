importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyAJzK9G2MJieXHmeeHUBdULdDt8NwyxyKQ",
    authDomain: "khedma-fd534.firebaseapp.com",
    projectId: "khedma-fd534",
    storageBucket: "khedma-fd534.firebasestorage.app",
    messagingSenderId: "186556101962",
    appId: "1:186556101962:web:3edb278b50948378f83db3",
    measurementId: "G-F6C0180ZDS"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("📩 رسالة واردة:", payload);
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: payload.notification.icon
    });
});
