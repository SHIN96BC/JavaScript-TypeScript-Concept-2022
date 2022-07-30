type Book = {
    title: string;
    copyright?: string;
    author?: string;
};

const books: string[] = [
    "핸리 6세",
    "리처드3세",
    "실수 연발",
    "말괄량이 길들이기",
    "핸리 8세"
];

// forEach 를 이용한 순회 ( 반목문이 아니라 식을 이용한 순회 방법 )
// ( 식을 이용한 순회 방법의 특징은 변수가 없어서 훨씬 안정적입니다.
//   하지만 for 문을 사용하는 것보다 훨씬 더 성능이 떨어집니다. 
//   배열의 크기가 몇천개까지는 성능이 비슷하므로 배열의 크기에 따라
//   알맞게 사용하면 될 것 같습니다.)
// ( 콜백 함수 사용 )
// ( 첫번째 인자는 배열에서 하나씩 꺼내온 데이터,
//   두번째 인자는 인덱스 값,
//   세번째 인자는 배열 전체 값 )
/* 
books.forEach((book: string, index: number, books: string[]) => {
    console.log(book, index);
});
 */
// js 는 항상 인자로 받고 싶은 만큼만 받을 수 있습니다.
books.forEach((book: string, index: number) => {
    console.log(book, index);
});

// map 을 이용한 순회
// ( 콜백 함수 사용 )
// ( 첫번째 인자 값은 배열에서 하나씩 빼온 데이터,
//   두번째 인자 값은 인덱스 값)
// ( map 함수의 특징은 배열을 순회하면서 배열안에 있는 데이터를 
//   다른 형태로 변환하고 새로운 배열을 만들어서 return 해줍니다. )
const bookObjects: Book[] = books.map((book: string)=>{
    return {
        title: book,
        author: undefined
    };
});


// map 함수를 연결해서 순회( 메소드 체이닝 )
// ( map 함수를 이용해서 새로 만든 배열에 다시 한번 map 함수를
//   사용하는 방법입니다. 몇번이든 가능합니다. )
// ( return 값이 하나인 경우에는 return 을 생략할 수 있기때문에
//   return 을 생략하고 리턴하는 데이터가 객체이기 때문에 
//   객체 형태 {} 를 () 로 묶어서 한번 더 map 을 실행한 코드입니다.)
//  ()=>({}) 이런 형태
const ShakespeareOneBooks: Book[] = books
    .map((book: string)=>({
        title: book
    }))
    .map((book: Book)=>({
        ...book,
        author: "William Shakespeare"
    }));


// map 함수의 메소드 체이닝 형태를 좀 더 풀어놓은 형태
// ( 코드의 가독성이 좋아지고, 
//   코드를 재사용 할 수 있는 장점이 있습니다. )
const bookTitleToBookObject = (book: string)=>({ title: book })
// 에로우 함수를 두번쓰는 '커링 기법' 을 사용
const makeAuthor = (name: string) => (book: Book) => ({
    ...book,
    author: name
});

const shakespeareTwoBooks: Book[] = books
    .map(bookTitleToBookObject)
    .map(makeAuthor("William Shakespeare"));


// 필터링
// ( filter 함수도 콜백함수를 사용합니다. 그리고 콜백함수의 결과값이
//   true 인 경우만 모아서 return 해줍니다. )
// ( includes 함수는 문자열 안에 인자로 받은 값이 포함되어있으면
//   true 를 return 하는 함수입니다. )
const henry: Book[] = shakespeareTwoBooks.filter((book: Book)=>{
    book.title.includes("핸리");
});

// 누적 함수 ( reduce 함수 )
// ( 콜백 함수 사용 )
// ( reduce 의 첫번째 인자에는 함수,
//   두번째 인자에는 '초기값')
// ( reduce 의 콜백함수의 첫번째 인자에는 처음에는 reduce 의
//   두번째 인자값으로 준 '초기값'이 들어가고 두번째부터는 콜백 함수가
//   리턴한 값이 첫번째 인자로 들어갑니다. 
//   두번째 인자에는 배열에서 하나씩 꺼내온 값이 들어갑니다. )
const someNumbers: number[] = [10, 5, 3, 14, 56];

const sumNumber = someNumbers.reduce((a: number, b: number)=>{
    return a + b;
}, 0);

// reduce 함수를 사용해서 객체 합치기
type SomeObject = {
    [key: string]: string | number;
};

const someObjects: SomeObject[] = [
    { border: "none" },
    { fontSize: 24},
    { className: "box sm-box" }
];

const someObject: SomeObject = someObjects.reduce(
    (a: SomeObject, b: SomeObject) => ({ ...a, ...b}),
    {}
);

// 유사 배열
// ( js 에는 가변인자를 처리하기 위해 제공하는 암묵적 스펙인 
//   arguments 가 존재합니다. )
// ( arguments 는 유사 배열입니다. 
//   이 유사 배열은 배열이 가지고 있는 함수들을 가지고 있지 않습니다.
//   그래서 유사배열을 진짜 배열로 바꿔주는 Array.from 함수를 
//   사용해서 진짜 배열을 return 받아야 reduce 를 사용할 수 있습니다.)
function sumNumbers(): number {
    return Array.from(arguments).reduce(
        (a: number, b: number): number =>  { return a + b }, 0
        // { } 생략 가능
        // (a: number, b: number) => a + b, 0
    );
}
// 위의 코드의 문제점은 가변인자를 처리한다는 명시가 되어있지
// 않기 때문에 인자값을 넣으면 에러가 발생합니다.
// console.log(sumNumbers(10, 20, 30, 40, 50));

// arguments 는 지양하도록 합니다.

// 하지만 ...args 이런식으로 가변인자를 처리한다고 제대로 명시해주면
// 에러가 발생하지 않습니다.
function sumNumbersForTypeScript(...args: number[]): number {
    // 원래형
    // return args.reduce((a: number, b: number): number => { return a + b } , 0);
    // 축약형
    return args.reduce((a: number, b: number) =>  a + b , 0);
}
console.log(sumNumbersForTypeScript(10, 20, 30, 40, 50));