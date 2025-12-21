/* 배열 구조분해 할당 */

let arr = [1, 2, 3];
let [one, two, three] = arr;
/* console.log(one) */

/* 객체 구조분해 할당 */
let person = {
    name: "조윤후",
    age: "1",
    hobby: "컴퓨터",
};

let { name, age, hobby } = person;
/* console.log(name); */

/* 객체 구조분해할당을 사용해서 함수 매개변수 받는 방법 */

const func = ({ name, age, hobby }) => {
    console.log(name, age, hobby);
};

/* 객체를 넘겼을때만 구조분해 할당 사용가능하다 */
func(person);
