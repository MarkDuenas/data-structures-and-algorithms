'use strict';

const SLList = require('../lib/linked-list.js');

function zipLists(list1, list2) {
  let len1 = list1.length();
  let len2 = list2.length();
  let newList = new SLList();

  let count;

  if(len1 < len2) {
    count = len1;
  } else {
    count = len2;
  }

  let superList = list1.head;
  let current2 = list2.head;


  while(count > 0) {

    count --;

    newList.append(superList.value);
    superList = superList.next;

    newList.append(current2.value);
    current2 = current2.next;

  }

  if(superList) {

    while(superList) {
      newList.append(superList.value);
      superList = superList.next;
    }

  } else {

    while (current2) {
      newList.append(current2.value);
      current2 = current2.next;
    }

  }

  return newList;

}

module.exports = zipLists;
