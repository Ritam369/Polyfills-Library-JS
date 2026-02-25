const arr = [1,2,3,4,5];

// 1. myForEach()

Array.prototype.myForEach = function(callback){
    for(let i=0;i<this.length;i++){
        callback(this[i],i,this)
    }
}

arr.myForEach((item) => console.log(item**2));
arr.myForEach((item,index) => console.log(`Item at index ${index} is ${item}`));



// 2. myFind()
Array.prototype.myFind = function(callback) {
    for(let i=0;i<this.length;i++){
        if(callback(this[i], i, this)){
            return this[i];
        }
    }
    return undefined;
}

console.log(arr.myFind(item => item > 2));



// 3. myFindIndex()
Array.prototype.myFindIndex = function(callback) {
    for(let i=0;i<this.length;i++){
        if(callback(this[i], i, this)){
            return i;
        }
    }
    return -1;
}

console.log(arr.myFindIndex(item => item > 2));



// 4. myIndexOf()
Array.prototype.myIndexOf = function(search,fromIndex){
    let i = fromIndex ? fromIndex : 0;
    for(;i<this.length;i++){
        if(this[i] === search){
            return i;
        }
    }
    return -1;
}

console.log(arr.myIndexOf(3, 1));
console.log(arr.myIndexOf(4));



// 5. myIncludes()
Array.prototype.myIncludes = function(search,fromIndex){
    let i = fromIndex ? fromIndex : 0;
    for(;i<this.length;i++){
        if(this[i] === search){
            return true;
        }
    }
    return false;
}

console.log(arr.myIncludes(3, 1));
console.log(arr.myIncludes(6));



// 6. myMap()
Array.prototype.myMap = function(callback){
    const result = [];
    for(let i=0;i<this.length;i++){
        result.push(callback(this[i], i, this));
    }
    return result;
}

console.log(arr.myMap(item => item * 2));
console.log([1,2,undefined,NaN,null,6].myMap(item => typeof item));



// 7. myFilter()
Array.prototype.myFilter = function(callback){
    const result = [];
    for(let i=0;i<this.length;i++){
        if(callback(this[i], i, this)){
            result.push(this[i]);
        }
    }
    return result;
}

console.log(arr.myFilter(item => item > 5));



// 8. mySome()
Array.prototype.mySome = function(callback){
    let flag = false;
    for(let i=0;i<this.length;i++){
        if(callback(this[i], i, this)){
            flag = true;
            break;
        }
    }
    return flag;
}

console.log(arr.mySome(item => item > 2));
console.log(arr.mySome(item => item < 0));



// 9. myReduce()
Array.prototype.myReduce = function(callback, initialValue){
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    for(let i=0;i<this.length;i++){
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}

const newArr = arr.myReduce((acc,curr) => {
    acc.push(curr**2);
    return acc;
},[]);
console.log(newArr);
console.log(arr.myReduce((acc, curr) => acc + curr, 0));



// 10. myEntries()
Array.prototype.myEntries = function() {
    const result = [];
    for(let i=0;i<this.length;i++){
        result.push([i, this[i]]);
    }
    return result;
}

console.log(arr.myEntries());