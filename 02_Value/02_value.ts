// Boolean
const e: boolean = true;

// Number
const f: Number = 10;

// String
const g: string = '가나다라';

// Array
const h: any = [];

// Tuple
let i: [string, number];
i = ['hello', 20];
// i = [30, 'hhhhh']; 에러 발생

console.log(i[0].substring(1)); // 성공
//console.log(i[1].substring(1)); // 오류, number 타입이라 substring 할 수 없다.

//i[3] = 'world'; // 오류  [string, number] 타입에는 프로퍼티 3 이 없다.


// Enum
enum Color2 {
    Red, Blue, Green
}

let j:Color2 = Color2.Red;

// 번호를 수동으로 바꿀 수 있다.
enum Color3 {
    Red = 1, Blue = 2, Green = 4
}

let k:Color3 = Color3.Red;

// 번호를 통한 접근해서 멤버의 이름을 알아낼 수 있다.
let l: string = Color3[4]; 
console.log(l); // 값이 4인 Green 이 출력된다.

// 자바스크립트의 Object 와 타입스크립트의 enum 은 굉장히 유사하다.
// enum 타입이 자바스크립트 코드로 변환되면 Object 타입으로 구현이 된다.

// 사용방법이 Object 보다 까다롭다.


// Never 
// Never 를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message: string): never {
    throw new Error(message);
}

// 반환타입이 never 로 추론된다.
function fall() {
    return error("Something fauled");
}

// never 를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function infiniteLoop():never {
    while(true) {

    }
}

