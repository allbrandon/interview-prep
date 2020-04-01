Array.prototype.myMap = function(callback) { 
    let mappedArr = [];
    
    for (let i = 0; i < this.length; i++) {
      mappedArr.push(callback(this[i]), i, this);
    }
    
    
    return mappedArr;
    
  }
  
  console.log([1,3,3].myMap(x => x + 1));
         // [2, 4, 4]