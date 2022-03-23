// 일반 함수
function salePrice(discountRate, price) {
    return price - (price * (discountRate * 0.01));
}

console.log('여름 세일 - ' + salePrice(30, 567000));
console.log('겨울 세일 - ' + salePrice(10, 567000));

// 반환값이 함수인 경우
function discountPrice(discountRate) {
    return function(price) {
        return price - (price * (discountRate * 0.01));
    }
}

console.log('여름 세일 - ' + discountRate(30)(567000));
console.log('겨울 세일 - ' + discountRate(10)(567000));

// 리턴된 함수를 변수에 넣어서 사용하는 방법
let summerPrice = discountPrice(30);
let winterPrice = discountPrice(10);

console.log('여름 세일 - ' + summerPrice(567000));
console.log('겨울 세일 - ' + winterPrice(567000));