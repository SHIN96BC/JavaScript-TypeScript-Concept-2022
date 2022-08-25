const person = {
    name: 'shin byeong cheol',
    age: 40,
    getAge() {
        return this.age;
    }
};

// 이렇게 바로 person,getAge() 로 접근하면 40 이라는 값이 나옵니다.
person.age;
person.getAge();

// 하지만 아래처럼 person.getAge 를 다른 변수에 한번 담았다가 
// 호출을 하면 undefined 가 나오게 됩니다. 이것이 바로 context 입니다.
// 이렇게 다른 상수( 또는 변수 ) 에 한번 담은 다음에 실행하게 되면
// getAge 함수의 소유자( this )가 누구인지 확인이 안되기 때문에
// undefined 이 나오게 되는 것입니다.
const age = person.getAge;

age();

// # context ( 맥락 )
//  컨텍스트는 두가지 종류가 있습니다.
//  1. execution context( 실행 맥락 ) ( 기본 컨텍스트 )
//    js 는 실행 컨텍스트라는 메커니즘이 있기 때문에 person 객체의
//    소유물로 getAge() 를 만들어 놨다고 하더라도 실제로는 실행하는
//    순간에 소유자( this )가 결정이 됩니다. 
//    ( person.getAge(); 이렇게 실행을 하면 소유자는 person 이 됩니다. )
// # call 과 apply 
// 1. call 을 사용해서 함수를 실행하면 context 를 지정해줄 수 있습니다.
age.call(person); 
//   이렇게 지정해주면 person 의 40 이라는 값에 접근할 수 있게 됩니다.
//   ( execution context 는 this 를 다른 객체로 연결시킬 수 있습니다. )


//  2. lexical context( 어휘 맥락 )
//    lexical context 는 그냥 코드로 보는 그 자체에서 어휘적으로
//    this 가 누구인지 확인이 되는 그 this 로 고정이 되는 것을 말합니다.
//    lexical context 는 에로우 함수로 메서드를 만들면 에로우 함수를
//    만드는 그 순간에 어휘적 공간에서의 this 가 연결이 됩니다.
//    ( lexical context 는 this 를 다른 객체로 연결시킬 수 없습니다. )

//    # 일반함수와 화살표함수의 차이
//    1. 일반 함수는 실행될 때마다 함수 내부에 this 라는 객체가 추가됩니다.
//     즉, 일반 함수는 함수를 선언할 때 this 에 바인딩할 객체가 정적으로 결정되는
//     것이 아니고, 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this 에
//     바인딩할 객체가 동적으로 결정됩니다.

//    2. 화살표 함수( 에로우 함수 )는 함수를 선언할 때 this 에 바인딩할 객체가
//     정적으로 결정됩니다. 즉, call, apply, bind 메소드를 사용하여
//     this 를 변경할 수 없습니다.



// 3. 클래스 문법에서는 아예 클래스를 만들 때 컨텍스트를 고정시켜주는
//   또 다른 방법이 있습니다.( bind 를 사용 )
class Person {
    name: string;
    age: number;

    constructor(name:string, age: number) {
        this.name = name;
        this.age = age;
        // bind 사용( getAge 함수의 this 를 고정 )
        // ( bind 는 this 를 다른 객체로 연결시킬 수 없습니다. )
        this.getAge = this.getAge.bind(this);
    }

    getAge() {
        return this.age;
    }

    // lexical context
    getName = () => this.name;
}

const p1 = new Person('shin', 30);

// bind 를 사용했기 때문에 myAge() 로도 30 이라는 값에 접근 가능
p1.getAge();
const myAge = p1.getAge;
myAge();

// lexical context 를 사용했기 때문에 x() 로도 'shin' 이라는 값에
// 접근 가능
p1.getName();
const x = p1.getName;
x();
