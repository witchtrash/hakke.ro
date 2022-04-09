import { handleRequest, handleSchedule } from './handlers';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

addEventListener('scheduled', event => {
  event.waitUntil(handleSchedule());
});
