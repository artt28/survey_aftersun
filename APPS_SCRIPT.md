# Google Apps Script 코드 (개선 버전)

## 문제 해결: 데이터가 스프레드시트에 반영되지 않는 경우

이 코드는 디버깅 기능이 강화된 버전입니다.

## 설치 방법

### 1. Google Sheets 준비

1. [Google Sheets](https://sheets.google.com)에서 스프레드시트 열기
2. **시트 이름을 정확히 "Responses"로 변경** (대소문자 구분!)
3. 첫 번째 행(헤더)은 비워두거나 다음과 같이 입력:
   ```
   타임스탬프 | UV타입 | 점수 | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 | 액션 | 이메일 | User Agent
   ```

### 2. Apps Script 코드 복사

1. 스프레드시트에서 **확장 프로그램 > Apps Script** 클릭
2. 기존 코드를 모두 삭제하고 아래 코드를 붙여넣기
3. **저장** (Ctrl+S 또는 💾 버튼)

```javascript
/**
 * UV 케어 설문조사 응답 처리
 * 개선 버전 - 디버깅 및 에러 핸들링 강화
 */

function doPost(e) {
  const startTime = new Date();

  try {
    // 1. 스프레드시트 접근
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName('Responses');

    // 시트가 없으면 생성
    if (!sheet) {
      sheet = spreadsheet.insertSheet('Responses');
      // 헤더 추가
      sheet.appendRow([
        '타임스탬프', 'UV타입', '점수', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5',
        'Q6', 'Q7', 'Q8', 'Q9', 'Q10', '액션', '이메일', 'User Agent'
      ]);
    }

    // 2. 데이터 파싱
    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseError) {
      throw new Error('JSON 파싱 실패: ' + parseError.toString());
    }

    // 3. 데이터 로깅 (실행 기록에서 확인 가능)
    Logger.log('받은 데이터: ' + JSON.stringify(data));

    // 4. 응답 데이터를 배열로 변환
    const row = [
      data.timestamp || new Date().toISOString(),
      data.uvType || '',
      data.score || '',
      formatAnswer(data.q1),
      formatAnswer(data.q2),
      formatAnswer(data.q3),
      formatAnswer(data.q4),
      formatAnswer(data.q5),
      formatAnswer(data.q6),
      formatAnswer(data.q7),
      formatAnswer(data.q8),
      formatAnswer(data.q9),
      formatAnswer(data.q10),
      data.action || 'survey',
      data.email || '',
      data.userAgent || ''
    ];

    // 5. 시트에 추가
    sheet.appendRow(row);

    // 6. 성공 로깅
    const endTime = new Date();
    const duration = endTime - startTime;
    Logger.log('데이터 저장 성공. 소요 시간: ' + duration + 'ms');

    // 7. 성공 응답
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Data saved successfully',
        rowNumber: sheet.getLastRow(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // 에러 상세 로깅
    Logger.log('❌ 오류 발생: ' + error.toString());
    Logger.log('스택: ' + error.stack);

    // 에러 응답
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * GET 요청 처리 (테스트용)
 */
function doGet(e) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName('Responses');

  const info = {
    status: 'running',
    spreadsheetId: spreadsheet.getId(),
    spreadsheetName: spreadsheet.getName(),
    sheetExists: sheet ? true : false,
    sheetName: sheet ? sheet.getName() : 'N/A',
    rowCount: sheet ? sheet.getLastRow() : 0,
    timestamp: new Date().toISOString()
  };

  return ContentService
    .createTextOutput(JSON.stringify(info, null, 2))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * 답변 포맷팅 (배열이면 콤마로 연결)
 */
function formatAnswer(answer) {
  if (answer === null || answer === undefined) {
    return '';
  }
  if (Array.isArray(answer)) {
    return answer.join(', ');
  }
  return answer.toString();
}

/**
 * 테스트 함수 - Apps Script 편집기에서 직접 실행 가능
 */
function testPost() {
  Logger.log('=== 테스트 시작 ===');

  const testData = {
    timestamp: new Date().toISOString(),
    uvType: 'fighter',
    score: 85,
    q1: ['heat', 'red'],
    q2: 'know_care',
    q3: 'yes_care',
    q4: 'everyday',
    q5: ['mask', 'mist'],
    q6: 'often',
    q7: '30_to_60',
    q8: 'light_outdoor',
    q9: 'very_need',
    q10: 'ingredients',
    action: 'survey',
    email: 'test@example.com',
    userAgent: 'Test User Agent'
  };

  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };

  const result = doPost(e);
  Logger.log('응답: ' + result.getContent());
  Logger.log('=== 테스트 완료 ===');
}

/**
 * 시트 초기화 함수 (필요시)
 */
function resetSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName('Responses');

  if (sheet) {
    spreadsheet.deleteSheet(sheet);
  }

  sheet = spreadsheet.insertSheet('Responses');
  sheet.appendRow([
    '타임스탬프', 'UV타입', '점수', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5',
    'Q6', 'Q7', 'Q8', 'Q9', 'Q10', '액션', '이메일', 'User Agent'
  ]);

  Logger.log('시트가 초기화되었습니다.');
}
```

### 3. 테스트 실행

코드를 붙여넣은 후:

1. 함수 선택 드롭다운에서 **`testPost`** 선택
2. **실행** 버튼 (▶️) 클릭
3. 권한 요청 시 **승인**
4. 실행 후 **보기 > 로그** 또는 **실행 기록** 확인
5. 스프레드시트에 테스트 데이터가 추가되었는지 확인

### 4. 웹 앱 배포

1. **배포 > 새 배포** 클릭
2. 설정:
   - 유형: **웹 앱**
   - 설명: `Survey Response Handler v2`
   - 다음 사용자로 실행: **나**
   - 액세스 권한: **모든 사용자**
3. **배포** 클릭
4. 웹 앱 URL 복사

### 5. 디버깅 방법

#### 방법 1: 브라우저에서 GET 요청 테스트

배포된 웹 앱 URL을 브라우저에 붙여넣기:
```
https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

다음과 같은 정보가 표시되어야 합니다:
```json
{
  "status": "running",
  "spreadsheetId": "...",
  "spreadsheetName": "...",
  "sheetExists": true,
  "sheetName": "Responses",
  "rowCount": 1,
  "timestamp": "..."
}
```

#### 방법 2: 실행 기록 확인

1. Apps Script 편집기에서 **보기 > 실행 기록**
2. 최근 실행 내역 확인
3. 오류가 있으면 상세 내용 확인

#### 방법 3: 로그 확인

1. `testPost()` 함수 실행 후
2. **보기 > 로그** (Ctrl+Enter)
3. 상세 로그 확인

### 6. 일반적인 문제 해결

**문제: "Responses 시트를 찾을 수 없습니다"**
- 해결: 시트 이름을 정확히 "Responses"로 변경 (대소문자 구분)
- 또는: `resetSheet()` 함수 실행

**문제: "권한이 없습니다"**
- 해결: 배포 설정에서 "다음 사용자로 실행: 나" 확인

**문제: "데이터가 저장되지 않습니다"**
- 해결: `testPost()` 함수로 직접 테스트
- 로그에서 오류 메시지 확인

**문제: "CORS 오류"**
- 해결: 정상입니다. `mode: 'no-cors'`로 전송하면 응답을 읽을 수 없지만 데이터는 저장됩니다.

### 7. config.js 설정

웹 앱 URL을 복사한 후 `config.js` 파일에 붙여넣기:

```javascript
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
```

## 변경 사항 (v1 → v2)

1. ✅ 시트 자동 생성 기능
2. ✅ 상세한 에러 로깅
3. ✅ 테스트 함수 추가
4. ✅ GET 요청으로 상태 확인
5. ✅ 실행 시간 측정
6. ✅ 데이터 포맷팅 함수
7. ✅ 시트 초기화 함수

## 추가 도움이 필요한 경우

실행 기록의 로그를 복사하여 공유해주세요.
