"use strict";
//Declaring array
let arr = [1, 7, 6, 10];
console.log(arr[1]);
//Object
let car = { Model: "A125", color: "red" };
console.log(car.Model);
//Function Declaration
function add(a, b) {
    return a + b;
}
console.log(add(11, 23));
//Built in type "ANY"
let value = 10; // Value is default any type
value = "Any type can be delcared";
console.log(value);
//Enum (Used for role based authentication)
//Types of enum: numeric, string and heterogenous
//Numeric Enum
var browser;
(function (browser) {
    browser[browser["Edge"] = 0] = "Edge";
    browser[browser["Chrome"] = 1] = "Chrome";
    browser[browser["Firefox"] = getVersion("Firefox")] = "Firefox"; // Non initializer like 'chrome' needs to be declared first otherwise it will throw error
    //if any other property is declared after "Firefox", it needs to be initialized
})(browser || (browser = {}));
function getVersion(browserName) {
    if (browserName == "Firefox")
        return 115;
    return -1;
}
console.log(browser.Edge);
console.log(browser);
console.log(browser.Firefox);
//String Enum
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "admin";
    Roles["USER"] = "user";
    Roles["GUEST"] = "guest";
})(Roles || (Roles = {}));
console.log(Roles);
console.log(Roles.USER);
console.log(Roles["USER"]);
//Hetergenous Enum (numeric+string)
var Status;
(function (Status) {
    Status["ACTIVE"] = "active";
    Status[Status["DEACTIVE"] = 1] = "DEACTIVE";
    Status[Status["PENDING"] = 2] = "PENDING";
})(Status || (Status = {}));
console.log(Status.ACTIVE);
console.log(Status.DEACTIVE);
console.log(Status.PENDING);
//Tupple is a data structure that can hold various type of data
let a = ["Abc", 12];
console.log(a[1]);
let userid = "U12312";
let guestid = 123;
//Type Union
let val;
val = "he1";
val = 123;
let set; //Values are predefined
set = "fail";
//# sourceMappingURL=Basics.js.map