function doubleTypeFunction(a: number | string) {
    // 이렇게 number 와 string 타입 두가지고 들어올 수 있는 상태에서
    // 타입을 검사하면 replace 를 사용할 수 있습니다.
    if(typeof a === 'string') {
        return a.replace('x', 'X');
    }

    // 그러나 타입 검사를 하지 않은 상태에서 replace 를 사용하려고 
    // 하면 에러가 발생합니다.
    // ( number 타입에는 replace 함수가 없기 때문 )
    // ( 이것은 타입스크립트가 타입가드를 지원하고 있다는 증거가 됩니다. )
    // return a.replace('Y', 'y');
}

doubleTypeFunction(10);

function foo(a?: number | null) {
    // 타입가드 코드
    if(a === null) return;

    console.log('display before');
    // 이렇게 함수를 실행할 때 앞에 있는 변수에 ? 를 붙이게 되면
    // 만약에 해당 변수에 null 이 들어와도( 변수안에 해당 함수가 없으면 ) 
    // 그냥 undefined 를 출력하고 다음코드로 넘어갑니다.
    // 즉, 타입 가드 코드가 없어도 앱이 죽지 않고 다음 코드가
    // 실행되는 것 입니다.( 옵셔널이 아닙니다. )
    // ( 그러나 이렇게 작성하는 코드가 좋다고는 할 수 없습니다. 
    //   불필요한 동작을 막으려면 문제가 생겼을 때 프로그램이 
    //   적절히 종료되어야 하기 때문입니다.
    //  )
    // ( 변수에 ? 옵셔널을 붙여놨으면 사용할 때도 ? 를 붙여줘야
    //   하는 것 같습니다.
    //  )
    console.log(a?.valueOf());
    console.log('display after');
}

foo();

// # 인터페이스를 가지고 타입 유형을 검사할 수 있는 패턴
interface Foo {
    foo: string;
    common: string;
}

// isFoo 함수는 위의 interface 와 똑같은 유형의 데이터로
// 객체가 만들어져 있는지를 검사하는 함수입니다.
// # is 
//  is 라고하는 타입스크립트만의 특별한 타입 카드 문법이 있습니다.
//  먼저 파라미터에는 타입을 any 로 줘서 모든 타입을 받을 수 있게
//  해두고 return 타입에 변수 is Foo 라고 적으면 파라미터로 들어온
//  객체가 Foo 라고 하는 인터페이스의 규격대로 만들어져 있는지 
//  체크해줍니다.( 타입 검사용 함수는 유용하게 사용할 수 있습니다. )
function isFoo(arg: any): arg is Foo {
    // arg.foo !== undefined 는 해당 객체에 foo 라는 속성이 
    // 있는지를 체크합니다.
    return arg.foo !== undefined;
}

console.log(isFoo({ foo: 'ok', common: 'wow' }));

// 하지만 하나 제약사항이 있습니다.
// 인터페이스에 없는 새로운 속성을 추가했을 때 새로 추가한 속성은
// 인터페이스에 없지만 실제로 타입 가드에서는 확인을 하지 못합니다.
console.log(isFoo({ foo: 'ok', common: 'wow', active: false }));

