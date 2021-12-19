let user = 'black';
let blackLocation = [];
let whiteLocation = [];
let blackID = [];
let whiteID = [];

// 오목판 그려주기

// 오목돌 놓기
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.col').forEach(el => { // el(=element) -> 선택한 요소
        el.addEventListener('click', e => { // e (=event) -> MouseEvent가 들어왔을 때
            console.log(Array.from(el.classList));
            console.log(Array.from(el.closest('.row').classList));
            
            // 중복돌 금지
            if (el.classList.contains('black') || el.classList.contains('white')){
                alert('cannot be placed here.');
                return; //여기서 return하여 함수를 종료해줘야지 뒤에 코드 실행안되서, 돌 중복을 막을 수 있다.
            }
            
            /*
            `forEach` 메소드가 인덱스를 인자로 넘기므로, 그것을 이용해 `locationXY`를 만들 수 있습니다. 그러면 코드가 조금 더 깔끔해졌을 것 같습니다.
            예를 들어 아래와 같이 할 수 있습니다.
            document.querySelectorAll('.row').forEach((rowEl, rowIndex) => {
                document.querySelectorAll('.col').forEach((colEl, colIndex) => {
                    ...
            */

            // 좌표 저장
            let locationXY = {x : '', y : ''}; //event함수 내부에 있어야함
            locationXY.x = el.classList[0].split('-')[1];
            locationXY.y = el.closest('.row').classList[0].split('-')[1];
            console.log(locationXY);
                  
            /*
            아래 `if...else` 구문 내부에 있는 코드가 중복되어 있습니다.
            함수를 통해 코드 중복을 제거할 수 있을 것 같습니다.
            */
            // 흰 검정돌 번갈아 놓기
            if(user === 'black'){
                el.classList.add('black');
                
                // 좌표생성
                blackLocation.push(locationXY);
                
                //좌표를 활용하여 위치별 id값 생성
                blackID.push((20 * (locationXY.y - 1) + 1 * locationXY.x));
                blackID.sort((a, b) => a - b); // 화살표함수: 함수몸체 한 줄 표현식이면 "{return }"생략. return만 생략하고 {중괄호} 냅두면 sort함수 동작안함
                
                console.log(`blackID : ${blackID}`);
                user = 'white'
            }else{
                el.classList.add('white');
                
                // 좌표생성
                whiteLocation.push(locationXY);

                // 좌표를 활용하여 위치별 id값 생성
                whiteID.push((20 * (locationXY.y - 1) + 1 * locationXY.x));
                whiteID.sort((a, b) => a - b); // 화살표함수: 함수몸체 한 줄 표현식이면 "{return }"생략. return만 생략하고 {중괄호} 냅두면 sort함수 동작안함

                console.log(`whiteID : ${whiteID}`);
                user = 'black';
            }
            /*
            아래 부분 역시 코드가 중복되어 있어서, 함수를 통해 코드 중복을 제거할 수 있을 것 같습니다.
            */            
            // 승패 결정
            for(let i = 0; i < blackID.length; i++){

                // 좌우
                if (blackID.includes(blackID[i] + 1) &&
                    blackID.includes(blackID[i] + 2) &&
                    blackID.includes(blackID[i] + 3) &&
                    blackID.includes(blackID[i] + 4))
                    {alert('Black win!'); return;}

                // 상하
                if (blackID.includes(blackID[i] + 20) &&     // col
                    blackID.includes(blackID[i] + 40) && // col * 2
                    blackID.includes(blackID[i] + 60) && // col * 3
                    blackID.includes(blackID[i] + 80))   // col * 4
                    { alert('Black win!'); return; }

                // 왼쪽 대각선
                if (blackID.includes(blackID[i] + 21) && // (col + 1) * 1
                    blackID.includes(blackID[i] + 42) && // (col + 1) * 2
                    blackID.includes(blackID[i] + 63) && // (col + 1) * 3
                    blackID.includes(blackID[i] + 84))   // (col + 1) * 4
                    { alert('Black win!'); return; }

                // 오른쪽 대각선
                if (blackID.includes(blackID[i] + 19) && // (col - 1) * 1
                    blackID.includes(blackID[i] + 38) && // (col - 1) * 2
                    blackID.includes(blackID[i] + 57) && // (col - 1) * 3
                    blackID.includes(blackID[i] + 76))   // (col - 1) * 4
                    { alert('Black win!'); return; }
            }
            for (let i = 0; i < whiteID.length; i++) {

                // 좌우
                if (whiteID.includes(whiteID[i] + 1) &&
                    whiteID.includes(whiteID[i] + 2) &&
                    whiteID.includes(whiteID[i] + 3) &&
                    whiteID.includes(whiteID[i] + 4)) 
                    { alert('White win!'); return; }

                // 상하
                if (whiteID.includes(whiteID[i] + 20) &&     // col
                    whiteID.includes(whiteID[i] + 40) && // col * 2
                    whiteID.includes(whiteID[i] + 60) && // col * 3
                    whiteID.includes(whiteID[i] + 80))   // col * 4
                    { alert('White win!'); return; }

                // 왼쪽 대각선
                if (whiteID.includes(whiteID[i] + 21) && // (col + 1) * 1
                    whiteID.includes(whiteID[i] + 42) && // (col + 1) * 2
                    whiteID.includes(whiteID[i] + 63) && // (col + 1) * 3
                    whiteID.includes(whiteID[i] + 84))    // (col + 1) * 4
                    { alert('White win!'); return; }

                // 오른쪽 대각선
                if (whiteID.includes(whiteID[i] + 19) && // (col - 1) * 1
                    whiteID.includes(whiteID[i] + 38) && // (col - 1) * 2
                    whiteID.includes(whiteID[i] + 57) && // (col - 1) * 3
                    whiteID.includes(whiteID[i] + 76))   // (col - 1) * 4
                    { alert('White win!'); return; }
            } 
        })
    })
})

