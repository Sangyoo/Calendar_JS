console.log("hello, vanilla.");

// 오늘의 현재 요일 표기
// 오늘의 현재 날짜 표기
// 오늘의 현재 월 표기
// 오늘의 현재 연도 표기
// 일,월,화,수,목,금,토 요일 라벨링 표기
// 현재 월의 1일이 무슨 요일인지 판별하고, 해당 요일 라벨링에 1일 표기하기
// 현재 월의 마지막 날짜까지 달력에 표기하기
// 우측 화살표를 클릭 했을때, 다음 달의 요일 및 날짜 표기
// 좌측 화살표를 클릭 했을때, 이전 달의 요일 및 날짜 표기
// 특정 날짜를 클릭 했을때, 상단의 요일 및 날짜 반영하기

const abcs = document.querySelectorAll("tr>td");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const dayHeader = document.querySelector(".current-day");
const dateHeader = document.querySelector(".current-date");
const myHeader = document.querySelector(".current-month-year");
let td = new Date();
let firstDay, lastDate;


function findDay(number){
  switch(number) {
    case 0 : return "Sun"
    case 1 : return "Mon"
    case 2 : return "Tue"
    case 3 : return "Wed"
    case 4 : return "Thu"
    case 5 : return "Fri"
    case 6 : return "Sat"
    default: {
      alert("없는 요일입니다");
      break;
    }
    
  }
}

function findMonth(number){
  switch(number) {
    case 0 : return "Jan"
    case 1 : return "Feb"
    case 2 : return "Mar"
    case 3 : return "April"
    case 4 : return "May"
    case 5 : return "Jun"
    case 6 : return "Jul"
    case 7 : return "Aug"
    case 8 : return "Sep"
    case 9 : return "Oct"
    case 10 : return "Nov"
    case 11 : return "Dec"
    default: {
      alert("없는 월입니다");
      break;
    }
  }
}

function erase() {
  for(let i = 0 ; i < abcs.length; i++) {
    abcs[i].textContent= "";
  }
}

function showCal(ts) {
  erase();
  dayHeader.textContent = findDay(ts.getDay());
  dateHeader.textContent = ts.getDate();
  myHeader.textContent = findMonth(ts.getMonth()) + " " + ts.getFullYear();
  let temp = ts;
  temp.setDate(1);
  firstDay = temp.getDay();
  temp.setMonth(temp.getMonth()+1);
  temp.setDate(0);
  lastDate = temp.getDate();
  for(let i = 0 ; i < lastDate; i++) {
    abcs[firstDay+i].innerHTML = `${i+1}`;
  }
}

showCal(td);


leftBtn.addEventListener("click", (x)=> {
  console.log("leftbtn");
  td.setMonth(td.getMonth()-1,1);
  showCal(td);
});

rightBtn.addEventListener("click", (x)=> {
  console.log("rightbtn");
  td.setMonth(td.getMonth()+1,1);
  showCal(td);
});

//abcs는 배열이기 떄문에 for문을 돌려서 전부 해줘야 한다.
//아니면 n번째 요소를 특정하던지
for(let i = 0; i < abcs.length; i++){
  abcs[i].addEventListener("click", (x) => {
    // console.log(abcs[i].textContent);
    // console.log(td);
    td.setDate(Number(abcs[i].textContent));
    dayHeader.textContent = findDay(td.getDay());
    dateHeader.textContent = td.getDate();
  });
};










