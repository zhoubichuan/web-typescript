"use strict";
let obj = { a: 1, b: 2 };
let create = (obj) => { };
create(obj);
create({});
create([]);
create(function () { });
