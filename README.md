# 2월 챌린지, TypeScript 사전미션
- 원티드 프리온보딩 프론트엔드 챌린지: **Todo 앱을 JSDoc으로 문서화** 하는 챌린지 과제입니다.
## 💻 About Project
Todo 데이터와 함수들을 JSDoc를 활용하여 정의
## 🙋🏻‍♀️ About ME
> 안녕하세요. 걸어다니는 Idea DB, 머릿속 상상을 실현시키는 **웹 개발자 박수지** 입니다.
<br>
일상의 불편함을 메모장에, 꽂히는 디자인은 갤러리에, 오늘 하루 배운 점은 velog에 매일 아이디어 데이터를 저장합니다. 
<br>그리고 이제는 Idea DB에 저장된 데이터를 구현해 보고자 합니다.
<br>
[Notion](https://www.notion.so/Park-Suji-c2fbd2d7a87b4820b357d8d12a35eeaf)
&nbsp; [Github](https://github.com/lzns960)

[2023.01.28]<br>
이번에 JSDoc를 처음 접했습니다. 
과거엔 구글 검색으로 문서화된 코드를 봐도 모든 페이지를 상세하게 훑어봐야 원하는 정보를 찾았습니다. 
사전 과제를 준비하면서 JsDoc 문서가 모듈, 클래스, 전역 등의 일반 섹션으로 분할되어 있는 것을 이해했으며, Parameter Properties 등의 출력화면 위치를 알게 되어 조금 더 빠르게 원하는 정보를 찾을 수 있게 되었습니다.
해당 챌린지를 통해 TypeScript 기술 역량이 향상되기를 기대하고 있습니다. 
## ⚠️ Mission Guide
- 요구 사항을 구현하지 않고 설계만합니다.
- 모든 요구사항은 JSDoc을 기반으로 수행합니다.
- 제출할 저장소 명은 wanted-pre-onboarding-challenge-fe-2로 생성해 주세요. (Public 권한 필요)
- 완성한 과제의 저장소 링크를 모집 마감 후 설문 조사를 통해 제출해주세요. (개강 시 설문 조사 링크 전달 예정)
- 과제 수행 개수에 따라 기본적인 평가가 이루어지며, 커리큘럼 운영 과정에서 최소한의 수준을 파악하기 위한 용도입니다.
- 해당 과제에 대한 해설은 개강 후 진행될 예정입니다.
- README.md를 꼭 작성해 주세요. 본인에 대한 소개나 프로젝트 소개 등 자유롭게 작성해주시면 됩니다.
- JSDoc 환경 구성에 어색한 경우 [Boilerplate](https://github.com/pocojang/jsdoc-boilerplate)를 이용하셔도 됩니다

## 📝 Requirements

### 필수 요구사항
>아래의 Todo 앱 요구사항을 참고하여

- 필요한 데이터를 모두 모델링한다.
- 사용되는 모든 함수를 `선언부만` 만든다. (함수 및 클래스의 내부는 구현하지 않습니다.)
- `JSDoc`을 활용해 문서화한다.
- `GitHub Page`를 활용해 `JSDoc` 정적 페이지를 배포한다.

### Todo

```js
Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}
```

#### CREATE

- 할 일을 추가할 수 있다.
- 내용없이 추가할 수 없다.

#### READ

- 모든 할 일을 조회할 수 있다.
- ID를 기반으로 특정 할 일을 조회할 수 있다.

#### UPDATE

- ID를 제외한 모든 속성을 수정할 수 있다.
- 특정 할 일의 특정 태그를 수정할 수 있다.

#### DELETE

- ID를 기반으로 특정 할 일을 삭제할 수 있다.
- 모든 할 일을 제거할 수 있다.
- 특정 할 일의 특정 태그를 삭제할 수 있다.
- 특정 할 일의 모든 태그를 제거할 수 있다.


#### Modeling (Shape)

```js
Item {
  property(required),
  property(optional),
}
```

#### Reference

- [use JSDoc](https://jsdoc.app)
- [JSDoc Boilerplate](https://github.com/pocojang/jsdoc-boilerplate)
- - -
- [JSDoc 사용법](https://okayoon.tistory.com/entry/JSDoc%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%84%9C-Javasript-%EB%AC%B8%EC%84%9C%ED%99%94%ED%95%B4%EB%B3%B4%EC%9E%90)
- [Clean JSDoc theme](https://github.com/ankitskvmdam/clean-jsdoc-theme)
- [jsdoc-reference] (https://typescript-kr.github.io/pages/jsdoc-reference.html)
