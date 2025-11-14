# 애프터썬케어 설문조사 웹페이지

5분 만에 알아보는 나의 자외선 케어 타입! MBTI 스타일의 인터랙티브 설문조사 웹페이지입니다.

## 주요 기능

- 13개 질문으로 구성된 인터랙티브 설문조사
- MBTI 스타일의 4글자 타입 분류 (총 16개 타입)
- 타입별 맞춤 제품 추천
- SNS 공유 기능
- Google Sheets를 통한 응답 데이터 수집
- 이메일 구독 기능
- 완전 무료 호스팅 가능

## 프로젝트 구조

```
survey_aftersun/
├── index.html          # 설문 메인 페이지
├── results.html        # 결과 페이지
├── style.css          # 전체 스타일
├── script.js          # 설문 로직
├── results.js         # 결과 페이지 로직
├── config.js          # Google Sheets API 설정
└── README.md          # 이 파일
```

## 빠른 시작

### 1. 로컬에서 테스트하기

1. 이 디렉토리에서 다음 명령어 실행:
   ```bash
   # Python 3가 설치되어 있다면
   python3 -m http.server 8000

   # 또는 Node.js의 http-server를 사용
   npx http-server -p 8000
   ```

2. 브라우저에서 `http://localhost:8000` 접속

### 2. 무료 호스팅 배포

#### GitHub Pages로 배포 (가장 간단)

1. GitHub에 새 저장소 생성
2. 이 폴더의 모든 파일을 저장소에 푸시:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. GitHub 저장소 > Settings > Pages
4. Source를 "main" 브랜치로 선택
5. 저장하면 `https://YOUR_USERNAME.github.io/YOUR_REPO` 주소로 배포됨

#### Netlify로 배포 (추천)

1. [Netlify](https://www.netlify.com/) 가입 (무료)
2. "Add new site" > "Deploy manually" 선택
3. 이 폴더를 드래그 앤 드롭
4. 즉시 배포 완료! (커스텀 도메인 연결 가능)

#### Vercel로 배포

1. [Vercel](https://vercel.com/) 가입 (무료)
2. GitHub 저장소 연결 또는 폴더 드래그 앤 드롭
3. 자동 배포 완료

## Google Sheets 데이터 수집 설정

설문 응답을 Google Sheets에 자동으로 저장하려면 다음 단계를 따르세요.

### 1. Google Sheets 준비

1. [Google Sheets](https://sheets.google.com)에서 새 스프레드시트 생성
2. 시트 이름을 "Responses"로 변경
3. 첫 번째 행에 다음 헤더 입력:
   ```
   타임스탬프 | UV타입 | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 | Q11 | Q12 | Q13 | 액션 | 이메일 | User Agent
   ```

### 2. Google Apps Script 설정

1. 스프레드시트에서 **확장 프로그램 > Apps Script** 클릭
2. 다음 코드를 복사하여 붙여넣기:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Responses');
    const data = JSON.parse(e.postData.contents);

    // 응답 데이터를 배열로 변환
    const row = [
      data.timestamp || new Date().toISOString(),
      data.uvType || '',
      Array.isArray(data.q1) ? data.q1.join(', ') : data.q1 || '',
      data.q2 || '',
      data.q3 || '',
      data.q4 || '',
      Array.isArray(data.q5) ? data.q5.join(', ') : data.q5 || '',
      data.q6 || '',
      data.q7 || '',
      data.q8 || '',
      data.q9 || '',
      data.q10 || '',
      data.q11 || '',
      data.q12 || '',
      data.q13 || '',
      data.action || 'survey',
      data.email || '',
      data.userAgent || ''
    ];

    // 시트에 추가
    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Survey API is running')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

3. **저장** 버튼 클릭 (💾)

### 3. 웹 앱으로 배포

1. **배포 > 새 배포** 클릭
2. 설정:
   - **유형 선택**: 웹 앱
   - **설명**: Survey Response Handler
   - **다음 사용자로 실행**: 나
   - **액세스 권한**: 모든 사용자
3. **배포** 클릭
4. **액세스 승인** 클릭하고 Google 계정으로 로그인
5. "Google에서 이 앱을 확인하지 않았습니다" 경고가 나오면:
   - **고급** 클릭
   - **[프로젝트명] (안전하지 않음)으로 이동** 클릭
   - **허용** 클릭
6. **웹 앱 URL** 복사 (https://script.google.com/macros/s/.../exec 형식)

### 4. config.js 설정

1. `config.js` 파일을 열고
2. 복사한 웹 앱 URL을 붙여넣기:
   ```javascript
   const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
   ```
3. 저장하고 재배포

### 5. 테스트

1. 설문조사를 완료하고 제출
2. Google Sheets에서 응답이 자동으로 추가되는지 확인

## 데이터 분석

Google Sheets에 수집된 데이터를 다음과 같이 분석할 수 있습니다:

### 기본 통계

1. **타입별 분포**:
   - B열(UV타입) 선택 > 삽입 > 차트 > 파이 차트

2. **질문별 응답 분포**:
   - 각 질문 열 선택 > 삽입 > 차트 > 막대 차트

### 피벗 테이블

1. 데이터 > 피벗 테이블 만들기
2. 행: UV타입, 값: 개수
3. 타입별 상세 분석 가능

### 내보내기

- 파일 > 다운로드 > CSV, Excel 등으로 내보내기
- 다른 분석 도구(Python, R, Excel 등)에서 활용

## 커스터마이징

### 질문 수정

`script.js`의 `surveyQuestions` 배열을 수정하세요.

### 타입 설명 수정

`results.js`의 `uvTypes` 객체를 수정하세요.

### 디자인 변경

`style.css`에서 다음 변수를 수정하여 색상 변경:
```css
:root {
    --primary-color: #FF6B6B;
    --secondary-color: #4ECDC4;
    --accent-color: #FFE66D;
    ...
}
```

### SNS 공유 설정

#### 카카오톡 공유

1. [Kakao Developers](https://developers.kakao.com/) 가입
2. 앱 생성 및 JavaScript 키 발급
3. `results.html`에 카카오 SDK 추가:
   ```html
   <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
   ```
4. `results.js`의 `shareKakao()` 함수 구현

## 기술 스택

- **프론트엔드**: HTML5, CSS3, JavaScript (ES6+)
- **데이터 수집**: Google Apps Script + Google Sheets
- **호스팅**: GitHub Pages / Netlify / Vercel (무료)

## 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)
- 모바일 브라우저 (iOS Safari, Chrome Mobile)

## 문제 해결

### Q: 설문 제출 후 데이터가 Google Sheets에 저장되지 않아요

A: 다음을 확인하세요:
1. `config.js`에 올바른 웹 앱 URL이 설정되어 있는지
2. Apps Script 배포 시 "모든 사용자" 액세스 권한으로 설정했는지
3. 브라우저 개발자 도구(F12) > Console에서 에러 메시지 확인

### Q: 로컬에서 파일을 바로 열면 작동하지 않아요

A: 보안상의 이유로 브라우저에서 `file://` 프로토콜로는 일부 기능이 제한됩니다. 반드시 로컬 서버를 실행하여 `http://localhost`로 접속하세요.

### Q: 모바일에서 디자인이 깨져요

A: 현재 반응형 디자인이 적용되어 있습니다. 특정 기기에서 문제가 있다면 `style.css`의 미디어 쿼리를 조정하세요.

## 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

## 기여

버그 리포트나 기능 제안은 이슈로 등록해주세요!

## 연락처

프로젝트 관련 문의사항이 있으시면 이슈를 생성해주세요.

---

**만든 사람**: Claude & You
**버전**: 1.0.0
**최종 업데이트**: 2024
