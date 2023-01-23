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
