type Box = {
    width: number;
    height: number;
    borderRadius: number;
    backgroundColor: string;
    borderWidth?: number;
    color?: string;
    ['className']?: string;
    // ['className'] === computed property 
    // ( 속성명을 값으로 취급해서 기술할 수 있는 표기법 )
}

// 1. 코드로 객체를 만드는 법
//   틀과 데이터가 하나로 묶여있는 방법( 코드를 수정할 때 직접 수정해야함 )
let box: Box = {
    width: 200,
    height: 200,
    borderRadius: 5,
    backgroundColor: 'red'
}

// 2. 함수로 객체를 만드는 법
//   틀과 데이터를 분리한 방법( 수정, 재사용성, 유지보수가 쉬워짐 )
function makeBox(
    width: number,
    height: number,
    borderRadius: number,
    backgroundColor: string
): Box {
    return {
        width,
        height,
        borderRadius,
        backgroundColor,
    };
    // 변수명이 실제 속성명이 될 때 같은경우 ( width: width ) 
    // 하나로 생략해서 사용할 수 있습니다.
}

let result = makeBox(100, 100, 0, 'blue');

// 3. 클래스로 객체 만드는 법
//   클래스를 사용하는 장점은 instanceof 로 규격을 확인할 수 있습니다.
class Shape implements Box {
    width: number;
    height: number;
    borderRadius: number;
    backgroundColor: string;

    constructor(
        width: number,
        height: number,
        borderRadius: number,
        backgroundColor: string
    ) {
        this.width = width;
        this.height = height;
        this.borderRadius = borderRadius;
        this.backgroundColor = backgroundColor;
    }
}

const boxShape = new Shape(10, 10, 0, 'red');

// #객체에 접근하는 방법
// 1. 코드로 접근하는 방법 
box.borderWidth = 10;

// 2. 값으로써 접근하는 방법
box['class Name'] = 'box rounded';
// 2번 같이 값으로써 접근하는 방법은 식별자의 규칙을 따르지 않는 형태도 존재가 가능합니다.
// ex: box['class Name'] = 'box rounded';

// 3. 객체에 속성을 추가하는 방법( 동적바인딩 )
// js 같은 경우에는 ( box.color = 'blue'; ) 이렇게 작성하면 추가가 됩니다.
// 하지만 ts 같은 경우에는 type 에 color 라고 하는 속성명을 옵셔널로 만들어
// 놓아야지만 가능합니다.( color?: string; )
box.color = 'blue';

// 4. 속성 삭제하기
// 옵셔널이 아닌 속성명은 삭제할 수 없습니다.
delete box.color;


// #객체 변환 & 합치기
// 객체를 복사하고 싶을 때 방법
// 1. 이렇게 그냥 대입연산자를 이용하면 복사가 아니라 참조하게 되어서 
//   box 와 box1 은 같은 객체가 됩니다.
const box1 = box;

// 2. assign 을 사용
//    첫번째 인자로 준 객체에 두번째부터 쭉 가변인자를 받아서 
//    그 가변인자들을 순서대로 첫번째 객체에 오버라이드를 합니다.
const box2 = Object.assign({}, box);

// 3. 전개연산자 사용( ... ) #가장많이 사용하는 방법
//    const box3 = {...box};
//    복사하면서 새로운 속성을 추가하고 싶을때는 아래와 같이 작성하면 됩니다.
const box3 = {...box, borderRedius: 10};

// 4. JSON 사용
//   먼저 객체를 JSON 객체(문자열)로 만든다음 다시 JSON 객체를
//   일반 객체로 만들어주면 복사가 됩니다.
const box4 = JSON.parse(JSON.stringify(box));
//