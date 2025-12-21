// 단락평가 - 앞에 값으로 true false 로 판단되면 뒤에 실행하지않는다.

function returnFalse() {
    console.log("False 함수");
    return false;
}

function returnTrue() {
    console.log("true 함수");
    return true;
}

console.log(returnFalse() && returnTrue());
// 결과값 : False 함수 실행만 하고 뒤에 트루는 접근조차 안함
console.log(returnTrue() || returnFalse());
// 결과값 : ture함수가 조건이 하나가 true 라서 실행된다. true가 실행

// 활용 사례

function printName(person) {
    /* console.log(person && person.name); */
    let name = person && person.name;
    console.log(name || "name 값이 없음");
}

printName();
