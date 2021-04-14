class Stack {
	constructor(limit = 20) {
		this.limit = limit;
		this.stack = [];
	}
	
	isEmpty() {
		if(this.stack === undefined || this.stack === null || this.stack.length === 0) {
			return true;
		} else {
			return false;
		}
	}
	
	isFull() {
		if(this.limit <= this.stack.length) {
			return true;
		} else {
			return false;
		}
	}
	
	push(item) {
		if(this.isFull()) {
			console.log('Stack is full');
		} else {
			this.stack.push(item);
		}
	}
	
	pop() {
		if(this.isEmpty()) {
			console.log('Stack is empty');
		} else {
			return this.stack.pop();
		}
	}
	
	top() {
		if(this.isEmpty()) {
			console.log('Stack is empty');
		} else {
			return this.stack[this.stack.length - 1];
		}
	}
}