// 인자로 함수가 들어가는 경우
function ul(child: string): string {
    return `<ul>${child}</ul>`;
}

function ol(child: string): string {
    return `<ol>${child}</ol>`;
}

function makeLI(
    container: (child: string) => string,
    contents: string[]
): string {
    const liList = [];

    for(const content of contents) {
        liList.push(`<li>${content}</li>`);
    }

    return container(liList.join('')); // join 은 배열을 하나의 문자열로 합치는 메소드이다.
}

const htmlUL = makeLI(ul, ['월', '회', '수', '목', '금', '토', '일']);
const htmlOL = makeLI(ol, ['봄', '여름', '가을', '겨울']);

console.log(htmlUL);
console.log(htmlOL);