self.addEventListener("push", function (event) {
    const options = {
        body: event.data ? event.data.text() : "تحديث جديد متاح!",
        icon: "https://k.top4top.io/p_3169bgwkb0.jpg",
        badge: "https://k.top4top.io/p_3169bgwkb0.jpg"
    };
    event.waitUntil(
        self.registration.showNotification("📢 تحديث جديد!", options)
    );
});
