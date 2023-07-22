# 과제 설명

---

1.이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어주세요.
a. 이벤트 위임

```js
navigation.addEventListener("click", handleSlider);
```

b. 반복문

```js
list.forEach((li) => removeClass(li, "is-active"));
```

---

2.이미지와 색상의 데이터는 data.js 에서 불러와주세요.

```js
setBgColor(body, data[index - 1].color);
setImage(visualImage, data[index - 1].name);
```

---

3.각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.
a.배경색 변경 ( colorB의 기본값은 #000 설정 못함 )

```js
const target = e.target.closest("li");
setImage(visualImage, data[index - 1].name);
```

b.이미지 변경

```js
setBgColor(body, data[index - 1].color);
```

---

4.비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요.

```js
nickName.innerHTML = data[index - 1].name;
```

---

5.함수를 분리시켜주세요.

```js
function setBgColor(node, prop) {
  attr(node, "style", `background: linear-gradient(to bottom,${prop});`);
}

function setImage(node, prop) {
  attr(node, "src", `./assets/${prop}.jpeg`);
}

function setNameText(node, prop) {
  attr(node, "alt", prop);
}
```
