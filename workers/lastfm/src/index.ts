import { handleRequest, handleSchedule } from './handlers';

addEventListener('fetch', event => {
  event.respondWith(handleRequest());
});

addEventListener('scheduled', event => {
  event.waitUntil(handleSchedule(event));
});
