function Array() {
    Object.defineProperty(this, "length", {
        value: 0,
        enumerable: false,
        writable: true,

    });
    this.length = arguments.length;
    for (let a = 0; a < this.length; a++) {
        this[a] = arguments[a];
    }

}
let array = new Array(1, 2, 3, 4, 5, 6);
console.log("array : ", Object.values(array));


Array.prototype.push = function(value) {

    let len = this.length;
    this[len] = value;
    this.length++;
};

array.push(4);
console.log("push :", Object.values(array));

Array.prototype.pop = function(value) {
    let pop = this.length - 1;
    delete this[pop];
    this.length--;
};

array.pop();
console.log("pop : ", Object.values(array));

Array.prototype.top = function() {
    let top = this.length - 1;
    console.log("top : ", this[top]);
}
array.top();
Array.prototype.print = function() {
    let bag = "";
    for (var i = 0; i < this.length; i++) {
        bag = bag + this[i] + " ";

    }
    console.log("print :", bag);
}
array.print();
Array.prototype.size = function() {
    let length = this.length;
    console.log("size : ", length)
}
array.size();