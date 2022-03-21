// delete 연산자로 객체의 속성을 삭제할 수 없게 하기 ( TypeScript )
type MyObject = {
    name: string;
    age: number;
    getFamilyName: () => string;
    getLastName: () => string;
    getBloodType: () => string;
}

const obj: MyObject = {
    name: 'B C',
    age: 27,
    getFamilyName: function() {
        return 'SHIN';
    },
    getLastName: () => 'SHIN',
    getBloodType() {
        return 'A';
    }
};

// 속성 호출
obj.name;
obj.age;
// 메소드 호출
obj.getFamilyName();
obj.getBloodType();
obj.getLastName();

// 객체에 속성을 추가하기 ( 타입스크립트에서는 에러가 발생한다. )
//obj.bloodType = 'A';

// 객체에서 속성 삭제하기
delete obj.name;


// 클래스를 사용해서 객체 만들기
class Person {
    _bloodType: string;

    constructor(bloodType: string) {
        this._bloodType = bloodType;
    }

    set bloodType(btype: string) {
        if(btype === 'A' || btype === 'B' || btype === 'O'|| btype === 'AB') {
            this._bloodType = btype;
        }
    }

    get bloodType() {
        return `${this._bloodType} 형`;
    }
}

const p1 = new Person('A');

p1._bloodType;
p1.bloodType = 'B';


// delete 연산자로 객체의 속성을 삭제할 수 없게 하기 ( JavaScript )
// create 라고하는 메소드를 이용해서 객체를 만드는 방법을 사용한다.
const myObj = Object.create(null, {
    name: {
        value: 'SHIN',
        writable: true,
        configurable: false,
    }
});

delete myObj.name;