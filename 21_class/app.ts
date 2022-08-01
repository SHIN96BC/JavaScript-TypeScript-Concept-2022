// # interface 
//  interface 는 클래스의 설계를 제한하는 설계도라고 생각하면 됩니다.
//  클래스가 최소한으로 가져야하는 요소들을 미리 정해둘 수 있습니다.
//  interface 에 정의되어 있는 요소들은 자식 클래스에서 오버라이드를
//  꼭 해줘야만 합니다. ( 옵셔널은 제외 )
//  추가로 interface 는 public 접근제한자만을 취급합니다.

interface Container {
    tagName: string;
    className: string;
    children?: string[];
    getTagName: () => string;
    getClassName: () => string;
}

// 확실하게 어떤 구체화된 도형이 아닌 일반적인 도형이 가지고 있을
// 것 같은 속성과 기능을 가지고 있습니다. 그래서 이 Shape 클래스를
// 상속받아서 구체적인 도형 클래스를 디자인하기 위한 기본 베이스가 
// 되는 것이 Shape 클래스의 역할입니다.

// # abstract
//  abstract 는 추상이라는 의미이고, 이 abstract 가 붙은 클래스는
//  구체적인 클래스를 만들기 위한 틀 이라고 할 수 있습니다.
//  이 객체를 사용하려면 반드시 자식 객체에서 상속을 받아서 사용해야
//  하고, 추상 클래스가 가질 수 있는 추상 메서드는 자식 클래스에서
//  반드시 오버라이드를 해줘야만 합니다.
//  ( 추상클래스는 인스턴스를 만들 수 없습니다. new 생성 불가
//    let shape = new Shape(10); 불가 X )

// # static 
//  정적이라는 의미를 가지는 static 을 속성 또는 메서드에 붙이게 되면
//  메모리에 애플리케이션이 올라가는 순간에 같이 생성되어져서 메모리에
//  딱 하나만 존재하는 요소로 만들 수 있습니다.

// # 요소에 붙어있는 ? 는 옵셔널, 즉 있어도 되고 없어도 된다는 의미이고,
//  ! 는 값을 세팅하지 않을 수 있다는 지시어 입니다.
abstract class Shape {
    public static MIN_BORDER_WIDTH = 0;
    public static MAX_BORDER_WIDTH = 30;

    public readonly name: string = 'Shape';
    protected _borderWidth: number;
    private action!: string;

    constructor(borderWidth: number = 0) {
        this._borderWidth = borderWidth;
    }

    abstract area: () => number;

    set borderWidth(width: number) {
        if(width >= Shape.MIN_BORDER_WIDTH && width <= Shape.MAX_BORDER_WIDTH) {
            this._borderWidth = width;
        }else {
            throw new Error('borderWidth 허용 범위를 벗어난 동작을 시도했습니다.');
        }
    }

    get borderWidth(): number {
        return this._borderWidth;
    }
}


// Shape 클래스를 상속받은 Circle 클래스와 Rect 클래스는
// Shape 이 가지고 있는 모든 속성과 메서드를 그대로 상속받습니다.

// # 상속관계의 프로토타입 메커니즘
//  상속관계에 있어서 자식 객체에서 속성이나 메서드에 접근하게 될 때 
//  자식 객체가 가지고 있는 요소에서 먼저 찾고 있으면 거기서 끝이고,
//  없으면 부모 객체가 가지고 있는 요소에서 찾고 부모객체에 있으면
//  그 요소를 사용하는 것을 말합니다.( 최종적으로 없으면 undefined )

// # 오버라이드
//  부모 객체에 있는 요소를 재정의해서 사용하는 것을 의미합니다.

// # super()
//  부모 객체를 상속받은 자식 객체는 반드시 부모 객체의 생성자를
//  호출하는 super 메서드를 작성해줘야 합니다.

// # getter, setter, readonly
//  만약에 속성값을 보호하고 싶은데 읽고 쓸수 있게 하고 싶다면
//  getter, setter 를 적절히 사용하면 되고, 읽기만 가능하게 하려면
//  readonly 를 사용해도 좋습니다.( 적절히 상황에 맞게 사용 )
//  ( 나중에 스펙이 바뀔 것을 대비해서 getter, setter 를 사용하는게
//    좀 더 안전할 것 같다. )

class Circle extends Shape {
    private _radius: number;
    public name: string = 'Circle';

    constructor(radius: number) {
        super();
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    area = () => this._radius * this._radius * Math.PI;
}

class Rect extends Shape {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        super();
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    area = () => this._width * this._height;
}

const circle = new Circle(50);
const rect = new Rect(150, 200);

console.log(rect.borderWidth);
console.log(rect.name);
console.log(circle.name);

try {
    rect.borderWidth = 10;
} catch(e) {
    console.log(e);
}

class MyContainer implements Container {
    tagName: string;
    className: string;

    constructor(tagName: string, className: string) {
        this.tagName = tagName;
        this.className = className;
    }

    getTagName = () => this.tagName;
    getClassName = () => this.className;
}

console.log('done');


// # 접근제한자
//   public === 접근 제한 없음
//   protected === 같은 패키지 || 자식 객체까지 접근 가능
//   private === 해당 클래스안에서만 접근 가능
//   추가로 default ( default === 같은 패키지 안에서 접근 가능 ) 
//   라는 제한자가 있는데 타입스크립트에서는 default 제한자가 없습니다.