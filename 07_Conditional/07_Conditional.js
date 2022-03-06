//(07) 문법 - 조건문

// if 문
let age1 = 10;

// 비교 방식
if (age1 === 10 || age1 > 20) {
    console.log("나이는 10세");
} else if(age1 === 20) {
    console.log("나이는 20세");
} else if(age1 === 30) {
    console.log("나이는 30세");
} else{
    console.log("모르겠습니다.");
}

// 값 자체가 들어가는 방식 ( 숫자일경우 0 이 false, 나머지 숫자는 true,
//                         문자일경우 null 이나 빈값일 경우 false 이고, 나머지는 true )
if (age1) {
    console.log("나이는 10세");
}


// switch 문 ( 해당하는 값을 찾았을 때 부터 그 아래로 쭉 실행한다 )
let age2 = 1;

switch(age2) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log("??");
        break;
}
