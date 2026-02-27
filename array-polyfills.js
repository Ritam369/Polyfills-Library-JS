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



// 11. myReverse()
Array.prototype.myReverse = function(){
    for(let i=0;i<Math.floor(this.length/2);i++){
        const temp = this[i];
        this[i] = this[this.length-1-i];
        this[this.length-1-i] = temp;
    }
    return this;
}

// console.log(arr.myReverse());



// 12. mySlice()
Array.prototype.mySlice = function(start, end){
    const result = [];
    if(start === undefined && end === undefined){
        return this.mySlice(0, this.length);
    }
    if(end === undefined){
        end = this.length;
    }
    if(end < 0){
        end = this.length + end;
    }
    if(start < 0){
        start = this.length + start;
    }
    for(let i=start;i<end;i++){
        result.push(this[i]);
    }
    return result;
}

console.log(arr.mySlice(-1))
console.log(arr.mySlice(1, -1))
console.log(arr.mySlice())
// console.log(arr)



// 13. mySplice()
Array.prototype.mySplice = function(start, deleteCount, ...items){
    const deletedItems = [];
    let i = start;
    for(;i<start+deleteCount && i<this.length;i++){
        deletedItems.push(this[i]);
    }
    // Shifting elements to the left
    for(let j=start+deleteCount;j<this.length;j++){
        this[j-deleteCount] = this[j];
    }
    this.length -= deleteCount; //actual array length reduce if no add
    // Adding new items
    if(items.length>0){
        for(let i=this.length-1;i>=start;i--){
                this[i+items.length] =this[i];
        }
        for(let k=0;k<items.length;k++){
            this[start+k] = items[k];
        }
    }
    // Returning deleted items
    return deletedItems;
}

console.log(arr.mySplice(1, 2, 10, 20));
// console.log(arr.mySplice(1,3))
console.log(arr);



// 14. myToString()
Array.prototype.myToString = function(){
    let str = '';
    for(let i=0;i<this.length;i++){
        str += this[i];
        if(i !== this.length-1){
            str += ',';
        }
    }
    return str;
}

console.log(arr.myToString());



// 15. myJoin()

Array.prototype.myJoin = function(separator){
    let result = '';
    if(separator === undefined){
        separator = ',';
    }
    for(let i=0;i<this.length;i++){
        result += this[i];
        if(i !== this.length-1){
            result += separator;
        }
    }
    return result;
}

console.log(arr.myJoin('-'));
console.log(arr.myJoin());
console.log(arr.myJoin(''));



// 16. mySort()

Array.prototype.mySort = function(compareFunction){
    if(typeof compareFunction !== 'function'){
        compareFunction = (a, b) => String(a).localeCompare(String(b));
    }
    for(let i=0;i<this.length-1;i++){
        for(let j=i+1;j<this.length;j++){
            if(compareFunction(this[i], this[j]) > 0){
                const temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
    return this;
}

console.log(arr.mySort());



// 17. myFlat()

Array.prototype.myFlat = function(depth = 1){
    const result = [];
    const flatten = function(arr, depth) {
        for(let i=0;i<arr.length;i++){
            if(Array.isArray(arr[i]) && depth > 0){
                flatten(arr[i], depth - 1);
            } else {
                result.push(arr[i]);
            }
        }
    }
    flatten(this, depth);
    return result;
}

console.log([1,2,3,4,5,[6,7,8,[9,10]]].myFlat(Infinity));