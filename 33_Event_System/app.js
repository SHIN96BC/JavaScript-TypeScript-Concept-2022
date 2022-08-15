// 이벤트 시스템

function main() {
    const BUBBLING_PHASE = false;
    const CAPTURING_PHASE = true;
    const PHASE_NAME = ['NONE', 'CAPTURING', 'TARGET', 'BUBBLING'];

    // 이벤트 핸들러
    //  첫번째 인자 target 은 실제 이벤트가 걸려있는 태그를 의미하고,
    //  두번째 인자 currentTarget 은 버블링으로 전파되어서 이벤트가 발생한 태그를 의미하고,
    //  세번째 인자 eventPhase 는 해당 이벤트가 TARGET 인지 BUBBLING 인지를 확인할 수 있습니다.
    function eventLogger({ target, currentTarget, eventPhase }) {
        console.log(`${target.dataset.name}, ${currentTarget.dataset.name}, ${PHASE_NAME[eventPhase]}`);
    }

    let divs = document.querySelectorAll('div');
    // addEventListener 의 첫번째 인자값은 이벤트가 발생하는 행위,
    // 두번째 인자값은 이벤트 핸들러, 세번째 인자값은 이벤트가 중첩됐을 때
    // 어떻게 전파될 것인가를 결정하는 옵션입니다.

    // 버블링
    divs.forEach(div => div.addEventListener('click', eventLogger, BUBBLING_PHASE));

    // 캡쳐링 
    divs.forEach(div => div.addEventListener('click', eventLogger, CAPTURING_PHASE));

}

document.addEventListener('DOMContentLoaded', main);
// DOMContentLoaded 는 html 문서가 모두 로딩 완료되고 DOM 이 만들어진 
// 다음에 발생하는 이벤트입니다.


// # 버블링 메커니즘
//  버블링 메커니즘이란 안쪽에 있는 요소가 클릭이 됐을 때 click 이벤트가
//  바깥쪽으로 확산되어 나가는 것을 의미합니다.( 이것을 버블링 이벤트라고 합니다. )

// # 캡쳐링 메커니즘
//  캡쳐링 매커니즘이란 버블링과 반대로 안쪽에 있는 요소가 클릭이 되면
//  맨 바깥에있는 요소부터 이벤트가 발생해서 안쪽으로 전파가 됩니다.
//  ( 이 캡쳐링 메커니즘을 사용하면 굉장히 복잡한 이벤트도 만들어낼 수 있지만,
//    사용자 입장에서 굉장히 헷갈릴 수 있어서 그렇게 권장되는 사항은 아닙니다. )

// # 이벤트 루프 메커니즘
//  이벤트 루프의 역할은 콜 스택과 테스크 큐를 주시하는 것입니다.
//  스택이 비어있으면, 큐의 첫번째 콜백을 스택에 쌓아 효과적으로 실행할 수 
//  있게 해줍니다. 

// # Webapis
//  webapis 는 자바스크립트가 실행되는 런타임 환경에 존재하는 별도의 API 입니다.
//  자바스크립트의 스택과 별도의 공간에서 실행됩니다.
//  그리고 실행이 끝나면 콜백을 테스크 큐에 밀어넣습니다.
//  테스크 큐에 밀어넣는 이유는 Webapis 는 어느순간 갑자기 자바스크립트의
//  스택에 끼어드는 것은 불가능합니다. 그러므로 실행이 끝나고 만약
//  콜백이 존재한다면 그 콜백을 테스크 큐에 넣어놓고 자바스크립트의 
//  스택이 완전히 비워질 때 까지 기다리는 것입니다.
//  ( setTimeout 이나 ajax 같은 것들이 여기에 해당하는데, 만약 setTimeout 을
//    실행하게 되면 webapis 로 이동시켜서 timer 를 작동시키기 때문에 
//    setTimeout 을 실행이 완료되었다고 판단하고 스택에서 지울 수 있게 됩니다.
//    그러므로 그 다음 작업을 할 수 있게 되는 것입니다. )

// # task queue( 테스크 큐 )
//  테스크 큐는 webapis 에서 실행이 끝나고 나온 콜백들을 저장하는 공간입니다.
//  자바스크립트의 스택이 완전히 비워질 때 까지 대기하다가 스택이 완전히 
//  비워지면 그 때 이벤트 루프가 테스크 큐 에서 콜백을 하나씩 꺼내서
//  자바스크립트의 스택에 밀어넣어 줍니다.

// @ 이것이 자바스크립트의 비동기 함수가 동작하는 방식입니다.
//  그래서 어떤 알 수 없는 문제가 발생했을 때 setTimeout 을 0 초를 주고
//  실행시키면 해결되는 상황이 생기는 것입니다.
//  딜레이가 0초인데 setTimeout 을 사용하는 이유가 뭐지?? 라고 생각할 수 
//  있는데, 이것은 자바스크립트의 스택이 비어있을 때 까지 기다리게 하기 위해서 입니다.
//  즉, setTimeout 을 0초로 사용하는 것은 자바스크립트의 스택이 완전히 
//  비워질 때 까지 기다렸다가 콜백을 실행한다는 것에 의미가 있는 것입니다.
//  ( setTimeout 을 0초로 세팅해도 일단 webapis 로 이동했다가 콜백 함수를 
//    테스크 큐에 저장하고 대기합니다. 그리고 이벤트 루프가 스택이 비워지는 
//    순간에 스택으로 콜백을 밀어넣어주기 때문에 실행 순서가 완전히 달라집니다. )
// 참고 영상: https://www.youtube.com/watch?v=8aGhZQkoFbQ
