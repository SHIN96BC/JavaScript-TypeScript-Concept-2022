// 일반 함수
function myFn(x) {
    return x + 100;
}

const result = mtFn(10);

// 익명 함수
const myfn2 = function () {
    return 100;
};


// 즉시 실행 함수
(function() {
    console.log('즉시 실행 함수 실행');
})();


// 가변인자
/*
function sum(a, b, c) {
    let s = 0;
    
    for(let i=0; i< arguments.length; i++) {
        s = s + arguments[i];
    }

    return s;
}
*/

// 전개 파라미터 
function sum(a, b, ...args) {
    let s = 0;
    
    for(let i=0; i< args.length; i++) {
        s = s + args[i];
    }

    return s;
}

const abcSum = sum(10, 20, 30, 40);


// 이름으로 호출
myfn2();

// call 함수로 호출
sum.call(null, 10, 20, 30);

// apply 함수로 호출
const arr = [10, 20, 30, 40, 50];
sum.apply(null, arr);


//  애로우 함수 ( 화살표 함수 )
const sumV2 = (a, b, ...args) => {
    let s = 0;
    
    for(let i=0; i< args.length; i++) {
        s = s + args[i];
    }

    return s;
}

// 가장 간단한 애로우 함수
//const ten = (x) => 100 + x;

// 인자가 하나일때 
const ten = x => 100 + x;


// 생성기 함수 ( Generator function )
function* geb() {
    yield 10;
    yield 20;
    return 30;
}

const g = gen();
g.next();
g.next();
g.next();


// 비동기 함수
async function myTask() {

}