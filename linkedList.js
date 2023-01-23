class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	head() {
		return this.head;
	}

	tail() {
		if(!this.head) return null;
		
		let tail = this.head;

		while(tail.next !== null) {
			tail = tail.next;
		}

		return tail;
	}

	size() {
		let size = 0;
		let current = this.head;

		while(current !== null) {
			current = current.next;
			size++;
		}

		return size;
	}

	append(value) {
		let node = new Node(value);

		if(!this.head) {
			this.head = node;
			return this;
		}

		let tail = this.tail();
		tail.next = node;
		return tail;
	}

	prepend(value) {
		let node = new Node(value);

		if(!this.head) {
			this.head = node;
			return this;
		}
		
		node.next = this.head;
		this.head = node;

		return this.head;
	}

	at(index) {
		if(index >= this.size()) return null;
		
		let currentIndex = 0;
		let current = this.head;

		while(currentIndex !== index) {
			current = current.next;
			currentIndex++;
		}

		return current;
	}

	pop() {
		if(this.size() - 1 <= 0) return null;

		let current = this.head;
		let secondToLast;

		while(current.next !== null) {
			secondToLast = current;
			current = current.next;
		}

		secondToLast.next = null;

		return current;
	}

	contains(value) {
		if(!this.size()) return null;

		let current = this.head;

		while(current.data !== value) {
			current = current.next;
			
			if(current === null) return false;
		}

		return true;
	}

	find(value) {
		if(!this.size()) return null;

		let index = 0;
		let current = this.head;

		while(current.data !== value) {
			current = current.next;
			index++;
			
			if(current === null) return null;
		}
		return index;
	}

	toString() {
		let size = this.size()
		let string = '';

		for(let i = 0; i < size; i++) {
			string += this.at(i).data.toString() + ' -> ';
		}

		return string + 'null';
	}

	// EXTRA FUNCTIONS
	insertAt(value, index) {
		if(index >= this.size()) return null;
		if(index === this.size() - 1) return this.append(value);
		if(index === 0) return this.prepend(value);

		let currentIndex = 0;
		let current = this.head;
		let secondToCurrent;

		while(currentIndex !== index) {
			secondToCurrent = current;
			current = current.next;

			currentIndex++;
		}
	
		let node = new Node(value);
		secondToCurrent.next = node;
		node.next = current;

		return node;
	}

	removeAt(index) {
		if(index >= this.size()) return null;
		if(index === this.size() - 1) this.pop();

		let currentIndex = 0;
		let current = this.head;
		let nodeToRemove;
		let beforeNodeToRemove;

		while(currentIndex !== index + 1) {
			beforeNodeToRemove = nodeToRemove;
			nodeToRemove = current;
			current = current.next;
			currentIndex++
		}

		beforeNodeToRemove.next = current;

		return beforeNodeToRemove;
	}
}

const linkedList = new LinkedList();

console.log(linkedList.size()); // returns 0 - no nodes in list
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
linkedList.append(50);
linkedList.append(60);
linkedList.append(99999);
linkedList.pop();
console.log(linkedList.size()); // returns 5 - appended 6 nodes, popped 1 off
console.log(linkedList.head); // Node {data:20, next: Node}
console.log(linkedList.tail()); // Node {data: 60, next: Node}
console.log(linkedList.at(1)); // Node {data: 30, next: Node}
console.log(linkedList.contains(20)); // true
console.log(linkedList.contains(25)); // false
console.log(linkedList.find(40)); // 2
console.log(linkedList.find(45)); // null
console.log(linkedList.toString()); // 20 -> 30 -> 40 -> 50 -> 60 -> null
linkedList.prepend(10);
console.log(linkedList.toString()); // 10 -> 20 -> 30 -> 40 -> 50 -> 60 -> null
console.log(linkedList.find(40)); // 3
console.log(linkedList.contains(60)) // true
linkedList.pop();
console.log(linkedList.contains(60)); // false
console.log(linkedList.toString()); // 10 -> 20 -> 30 -> 40 -> 50 -> null
console.log(linkedList.contains(35)); // false
linkedList.insertAt(35, 3);
console.log(linkedList.contains(35)); // true
console.log(linkedList.toString()); // 10 -> 20 -> 30 -> 35 -> 40 -> 50 -> null
console.log(linkedList.contains(40)); // true
linkedList.removeAt(4);
console.log(linkedList.contains(40)); // false
console.log(linkedList.toString()); // 10 -> 20 -> 30 -> 35 -> 50 -> null
