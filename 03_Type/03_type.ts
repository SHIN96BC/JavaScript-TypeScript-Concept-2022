
function addAge2(age: number): number {
    return age + 1;
}

let age2: number = addAge1(30);
// let age2: number = addAge1('30'); // 컴파일 에러 발생
// age2 = '30'; // 컴파일 에러 발생

console.log(age2);