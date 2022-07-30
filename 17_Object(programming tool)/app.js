function calculateCorcleArea(radius) {
    return radius * radius * Math.PI;
}

function calculateRectArea(width, height) {
    return width * height;
}

class Circle {
    #radius;

    constructor(radius) {
        this.#radius = radius;
    }

    get radius() {
        return this.#tadius;
    }

    area = () => this.#radius * this.#radius * Math.PI;
}

class Rect {
    #width;
    #height;

    constructor(width, height) {
        this.#width = width;
        this.#height = height;
    }

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }

    area = () => this.#width * this.#height;
}

const circle = new Circle(50);
const rect = new Rect(150, 200);


// 사용하는 입장에서의 차이점

// 1. calculate 함수들의 특징은 사용하는 쪽에서 이 객체가 어떤 도형이고
//   어떤 데이터를 갖고 있기 때문에 면적을 구하려면 어떤 값을 넘겨줘야하는지 
//   알아야합니다.( 사용하는 쪽에서 너무 많은 정보를 알고 있어야합니다. )
console.log(calculateCorcleArea(circle.radius));
console.log(calculateRectArea(rect.width, rect.height));

// 2, class 로 만들어진 area 함수의 특징은 객체가 스스로의 행위까지 포함하고
//   있습니다. 그래서 사용하는 쪽에서는 area 라고 하는 면적을 구하는 함수
//   하나만 호출하면 그 함수가 어떻게 동작하는지에 대해 전혀 몰라도 면적을
//   알 수 있게됩니다.( 사용하는 쪽 입장에서 아주 간편하게 이용가능합니다. )
console.log(circle.area());
console.log(rect.area());
//   그리고 이렇게 코드를 짜면 맥락을 나누어서 개발을 할 수 있게됩니다.
//   사용하는 쪽의 개발(어떤 대상을 사용해서 무언가를 이루는 개발)과 
//   만드는 쪽의 개발(대상을 모델링하고 설계하는 개발)을 나누어서 
//   개발을 할 수 있어서 훨씬 더 효과적인 분업도 되고 프로그램 구조도 훨씬
//   안정적으로 설계가 가능합니다.

// ts 의 private 같은 접근 제어자와 같이 객체 내의 속성을 보호하는 기능이
// js 에도 있습니다.( 새로 추가되었습니다. )
// 속성명 앞에 # 을 붙여주게되면 private 한 속성이 되어서 외부에서 접근을
// 할 수가 없게 됩니다.
// ( 반드시 사용하기 전에 브라우저 호환성 체크가 필요합니다. )
// rect.#width; 에러 발생