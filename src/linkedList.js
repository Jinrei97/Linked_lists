export class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export class LinkedList {
  constructor() {
    this.list = null;
  }

  append = (value, list = this.list) => {
    if (!list) {
      this.list = new Node(value);
    } else if (list.nextNode) {
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
    if (index === 0) return list;
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

  toString = (list = this.list) => {
    if (!list.nextNode) {
      return `( ${list.value} ) => null`;
    } else {
      return `( ${list.value} ) => ` + this.toString(list.nextNode);
    }
  };

  insertAt = (value, index) => {
    if (this.size() - 1 < index || index < 0) {
      return "insertAt => invalid index";
    }
    let searchIndex = 0;
    if (index === searchIndex) {
      this.prepend(value);
      return "insertAt => prepend";
    }
    let next = this.list.nextNode;
    while (next) {
      searchIndex += 1;
      if (index === searchIndex) {
        const newNode = new Node(value, next);
        next = null;
        this.at(index - 1).nextNode = newNode;
        return `inserted ${value} at ${index}`;
      } else {
        next = next.nextNode;
      }
    }
    console.log(this.list);
  };

  removeAt = (index) => {
    if (index < 0 || this.size() - 1 < index)
      return "removeAt => invalid index";
    let previous = this.at(index - 1);
    let toRemove = this.at(index);
    previous.nextNode = toRemove.nextNode;
    return `Removed ${toRemove.value} at index ${index}`;
  };
}
