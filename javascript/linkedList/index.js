'use strict';

const SLList = require('./lib/linked-list.js');

let list = new SLList();
console.log(list);

list.insert(5).insert(1).insert(8);

list.append(99);
list.insertBefore(99, 123);
list.insertAfter(99, 1000);
list.insertAfter(5, 596);
list.insertBefore(5, 8008);
list.insertBefore(8, 789);

list.delete(8008);
console.log(list.length());
list.toString();
console.log(list.kthFromEnd(4));
console.log(list.includes(8));
