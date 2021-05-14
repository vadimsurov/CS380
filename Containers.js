<script>

class Stack 
{
  constructor()
  {
    this.elements = [];
  }

  // Append an element to the top of the stack
  push(e) 
  {
   this.elements.push(e);
  }

  // Removes and returns an element from the top of the stack
  pop() 
  {
    return this.elements.pop();
  }

  // Check if the stack is empty
  empty() 
  {
    return this.elements.length == 0;
  }

  // Returns an element at the top of the stack
  top() 
  {
    return this.elements[this.elements.length-1];
  }

  // Returns size of the stack
  length() 
  {
    return this.elements.length;
  }
 
  // Make stack empty
  clear() 
  {
    return this.elements = [];
  } 
}

class Queue
{
  constructor() 
  {
    this.elements = [];
  }

  // Append an element to the end of the queue
  push(e) 
  {
   this.elements.push(e);
  }

  // Removes and returns an element from the top of the queue
  pop() 
  {
    return this.elements.shift();
  }

  // Check if the stack is empty
  empty() 
  {
    return this.elements.length == 0;
  }

  // Returns the element at the front of the queue
  top() 
  {
    return !this.empty() ? this.elements[0] : undefined;
  }

  // Returns size of the stack
  length() 
  {
    return this.elements.length;
  }
}

class PriorityQueue 
{
  constructor(compare = function(a,b){ return a-b; }, 
              equal = function(a){ return a==this; })
  {
    this.elements = [];
    this.compare = compare;
    this.equal = equal;
  }

  // Append an element to the queue and keep it ordered
  push(element) 
  {
    this.elements.push(element);
    this.elements.sort(this.compare);
  }

  // Removes and returns an element from the front of the queue
  // Returns undefined when empty
  pop() 
  { 
    return this.elements.shift(); 
  }

  // Find value by key
  find(key_array) 
  { 
    return this.elements.find(this.equal, {key:[...key_array]}); 
  }

  // Check if the queue is empty
  empty() 
  { 
    return this.elements.length==0; 
  }

  // Returns an element at the front of the queue
  top() 
  { 
    return this.elements[0]; 
  }

  // Returns length of the queue
  length() 
  { 
    return this.elements.length; 
  }
}

</script>
