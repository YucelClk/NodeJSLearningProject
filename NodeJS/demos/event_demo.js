const EventEmitter = require('events');
// create class
class MyEmitter extends EventEmitter { }
// Init object
const myEmitter = new MyEmitter();
// Event lsitener
myEmitter.on('event', () => console.log('Event tetiklendi'));
// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');