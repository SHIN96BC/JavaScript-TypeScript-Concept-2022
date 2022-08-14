// 동기 코드
// 동기 코드란 앞의 코드가 확정되기 전에 그 다음 일을 수행할 수 없습니다.
// 즉, 앞에 코드부터 순차적으로 하나씩 실행이 됩니다.( 종속성 )
// ( 앞의 코드가 끝날 때 까지 그 다음 코드는 실행되지 않습니다. )
function double(x) {
    return x*2;
}

const x2 = double(100);
// y 는 x2 의 값이 확정되고 나서 실행이 되므로 200 이라는 값이 들어가게 됩니디.
const y = x2;

// 비동기 코드
// 비동기 코드는 앞의 코드가 확정되지 않아도 그 다음 일을 수행할 수 있습니다.
// 즉, 코드가 순차적으로 실행되는 것이 아니라 동시에 실행됩니다.
// ( 실행의 흐름을 막을 수 없습니다. 코드가 끝나는 순서를 보장할 수 없습니다. )
function calcValue(a, b) {
    setTimeout(() => {
        // 비동기 상황에서 함수가 return 하는 값은 r 에 값을 할당하는 코드가
        // 이미 실행이 끝나고나서 return 이 되므로 return 을 받을 수 없습니다.
        return a + b;        
    }, 100);
}

const r = calcValue(10, 20);
// 비동기 코드에서 z 는 r 의 값이 확정되기 전에 실행이 되므로 undefined 가 됩니다.
const z = r;

// 이런 비동기 상황에서 정확히 r 에게 계산 결과값을 넘겨주려면 콜백함수를 사용해야합니다.
function calcValue2(a, b, cb) {
    setTimeout(() => {
        // 함수 안에서 return 하는게 아니라 콜백함수 cb 를 호출해서 
        // 값을 넘겨줍니다.
        cb(a + b);
    }, 100);
}

// 이렇게 콜백함수로 받은 값이 r2 에 할당되는 것은 z2 에 r2 값을 할당하는
// 코드보다 0.1 초 늦게 실행되므로 z2 는 undefined 가 됩니다.
const r2 = calcValue2(10, 20, (result) => {
    console.log(result);
});
const z2 = r2;


// 이렇게 복잡한 비동기 상황을 해결하기 위해서 나온 것이 
// #Promise 라고 하는 규격입니다.

// 간단한 원형
//  이렇게 Promise 한테 넘겨준 함수는 Promise 안쪽에서 Promise 가 호출합니다.
//  그리고 호출을 하면서 2개의 인자를 주는데 둘 다 함수입니다.( 첫번째 인자는 resolve, 두번째 인자는 reject )
//  
const p = new Promise((resolve, reject) => {
    // 이 함수가 성공하면 resolve 함수를 호출하고, 
    // 실패하면 reject 함수를 호출합니다.
    resolve('OK');
    // reject('실패');

    // 그러나 위처럼 실행하면 그냥 동기 코드 입니다.
    // 비동기적인 상황을 만들려면 비동기 코드를 사용해야합니다.
    setTimeout(() => {
        resolve('첫번째 성공');
    }, 2000);
});

// resolve 함수가 호출되면 그것을 수신하는 함수는 Promise 의 객체 
// p 의 then 이라고 함수입니다.
// 그래서 결과적으로 then 메서드의 인자값으로 들어가는 함수가
// 실행되게 됩니다.
p.then(function(ok) {
    console.log(ok);
}).catch(function(error) {
    console.log(error);
});
// reject 함수가 호출되면 Promise 의 객체 
// p 의 catch 라고하는 함수가 실행됩니다.


// Promise 의 then 은 계속 연결해서 사용할 수 있습니다.
// 만약에 then 안에서 실행된 함수가 다시 비동기 함수라면 그 then 함수에서도
// Promise 를 return 합니다.
// 그렇게되면 다시 그 다음에 연결된 then 을 호출하게 됩니다.
p.then(function(ok) {
    console.log(ok);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('두번째 성공');
        }, 3000);
    });
})
.then(function(ok2) {
    console.log(ok2);
})
.catch(function(error) {
    console.log(error);
});

// 이렇게 Promise 는 단순하게 하나의 콜백인 경우에는 훨씬 더
// 복잡해 보이지만, 여러개의 비동기 상황을 순차적으로 엮을 때, 혹은
// 여러개가 복잡하게 얽혀있거나 2개 동시에 실행하고 그 2개가 끝나면 
// 그 다음에 또 다른 비동기를 호출하는 식으로 비동기 여러개가 복잡하게
// 얶여있을 때 훨씬 더 단순하게 풀어낼 수 있는 메커니즘 입니다.