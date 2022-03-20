
// for 문
const arr = ['a', 'b', 'c', 'd'];



for(let i=0;i<arr.length; i++) {
    console.log(arr[i]);
}

// while 문
let i=0;
while(i< arr.length) {
    console.log(arr[i]);
    i++;
}

// do while 문
i = 0;
do {
    console.log(arr[i]);
    i++;
}while(i< arr.length)

// for of
for(const item of arr) {
    console.log(item);
}

// for in
// 배열순회
for(const index in arr) {
    console.log(arr[index]);
}

// 키값을 꺼내올 때
const obj = {
    color: 'red',
    width: 200,
    height: 200,
};

for(const key in obj) {
    console.log(key); // 키값인 color, width, height 가 출력된다.
}