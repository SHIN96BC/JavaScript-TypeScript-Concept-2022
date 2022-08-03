type User = {
    id: number;
    name: string;
}

type Address = {
    zipcode: number;
    address: string;
}

function pipeOne(value: any): any {
    return value;
}

// # 제네릭에는 아직 확정되지 않은 타입이라는 의미로 <T> 라고 많이
//  사용합니다. 그래서 함수가 호출되는 순간에 T 라는 타입이 확정이
//  됩니다. 아래의 pipeTwo 함수의 제네릭은 T 라는 타입이 들어오면
//  value 라고 하는 값의 타입으로 사용하고, 반환하는 타입으로도 
//  사용할거라는 의미가 됩니다. 
function pipeTwo<T>(value: T): T {
    return value;
}

// 그러나 any 타입도 호출이되서 number 타입이 들어오면 타입 추론이
// 일어나서 number 타입으로 변합니다. 그래서 제네릭과 
// 큰 차이가 없어 보입니다만, 제네릭의 차이가 명확하게 드러나는 것은
// 객체를 사용할 때 입니다.

let p1 = pipeOne(10);
let p2 = pipeTwo('10');
let p3 = pipeTwo(true);


// # 제네릭으로 객체를 다룰 때
const pipeObjectOne = <T>(obj: T): T => {
    return obj;
}

// po1 은 명시적으로 T 를 지정하지 않았기 때문에 통과가 됩니다.
let po1 = pipeObjectOne({id: 1, name: '신', zipcode: 50213});

// 그러나 po2 는 명시적으로 T 를 User 타입으로 지정했기 때문에 
// User 타입에 없는 zipcode 라는 속성을 넣으면 에러가 발생하는 것 
// 입니다.
// let po2 = pipeObjectOne<User>({id: 1, name: '신', zipcode: 50213});


// # 제네릭으로 class 를 다룰 때 
//  제네릭에 타입을 여러개 주고 싶을 때는 , 를 사용합니다.
class State<S, Config={}> {
    private _state: S;
    config: Config;

    constructor(state: S, config: Config) {
        this._state = state;
        this.config = config;
    }

    getState(): S {
        return this._state;
    }
}

let s1 = new State<Address, { active: boolean }>({
    zipcode: 50213,
    address: '서울시'
}, {
    active: true
});

const s1Data = s1.getState();

console.log(s1Data.zipcode, s1Data.address, s1.config.active);


// # 조금 더 확장된 제네릭 사용법
//  Key 라고 하는 타입에 Type 이라고 하는 타입을 확장 시켜서 사용하는
//  방식입니다. 즉 Type 이라고 하는 obj 안에서 key 를 하나씩 꺼내서 
//  Key 라는 타입으로 확장시키기 때문에 오브젝트 안에 없는 key 값을
//  입력받으면 에러를 발생시킵니다.
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'a');
// 변수 x 안에 m 이 존재하지 않기 때문에 에러가 발생합니다.
// getProperty(x, 'm');


// # 제네릭으로 인터페이스 다룰 때
interface KeyPair<T, U> {
    key: T;
    value: U;
}

// kv1 처럼 사용하면 제네릭의 T 타입은 number 가 되고,
// U 타입은 string 타입이 되어서 key 의 타입은 number, 
// value 의 타입은 string 이 됩니다.( 같은 인덱스에 할당 )
let kv1: KeyPair<number, string> = { key: 1, value: 'shin' };
let kv2: KeyPair<number, number> = { key: 2, value: 12345 };