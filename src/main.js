import { Node, LinkedList } from "./linkedList.js";

const list = new LinkedList();
list.append(1);
list.prepend(5);
list.append(9);
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

console.log(`tostring: `, list.toString());

console.log(`insertAt: -2 3`, list.insertAt(-2, 3));
console.log(`tostring: `, list.toString());
console.log(`insertAt: 10 1`, list.insertAt(10, 1));
console.log(`tostring: `, list.toString());
console.log(`insertAt: 10 -1`, list.insertAt(10, -1));
console.log(`tostring: `, list.toString());
console.log(`insertAt: 10 size`, list.insertAt(10, list.size()));
console.log(`tostring: `, list.toString());
console.log(`insertAt: 10 size+1`, list.insertAt(10, list.size() + 1));
console.log(`tostring: `, list.toString());
console.log(`insertAt: 10 size-1`, list.insertAt(10, list.size() - 1));
console.log(`tostring: `, list.toString());
console.log(`insertAt: 7 0`, list.insertAt(7, 0));
console.log(`tostring: `, list.toString());

console.log("\nREMOVE TESTS:");
console.log(`removeAt: -1 => `, list.removeAt(-1));
console.log(`tostring: `, list.toString());
console.log(`removeAt: 5 => `, list.removeAt(5));
console.log(`tostring: `, list.toString());
console.log(`removeAt: size => `, list.removeAt(list.size()));
console.log(`tostring: `, list.toString());
console.log(`removeAt: size-1 => `, list.removeAt(list.size() - 1));
console.log(`tostring: `, list.toString());
console.log(`removeAt: 25 => `, list.removeAt(25));
console.log(`tostring: `, list.toString());
console.log(`removeAt: 2 => `, list.removeAt(2));
console.log(`tostring: `, list.toString());
/*
console.log(`pop: `, list.pop());
console.log(`pop: `, list.pop());
console.log(`pop: `, list.pop());
console.log(`pop: `, list.pop());
console.log(`pop: `, list.pop());
console.log(`pop: `, list.pop());
*/
console.log(list.list);

// altro test
const lista = new LinkedList();

lista.append("dog");
lista.append("cat");
lista.append("parrot");
lista.append("hamster");
lista.append("snake");
lista.append("turtle");
lista.append("sloth");
console.log("ultimo test: ", lista.toString());
