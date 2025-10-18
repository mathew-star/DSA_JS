class Node{
    constructor(value){
        this.value=value
        this.next=null
    }

}

class Singly{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;

    }
    


    reset_sigly(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(value){
        const newNode= new Node(value)

        if(!this.head){
            this.head=newNode;
            this.tail=newNode;

        }

        else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.length++
        return this

    }
    //to conver a array to linked list
    push_all(values){
        for(const value of values){
            const newNode=new Node(value)
            if(!this.head){
                this.head=newNode;
                this.tail=newNode;

            }
            else{
                this.tail.next=newNode;
                this.tail=newNode;

            }
            this.length++
        }
        return  this

    }

    pop(){

        if(this.head=== null){
            console.log("list is empty . . .")
            return;

        }

        //if list has only one element >>
        if(this.head.next === null){
           this.reset_sigly() 
            return value
        }
        
        console.log("Attempting to pop the element . . ")

        let current = this.head;
        while(current.next !== this.tail){
            current= current.next
        }
        const value= current.next.value;
        current.next=null;
        this.tail=current;

        this.length--;

        console.log("Successfully poped the element . .")
        return value;
    }
    
    remove(value){

        if(!this.head){
            console.log("No head ")
            return 
        }

        //if the element is the head 
        if (this.head.value === value){
            const removed_value=this.head.value;
            this.head=this.head.next
            this.length--;

            if(this.length ===0){
                this.tail=null;
            }

        return removed_value;    
        }

        let current=this.head;
        while(current.next){
            if(current.next.value === value){
                const removedValue=current.next.value;
                current.next=current.next.next;
                this.length--;

                if(!current.next){
                    this.tail=current;
                }
            return removedValue;
            }
            current= current.next;
        }

        console.log("value not found , Please Try again . . ")
        return null;

    }

    reverse_list(){
        let prev=null;
        let current=this.head;
        this.tail=current;

        while(current){
            const nextNode= current.next;
            current.next=prev;
            prev=current;
            current=nextNode;
        }

        this.head=prev;
        return this;
    }

    reverseRecursive(node = this.head) {
        // Base case: empty list or last node
        if (node === null || node.next === null) {
            this.head = node;
            return node;
        }

        // Recursively reverse the rest of the list
        const newHead = this.reverseRecursive(node.next);

        // Reverse the current node's pointer
        node.next.next = node;
        node.next = null;

        // Update tail on first call
        if (node === this.head) {
            this.tail = node;
        }

        return newHead;
        }




    display(){
        let print_list=[]
        let current=this.head;

        while(current){
            print_list.push(current.value);
            current= current.next;

        }

        console.log(print_list.join('-->'));
    }

}

let linkedList_values=[1,1,2,24,4,5,6,7]
const singly_instance=new Singly()
/*
for(let i=0;i<=linkedList_values.length;i++){
    singly_instance.push(linkedList_values[i])
}
*/

singly_instance.push_all(linkedList_values)

singly_instance.display()

console.log(`Poped value--=> ${singly_instance.pop()}`);

singly_instance.display()

console.log(`Removed : ${singly_instance.remove(4)}`);

singly_instance.display()

