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
for(let i=0;i<=linkedList_values.length;i++){
    singly_instance.push(linkedList_values[i])
}

singly_instance.display()




