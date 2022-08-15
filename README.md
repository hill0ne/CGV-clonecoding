### **📍 프로젝트 소개**

CGV 웹 페이지를 1920px 해상도 기준으로 구현한 클론코딩 프로젝트입니다.

### **🚀 프로젝트 목표**

- 라이브러리를 사용하지 않고 100% 하드코딩 (✔️완료)
- 슬라이드, 애니메이션 모두 Javascript 함수로 작성 (✔️완료)
- WAI-ARIA 접근성 높이기 (👣진행중)
- 접근성에 따라 tab 키보드 만으로 모든 메뉴 이동 (👣진행중)

### **🔩 사용 기술**

- HTML - 웹 표준을 준수한 시맨틱 마크업 , WAI-ARIA
- CSS - 사용자 지정 변수
- JavaScript

### ❇️ Advanced Feature

- scroll 이벤트와 scrollTop API를 사용하여 예매 버튼, 상위이동 버튼이 노출되도록 구현하였습니다.
- tab 키로 gnb 메뉴에 접근할 수 있도록 하였고, 키보드로도 메뉴가 dropdown 될 수 있도록 접근성을 높였습니다.
- Special Hall 이미지 변경 구현은, data-set 속성과 자바스크립트 객체의 id 를 연결하여 마우스 over 이벤트가 발생할 때 마다 이미지의 src 값이 변경되도록 하였습니다.

```jsx
const Images = [
  {
    id: "1",
    src: "./assets/img/special-suitecinema.png",
  },
  {
    id: "2",
    src: "./assets/img/special-skybox.png",
  },
  {
    id: "3",
    src: "./assets/img/special-4DX.png",
  },
  {
    id: "4",
    src: "./assets/img/cinedechef.png",
  },
];

for (const item of special_li) {
  const a = item.firstElementChild;
  const span = item.firstElementChild;
  const dataID = a.dataset.id;
  item.addEventListener("mouseover", () => {
    image.src = Images[dataID].src;
    checked.classList.remove("list-checked");
    item.classList.add("list-checked");
    span.style.cssText = `border: none`;
  });
}
```

### **💭 이슈 및 개선사항**

- 슬라이드 애니메이션을 구현할 때 시퀀스의 너비 만큼 translate 이동을 시켰는데 이동 값이 정상적으로 적용되지 않았습니다. 마크업 부분을 살펴보니 시퀀시 이미지들을 감싸고 있는  슬라이드에 이동값을 준 것이 문제임을 발견했습니다. 슬라이드를 감싸는 wrapper를 한번 더 마크업 하고,  슬라이드 wrapper 너비를 고정으로 두고 슬라이드에 이동값을 주도록 수정하였습니다.
- gnb hover 상태에서 원래 상태로 돌아올 때 천천히 돌아오는 애니메이션 적용이 되지 않습니다. 라이브러리 없이 자바스크립트로만 제어했고, transition 속도를 적용시키면 될 줄 알았는데 작동되지 않아 현재 개선중에 있습니다.
- 버튼을 클릭하면 슬라이드가 이동되는 수동 슬라이드 기능을 Javascript로 구현중에 있습니다.

### 💡 느낀점
- 처음 클론코딩을 도전했는데 제 생각보다 시간이 더 걸려서 기획단계에서의 충분한 시간분배가 중요함을 느꼈습니다.
- WAI-ARIA 를 적용할 때 처음엔 비슷한 속성들이 많고 속성의 목적을 명확하게 이해하지 못해 시행착오가 많았습니다. <br>
  MDN 공식문서와 여러 웹 접근성 기술 블로그들을 정독하면서 WAI-ARIA에 대한 중요도와 이해도를 높일 수 있었습니다.
- <영화관람권 >부분을 마크업 할 때 초반에 dl - dt - dd 로 작업을 했는데 단지 상품명과 상품 내용, 금액이 적혀있다고 해서<br>
  description 요소를 사용하기에는 목적에 부합하지 않다는 것을 알게 되었고, dl 요소와 ul 요소의 차이를 한번 더 정리할 수 있었습니다.<br>
  ![image](https://user-images.githubusercontent.com/86298249/184577684-0574dfec-ef3c-4094-ac88-83e2ca54d788.png)

