# 과제 설명

---

지피티의 도움으로 만들었음

1.email 정규표현식을 사용한 조건처리

```js
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
```

---

2.email 정규표현식을 사용한 조건처리

```js
function validatePassword(inputNode) {
  const password = inputNode.value;
  const isValid = pwReg(password);
  if (isValid) {
    inputNode.classList.remove("is--invalid");
  } else {
    inputNode.classList.add("is--invalid");
  }
}

// 비밀번호 입력 필드 변화 시 비밀번호 유효성 검사 함수를 호출
const passwordInput = document.querySelector("#userPassword");
passwordInput.addEventListener("input", function () {
  validatePassword(this);
});
```

---

3.로그인 버튼을 클릭시 user.id, user.pw.의 값과 input의 값을 비교, 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동

```js
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
```
