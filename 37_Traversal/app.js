// # 순회

// 배열 안에 숫자를 두배로 증가시키는 방법

// 1. for of
const arr = [];

for(const n of [1, 2, 3, 4]) {
    arr.push(n * 2);
}

console.log(arr);

// 2. map 
const arr2 = [1, 2, 3, 4].map(n => n * 2);

console.log(arr2)

// 한가지의 연산만 생각하면 1번과 2번이 별 차이 없게 보일 수 있습니다.
// 하지만 연산이 여러개인 경우에는 다릅니다.
//  ( 2배를 한 다음에 홀수만 골라내서 홀수를 문자열로 포장한다. )

// 1. for of( 문 방식 )
const arr3 = [];

//  두배로 증가
for(const n of [1, 2, 3, 4]) {
    arr3.push(n * 2);
}

//  홀수만 남기고 짝수는 배열에서 제거
for(let i=0; i < arr3.length; i++) {
    if(arr3[i] % 2 === 0) 
        arr3.splice(i, 1);
}

// 문자열로 감싸기
for(let j=0; j < arr3.length; j++) {
    arr3[j] = `<li>${arr3[j]}</li>`;
}

console.log(arr3);

// 2. map ( 함수 방식 )
const arr4 = [1, 2, 3, 4]
    .map(n => n * 2)
    .filter(n => n % 2 !== 0)
    .map(n => `<li>${n}</li>`);

console.log(arr4)


// 위와같이 연산이 여러개인 경우에는 확실히 2번이 훨씬 깔끔하고
// 손쉽게 작성할 수 있습니다.
