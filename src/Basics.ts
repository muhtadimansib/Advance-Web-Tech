//Declaring array
let arr:number[]=[1,7,6,10]
console.log(arr[1]);

//Object
let car:{Model:string;color:string}={Model:"A125",color:"red"}
console.log(car.Model);

//Function Declaration
function add(a:number,b:number):number //This function will only return number
{
    return a+b
}
console.log(add(11,23));

//Built in type "ANY"
let value:any=10// Value is default any type
value="Any type can be delcared"
console.log(value);

//Enum (Used for role based authentication)
//Types of enum: numeric, string and heterogenous

//Numeric Enum
enum browser{
    Edge,//Implicitely edge holds 0 and it increments by 1, value can be changed and it will increment for the next properties
    Chrome,
    Firefox=getVersion("Firefox")// Non initializer like 'chrome' needs to be declared first otherwise it will throw error
    //if any other property is declared after "Firefox", it needs to be initialized
}   

function getVersion(browserName:string):number
{
    if(browserName=="Firefox")
        return 115
    return -1
}

console.log(browser.Edge);
console.log(browser);
console.log(browser.Firefox);

//String Enum
enum Roles
{
    ADMIN="admin",
    USER="user",
    GUEST="guest"
}
console.log(Roles);
console.log(Roles.USER);
console.log(Roles["USER"]);

//Hetergenous Enum (numeric+string)
enum Status
{
    ACTIVE="active",
    DEACTIVE=1,
    PENDING 
}

console.log(Status.ACTIVE);
console.log(Status.DEACTIVE);
console.log(Status.PENDING);


//Tupple is a data structure that can hold various type of data
let a:[string,number]=["Abc",12]
console.log(a[1]);

//Type Alias
//Defining type 
type dataType=string | number //Here 'dataType' is a type which can be either string or number 
let userid:dataType="U12312"
let guestid:dataType=123


//Type Union
let val: string | number
val="he1"
val=123

let set:"fail" | "success" //Values are predefined
set="fail"