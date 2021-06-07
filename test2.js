var myObject = {
    name: "Lovelace",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
myObject.func();

//  We have an element of closures, in closures an inner function has the ability to remember 
// anything in the outer function that is why we are able to console an outer function and still 
// get the output as the declaration in the outer function.And here the anything put in the outer most 
// function can be accessed from the inner function but we cannot access the inner values in the outer
// function. since we have just declared the in the outer function the code is able to use the value in 
// the outer function,with using this the function will be able to execute and the output will be the name
// that is in the first function.

