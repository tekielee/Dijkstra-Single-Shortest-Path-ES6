class ListNode {
	constructor(data = null, priority = 0) {
		this.data = data;
		this.next = null;
		this.priority = priority;
	}
}

class LinkedListPriority {
	constructor() {
		this.firstNode = null;
		this.totalNode = 0;
	}
	
	insert(data, priority) {
		let newNode = new ListNode(data, priority);
		if(this.firstNode === null) {
			this.firstNode = newNode;
		} else {
			let previousNode = this.firstNode;
			let currentNode = this.firstNode;
			while(currentNode !== null) {
				if(currentNode.priority < priority) {
					if(currentNode === this.firstNode) {
						previousNode = this.firstNode;
						this.firstNode = newNode;
						newNode.next = previousNode;
						this.totalNode++;
						return true;
					}
					newNode.next = currentNode;
					previousNode.next =  newNode;
					this.totalNode++;
					return true;
				} else if(currentNode.priority >= priority) {
					if(this.firstNode == null) {
						this.firstNode = newNode;			
					} else {
						let currentNode = this.firstNode;
						while(currentNode.next != null) {
							currentNode = currentNode.next;				
						}
						currentNode.next = newNode;						
					}					
					this.totalNode++;
					return true;
				}
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
		}
		this.totalNode++;
		return true;
	}
	
	isEmpty() {
		if(this.firstNode === null || this.totalNode === 0) {
			return true;
		}
		return false;
	}
	
	extract() {
		if(this.firstNode != null) {
			if(this.firstNode.next != null) {
				let tmp = this.firstNode;
				this.firstNode = this.firstNode.next;
				this.totalNode--;
				return tmp;
			} else {
				let tmp = this.firstNode;
				this.firstNode = null;
				this.totalNode--;
				return tmp;
			}
		}
		return false;
	}
	
	display() {
		let currentNode = this.firstNode;
		while(currentNode !== null) {
			console.log(currentNode.data);
			currentNode = currentNode.next;
		}
	}
}