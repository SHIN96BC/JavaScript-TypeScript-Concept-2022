let saveNumber1 = 1; 

function increment1() {
    return saveNumber1++;
}

// 이 코드의 문제점은 saveNumber1 의 값을 보호하고 있지 않다는 것입니다.
// increment1 함수로 값을 2 까지 증가시키고 그 다음은 3 이 되어야하는데
// 중간에 다른 곳에서 200 으로 바꿔버렸기 때문에 201 이 되어버립니다.
increment1();
increment1();

saveNumber1 = 200;

increment1();

// 이런 실수를 막기 위해서 변수를 함수안에 작성하고, return 할 값을
// 함수로 감싸서 return 하면 값이 유지가 됩니다. 
// ( 함수로 return 하지 않고 그냥 saveNumber2++ 를 return 
//   하게되면 값이 계속 2로 같아지기 때문입니다. )
// 메서드 호출이 끝나면 사라져야 할 saveNumber2 의 값이 이렇게
// 함수로 감싸서 return 해주면 값이 유지가 되는 것이 
// closure( 클로저 )의 핵심입니다.

function increment2() {
    let saveNumber2 = 1; 
    return function() {
        return saveNumber2++;
    }
}

const inc = increment2();

inc();
inc();
inc();

// # closure 
//  closure 는 함수 안쪽에서 함수가 만들어질 때 그 만들어진 안쪽
//  함수에 있는 코드 중에 함수 바깥쪽에 있는 변수에 접근을 하게 되면
//  이 접근한 변수를 클로저라고 하는 특별한 공간에 저장을 해둡니다.
//  그래서 안쪽에 만든 함수 inc 로 접근하게 될 때 saveNumber2 는
//  어디서 찾아오는가 하면 호출이 끝나서 사라져버린 increment2 의 
//  공간이 아니라, 바로 클로저라는 공간에서 찾아오게 되는 것입니다.
//  ( 그렇기 때문에 값이 계속 유지가 되어서 호출 할 때마다 1, 2, 3 
//    이렇게 증가하게 되는 것입니다. )
//  이렇게 클로저를 사용하면 saveNumber2 의 값은 유지가 되면서,
//  바깥쪽에서는 접근할 수 없게 되기 때문에 변수를 안전하게
//  보호할 수 있습니다.


// ts 는 private 접근제어자를 사용하면 값을 보호할 수 있지만
// class MyObj {
//     private saveNumber: number;
// } 
// js 에는 private 라는 스펙이 없기 때문에 클로저라고 하는 
// 특별한 기능을 사용해서 값을 보호하게 됩니다.
