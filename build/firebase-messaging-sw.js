importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: '476551882726' // troque pelo seu sender id
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  // Customize notification here
  var notificationTitle = 'New Message';
  var notificationOptions = {
    body: "new notification",
    icon: '/firebase-logo.png'
  };
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

