'use strict';

const SLList = require('./lib/linked-list.js');
const zipLists = require('./llZip/ll-zip.js');

// let list = new SLList();
// console.log(list);

// list.insert(5).insert(1).insert(8);

// list.append(99);
// list.insertBefore(99, 123);
// list.insertAfter(99, 1000);
// list.insertAfter(5, 596);
// list.insertBefore(5, 8008);
// list.insertBefore(8, 789);

// list.delete(8008);
// list.append(8734);
// console.log(list.length());
// list.toString();
// console.log(list.kthFromEnd(4));
// console.log(list.includes(8));

const first = new SLList().append('AAA').append('BBB').append('CCC').append('DDD').append('EEE');
const second = new SLList().append('111').append('222').append('333').append('444').append('555').append('666').append('777');

let zip = zipLists(first, second);
zip.toString();

console.log(zip.length());
