
// 구조 분해 할당
const colors = ['red', 'yellow', 'black'];

// const red = colors[0];
// const yellow = colors[1];
// const black = colors[2];

// 이렇게 배열의 요소를 빼서 쓰는 과정을 축약해주는 문법을 제공하는것이 구조 분해 할당이다.
const [ red, yellow, black ] = colors;
// 만약에 배열에서 하나만 빼고 싶을때는 생략도 가능하다.
const [ , yellow ] = colors;

// 오른쪽이 객체일때는 {} 를 사용한다.
const Colors = {
    blue: 'blue',
    green: 'green',
    white: 'white',
};

const { blue, green, white } = Colors;

// 객체의 경우에는 위치값이 있는게 아니라 이름이 있기 때문에 적는 위치는 관계없다.
const { white, green } = Colors;



// 동등( == )과 일치( === )
let a = 10;
let b = '10';

// 동등비교의 결과는 참이다.
if(a == b) {

}

// 일치비교의 결과는 거짓이다.( 일치 연산자를 사용하자! )
if(a === b) {

}