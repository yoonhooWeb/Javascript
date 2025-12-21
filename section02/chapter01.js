// 1. Falsy한 값 - 조건문에서는 거짓으로 판단된다.
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

/* 2. Truthy 한 값
- 7가지를 제외한 나머지 모든 값 */
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t1) {
    console.log("트루");
}

// 활용사례
function printName(person) {
    if (!person) {
        console.log("person 값 없음");
        return;
    }
    console.log(person.name);
}

/* let person = { name: "조윤후" }; */
let person = "";

printName(person);
