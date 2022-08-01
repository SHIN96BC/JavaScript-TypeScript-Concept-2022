
// # function 을 이용한 인스턴스 객체 만들기
//  함수를 이용한 방법에는 암묵적인 메커니즘이 굉장히 많이 숨어져 
//  있습니다. 

function CartV1() {
    this.cart = [];
    this.currentId = 0;
}

// prototype 에다가 getNewId 라고 하는 속성을 하나 만들고 
// 그 내용은 함수로 작성했습니다.
CartV1.prototype.getNewId = function () {
    this.currentId++;
    return this.currentId;
};

// createItem 이라고 하는 속성을 객체 동적 바인딩을 이용해서
// 추가했습니다. 내용은 함수입니다.
// prototype 으로 추가한 것과 createItem 으로 추가한 것의 차이점은
// prototype === 인스턴스 객체에 등장하게 될 메서드 이고,
// createItem 은 prototype 에 넣은게 아니니까 인스턴스 객체에
// 드러나지 않습니다.
CartV1.createItem = function(name, price) {
    return {
        name, price
    };
};

CartV1.prototype.addItem = function(item) {
    this.cart.push({
        ...item,
        id: this.getNewId()
    });
};

CartV1.prototype.clearCart = function(item) {
    this.cart = [];
    this.currentId = 0;
}

// # new 연산자를 함수 호출 앞에 사용하게 되면 암묵적인 메커니즘이
//  3개 작동하게 됩니다. 
//   첫번째로 먼저 js 가 빈 객체를 하나 만들고 그것을 
//  CartV1 함수를 호출하면서 CartV1 한테 그 빈 객체를 전달해줍니다.
//  그래서 위의 함수에서 이 빈 객체를 지정하기 위해서 사용하는 것이
//  바로 this 지시어 입니다.
//   두번째로 함수에 작성되어 있는 코드의 실행이 끝나면 명시적으로
//  return 이 없어도 암묵적으로 그 this 가 가리키는 객체를 
//  return 하도록 동작합니다.
//   세번째로 첫번째와 두번째 사이에서 함수 CartV1 의 prototype 속성을
//  this 객체에 __prototype__ 에 할당합니다.
//  그렇게 되면 생성된 인스턴스 객체에서 속성을 접근할 때 먼저 
//  해당 인스턴스 객체 자체가 갖고 있는 속성을 먼저 찾아보고,
//  없으면 __prototype__ 에서 찾게됩니다. 그래서 addItem 같은
//  속성을 사용할 수 있는 것입니다.
//  ( 암묵적인 메커니즘이 너무 많아서 가독성이 많이 떨어집니다. )
const shoppingCartV1 = new CartV1();

// 또한 new 연산자 없이 그냥 함수로써 CartV1 을 호출할 경우에
// 완전히 의도와는 다른 동작을 해버립니다. 그러나 이것을 막을
// 방법이 없습니다. 그래서 이 함수는 인스턴스 객체니까 new 연산자를 
// 사용하세요라는 의미를 담아서 첫글자를 대문자로 작성하는 것입니다.
// ( 그래도 사용자가 new 연산자를 안쓰면 막을 방법이 없습니다. )
const shoppingCartV1_1 = CartV1(); // X

shoppingCartV1.addItem(CartV1.createItem('수박', 8000));
shoppingCartV1.addItem(CartV1.createItem('사과', 12000));
shoppingCartV1.addItem(CartV1.createItem('두부', 2000));

console.log(shoppingCartV1.cart);


// # 클래스를 이용한 인스턴스 객체 만들기
//  위의 함수 인스턴스와 비교했을 때 클래스의 인스턴스는 매우 명확합니다.
//  그래서 인스턴스 객체를 만들때는 클래스 방식을 사용하는 것이 좋습니다.
//  ( 가독성이 매우 좋습니다. )
//  ( 또한 new 연산자를 사용하지 않으면 에러가 발생해서 new 연산자를
//    강제할 수 있습니다. )
class CartV2 {
    static createItem = (name, price) => ({
        name, price
    });

    cart;
    currentId;

    constructor() {
        this.currentId = 0;
        this.cart = [];
    }

    getNewId = () => {
        this.currentId++;
        return this.currentId;
    }
    
    addItem = item => {
        this.cart.push({
            ...item,
            id: this.getNewId()
        });
    }

    clearCart = () => {
        this.currentId = 0;
        this.cart = [];
    }
}

const shoppingCartV2 = new CartV2();

shoppingCartV2.addItem(CartV2.createItem('수박', 8000));
shoppingCartV2.addItem(CartV2.createItem('사과', 12000));
shoppingCartV2.addItem(CartV2.createItem('두부', 2000));