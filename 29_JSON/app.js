// JSON 의 형태
//   json 은 value 값이 제한적입니다.
//   1. 문자열, 2. 숫자, 3. 배열, 4. 객체, 5 boolean
//   또한 문자열에 "" 만 사용해야합니다.( 싱글 & 빽틱 X )
const jsonString = `
    {
        "name": "shin",
        "age": 30,
        "bloodType": "A",
        "flag": true
    }
`;

// json 을 js 객체화
const myJson = JSON.parse(jsonString);
console.log(myJson.name);

// js 객체를 json 객체화
console.log(JSON.stringify(myJson));

// 에러 발생 시 exception 발생
try {
    const errorJsonString = `
        {
            "name": "shin",
            "age": 30,
            "bloodType": 'A',
            "flag": true
        }
    `;
    const errorTestJson = JSON.parse(errorJsonString);
    console.log(errorTestJson.name);

}catch (e) {
    console.log("error => " + e);
}