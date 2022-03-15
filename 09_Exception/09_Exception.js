// (09) 문법 - 예외 처리

function doException() {
    throw new Error('오류 발생');
}

function noException() {
    return true;
}

function callException(type) {
    if(type === 'do') {
        doException();
    } else {
        noException();
    }
}

function main() {
    try {
        callException('do');
    } catch (error) {
        console.log(error);
    } finally {
        console.log('done');
    }
}

main();