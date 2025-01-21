const sayHi=()=>{
    console.log("It is sayHi function")
}

const sayHello=()=>{
    console.log("begining of the sayHello")
          sayHi();
console.log("End of the say Hello function");
}

sayHello();