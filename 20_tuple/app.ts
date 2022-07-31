// 튜플이란 배열이랑 비슷하지만 배열은 원소의 갯수를 제한할 수 없지만
// 튜플은 원소의 갯수를 제한할 수 있습니다.( 크기를 제어 )

const address: [number, string, string] = [14023, '서울시', 
'송파구'];

let [zipcode, address1] = address;

zipcode = 12345;
// 튜플을 사용했을 때 장점은 미리 배열의 갯수와 index 마다 타입을
// 지정해줄 수 있어서 아래와 같이 number 타입인 곳에 문자열을 넣으
// 려고하면 에러가 발생하기 때문에 좀 더 안전합니다.
// zipcode = '12345';

type BookInfo = [string, string, number];

const BookData: BookInfo[] = [
    ['핸리 8세', '세익스피어', 1884],
    ['핸리 8세', '세익스피어', 1884]
];

BookData.push(['a', 'b', 23]);
// 이런식으로 배열안에 튜플이 들어가 있는 복잡한 형태여도
// 아래처럼 타입이 다르면 에러를 발생시켜서 알려줍니다.
// BookData.push([1, 'b', 23]);


function getArrayOne(): any[] {
    return [14023, '서울시', '송파구'];
}

// string 타입 부분에 number 타입을 넣어도 에러가 발생하지 않습니다.
let address2 = getArrayOne()[2];

address2 = 12;

// 위와 같이 튜플을 사용하지 않고 코드를 작성하면 사용하는 쪽에서
// 타입추론을 할 수 없습니다. 그러므로 아래처럼 튜플을 사용해서
// 작성해주면 사용하는 쪽에서 좀 더 편리하게 사용할 수 있습니다. 
type Address = [number, string, string];

function getArrayTwo(): Address {
    return [14023, '서울시', '송파구']
}

// string 타입 부분에 number 타입을 넣으면 에러가 발생합니다.
let address3 = getArrayTwo()[2];

// address3 = 12;