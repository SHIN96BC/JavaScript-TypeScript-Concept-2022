import { v4 } from 'uuid';

type UniqObject = {
    id: string;
    [key: string]: string | number | boolean;
}

const makeObject = (): UniqObject => ({
    id: v4()
});

console.log(makeObject());
console.log(makeObject());

// 타입스크립트를 지원하지 않는 라이브러리를 사용하는 방법
// 1. 직접 uuid 에 들어가서 타입을 확인해서 코드를 작성한다.
//   ( 1번은 너무 비효율적입니다. )
// 2. 패키지 저장소 @types 를 사용하는 방법
//   npm 사이트에 들어가서 @types 에 uuid 타입이 정의되어 있는지
//   확인해보고 있다면 설치해서 사용하면 됩니다.
//   ( npm install @types/uuid )