class Node{
    constructor(value){
        this.value=value;
        this.prev=null;
        this.next=null;

    }
}


class Doubly{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(value){
        const newNode= new Node(value);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;

        }

        this.length++;
        return this;

    }

    prepend(value){
        const newNode=new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            } 
        else{
            newNode.next=this.head;
            this.head.prev=newNode;
            this.head=newNode
        }

        this.length++;
        return this;
    }

    find(value) {
        let current = this.head;
        while (current) {
        if (current.value === value) return current;
        current = current.next;
        }
        return null;
    }

    display(){
        let print_list=[]
        let current=this.head;

        while(current){
            print_list.push(current.value);
            current= current.next;

        }

        console.log(print_list.join('<==>'));
    }
}


const arry= [1,2,4,5,6,6,8]
const doubly_instance=new Doubly();
for(const a of arry){
    doubly_instance.push(a)

}

doubly_instance.display()