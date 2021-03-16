'use strict';

function zipLists(list1, list2) {
  // let len1 = list1.length();
  // let len2 = list2.length();
  // let newList = new SLList();

  // let count;

  // if(len1 < len2) {
  //   count = len1;
  // } else {
  //   count = len2;
  // }

  // let superList = list1.head;
  // let current2 = list2.head;


  // while(count > 0) {

  //   count --;

  //   newList.append(superList.value);
  //   superList = superList.next;

  //   newList.append(current2.value);
  //   current2 = current2.next;

  // }

  // if(superList) {

  //   while(superList) {
  //     newList.append(superList.value);
  //     superList = superList.next;
  //   }

  // } else {

  //   while (current2) {
  //     newList.append(current2.value);
  //     current2 = current2.next;
  //   }

  // }

  // return newList;

  if(!list2.head || !list1.head ){
    return false;
  } 

  let firstCurrent = list1.head;
  let secondCurrent = list2.head;
  let firstNext;
  let secondNext;

  while(firstCurrent && secondCurrent) {

    firstNext = firstCurrent.next;
    secondNext = secondCurrent.next;

    // secondCurrent.next = firstNext;
    // firstCurrent.next = secondCurrent;

    if (firstNext){
      secondCurrent.next = firstNext;
      firstCurrent.next = secondCurrent;
    }

    else if(firstNext === null) {
      break;
    }


    firstCurrent = firstNext;
    secondCurrent = secondNext;
  }

  if(secondCurrent) {
    firstCurrent.next = secondCurrent;
  }

  list2.head = secondCurrent;

  return list1;

}

module.exports = zipLists;
