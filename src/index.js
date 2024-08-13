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
}

const list = new LinkedList();
list.prepend(5);
list.prepend(2);
list.prepend(6);
console.log(list.list);
list.append(4);
list.append(2);
list.append(8);

console.log(list.size());
console.log(list.head());
console.log(list.tail());
