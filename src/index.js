class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.list = null;
  }

  append = (value, list = this.list) => {
    if (list.nextNode) {
      this.append(value, list.nextNode);
    } else {
      list.nextNode = new Node(value);
    }
  };

  prepend = (value) => {
    const newNode = new Node(value, this.list);
    this.list = newNode;
  };

  size = () => {
    let length = 1;
    if (!this.list) return 0;
    let currentNode = this.list.nextNode;
    while (currentNode) {
      length += 1;
      currentNode = currentNode.nextNode;
    }
    return length;
  };

  head = () => {
    if (!this.list) return null;
    return this.list.value;
  };
  tail = (list = this.list) => {
    if (!list.nextNode) return list.value;
    return this.tail(list.nextNode);
  };

  at = (index, list = this.list) => {
    if (index === 0) return list.value;
    if (index < 0 || !list.nextNode) {
      alert("Invalid index");
    } else {
      return this.at(index - 1, list.nextNode);
    }
  };

  pop = (list = this.list) => {
    if (!list) {
      console.log("empty list");
      return null;
    }
    const first = list.nextNode;
    if (!first) {
      const element = list.value;
      this.list = null;
      return element;
    }
    const second = first.nextNode;
    if (!second) {
      list.nextNode = null;
      return first;
    } else {
      return this.pop(list.nextNode);
    }
  };

  contains = (value, list = this.list) => {
    if (list.value === value) return true;
    if (!list.nextNode) return false;
    return this.contains(value, list.nextNode);
  };

  find = (value, list = this.list) => {
    let index = 0;
    if (value === list.value) return index;
    let next = list.nextNode;
    while (next) {
      index += 1;
      if (value === next.value) return index;
      next = next.nextNode;
    }
    return null;
  };
}

const list = new LinkedList();
list.prepend(5);
list.prepend(2);
list.prepend(6);
console.log(list.list);
list.append(4);
list.append(2);
list.append(8);

console.log(`size: [${list.size()}]`);
console.log(`head: [${list.head()}]`);
console.log(`tail: [${list.tail()}]`);
console.log(`at: [${list.at(5)}]`);
console.log(`at: [${list.at(0)}]`);
console.log(`contains: `, list.contains(8));
console.log(`contains: `, list.contains(6));
console.log(`contains: `, list.contains(4));
console.log(`contains: `, list.contains(-2));
console.log(`contains: `, list.contains(10));

console.log(`find: `, list.find(8));
console.log(`find: `, list.find(6));
console.log(`find: `, list.find(4));
console.log(`find: `, list.find(-2));
console.log(`find: `, list.find(10));

/*
console.log(`pop: `, list.pop());
console.log(`pop: `, list.pop());
console.log(`pop: `, list.pop());
console.log(`pop: `, list.pop());
console.log(`pop: `, list.pop());
console.log(`pop: `, list.pop());
*/
console.log(list.list);
