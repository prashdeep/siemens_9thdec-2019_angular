const  { Subject } = require('rxjs');

const subject = new Subject();
 
subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});
subject.subscribe({
  next: (v) => console.log(`observerC: ${v}`)
});
 
subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
 
// Logs:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2