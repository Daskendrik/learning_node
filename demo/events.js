const EventEmitter = require('events');

// const emittet = new EventEmitter();

// emittet.on('anything', (data) => {
//   console.log('ON any', data);
// });

// emittet.emit('anything', { a: 1 });

// setTimeout(() => {
//   emittet.emit('anything', { a: 2 });
// }, 1500);

class Dispatcher extends EventEmitter {
  substribe(eventName, cb) {
    console.log('substribe');
    this.on(eventName, cb);
  }

  dispatch(eventName, data) {
    console.log('dispatch');
    this.emit(eventName, data);
  }
}

const dis = new Dispatcher();

dis.substribe('aa', (data) => {
  console.log('ON aa', data);
});

dis.dispatch('aa', { aa: 22 });
