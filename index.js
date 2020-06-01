//Using linked lists

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

//Bad way
var first = new Node("Hi")
first.next = new Node("there")
first.next.next = new Node("how")
first.next.next.next = new Node("are")
first.next.next.next.next = new Node("you")

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current.next;
        while(current.next){
            newTail = current;
            current = current.next
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length --;
    if(this.length === 0){
        this.head = null;
        this.tail = null;
    }
    return current;
}
get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
}



var list = new SinglyLinkedList()

//list.push("Node name here") in console log to add a new node.   
//list.pop("") To removes nodes.list.pop("").
//list.get to look up specific nodes by location in the list.
//list.set