# ProductTable React Project

React와 TypeScript를 사용한 제품 테이블 애플리케이션입니다.

## 🚀 기술 스택

- **React 18** - 사용자 인터페이스 라이브러리
- **TypeScript** - 타입 안전성을 위한 JavaScript 확장
- **Vite** - 빠른 개발 서버 및 빌드 도구
- **ESLint** - 코드 품질 관리
- **pnpm** - 패키지 매니저

## 📋 기능

- 제품 목록을 테이블 형태로 표시
- 카테고리별 제품 그룹화
- 제품 검색 기능
- 재고 상태에 따른 필터링
- 재고 없는 제품 빨간색 표시

## 🛠️ 설치 및 실행

### 1. 저장소 클론

```bash
git clone https://github.com/사용자명/product-table.git
cd product-table
```

### 2. 의존성 설치

```bash
pnpm install
```

### 3. 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 `http://localhost:5173`으로 접속하세요.

### 4. 빌드

```bash
pnpm build
```

## 📁 프로젝트 구조

```
product-table/
├── src/
│   ├── components/
│   │   ├── filterable-product-table.tsx
│   │   ├── product-table.tsx
│   │   ├── product-row.tsx
│   │   ├── product-category-row.tsx
│   │   └── search-bar.tsx
│   ├── types/
│   │   └── product-type.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
├── package.json
└── README.md
```

## 🎯 주요 컴포넌트

- **FilterableProductTable**: 메인 컴포넌트
- **ProductTable**: 제품 테이블 표시
- **ProductRow**: 개별 제품 행
- **ProductCategoryRow**: 카테고리 헤더
- **SearchBar**: 검색 및 필터 기능

## 📝 사용된 HTML 태그

이 프로젝트에서는 다양한 HTML 태그들을 사용합니다:

- **테이블 관련**: `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>`
- **폼 관련**: `<form>`, `<input>`, `<label>`
- **컨테이너**: `<div>`
- **텍스트 스타일링**: `<span>`

자세한 내용은 `HTML_TAGS_DOCUMENTATION.md` 파일을 참조하세요.

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 새로운 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 👨‍💻 개발자

[GitHub 프로필 링크]

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!
