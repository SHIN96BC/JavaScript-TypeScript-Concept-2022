// const books = ['핸리 6세 1부', '핸리 6세 2부', '핸리 6세 3부'];
const books = [];

// 해당 index 에 추가
books[0] = '핸리 6세 1부';
books[1] = '핸리 6세 2부';
books[2] = '핸리 6세 3부';

// 맨뒤에 추가
books.push('리처드 3세');
books.push('실수 연발');
books.push('말괄량이 길들이기');

// 맨뒤에서 하나 빼기
books.pop();
let book = books.pop();

console.log(books);
console.log(books.length);

// 원하는 위치에 있는 값을 잘라옵니다.( 원본 배열 유지 )
// ( 파라미터에는 어디서부터 어디까지 자를지 위치값을 지정해줍니다. )
// ( 마지막 위치 값의 데이터는 미포함 )
const oneBooks = books.slice(1, 2);

console.log(oneBooks);
console.log(books);
console.log(books.length);

// 해당 위치값을 잘라내고 그 자리에 새로운 값을 추가
// ( 원본 배열에서 해당 값 삭제 ) ( 마지막 위치 값의 데이터 까지 포함)
const twoBooks = books.splice(1, 2, '햄릿', '오셀로', '리어왕');

console.log(twoBooks);
console.log(books);
console.log(books.length);

// 맨 앞에서 데이터 하나 빼오기
twoBooks.shift();
console.log(twoBooks);

// 맨 앞에다가 데이터 추가하기
twoBooks.unshift('한여름 밤의 꿈');
console.log(twoBooks);

// 배열을 문자열로 합치기
// ( 인자 값에는 구분자를 지정할 수 있습니다. 기본값은 ',' )
const allBooks = books.join();
console.log(allBooks);

// 문자열을 인자로 받은 값을 기준으로 잘라서 배열로 만들기
const newBooks = allBooks.split(',');
console.log(newBooks);

// 배열 합치기 concat 사용
// ( 인자로 받은 값을 뒤로 합칩니다. )
const nextBooks = oneBooks.concat(twoBooks);
console.log(nextBooks);

// 배열 합치기 전개 연산자 사용 ( ... )
// ( 가독성이 좋음 )
const nextBookList = [...oneBooks, twoBooks];
console.log(nextBookList);