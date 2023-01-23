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
        // return this.head;
    }

    tail() {
        // if(!this.head) return null;

        // let tail = this.head;
        
        // while(tail !== null) {
        //     tail = tail.next;
        // }

        // return tail;
    }

    size() {
        // let size = 0;
        // let current = this.head;

        // while(current !== null) {
        //     current = current.next;
        //     size++
        // }

        // return size;
    }

    append() {}

    prepend() {}

    at(index) {}
    
    pop() {}

    contains(value) {}

    find(value) {}

    toString() {}

    insertAt() {}
    
    removeAt() {}
}