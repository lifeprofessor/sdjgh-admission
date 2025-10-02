# 서대전여자고등학교 홍보 홈페이지

중학교 3학년 여학생들을 위한 서대전여자고등학교 홍보 웹사이트입니다.

## 📱 주요 특징

- ✅ **완벽한 반응형 디자인** - 모바일, 태블릿, 데스크톱 모두 지원
- ✅ **인터랙티브 데이터 시각화** - Chart.js를 활용한 대학 합격 현황 차트
- ✅ **세련된 프리미엄 디자인** - 그라데이션, 유리모피즘, 플로팅 애니메이션
- ✅ **부드러운 애니메이션** - 스크롤 기반 fade-in, 호버 효과, 동적 배경
- ✅ **빠른 로딩 속도** - 순수 HTML/CSS/JavaScript로 구현
- ✅ **눈에 띄는 통계 카드** - 합격 실적을 강조하는 임팩트 있는 디자인

## 📂 파일 구조

```
sdjgh_advertisement/
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css       # 커스텀 CSS 스타일
├── js/
│   └── main.js         # JavaScript 로직
├── logo/
│   ├── sdjgh_logo.png  # 학교 로고 (엠블럼)
│   └── sdj-logo2.png   # 학교 배너 로고
└── README.md           # 프로젝트 설명 (이 파일)
```

## 🚀 GitHub Pages 배포 방법

### 1. GitHub 저장소 생성
1. GitHub에 로그인
2. 새 저장소(Repository) 생성
3. 저장소 이름: `sdjgh-website` (원하는 이름)
4. Public으로 설정

### 2. 코드 업로드

**방법 1: GitHub 웹에서 직접 업로드**
1. 저장소 페이지에서 "Add file" → "Upload files" 클릭
2. 모든 파일을 드래그 앤 드롭
3. "Commit changes" 클릭

**방법 2: Git 명령어 사용**
```bash
# 저장소 초기화
git init
git add .
git commit -m "Initial commit: 서대전여고 홍보 홈페이지"

# GitHub 저장소 연결
git remote add origin https://github.com/your-username/sdjgh-website.git
git branch -M main
git push -u origin main
```

### 3. GitHub Pages 활성화
1. 저장소 페이지에서 "Settings" 클릭
2. 왼쪽 메뉴에서 "Pages" 클릭
3. "Source" 섹션에서:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
4. "Save" 클릭

### 4. 사이트 접속
- 배포 완료까지 1-2분 대기
- 주소: `https://your-username.github.io/sdjgh-website/`

## 🎨 페이지 구성

### 1. Hero Section (첫 화면)
- 학교의 비전과 가치를 담은 메인 메시지
- 홍보 영상 및 웹툰 링크 버튼

### 2. 대학 합격 현황 (데이터 시각화)
- 최근 3년간 주요 대학 합격자 통계
- 필터링 기능 (전체/수도권/의치약한수/국립대)
- Chart.js 기반 인터랙티브 차트

### 3. 교육과정 소개
- 고교학점제 선도학교 특징
- 과학중점학급 프로그램
- 글로벌 리더 양성 과정

### 4. 학교생활
- 60여 개의 동아리 소개 (카드 캐러셀)
- 급식 사진 갤러리

### 5. FAQ
- 학생들의 궁금증 해소
- 아코디언 형식의 질문/답변

### 6. Footer
- 학교 정보 및 연락처
- 공식 블로그 링크

## 🛠️ 기술 스택

- **HTML5** - 시맨틱 마크업
- **CSS3** - 커스텀 스타일 + Tailwind CSS (CDN)
- **JavaScript (ES6+)** - 인터랙션 로직
- **Chart.js** - 데이터 시각화
- **Google Fonts** - Noto Sans KR

## 📝 콘텐츠 수정 방법

### 대학 합격 데이터 변경
`js/main.js` 파일의 `chartData` 객체를 수정:

```javascript
const chartData = {
    all: {
        labels: ['2023년', '2024년', '2025년'],
        datasets: [{
            label: '수도권 주요대학',
            data: [85, 92, 105],  // 숫자 변경
            // ...
        }]
    }
};
```

### 동아리 정보 변경
`index.html` 파일의 동아리 카드 섹션을 수정

### 이미지 교체
1. 급식 사진: `index.html`의 `placehold.co` URL을 실제 이미지 경로로 변경
2. 로고: `logo/` 폴더의 파일 교체

### 색상 테마 변경
- `css/style.css`에서 색상 코드 수정
- 주 색상: `#EF4444` (빨간색)

## 📱 반응형 브레이크포인트

- 모바일: < 768px
- 태블릿: 768px ~ 1024px
- 데스크톱: > 1024px

## 🔧 추가 개선 사항 (향후)

- [ ] 실제 홍보 영상 링크 연결
- [ ] 실제 급식 사진으로 교체
- [ ] Google Analytics 추가
- [ ] SEO 메타 태그 최적화
- [ ] 입학 안내 페이지 추가
- [ ] 학교 위치 지도 추가

## 📞 문의

서대전여자고등학교
- 주소: 대전광역시 서구 계룡로 585번길 55
- 웹사이트: (학교 공식 웹사이트 URL)

---

© 2025 Seodaejeon Girls' High School. All Rights Reserved.

