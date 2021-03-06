'use strict';

const SLList = require('./lib/linked-list.js');

let list = new SLList();
console.log(list);

list.insert(5).insert(1).insert(8);

list.toString();
console.log(list.includes(8));
