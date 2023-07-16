const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

/* -------------------------------------------------------------------------- */
/*                                    아이디부분                                   */
/* -------------------------------------------------------------------------- */

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function validateEmail(inputNode) {
  const email = inputNode.value;
  const isValid = emailReg(email);
  if (isValid) {
    inputNode.classList.remove("is--invalid");
  } else {
    inputNode.classList.add("is--invalid");
  }
}

// 이메일 입력 필드 변화 시 이메일 유효성 검사 함수를 호출
const emailInput = document.querySelector("#userEmail");
emailInput.addEventListener("input", function () {
  validateEmail(this);
});

/* -------------------------------------------------------------------------- */
/*                                   비밀번호 부분                                  */
/* -------------------------------------------------------------------------- */
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function validatePassword(inputNode) {
  const password = inputNode.value;
  const isValid = pwReg(password);
  if (isValid) {
    inputNode.classList.remove("is--invalid");
  } else {
    inputNode.classList.add("is--invalid");
  }
}

const passwordInput = document.querySelector("#userPassword");
passwordInput.addEventListener("input", function () {
  validatePassword(this);
});

/* -------------------------------------------------------------------------- */
/*                                   유효성검사부분                                  */
/* -------------------------------------------------------------------------- */

function handleLogin(event) {
  event.preventDefault();

  const emailInput = document.querySelector("#userEmail");
  const email = emailInput.value;

  const passwordInput = document.querySelector("#userPassword");
  const password = passwordInput.value;

  const user = {
    id: "lion@lion.com",
    pw: "lion@123",
  };

  if (email === user.id && password === user.pw) {
    // 유효한 이메일과 비밀번호가 제출되면 로그인 성공 메시지를 출력
    alert("로그인 성공!");
    // 여기에 로그인 성공 후의 추가 동작을 구현하세요.
    window.location.href = "welcome.html";
  } else {
    // 유효하지 않은 이메일 또는 비밀번호가 제출되면 오류 메시지를 출력
    alert("존재하지 않은 이메일 또는 틀린 비밀번호입니다.");
  }
}

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleLogin);
