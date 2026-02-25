//1. firstCap
String.prototype.firstCap = function() {
    return this.charAt(0).toUpperCase() + this.slice(1,this.length);
}

console.log("ritam".firstCap()); // Output: Ritam



//2. lastCap
String.prototype.lastCap = function() {
    return this.slice(0,this.length-1) + this.charAt(this.length-1).toUpperCase();
}

console.log("ritam".lastCap()); // Output: ritaM



// 3. padBetween
String.prototype.padBetween = function(pad) {
    // const arr = Array.from(this);
    let result = "";
    for(let i=0; i<this.length; i++) {
        result = result + this[i] + (i<this.length-1 ? pad : "");
    }
    return result;
}

console.log("ritam".padBetween(" ")); // Output: r-i-t-a-m



// 4. reverse
String.prototype.reverse = function() {
    let newString = "";
    for(let i=this.length-1; i>=0; i--) {
        newString = newString + this[i];
    }
    return newString;
}

console.log("ritam".reverse()); // Output: matir



// 5. remove
String.prototype.remove = function(removeThis) {
    let newString = "";
    for(let i=0; i<this.length; i++) {
        if(this[i] !== removeThis) {
            newString = newString + this[i];
        }
    }
    return newString;
}

console.log("ritam".remove("t")); // Output: riam
console.log("ritam saha".remove("a")); // Output: ritm sh



// 6. replaceBy
String.prototype.replaceBy = function(search, replace) {
    let newString = "";
    let searchLength = search.length;
    for(let i=0; i<this.length; i++) {
        if(this.slice(i, i+searchLength) === search) {
            newString = newString + replace;
            i = i + searchLength - 1;
        } else {
            newString = newString + this[i];
        }
    }
    return newString;
}

// const newString = "ritam".replaceBy("it", "IT");
// console.log(newString); // Output: rITam
console.log("ritam".replaceBy("it", "IT")); // Output: rITam
console.log("ritam saha".replaceBy("a", "X")); // Output: ritXm sXhX



//7. include
String.prototype.include = function(search) {
    for(let i=0; i<this.length; i++) {
        if(this.slice(i, i+search.length) === search) {
            return true;
        }
    }
    return false;
}

console.log("ritam".include("it")); // Output: true
console.log("ritam".include("IT")); // Output: false



// 8. concatinate
String.prototype.concatinate = function(separator,newStr) {
    return this + separator + newStr;
}

console.log("ritam".concatinate(" ", "saha")); // Output: ritam saha
console.log("ritam".firstCap().concatinate(" ", "saha".firstCap())); // Output: Ritam Saha
// String.prototype.concatinate = function(newStr) {
//     let result = this;
//     for(let i=0; i<newStr.length; i++) {
//         result += newStr[i];
//     }
//     return result;
// }

// console.log("ritam".concatinate([" ", "saha", "!"]));



// 9. repeatString
String.prototype.repeatString = function(count) {
    let result = "";
    for(let i=0; i<count; i++) {
        result = result + this;
    }
    return result;
}

console.log("ritam".repeatString(3)); // Output: ritamritamritam



// 10. subString
String.prototype.subString = function(start, end){
    let result = "";
    while(start < end && start < this.length) {
        result = result + this[start];
        start++;
    }
    return result;
}

console.log("ritam".subString(1,3)); // Output: it



// 11. sliceUp
String.prototype.sliceUp = function(start, deleteCount, insertStr) {
    let result = "";
    for(let i=0; i<start; i++) {
        result += this[i];
    }
    for(let i=0; i<insertStr.length; i++) {
        result += insertStr[i];
    }
    for(let i=start+deleteCount; i<this.length; i++) {
        result += this[i];
    }
    return result;
}

console.log("ritam".sliceUp(1, 2, "IT")); // Output: rITam
console.log("ritam".sliceUp(1, 0, "IT")); // Output: rITitam



// 12. splitUp
String.prototype.splitUp = function(separator) {
    let result = [];
    if(separator === "")
        return Array.from(this);
    else{
        if(!this.include(separator)) {
            result.push(this);
        } else {
            let targetIndex = this.indexOf(separator);
            let item = "";
            for(let i=0; i<this.length; i++) {
                if(i === targetIndex) {
                    result.push(item);
                    item = "";
                    targetIndex = this.indexOf(separator, targetIndex+1);
                } else {
                    item += this[i];
                }
            }
            result.push(item);
        }
    }
    return result;
}

console.log("ritam".splitUp("t")); // Output: ["ri", "am"]
console.log("ritam".splitUp("x")); // Output: ["ritam"]
console.log("ritam saha".splitUp("")); // Output: ["R", "i", "t", "a", "m", " ", "S", "a", "h", "a"]
console.log("ritam saha".splitUp(" ")); // Output: ["ritam", "saha"]
console.log("a-b-c-d-e".splitUp("-")); // Output: ["a", "b", "c", "d", "e"]



// 13. joinUp
Array.prototype.joinUp = function(separator) {
    if(this.length === 0)
        return this.toString();
    let result = "";
    for(let i=0; i<this.length; i++) {
        result += (this[i] + (i<this.length-1 ? separator : ""));
    }
    return result;
}

console.log(["ri", "am"].joinUp("t")); // Output: ritam
console.log(["ritam"].joinUp("x")); // Output: ritam
console.log(["R", "i", "t", "a", "m", " ", "S", "a", "h", "a"].joinUp("")); // Output: ritam saha
console.log(["ritam", "saha"].joinUp(" ")); // Output: ritam saha



// 14. trimmer
String.prototype.trimmer = function() {
    let start = 0, end = this.length-1;
    while(this[start] === " ") start++;
    while(this[end] === " ") end--;
    return this.slice(start, end+1);
}

console.log("  Ritam  ".trimmer()); // Output: "Ritam"



// 15. upper
String.prototype.toUpper = function() {
    let result = "";
    for(let i=0; i<this.length; i++) {
        let charCode = this.charCodeAt(i);
        if(charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(charCode - 32);
        } else {
            result += this[i];
        }
    }
    return result;
}

console.log("ritam".toUpper()); // Output: RITAM
console.log("Ritam Saha".toUpper()); // Output: RITAM SAHA



// 16.toArray()
String.prototype.toArray = function() {
    if(this.length === 0) 
        return [];
    let result = [];
    for(let i=0; i<this.length; i++) {
        result.push(this[i]);
    }
    return result;
}

console.log("ritam".toArray());