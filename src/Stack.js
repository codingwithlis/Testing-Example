class Stack{
  constructor(){
    this.storage = []
  }

  push(data){
    this.storage.push(data);
  }

  pop(){
    return this.storage.pop();
  }

  size(){
    return this.storage.length;
  }
}


module.exports = Stack