# 애프터썬케어 설문조사 웹페이지

3분 만에 알아보는 나의 자외선 케어 타입! 실용적이고 유용한 맞춤 솔루션을 제공하는 인터랙티브 설문조사입니다.

## 주요 기능

- **10개 질문**으로 구성된 인터랙티브 설문조사
- **8개 타입 분류** (한국어 이름: 햇살 파이터, 선케어 마스터 등)
- **실용적인 결과 제공**:
  - 발견된 문제점 진단
  - 3단계 케어 루틴 (아침/낮/저녁)
  - 맞춤 제품 추천 (필수템/선택템/업그레이드)
  - UV 상식 바로잡기
  - 상황별 실전 팁
- **각성 유도 콘텐츠**: 자외선 위험성에 대한 충격적인 사실들
- **카카오톡 카드형 공유**: 예쁜 카드 형식으로 친구에게 공유
- **Google Sheets 데이터 수집**: 디버깅 기능 강화
- **이메일 구독** 기능 (신제품 출시 알림)
- **완전 무료 호스팅** 가능

## 프로젝트 구조

```
survey_aftersun/
├── index.html          # 설문 메인 페이지 (각성 콘텐츠 포함)
├── results.html        # 결과 페이지 (카카오 SDK 통합)
├── style.css          # 전체 스타일
├── script.js          # 설문 로직 (10문항, 8타입)
├── results.js         # 결과 페이지 로직 (실용적 콘텐츠)
├── config.js          # Google Sheets API 설정
├── APPS_SCRIPT.md     # Google Apps Script 코드 (디버깅 강화)
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

## 🔥 Google Sheets 데이터 수집 설정 (필수!)

설문 응답을 Google Sheets에 자동으로 저장하려면 다음 단계를 따르세요.

> ⚠️ **중요**: 기존 Apps Script를 사용 중이라면 반드시 새 버전으로 업데이트하세요!

### 📋 빠른 설정 가이드

#### 1️⃣ Google Sheets 열기

1. 기존 스프레드시트를 열거나 [새로 생성](https://sheets.google.com)
2. 시트 이름은 자동으로 "Responses"로 생성됩니다 (수동 생성 불필요!)

#### 2️⃣ Apps Script 코드 업데이트

1. 스프레드시트에서 **확장 프로그램 > Apps Script** 클릭
2. **`APPS_SCRIPT.md`** 파일을 열고 전체 코드 복사 (24-203줄)
3. Apps Script 편집기에 붙여넣기 (기존 코드 모두 삭제 후)
4. **저장** 버튼 클릭 (💾 또는 Ctrl+S)

#### 3️⃣ 테스트 실행 (중요!)

1. 함수 선택 드롭다운에서 **`testPost`** 선택
2. **실행** 버튼 (▶️) 클릭
3. 권한 요청 시:
   - **권한 검토** 클릭
   - 계정 선택
   - **고급** > **[프로젝트명](안전하지 않음)으로 이동** 클릭
   - **허용** 클릭
4. 스프레드시트에 테스트 데이터가 추가되었는지 확인
5. **보기 > 로그** (Ctrl+Enter)에서 성공 메시지 확인

#### 4️⃣ 웹 앱 배포

**기존 배포가 있는 경우:**
1. **배포 > 배포 관리** 클릭
2. 기존 배포 옆 **✏️ 수정** 클릭
3. **새 버전** 선택
4. **배포** 클릭
5. URL이 동일한지 확인 (변경되지 않음)

**새로 배포하는 경우:**
1. **배포 > 새 배포** 클릭
2. 설정:
   - **유형**: 웹 앱
   - **설명**: `Survey Response Handler v2`
   - **다음 사용자로 실행**: **나**
   - **액세스 권한**: **모든 사용자**
3. **배포** 클릭
4. **웹 앱 URL** 복사

#### 5️⃣ config.js 확인

현재 `config.js`에 설정된 URL:
```javascript
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxWGTm3cc2cdz_TdAfQOYvnt8HsoOtT-G41hR1oGfjVxOx0VKSiG-DITwGQ9GeFgMQZ/exec';
```

새로 배포했다면 URL을 업데이트하세요!

#### 6️⃣ 동작 확인

**방법 1: 브라우저 테스트**
- 배포된 URL을 브라우저에 입력
- 다음과 같은 JSON 응답이 보여야 함:
```json
{
  "status": "running",
  "spreadsheetId": "...",
  "sheetExists": true,
  "rowCount": 1
}
```

**방법 2: 실제 설문 제출**
1. 사이트에서 설문 완료
2. Google Sheets에 새 행이 추가되었는지 확인
3. 추가되지 않았다면 **보기 > 실행 기록**에서 에러 확인

### 🔧 문제 해결

#### ❌ "Responses 시트를 찾을 수 없습니다"
**해결**: Apps Script에서 `resetSheet()` 함수 실행

#### ❌ "데이터가 저장되지 않습니다"
**해결**:
1. Apps Script에서 `testPost()` 실행
2. **보기 > 로그** 확인
3. 에러 메시지 복사하여 디버깅

#### ❌ "권한 오류"
**해결**: 배포 설정에서 "다음 사용자로 실행: 나" 확인

#### ✅ "no-cors 경고는 정상입니다"
- 브라우저 콘솔에 CORS 경고가 나와도 데이터는 정상 저장됨
- Google Sheets를 확인하여 실제 저장 여부 체크

### 📊 새로운 데이터 구조 (10문항)

Apps Script는 다음 데이터를 수집합니다:

```
타임스탬프 | UV타입 | 점수 | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 | 액션 | 이메일 | User Agent
```

- **Q1-Q9**: 설문 응답
- **Q10**: `{"age": "30s", "skin": "sensitive"}` 형식의 JSON
- **UV타입**: 8개 타입 중 하나 (fighter, master, calming, active, smart, weekend, relaxed, sunny)
- **점수**: 0-100점
- **액션**: "survey" 또는 "subscribe"
- **이메일**: 구독 신청 시 이메일 주소

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

#### 카카오톡 공유 (이미 설정됨 ✅)

카카오톡 공유 기능은 이미 통합되어 있습니다!

현재 설정된 JavaScript 키: `19105c4ed91255cff90bdffd89dd94d9`

**카카오톡 공유 시 표시되는 내용:**
- 타입 이름 (예: "나는 '햇살 파이터'!")
- UV 케어 점수
- 타입 설명 (tagline)
- 타입 이미지 (선택사항)

**이미지 추가 (선택사항):**
코드는 `/images/{type}.jpg` 경로의 이미지를 찾습니다. 8개 이미지 추가 방법:
1. 프로젝트 폴더에 `images` 디렉토리 생성
2. 다음 파일들 추가 (600x400px 또는 1200x630px 권장):
   - `fighter.jpg` (햇살 파이터)
   - `master.jpg` (선케어 마스터)
   - `calming.jpg` (진정 전문가)
   - `active.jpg` (액티브 케어러)
   - `smart.jpg` (알뜰 케어러)
   - `weekend.jpg` (주말 워리어)
   - `relaxed.jpg` (여유로운 영혼)
   - `sunny.jpg` (태양의 친구)
3. 이미지 없이도 공유 기능은 정상 작동합니다

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
**버전**: 2.0.0 (2024-11-14)
**주요 변경사항**:
- 10문항으로 간소화
- 8개 실용적 타입 시스템
- 각성 유도 콘텐츠 추가
- 카카오톡 카드형 공유
- 디버깅 강화된 Apps Script
