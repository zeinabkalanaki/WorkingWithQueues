class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueu(value) {
      this.items.unshift(value); // add to the beginning of the list
    }
    dequeue() {
      return this.items.pop()
    }
  
    toArray(){
      return this.items;
    }
  }
  const queue  = new Queue();

  queue.enqueu(2)
  queue.enqueu(5)
  queue.enqueu(6)

  console.log(queue.toArray())
  console.log(queue.dequeue())
  console.log(queue.toArray())