// 비동기 함수 예제
function delay(ms: number): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.floor(Math.random() * 10) % 2 === 0) {
                resolve('success');
            } else {
                reject('failure');
            }
        }, ms);
    });
}

// promist 패턴으로 사용했을 때( 비동기 코드 )
delay(3000)
    .then((result: string) => {
        console.log('done promise!' + result);
    })
    .catch((error: string) => {
        console.log('fail promise' + error);
    });


// 비동기 함수( async ) 를 사용해서 비동기 코드를 동기 코드처럼 사용할 때
async function main() {
    try {
        console.log('start job');
        const result = await delay(3000);
        console.log(('done async!' + result));
    } catch (e) {
        console.error('fail async!' + e);
    }
}

main();