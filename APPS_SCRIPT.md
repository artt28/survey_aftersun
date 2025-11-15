# Google Apps Script 코드 (v3)

## 🚀 빠른 시작 가이드

### 실행할 함수 (순서대로):

1. **`resetSheet`** ← 먼저 이것부터! (시트 생성 + 스타일링)
2. **`testPost`** ← 테스트 데이터 전송
3. 웹 앱 배포 후 실제 사용

### ⚠️ 절대 실행하지 마세요:

- `createStyledSheet` ← 이 함수는 직접 실행 금지! (다른 함수가 내부적으로 호출함)
- `styleDataRow` ← 이것도 직접 실행 금지!
- `formatAnswer`, `translateUVType`, `formatTimestamp` ← 헬퍼 함수들, 실행 금지!

---

## 주요 기능

- ✅ 한글 헤더 및 한글 데이터 변환
- ✅ Q9 "기타" 입력 자동 처리
- ✅ 자동 스타일링 (파란 헤더, 번갈아가는 행 색상)
- ✅ UV 타입 이모지 + 한글 변환
- ✅ 한국 시간대 타임스탬프

## 설치 방법

### 1. Google Sheets 준비

1. [Google Sheets](https://sheets.google.com)에서 새 스프레드시트 생성
2. 시트는 자동으로 생성되고 스타일링됩니다 (코드가 알아서 처리)
3. 또는 기존 시트를 사용하려면 **시트 이름을 정확히 "Responses"로 변경**

### 2. Apps Script 코드 복사

1. 스프레드시트에서 **확장 프로그램 > Apps Script** 클릭
2. 기존 코드를 모두 삭제하고 아래 코드를 붙여넣기
3. **저장** (Ctrl+S 또는 💾 버튼)

```javascript
/**
 * UV 케어 설문조사 응답 처리
 * v3 - 한글 헤더, Q9 기타 입력 처리, 자동 스타일링
 */

function doPost(e) {
  const startTime = new Date();

  try {
    // 1. 스프레드시트 접근
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName('Responses');

    // 시트가 없으면 생성 및 스타일링
    if (!sheet) {
      sheet = createStyledSheet(spreadsheet);
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

    // 4. 응답 데이터를 배열로 변환 (한글 라벨로 변환)
    const row = [
      formatTimestamp(data.timestamp || new Date().toISOString()),
      translateUVType(data.uvType || ''),
      data.score || '',
      formatAnswer(data.q1, 'q1'),
      formatAnswer(data.q2, 'q2'),
      formatAnswer(data.q3, 'q3'),
      formatAnswer(data.q4, 'q4'),
      formatAnswer(data.q5, 'q5'),
      formatAnswer(data.q6, 'q6'),
      formatAnswer(data.q7_1, 'q7_1'),
      formatAnswer(data.q7_2, 'q7_2'),
      formatAnswer(data.q8, 'q8'),
      formatAnswer(data.q9, 'q9'),  // "other:텍스트" 형식 처리됨
      formatAnswer(data.q10, 'q10'),
      formatAnswer(data.q11, 'q11'),
      formatAnswer(data.q12, 'q12'),
      formatAnswer(data.q13, 'q13'),  // 성별
      formatAnswer(data.q14, 'q14'),  // 연령대
      formatAnswer(data.q15, 'q15'),  // 피부 타입
      data.q16 || '',  // 이메일 (선택사항)
      data.userAgent || ''
    ];

    // 5. 시트에 추가
    const lastRow = sheet.getLastRow();
    sheet.appendRow(row);

    // 6. 새로운 행에 스타일 적용
    styleDataRow(sheet, lastRow + 1);

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
 * 답변 코드를 한글 라벨로 변환
 */
function translateAnswer(questionId, answerCode) {
  // "other:텍스트" 형식 처리
  if (typeof answerCode === 'string' && answerCode.startsWith('other:')) {
    return '기타: ' + answerCode.substring(6);
  }

  // 질문별 코드-한글 매핑
  const translations = {
    // Q1: 햇빛 노출 후 피부 증상
    'q1': {
      'heat': '얼굴 열감/화끈거림',
      'redness': '홍조가 오래 유지됨',
      'oil': '땀·유분 증가',
      'makeup_break': '메이크업 무너짐',
      'pores': '모공이 넓어짐',
      'dryness': '건조함/당김',
      'lift': '메이크업 들뜸',
      'none': '거의 변화 없음'
    },
    // Q2, Q4: 빈도 관련
    'q2': {
      'always': '거의 매번',
      'often': '주 2–3회',
      'sometimes': '주 1회',
      'rarely': '거의 없음'
    },
    'q4': {
      'always': '거의 매번',
      'often': '주 2–3회',
      'sometimes': '주 1회',
      'rarely': '거의 바르지 않는다'
    },
    // Q3: 광노화 인지도
    'q3': {
      'know_act': '알고 있었고 평소 신경 쓰는 편',
      'heard': '들어만 봤다',
      'never': '처음 듣는다'
    },
    // Q5: 선크림 덧바르기
    'q5': {
      'often': '자주 덧바른다',
      'sometimes': '가끔 한다',
      'rarely': '거의 안 한다',
      'cant': '번거로워서 못 한다'
    },
    // Q6: 진정 케어 여부
    'q6': {
      'yes': '한다',
      'no': '안 한다'
    },
    // Q7-1: 케어 방식
    'q7_1': {
      'wash': '물로 세안한다',
      'mist': '미스트를 뿌린다',
      'gel': '알로에/진정 젤을 바른다',
      'mask': '시트 마스크/쿨링 패드 사용',
      'ice': '얼음·찬 물수건 등 즉흥 쿨링',
      'other': '기타'
    },
    // Q7-2: 제품 선택 포인트
    'q7_2': {
      'cooling': '즉각적인 쿨링·진정',
      'makeup': '메이크업 위에도 사용 가능',
      'texture': '끈적임/유분감 없음',
      'portable': '휴대성',
      'ingredient': '성분·안정성',
      'lasting': '지속력',
      'price': '가격'
    },
    // Q8: 안 하는 이유
    'q8': {
      'lazy': '귀찮아서',
      'makeup': '메이크업 위에 바르기 어려워서',
      'dont_know': '어떤 제품을 써야 할지 몰라서',
      'sticky': '제품들이 끈적이거나 무거워서',
      'no_effect': '써봤는데 효과를 잘 못 느껴서',
      'no_need': '필요성을 못 느껴서',
      'other': '기타'
    },
    // Q9: 평일 자외선 노출
    'q9': {
      'under_30': '30분 이하 (출퇴근·점심 이동 정도)',
      '30_to_60': '30분–1시간',
      'over_60': '1시간 이상',
      'none': '거의 없음',
      'other': '기타'
    },
    // Q10: 생활 환경
    'q10': {
      'walk': '출퇴근 시 도보 이동이 많다',
      'drive': '운전을 자주 하거나 운전 시간이 길다',
      'indoor': '대부분 실내에서 생활한다',
      'window': '실내지만 창가·유리벽 근처에서 일한다',
      'cafe': '카페/테라스 활동을 자주 한다',
      'lunch': '점심시간에 야외 이동이 잦다',
      'outdoor': '야외 활동이 많은 편이다'
    },
    // Q11: 주말 활동
    'q11': {
      'terrace': '야외 카페/테라스 방문',
      'picnic': '피크닉·공원 산책',
      'hiking': '가벼운 하이킹·러닝',
      'indoor': '쇼핑 등 실내 활동 위주',
      'other': '기타'
    },
    // Q12: 진정 필요 순간
    'q12': {
      'commute': '출근길/퇴근길 후',
      'lunch': '점심 외출 후',
      'drive': '운전 후',
      'cafe': '야외 카페·테라스 이용 후',
      'exercise': '운동·러닝 후',
      'makeup': '메이크업이 들뜨거나 붉어졌을 때',
      'none': '거의 없다'
    },
    // Q13: 성별
    'q13': {
      'female': '여성',
      'male': '남성',
      'other': '기타',
      'prefer_not': '응답 안 함'
    },
    // Q14: 연령대
    'q14': {
      'teens': '10대',
      'early_20s': '20대 초반',
      'late_20s': '20대 후반',
      'early_30s': '30대 초반',
      'late_30s': '30대 후반',
      '40plus': '40대 이상'
    },
    // Q15: 피부 타입
    'q15': {
      'dry': '건성',
      'oily': '지성',
      'combination': '복합성',
      'sensitive': '민감성',
      'acne': '여드름 피부',
      'unknown': '잘 모르겠다'
    }
  };

  // 질문 ID에 해당하는 번역이 있으면 사용
  if (translations[questionId] && translations[questionId][answerCode]) {
    return translations[questionId][answerCode];
  }

  // 번역이 없으면 원본 반환
  return answerCode;
}

/**
 * 답변 포맷팅 (배열이면 콤마로 연결, "other:" 처리, 한글 번역)
 */
function formatAnswer(answer, questionId) {
  if (answer === null || answer === undefined) {
    return '';
  }

  if (Array.isArray(answer)) {
    // 배열의 각 요소를 한글로 번역하고 쉼표로 연결
    return answer.map(item => translateAnswer(questionId, item)).join(', ');
  }

  // 단일 값을 한글로 번역
  return translateAnswer(questionId, answer.toString());
}

/**
 * 타임스탬프 포맷팅 (한국 시간으로 변환)
 */
function formatTimestamp(isoString) {
  const date = new Date(isoString);
  return Utilities.formatDate(date, 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');
}

/**
 * UV 타입을 한글 이름으로 변환
 */
function translateUVType(typeCode) {
  const typeMap = {
    'desert_fox': '🦊 사막여우',
    'shadow_panda': '🐼 그늘판다',
    'cooling_dolphin': '🐬 애프터썬 돌고래',
    'glass_swan': '🦢 유리백조',
    'balance_raccoon': '🦝 밸런스 너구리',
    'action_cheetah': '🐆 액션 치타',
    'sun_eagle': '🦅 태양독수리',
    'indoor_cat': '🐱 도시냥',
    'baby_chick': '🐣 UV 새싹'
  };
  return typeMap[typeCode] || typeCode;
}

/**
 * 스타일링된 시트 생성
 */
function createStyledSheet(spreadsheet) {
  const sheet = spreadsheet.insertSheet('Responses');

  // 한글 헤더
  const headers = [
    '응답 시각', 'UV 케어 타입', '점수',
    'Q1. 햇빛 노출 후 피부 증상', 'Q2. 증상 빈도', 'Q3. 광노화 인지도',
    'Q4. 선크림 사용 빈도', 'Q5. 선크림 덧바르기', 'Q6. 진정 케어 여부',
    'Q7-1. 케어 방식', 'Q7-2. 제품 선택 포인트', 'Q8. 안 하는 이유',
    'Q9. 평일 자외선 노출', 'Q10. 생활 환경', 'Q11. 주말 활동',
    'Q12. 진정 필요 순간', 'Q13. 성별', 'Q14. 연령대', 'Q15. 피부 타입',
    'Q16. 이메일', 'User Agent'
  ];

  sheet.appendRow(headers);

  // 헤더 스타일링
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#4285F4')
            .setFontColor('#FFFFFF')
            .setFontWeight('bold')
            .setHorizontalAlignment('center')
            .setVerticalAlignment('middle')
            .setWrap(true);

  // 열 너비 자동 조정
  sheet.setColumnWidth(1, 160);  // 응답 시각
  sheet.setColumnWidth(2, 150);  // UV 타입
  sheet.setColumnWidth(3, 60);   // 점수

  // Q1-Q15 열 너비
  for (let i = 4; i <= 19; i++) {
    sheet.setColumnWidth(i, 180);
  }

  sheet.setColumnWidth(20, 200);  // 이메일
  sheet.setColumnWidth(21, 250);  // User Agent

  // 행 높이
  sheet.setRowHeight(1, 60);

  // 고정 행 (헤더)
  sheet.setFrozenRows(1);

  return sheet;
}

/**
 * 데이터 행 스타일링
 */
function styleDataRow(sheet, rowNumber) {
  const lastColumn = sheet.getLastColumn();
  const rowRange = sheet.getRange(rowNumber, 1, 1, lastColumn);

  // 짝수/홀수 행 번갈아가며 배경색
  if (rowNumber % 2 === 0) {
    rowRange.setBackground('#F8F9FA');
  } else {
    rowRange.setBackground('#FFFFFF');
  }

  // 텍스트 정렬
  rowRange.setVerticalAlignment('middle')
          .setWrap(true);

  // 타임스탬프 열 중앙 정렬
  sheet.getRange(rowNumber, 1).setHorizontalAlignment('center');

  // UV 타입 열 중앙 정렬 및 강조
  const uvTypeCell = sheet.getRange(rowNumber, 2);
  uvTypeCell.setHorizontalAlignment('center')
           .setFontWeight('bold')
           .setFontSize(11);

  // 점수 열 중앙 정렬
  sheet.getRange(rowNumber, 3).setHorizontalAlignment('center');

  // 행 높이
  sheet.setRowHeight(rowNumber, 35);
}

/**
 * 테스트 함수 - Apps Script 편집기에서 직접 실행 가능
 */
function testPost() {
  Logger.log('=== 테스트 시작 ===');

  const testData = {
    timestamp: new Date().toISOString(),
    uvType: 'desert_fox',
    score: 85,
    q1: ['heat', 'redness'],
    q2: 'always',
    q3: 'know_act',
    q4: 'always',
    q5: 'often',
    q6: 'yes',
    q7_1: ['wash', 'mist', 'gel'],
    q7_2: ['cooling', 'makeup'],
    q8: '',  // Q6='yes'이므로 비어있음
    q9: 'other:낮에 운동을 해요',  // 기타 입력 테스트
    q10: ['walk', 'cafe'],
    q11: ['terrace', 'picnic'],
    q12: ['commute', 'cafe'],
    q13: 'female',  // 성별
    q14: 'late_20s',  // 연령대
    q15: 'sensitive',  // 피부 타입
    q16: 'test@example.com',  // 이메일 (선택사항)
    userAgent: 'Mozilla/5.0 (Test User Agent)'
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
 * 시트 초기화 함수 (필요시 - 이 함수를 먼저 실행하세요!)
 */
function resetSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName('Responses');

  if (sheet) {
    spreadsheet.deleteSheet(sheet);
  }

  // 스타일링된 시트 재생성
  createStyledSheet(spreadsheet);

  Logger.log('✅ 시트가 초기화되었습니다.');
  Logger.log('📊 한글 헤더 및 스타일링이 적용되었습니다.');

  return '완료! Responses 시트를 확인하세요.';
}

/**
 * Statistics 시트 생성 및 초기화 (전체 질문 통계)
 */
function createStatisticsSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  // 기존 Statistics 시트 삭제
  let statsSheet = spreadsheet.getSheetByName('Statistics');
  if (statsSheet) {
    spreadsheet.deleteSheet(statsSheet);
  }

  // 새 Statistics 시트 생성
  statsSheet = spreadsheet.insertSheet('Statistics');

  // 제목 및 설명
  statsSheet.getRange(1, 1).setValue('📊 UV 케어 설문조사 통계 대시보드 (전체)');
  statsSheet.getRange(1, 1).setFontSize(18).setFontWeight('bold');
  statsSheet.getRange(2, 1).setValue('자동으로 업데이트되는 실시간 통계 - 모든 질문 포함');
  statsSheet.getRange(2, 1).setFontSize(11).setFontColor('#666666');

  let currentRow = 4;
  let chartColumn = 5; // 차트를 배치할 열 (E열)

  // ========== 섹션 1: UV 타입 분포 ==========
  statsSheet.getRange(currentRow, 1).setValue('1️⃣ UV 타입 분포');
  statsSheet.getRange(currentRow, 1).setFontSize(14).setFontWeight('bold').setBackground('#E8F0FE');
  currentRow += 2;

  statsSheet.getRange(currentRow, 1, 1, 3).setValues([['타입 이름', '응답 수', '비율(%)']]);
  statsSheet.getRange(currentRow, 1, 1, 3).setFontWeight('bold').setBackground('#4285F4').setFontColor('#FFFFFF');
  currentRow++;

  const uvTypes = [
    '🦊 사막여우', '🐼 그늘판다', '🐬 애프터썬 돌고래',
    '🦢 유리백조', '🦝 밸런스 너구리', '🐆 액션 치타',
    '🦅 태양독수리', '🐱 도시냥', '🐣 UV 새싹'
  ];

  const uvStartRow = currentRow;
  uvTypes.forEach((typeName, index) => {
    const rowNum = currentRow + index;
    statsSheet.getRange(rowNum, 1).setValue(typeName);
    statsSheet.getRange(rowNum, 2).setFormula(`=COUNTIF(Responses!B:B,"${typeName}")`);
    statsSheet.getRange(rowNum, 3).setFormula(`=IF(COUNTA(Responses!B:B)-1>0,B${rowNum}/(COUNTA(Responses!B:B)-1)*100,0)`);
    statsSheet.getRange(rowNum, 3).setNumberFormat('0.0"%"');
  });

  const uvChart = statsSheet.newChart()
    .setChartType(Charts.ChartType.PIE)
    .addRange(statsSheet.getRange(uvStartRow, 1, uvTypes.length, 2))
    .setPosition(uvStartRow, chartColumn, 0, 0)
    .setOption('title', 'UV 타입 분포')
    .setOption('width', 450)
    .setOption('height', 280)
    .setOption('pieHole', 0.4)
    .build();
  statsSheet.insertChart(uvChart);

  currentRow += uvTypes.length + 3;

  // ========== 섹션 2: Q1 - 햇빛 노출 후 피부 증상 (복수선택) ==========
  statsSheet.getRange(currentRow, 1).setValue('2️⃣ Q1. 햇빛 노출 후 피부 증상 (복수선택 가능)');
  statsSheet.getRange(currentRow, 1).setFontSize(14).setFontWeight('bold').setBackground('#E8F0FE');
  currentRow += 2;

  statsSheet.getRange(currentRow, 1, 1, 2).setValues([['증상', '응답 수']]);
  statsSheet.getRange(currentRow, 1, 1, 2).setFontWeight('bold').setBackground('#4285F4').setFontColor('#FFFFFF');
  currentRow++;

  const q1Options = [
    '얼굴 열감/화끈거림', '홍조가 오래 유지됨', '땀·유분 증가', '메이크업 무너짐',
    '모공이 넓어짐', '건조함/당김', '메이크업 들뜸', '거의 변화 없음'
  ];

  const q1StartRow = currentRow;
  q1Options.forEach((option, index) => {
    const rowNum = currentRow + index;
    statsSheet.getRange(rowNum, 1).setValue(option);
    statsSheet.getRange(rowNum, 2).setFormula(`=COUNTIF(Responses!D:D,"*${option}*")`);
  });

  const q1Chart = statsSheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(statsSheet.getRange(q1StartRow, 1, q1Options.length, 2))
    .setPosition(q1StartRow, chartColumn, 0, 0)
    .setOption('title', 'Q1. 햇빛 노출 후 피부 증상')
    .setOption('width', 450)
    .setOption('height', 300)
    .setOption('legend', {position: 'none'})
    .build();
  statsSheet.insertChart(q1Chart);

  currentRow += q1Options.length + 3;

  // ========== 섹션 3: Q2 - 증상 발생 빈도 ==========
  statsSheet.getRange(currentRow, 1).setValue('3️⃣ Q2. 증상 발생 빈도');
  statsSheet.getRange(currentRow, 1).setFontSize(14).setFontWeight('bold').setBackground('#E8F0FE');
  currentRow += 2;

  statsSheet.getRange(currentRow, 1, 1, 3).setValues([['빈도', '응답 수', '비율(%)']]);
  statsSheet.getRange(currentRow, 1, 1, 3).setFontWeight('bold').setBackground('#4285F4').setFontColor('#FFFFFF');
  currentRow++;

  const q2Options = ['거의 매번', '주 2–3회', '주 1회', '거의 없음'];
  const q2StartRow = currentRow;

  q2Options.forEach((option, index) => {
    const rowNum = currentRow + index;
    statsSheet.getRange(rowNum, 1).setValue(option);
    statsSheet.getRange(rowNum, 2).setFormula(`=COUNTIF(Responses!E:E,"${option}")`);
    statsSheet.getRange(rowNum, 3).setFormula(`=IF(COUNTA(Responses!E:E)-1>0,B${rowNum}/(COUNTA(Responses!E:E)-1)*100,0)`);
    statsSheet.getRange(rowNum, 3).setNumberFormat('0.0"%"');
  });

  const q2Chart = statsSheet.newChart()
    .setChartType(Charts.ChartType.COLUMN)
    .addRange(statsSheet.getRange(q2StartRow, 1, q2Options.length, 2))
    .setPosition(q2StartRow, chartColumn, 0, 0)
    .setOption('title', 'Q2. 증상 발생 빈도')
    .setOption('width', 450)
    .setOption('height', 250)
    .setOption('legend', {position: 'none'})
    .build();
  statsSheet.insertChart(q2Chart);

  currentRow += q2Options.length + 3;

  // ========== 섹션 4: Q3 - 광노화 인지도 ==========
  statsSheet.getRange(currentRow, 1).setValue('4️⃣ Q3. 광노화 인지도');
  statsSheet.getRange(currentRow, 1).setFontSize(14).setFontWeight('bold').setBackground('#E8F0FE');
  currentRow += 2;

  statsSheet.getRange(currentRow, 1, 1, 3).setValues([['인지도', '응답 수', '비율(%)']]);
  statsSheet.getRange(currentRow, 1, 1, 3).setFontWeight('bold').setBackground('#4285F4').setFontColor('#FFFFFF');
  currentRow++;

  const q3Options = ['알고 있었고 평소 신경 쓰는 편', '들어만 봤다', '처음 듣는다'];
  const q3StartRow = currentRow;

  q3Options.forEach((option, index) => {
    const rowNum = currentRow + index;
    statsSheet.getRange(rowNum, 1).setValue(option);
    statsSheet.getRange(rowNum, 2).setFormula(`=COUNTIF(Responses!F:F,"${option}")`);
    statsSheet.getRange(rowNum, 3).setFormula(`=IF(COUNTA(Responses!F:F)-1>0,B${rowNum}/(COUNTA(Responses!F:F)-1)*100,0)`);
    statsSheet.getRange(rowNum, 3).setNumberFormat('0.0"%"');
  });

  const q3Chart = statsSheet.newChart()
    .setChartType(Charts.ChartType.PIE)
    .addRange(statsSheet.getRange(q3StartRow, 1, q3Options.length, 2))
    .setPosition(q3StartRow, chartColumn, 0, 0)
    .setOption('title', 'Q3. 광노화 인지도')
    .setOption('width', 450)
    .setOption('height', 250)
    .build();
  statsSheet.insertChart(q3Chart);

  currentRow += q3Options.length + 3;

  // ========== 섹션 5: Q4 - 선크림 사용 빈도 ==========
  statsSheet.getRange(currentRow, 1).setValue('5️⃣ Q4. 선크림 사용 빈도');
  statsSheet.getRange(currentRow, 1).setFontSize(14).setFontWeight('bold').setBackground('#E8F0FE');
  currentRow += 2;

  statsSheet.getRange(currentRow, 1, 1, 3).setValues([['빈도', '응답 수', '비율(%)']]);
  statsSheet.getRange(currentRow, 1, 1, 3).setFontWeight('bold').setBackground('#4285F4').setFontColor('#FFFFFF');
  currentRow++;

  const q4Options = ['거의 매번', '주 2–3회', '주 1회', '거의 바르지 않는다'];
  const q4StartRow = currentRow;

  q4Options.forEach((option, index) => {
    const rowNum = currentRow + index;
    statsSheet.getRange(rowNum, 1).setValue(option);
    statsSheet.getRange(rowNum, 2).setFormula(`=COUNTIF(Responses!G:G,"${option}")`);
    statsSheet.getRange(rowNum, 3).setFormula(`=IF(COUNTA(Responses!G:G)-1>0,B${rowNum}/(COUNTA(Responses!G:G)-1)*100,0)`);
    statsSheet.getRange(rowNum, 3).setNumberFormat('0.0"%"');
  });

  const q4Chart = statsSheet.newChart()
    .setChartType(Charts.ChartType.COLUMN)
    .addRange(statsSheet.getRange(q4StartRow, 1, q4Options.length, 2))
    .setPosition(q4StartRow, chartColumn, 0, 0)
    .setOption('title', 'Q4. 선크림 사용 빈도')
    .setOption('width', 450)
    .setOption('height', 250)
    .setOption('legend', {position: 'none'})
    .build();
  statsSheet.insertChart(q4Chart);

  currentRow += q4Options.length + 3;

  // ========== 섹션 6: Q5 - 선크림 덧바르기 ==========
  statsSheet.getRange(currentRow, 1).setValue('6️⃣ Q5. 선크림 덧바르기 습관');
  statsSheet.getRange(currentRow, 1).setFontSize(14).setFontWeight('bold').setBackground('#E8F0FE');
  currentRow += 2;

  statsSheet.getRange(currentRow, 1, 1, 3).setValues([['습관', '응답 수', '비율(%)']]);
  statsSheet.getRange(currentRow, 1, 1, 3).setFontWeight('bold').setBackground('#4285F4').setFontColor('#FFFFFF');
  currentRow++;

  const q5Options = ['자주 덧바른다', '가끔 한다', '거의 안 한다', '번거로워서 못 한다'];
  const q5StartRow = currentRow;

  q5Options.forEach((option, index) => {
    const rowNum = currentRow + index;
    statsSheet.getRange(rowNum, 1).setValue(option);
    statsSheet.getRange(rowNum, 2).setFormula(`=COUNTIF(Responses!H:H,"${option}")`);
    statsSheet.getRange(rowNum, 3).setFormula(`=IF(COUNTA(Responses!H:H)-1>0,B${rowNum}/(COUNTA(Responses!H:H)-1)*100,0)`);
    statsSheet.getRange(rowNum, 3).setNumberFormat('0.0"%"');
  });

  const q5Chart = statsSheet.newChart()
    .setChartType(Charts.ChartType.PIE)
    .addRange(statsSheet.getRange(q5StartRow, 1, q5Options.length, 2))
    .setPosition(q5StartRow, chartColumn, 0, 0)
    .setOption('title', 'Q5. 선크림 덧바르기')
    .setOption('width', 450)
    .setOption('height', 250)
    .build();
  statsSheet.insertChart(q5Chart);

  currentRow += q5Options.length + 3;

  // ========== 섹션 7: Q6 - 진정 케어 여부 ==========
  statsSheet.getRange(currentRow, 1).setValue('7️⃣ Q6. 햇빛 노출 후 진정/쿨링 케어');
  statsSheet.getRange(currentRow, 1).setFontSize(14).setFontWeight('bold').setBackground('#E8F0FE');
  currentRow += 2;

  statsSheet.getRange(currentRow, 1, 1, 3).setValues([['케어 여부', '응답 수', '비율(%)']]);
  statsSheet.getRange(currentRow, 1, 1, 3).setFontWeight('bold').setBackground('#4285F4').setFontColor('#FFFFFF');
  currentRow++;

  const q6Options = ['한다', '안 한다'];
  const q6StartRow = currentRow;

  q6Options.forEach((option, index) => {
    const rowNum = currentRow + index;
    statsSheet.getRange(rowNum, 1).setValue(option);
    statsSheet.getRange(rowNum, 2).setFormula(`=COUNTIF(Responses!I:I,"${option}")`);
    statsSheet.getRange(rowNum, 3).setFormula(`=IF(COUNTA(Responses!I:I)-1>0,B${rowNum}/(COUNTA(Responses!I:I)-1)*100,0)`);
    statsSheet.getRange(rowNum, 3).setNumberFormat('0.0"%"');
  });

  const q6Chart = statsSheet.newChart()
    .setChartType(Charts.ChartType.PIE)
    .addRange(statsSheet.getRange(q6StartRow, 1, q6Options.length, 2))
    .setPosition(q6StartRow, chartColumn, 0, 0)
    .setOption('title', 'Q6. 진정 케어 실천율')
    .setOption('width', 450)
    .setOption('height', 200)
    .setOption('pieHole', 0.4)
    .build();
  statsSheet.insertChart(q6Chart);

  currentRow += q6Options.length + 3;

  // ========== 섹션 8: Q7-1 - 케어 방식 (복수선택, Q6='한다' 응답자) ==========
  statsSheet.getRange(currentRow, 1).setValue('8️⃣ Q7-1. 케어 방식 (복수선택 가능)');
  statsSheet.getRange(currentRow, 1).setFontSize(14).setFontWeight('bold').setBackground('#E8F0FE');
  currentRow += 2;

  statsSheet.getRange(currentRow, 1, 1, 2).setValues([['케어 방식', '응답 수']]);
  statsSheet.getRange(currentRow, 1, 1, 2).setFontWeight('bold').setBackground('#4285F4').setFontColor('#FFFFFF');
  currentRow++;

  const q7_1Options = [
    '물로 세안한다', '미스트를 뿌린다', '알로에/진정 젤을 바른다',
    '시트 마스크/쿨링 패드 사용', '얼음·찬 물수건 등 즉흥 쿨링'
  ];

  const q7_1StartRow = currentRow;
  q7_1Options.forEach((option, index) => {
    const rowNum = currentRow + index;
    statsSheet.getRange(rowNum, 1).setValue(option);
    statsSheet.getRange(rowNum, 2).setFormula(`=COUNTIF(Responses!J:J,"*${option}*")`);
  });

  const q7_1Chart = statsSheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(statsSheet.getRange(q7_1StartRow, 1, q7_1Options.length, 2))
    .setPosition(q7_1StartRow, chartColumn, 0, 0)
    .setOption('title', 'Q7-1. 케어 방식')
    .setOption('width', 450)
    .setOption('height', 250)
    .setOption('legend', {position: 'none'})
    .build();
  statsSheet.insertChart(q7_1Chart);

  currentRow += q7_1Options.length + 3;

  // ========== 섹션 9: Q7-2 - 제품 선택 포인트 (복수선택) ==========
  statsSheet.getRange(currentRow, 1).setValue('9️⃣ Q7-2. 제품 선택 시 중요 포인트 (복수선택)');
  statsSheet.getRange(currentRow, 1).setFontSize(14).setFontWeight('bold').setBackground('#E8F0FE');
  currentRow += 2;

  statsSheet.getRange(currentRow, 1, 1, 2).setValues([['선택 포인트', '응답 수']]);
  statsSheet.getRange(currentRow, 1, 1, 2).setFontWeight('bold').setBackground('#4285F4').setFontColor('#FFFFFF');
  currentRow++;

  const q7_2Options = [
    '즉각적인 쿨링·진정', '메이크업 위에도 사용 가능', '끈적임/유분감 없음',
    '휴대성', '성분·안정성', '지속력', '가격'
  ];

  const q7_2StartRow = currentRow;
  q7_2Options.forEach((option, index) => {
    const rowNum = currentRow + index;
    statsSheet.getRange(rowNum, 1).setValue(option);
    statsSheet.getRange(rowNum, 2).setFormula(`=COUNTIF(Responses!K:K,"*${option}*")`);
  });

  const q7_2Chart = statsSheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(statsSheet.getRange(q7_2StartRow, 1, q7_2Options.length, 2))
    .setPosition(q7_2StartRow, chartColumn, 0, 0)
    .setOption('title', 'Q7-2. 제품 선택 포인트')
    .setOption('width', 450)
    .setOption('height', 280)
    .setOption('legend', {position: 'none'})
    .build();
  statsSheet.insertChart(q7_2Chart);

  currentRow += q7_2Options.length + 3;

  // ========== 섹션 10: Q8 - 안 하는 이유 (Q6='안 한다' 응답자) ==========
  statsSheet.getRange(currentRow, 1).setValue('🔟 Q8. 진정 케어를 안 하는 이유');
  statsSheet.getRange(currentRow, 1).setFontSize(14).setFontWeight('bold').setBackground('#E8F0FE');
  currentRow += 2;

  statsSheet.getRange(currentRow, 1, 1, 2).setValues([['이유', '응답 수']]);
  statsSheet.getRange(currentRow, 1, 1, 2).setFontWeight('bold').setBackground('#4285F4').setFontColor('#FFFFFF');
  currentRow++;

  const q8Options = [
    '귀찮아서', '메이크업 위에 바르기 어려워서', '어떤 제품을 써야 할지 몰라서',
    '제품들이 끈적이거나 무거워서', '써봤는데 효과를 잘 못 느껴서', '필요성을 못 느껴서'
  ];

  const q8StartRow = currentRow;
  q8Options.forEach((option, index) => {
    const rowNum = currentRow + index;
    statsSheet.getRange(rowNum, 1).setValue(option);
    statsSheet.getRange(rowNum, 2).setFormula(`=COUNTIF(Responses!L:L,"*${option}*")`);
  });

  const q8Chart = statsSheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(statsSheet.getRange(q8StartRow, 1, q8Options.length, 2))
    .setPosition(q8StartRow, chartColumn, 0, 0)
    .setOption('title', 'Q8. 진정 케어 안 하는 이유')
    .setOption('width', 450)
    .setOption('height', 250)
    .setOption('legend', {position: 'none'})
    .build();
  statsSheet.insertChart(q8Chart);

  currentRow += q8Options.length + 3;

  // ========== 섹션 11: Q9 - 평일 자외선 노출 시간 ==========
  statsSheet.getRange(currentRow, 1).setValue('1️⃣1️⃣ Q9. 평일 자외선 노출 시간');
  statsSheet.getRange(currentRow, 1).setFontSize(14).setFontWeight('bold').setBackground('#E8F0FE');
  currentRow += 2;

  statsSheet.getRange(currentRow, 1, 1, 3).setValues([['노출 시간', '응답 수', '비율(%)']]);
  statsSheet.getRange(currentRow, 1, 1, 3).setFontWeight('bold').setBackground('#4285F4').setFontColor('#FFFFFF');
  currentRow++;

  const q9Options = ['30분 이하 (출퇴근·점심 이동 정도)', '30분–1시간', '1시간 이상', '거의 없음'];
  const q9StartRow = currentRow;

  q9Options.forEach((option, index) => {
    const rowNum = currentRow + index;
    statsSheet.getRange(rowNum, 1).setValue(option);
    statsSheet.getRange(rowNum, 2).setFormula(`=COUNTIF(Responses!M:M,"${option}")`);
    statsSheet.getRange(rowNum, 3).setFormula(`=IF(COUNTA(Responses!M:M)-1>0,B${rowNum}/(COUNTA(Responses!M:M)-1)*100,0)`);
    statsSheet.getRange(rowNum, 3).setNumberFormat('0.0"%"');
  });

  const q9Chart = statsSheet.newChart()
    .setChartType(Charts.ChartType.PIE)
    .addRange(statsSheet.getRange(q9StartRow, 1, q9Options.length, 2))
    .setPosition(q9StartRow, chartColumn, 0, 0)
    .setOption('title', 'Q9. 평일 UV 노출 시간')
    .setOption('width', 450)
    .setOption('height', 250)
    .build();
  statsSheet.insertChart(q9Chart);

  currentRow += q9Options.length + 3;

  // ========== 섹션 12: Q10 - 생활 환경 (복수선택) ==========
  statsSheet.getRange(currentRow, 1).setValue('1️⃣2️⃣ Q10. 생활 환경 (복수선택 가능)');
  statsSheet.getRange(currentRow, 1).setFontSize(14).setFontWeight('bold').setBackground('#E8F0FE');
  currentRow += 2;

  statsSheet.getRange(currentRow, 1, 1, 2).setValues([['환경', '응답 수']]);
  statsSheet.getRange(currentRow, 1, 1, 2).setFontWeight('bold').setBackground('#4285F4').setFontColor('#FFFFFF');
  currentRow++;

  const q10Options = [
    '출퇴근 시 도보 이동이 많다', '운전을 자주 하거나 운전 시간이 길다',
    '대부분 실내에서 생활한다', '실내지만 창가·유리벽 근처에서 일한다',
    '카페/테라스 활동을 자주 한다', '점심시간에 야외 이동이 잦다',
    '야외 활동이 많은 편이다'
  ];

  const q10StartRow = currentRow;
  q10Options.forEach((option, index) => {
    const rowNum = currentRow + index;
    statsSheet.getRange(rowNum, 1).setValue(option);
    statsSheet.getRange(rowNum, 2).setFormula(`=COUNTIF(Responses!N:N,"*${option}*")`);
  });

  const q10Chart = statsSheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(statsSheet.getRange(q10StartRow, 1, q10Options.length, 2))
    .setPosition(q10StartRow, chartColumn, 0, 0)
    .setOption('title', 'Q10. 생활 환경')
    .setOption('width', 450)
    .setOption('height', 280)
    .setOption('legend', {position: 'none'})
    .build();
  statsSheet.insertChart(q10Chart);

  currentRow += q10Options.length + 3;

  // ========== 섹션 13: Q11 - 주말 활동 (복수선택) ==========
  statsSheet.getRange(currentRow, 1).setValue('1️⃣3️⃣ Q11. 주말 주요 활동 (복수선택)');
  statsSheet.getRange(currentRow, 1).setFontSize(14).setFontWeight('bold').setBackground('#E8F0FE');
  currentRow += 2;

  statsSheet.getRange(currentRow, 1, 1, 2).setValues([['활동', '응답 수']]);
  statsSheet.getRange(currentRow, 1, 1, 2).setFontWeight('bold').setBackground('#4285F4').setFontColor('#FFFFFF');
  currentRow++;

  const q11Options = [
    '야외 카페/테라스 방문', '피크닉·공원 산책', '가벼운 하이킹·러닝', '쇼핑 등 실내 활동 위주'
  ];

  const q11StartRow = currentRow;
  q11Options.forEach((option, index) => {
    const rowNum = currentRow + index;
    statsSheet.getRange(rowNum, 1).setValue(option);
    statsSheet.getRange(rowNum, 2).setFormula(`=COUNTIF(Responses!O:O,"*${option}*")`);
  });

  const q11Chart = statsSheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(statsSheet.getRange(q11StartRow, 1, q11Options.length, 2))
    .setPosition(q11StartRow, chartColumn, 0, 0)
    .setOption('title', 'Q11. 주말 활동')
    .setOption('width', 450)
    .setOption('height', 220)
    .setOption('legend', {position: 'none'})
    .build();
  statsSheet.insertChart(q11Chart);

  currentRow += q11Options.length + 3;

  // ========== 섹션 14: Q12 - 진정 필요 순간 (복수선택) ==========
  statsSheet.getRange(currentRow, 1).setValue('1️⃣4️⃣ Q12. 진정 케어가 필요한 순간 (복수선택)');
  statsSheet.getRange(currentRow, 1).setFontSize(14).setFontWeight('bold').setBackground('#E8F0FE');
  currentRow += 2;

  statsSheet.getRange(currentRow, 1, 1, 2).setValues([['순간', '응답 수']]);
  statsSheet.getRange(currentRow, 1, 1, 2).setFontWeight('bold').setBackground('#4285F4').setFontColor('#FFFFFF');
  currentRow++;

  const q12Options = [
    '출근길/퇴근길 후', '점심 외출 후', '운전 후', '야외 카페·테라스 이용 후',
    '운동·러닝 후', '메이크업이 들뜨거나 붉어졌을 때', '거의 없다'
  ];

  const q12StartRow = currentRow;
  q12Options.forEach((option, index) => {
    const rowNum = currentRow + index;
    statsSheet.getRange(rowNum, 1).setValue(option);
    statsSheet.getRange(rowNum, 2).setFormula(`=COUNTIF(Responses!P:P,"*${option}*")`);
  });

  const q12Chart = statsSheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(statsSheet.getRange(q12StartRow, 1, q12Options.length, 2))
    .setPosition(q12StartRow, chartColumn, 0, 0)
    .setOption('title', 'Q12. 진정 필요 순간')
    .setOption('width', 450)
    .setOption('height', 280)
    .setOption('legend', {position: 'none'})
    .build();
  statsSheet.insertChart(q12Chart);

  currentRow += q12Options.length + 3;

  // ========== 섹션 15: Q13 - 성별 ==========
  statsSheet.getRange(currentRow, 1).setValue('1️⃣5️⃣ Q13. 성별 분포');
  statsSheet.getRange(currentRow, 1).setFontSize(14).setFontWeight('bold').setBackground('#E8F0FE');
  currentRow += 2;

  statsSheet.getRange(currentRow, 1, 1, 3).setValues([['성별', '응답 수', '비율(%)']]);
  statsSheet.getRange(currentRow, 1, 1, 3).setFontWeight('bold').setBackground('#4285F4').setFontColor('#FFFFFF');
  currentRow++;

  const q13Options = ['여성', '남성', '기타', '응답 안 함'];
  const q13StartRow = currentRow;

  q13Options.forEach((option, index) => {
    const rowNum = currentRow + index;
    statsSheet.getRange(rowNum, 1).setValue(option);
    statsSheet.getRange(rowNum, 2).setFormula(`=COUNTIF(Responses!Q:Q,"${option}")`);
    statsSheet.getRange(rowNum, 3).setFormula(`=IF(COUNTA(Responses!Q:Q)-1>0,B${rowNum}/(COUNTA(Responses!Q:Q)-1)*100,0)`);
    statsSheet.getRange(rowNum, 3).setNumberFormat('0.0"%"');
  });

  const q13Chart = statsSheet.newChart()
    .setChartType(Charts.ChartType.PIE)
    .addRange(statsSheet.getRange(q13StartRow, 1, q13Options.length, 2))
    .setPosition(q13StartRow, chartColumn, 0, 0)
    .setOption('title', 'Q13. 성별 분포')
    .setOption('width', 450)
    .setOption('height', 250)
    .setOption('pieHole', 0.4)
    .build();
  statsSheet.insertChart(q13Chart);

  currentRow += q13Options.length + 3;

  // ========== 섹션 16: Q14 - 연령대 ==========
  statsSheet.getRange(currentRow, 1).setValue('1️⃣6️⃣ Q14. 연령대 분포');
  statsSheet.getRange(currentRow, 1).setFontSize(14).setFontWeight('bold').setBackground('#E8F0FE');
  currentRow += 2;

  statsSheet.getRange(currentRow, 1, 1, 3).setValues([['연령대', '응답 수', '비율(%)']]);
  statsSheet.getRange(currentRow, 1, 1, 3).setFontWeight('bold').setBackground('#4285F4').setFontColor('#FFFFFF');
  currentRow++;

  const q14Options = ['10대', '20대 초반', '20대 후반', '30대 초반', '30대 후반', '40대 이상'];
  const q14StartRow = currentRow;

  q14Options.forEach((option, index) => {
    const rowNum = currentRow + index;
    statsSheet.getRange(rowNum, 1).setValue(option);
    statsSheet.getRange(rowNum, 2).setFormula(`=COUNTIF(Responses!R:R,"${option}")`);
    statsSheet.getRange(rowNum, 3).setFormula(`=IF(COUNTA(Responses!R:R)-1>0,B${rowNum}/(COUNTA(Responses!R:R)-1)*100,0)`);
    statsSheet.getRange(rowNum, 3).setNumberFormat('0.0"%"');
  });

  const q14Chart = statsSheet.newChart()
    .setChartType(Charts.ChartType.COLUMN)
    .addRange(statsSheet.getRange(q14StartRow, 1, q14Options.length, 2))
    .setPosition(q14StartRow, chartColumn, 0, 0)
    .setOption('title', 'Q14. 연령대 분포')
    .setOption('width', 450)
    .setOption('height', 280)
    .setOption('legend', {position: 'none'})
    .build();
  statsSheet.insertChart(q14Chart);

  currentRow += q14Options.length + 3;

  // ========== 섹션 17: Q15 - 피부타입 ==========
  statsSheet.getRange(currentRow, 1).setValue('1️⃣7️⃣ Q15. 피부타입 분포');
  statsSheet.getRange(currentRow, 1).setFontSize(14).setFontWeight('bold').setBackground('#E8F0FE');
  currentRow += 2;

  statsSheet.getRange(currentRow, 1, 1, 3).setValues([['피부타입', '응답 수', '비율(%)']]);
  statsSheet.getRange(currentRow, 1, 1, 3).setFontWeight('bold').setBackground('#4285F4').setFontColor('#FFFFFF');
  currentRow++;

  const q15Options = ['건성', '지성', '복합성', '민감성', '여드름 피부', '잘 모르겠다'];
  const q15StartRow = currentRow;

  q15Options.forEach((option, index) => {
    const rowNum = currentRow + index;
    statsSheet.getRange(rowNum, 1).setValue(option);
    statsSheet.getRange(rowNum, 2).setFormula(`=COUNTIF(Responses!S:S,"${option}")`);
    statsSheet.getRange(rowNum, 3).setFormula(`=IF(COUNTA(Responses!S:S)-1>0,B${rowNum}/(COUNTA(Responses!S:S)-1)*100,0)`);
    statsSheet.getRange(rowNum, 3).setNumberFormat('0.0"%"');
  });

  const q15Chart = statsSheet.newChart()
    .setChartType(Charts.ChartType.PIE)
    .addRange(statsSheet.getRange(q15StartRow, 1, q15Options.length, 2))
    .setPosition(q15StartRow, chartColumn, 0, 0)
    .setOption('title', 'Q15. 피부타입 분포')
    .setOption('width', 450)
    .setOption('height', 280)
    .setOption('pieHole', 0.4)
    .build();
  statsSheet.insertChart(q15Chart);

  currentRow += q15Options.length + 3;

  // 열 너비 조정
  statsSheet.setColumnWidth(1, 280);
  statsSheet.setColumnWidth(2, 100);
  statsSheet.setColumnWidth(3, 100);

  Logger.log('✅ Statistics 시트가 생성되었습니다 (전체 질문 포함).');
  Logger.log('📊 17개 섹션의 차트와 통계가 자동으로 업데이트됩니다.');

  return 'Statistics 시트 생성 완료! (Q1-Q15 전체)';
}
```

### 3. 실행 순서 (중요!)

코드를 붙여넣은 후 **반드시 이 순서대로** 실행하세요:

#### ✅ Step 1: 시트 초기화 (최초 1회)

1. 함수 선택 드롭다운에서 **`resetSheet`** 선택
2. **실행** 버튼 (▶️) 클릭
3. 권한 요청 시 **승인** 클릭
4. 로그에서 "✅ 시트가 초기화되었습니다." 확인
5. 스프레드시트로 돌아가서 **"Responses"** 시트 확인
   - 파란색 헤더가 보여야 함
   - 한글 질문들이 보여야 함

#### ✅ Step 2: 테스트 데이터 전송

1. 함수 선택 드롭다운에서 **`testPost`** 선택
2. **실행** 버튼 (▶️) 클릭
3. 로그에서 "데이터 저장 성공" 확인
4. 스프레드시트에서 2번째 행에 테스트 데이터 확인
   - "🦊 사막여우"가 보여야 함
   - Q9에 "기타: 낮에 운동을 해요"가 보여야 함
   - 번갈아가며 배경색이 있어야 함

#### ✅ Step 3: 웹 앱 배포

테스트가 성공하면 배포하세요 (아래 섹션 참조)

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

**문제: "TypeError: Cannot read properties of undefined (reading 'insertSheet')"**
- 원인: `createStyledSheet()` 함수를 직접 실행하려고 했을 때 발생
- 해결: **절대 `createStyledSheet()`를 직접 실행하지 마세요!**
- 대신: `resetSheet()` 함수를 실행하세요

**문제: "Responses 시트를 찾을 수 없습니다"**
- 해결: `resetSheet()` 함수를 먼저 실행하세요

**문제: "권한이 없습니다"**
- 해결: 배포 설정에서 "다음 사용자로 실행: 나" 확인

**문제: "데이터가 저장되지 않습니다"**
- 해결 1: `resetSheet()` 함수를 먼저 실행했는지 확인
- 해결 2: `testPost()` 함수로 직접 테스트
- 해결 3: 로그에서 오류 메시지 확인

**문제: "스타일링이 적용되지 않았습니다"**
- 해결: 기존 "Responses" 시트를 삭제하고 `resetSheet()` 재실행

**문제: "CORS 오류" (웹사이트에서)**
- 해결: 정상입니다. `mode: 'no-cors'`로 전송하면 응답을 읽을 수 없지만 데이터는 저장됩니다.

### 7. config.js 설정

웹 앱 URL을 복사한 후 `config.js` 파일에 붙여넣기:

```javascript
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
```

## 변경 사항 (v2 → v3)

1. ✅ **한글 헤더**: 모든 질문을 한글로 표시
2. ✅ **UV 타입 한글 변환**: 동물 캐릭터 이모지와 한글 이름 (예: 🦊 사막여우)
3. ✅ **Q9 "기타" 입력 처리**: "other:텍스트" 형식을 "기타: 텍스트"로 변환
4. ✅ **타임스탬프 한국 시간**: 한국 시간대(Asia/Seoul)로 자동 변환
5. ✅ **자동 스타일링**:
   - 파란색 헤더 배경 (#4285F4) + 흰색 글자
   - 짝수/홀수 행 번갈아가며 배경색 (#F8F9FA / #FFFFFF)
   - UV 타입 열 볼드체 강조
   - 열 너비 자동 조정
   - 헤더 행 고정 (스크롤해도 보임)
6. ✅ **Q7-1, Q7-2 분리**: 조건부 질문 제대로 처리
7. ✅ 시트 자동 생성 기능
8. ✅ 상세한 에러 로깅
9. ✅ 테스트 함수 추가
10. ✅ GET 요청으로 상태 확인

## 스타일링 미리보기

스프레드시트는 다음과 같이 보입니다:

| 헤더 (파란색 배경) |
|---|
| 응답 시각 │ UV 케어 타입 │ 점수 │ Q1. 햇빛 노출 후 피부 증상 │ ... |

| 데이터 행 (번갈아가며 배경색) |
|---|
| 2025-01-15 14:23:45 │ **🦊 사막여우** │ 85 │ 얼굴 열감/화끈거림, 홍조가 오래 유지됨 │ ... |
| 2025-01-15 14:25:12 │ **🐼 그늘판다** │ 72 │ 땀·유분 증가 │ ... |

## 추가 도움이 필요한 경우

실행 기록의 로그를 복사하여 공유해주세요.
