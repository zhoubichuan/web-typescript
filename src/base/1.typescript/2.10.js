"use strict";
function error(message) {
    throw new Error("err");
}
function loop() {
    while (true) { }
}
function fn(x) {
    if (typeof x === "number") {
        console.log('number');
    }
    else if (typeof x === "string") {
        console.log('string');
    }
    else {
        console.log(x); //never
    }
}
