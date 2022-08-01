const c1 = {
    name: 'C1',
    color: 'red'
};

const c2 = {
    name: 'C2',
    width: 300
};

const c3 = {
    name: 'C3',
    height: 100
};

console.log(c1);
console.log(c2);
console.log(c3);

console.log(c1.toString());
// # 프로토타입 체이닝
//  모든 객체에는 __proto__ 라고 하는 속성이 있습니다.
//  이 속성은 모든 객체의 조상인 Object 라고 하는 객체를 가리키고 있습니다.
//  그래서 toString 메서드가 c1 에게 없어도 Object 의 toString 을 
//  호출해서 사용할 수 있는 것입니다.
//  ( 프로토타입 체이닝은 먼저 해당 객체( c1 ) 에서 toString 메서드를
//    찾고, 해당 객체에 없으면 상위 클래스에서 찾아서 발견된 즉시
//    그 객체가 가지고 있는 메서드를 사용하게 됩니다. 만약에 상위 클래스
//    어디에도 존재하지 않는다면 undefined 가 됩니다. )


// # 응용
//  아래처럼 c1 의 __proto__ 에 c2 를 넣게되면 c1 에 없는
//  width 라고 하는 속성을 사용할 수 있게 됩니다.
//  프로토타입 메커니즘은 객체 하나하나는 자기가 가지고 있으면
//  딱 좋은 데이터와 메서드들만 가지고 있고, 공통적으로 사용하는
//  것들은 상위 객체에 만들어두고 __proto__ 를 연결시켜서 사용할 수
//  있는 즉, 재활용을 할 수 있는 메커니즘 이라고 생각하면 됩니다.
c1.__proto__ = c2;
c1.width;


// # 함수형 인스턴스 객체
//  함수로 인스턴스 객체를 만들어도 똑같이 __proto__ 라고 하는
//  속성이 존재합니다. 그리고 추가로 일반 객체와 달리 prototype
//  이라고 하는 풀네임을 갖고 있는 속성도 존재합니다.
//  이 prototype 이라고 하는 속성은 자기자신의 객체를 가리킵니다.
function Foo(name) {
    this.name = name;
    // new 연산자를 사용하면 아래와 같이 __proto__ 에 prototype 을
    // 연결시킵니다. 그래서 Foo 에는 존재하지 않지만 Foo.prototype 에
    // 존재하는 lastName 이라는 속성에 접근할 수 있게 되는 것입니다.
    this.__proto__ = Foo.prototype; // 원래는 생략되어 있습니다.
}

Foo.prototype.lastName = "WooWa";

const f = new Foo('shin byeong cheol');
console.log(f.name);
console.log(f.lastName);

// 메커니즘을 잘 이해하면 사용할 수 있는 문법이지만, 불편하다는 의견이
// 많아서 ES6 부터는 새로 추가된 클래스 문법을 사용해서 객체를 
// 생성하는 방법을 많이 사용하게 되었습니다. 그래서 현재는
// 많이 사용하지 않는 문법입니다.