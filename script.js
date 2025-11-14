// 설문 데이터 (전면 재설계 버전 - 13-14문항)
const surveyQuestions = [
    // ===== 섹션 1: 인식 (Problem Awareness) =====

    // Q1. 햇빛 노출 후 피부 증상
    {
        id: 'q1',
        section: 'awareness',
        question: '🌞 햇빛에 30분 이상 노출되면, 내 피부는?',
        description: '해당되는 모든 증상을 선택해주세요',
        type: 'multiple',
        category: 'sensitivity',
        options: [
            { value: 'heat', label: '얼굴 열감/화끈거림', weight: 3 },
            { value: 'redness', label: '홍조가 오래 유지됨', weight: 3 },
            { value: 'oil', label: '땀·유분 증가', weight: 2 },
            { value: 'makeup_break', label: '메이크업 무너짐', weight: 2 },
            { value: 'pores', label: '모공이 넓어짐', weight: 2 },
            { value: 'dryness', label: '건조함/당김', weight: 3 },
            { value: 'lift', label: '메이크업 들뜸', weight: 2 },
            { value: 'none', label: '거의 변화 없음', weight: 0 }
        ]
    },

    // Q2. 증상 발생 빈도
    {
        id: 'q2',
        section: 'awareness',
        question: '📊 위 증상은 얼마나 자주 겪나요?',
        type: 'single',
        category: 'sensitivity',
        options: [
            { value: 'always', label: '거의 매번', weight: 3 },
            { value: 'often', label: '주 2–3회', weight: 2 },
            { value: 'sometimes', label: '주 1회', weight: 1 },
            { value: 'rarely', label: '거의 없음', weight: 0 }
        ]
    },

    // Q3. 광노화 인지도
    {
        id: 'q3',
        section: 'awareness',
        question: '💡 \"광노화\"에 대해 알고 계셨나요?',
        description: '광노화 = 자외선에 의한 피부 노화',
        type: 'single',
        category: 'knowledge',
        options: [
            { value: 'know_act', label: '알고 있었고 평소 신경 쓰는 편', weight: 3 },
            { value: 'heard', label: '들어만 봤다', weight: 1 },
            { value: 'never', label: '처음 듣는다', weight: 0 }
        ]
    },

    // ===== 섹션 2: 현재 행동 (Current Behavior) =====

    // Q4. 선크림 사용 빈도
    {
        id: 'q4',
        section: 'behavior',
        question: '🧴 평소 자외선 차단제는 얼마나 자주 바르시나요?',
        type: 'single',
        category: 'prevention',
        options: [
            { value: 'always', label: '거의 매번', weight: 3 },
            { value: 'often', label: '주 2–3회', weight: 2 },
            { value: 'sometimes', label: '주 1회', weight: 1 },
            { value: 'rarely', label: '거의 바르지 않는다', weight: 0 }
        ]
    },

    // Q5. 선크림 덧바르기
    {
        id: 'q5',
        section: 'behavior',
        question: '⏰ 외출 중 선크림을 덧바르시나요?',
        type: 'single',
        category: 'prevention',
        options: [
            { value: 'often', label: '자주 덧바른다', weight: 3 },
            { value: 'sometimes', label: '가끔 한다', weight: 2 },
            { value: 'rarely', label: '거의 안 한다', weight: 1 },
            { value: 'cant', label: '번거로워서 못 한다', weight: 0 }
        ]
    },

    // Q6. 진정 케어 여부 (분기점)
    {
        id: 'q6',
        section: 'behavior',
        question: '💧 햇빛 노출 후 \"진정/쿨링 케어\"를 따로 하시나요?',
        type: 'single',
        category: 'aftercare',
        options: [
            { value: 'yes', label: '한다', weight: 2 },
            { value: 'no', label: '안 한다', weight: 0 }
        ],
        branching: true  // 분기 질문 표시
    },

    // Q7-1. 케어 방식 (Q6="yes"일 때만)
    {
        id: 'q7_1',
        section: 'behavior',
        question: '🛁 어떤 방식으로 케어하시나요?',
        description: '해당되는 모든 것을 선택해주세요',
        type: 'multiple',
        category: 'aftercare_method',
        condition: { questionId: 'q6', value: 'yes' },
        options: [
            { value: 'wash', label: '물로 세안한다', weight: 1 },
            { value: 'mist', label: '미스트를 뿌린다', weight: 2 },
            { value: 'gel', label: '알로에/진정 젤을 바른다', weight: 2 },
            { value: 'mask', label: '시트 마스크/쿨링 패드 사용', weight: 3 },
            { value: 'ice', label: '얼음·찬 물수건 등 즉흥 쿨링', weight: 1 },
            { value: 'other', label: '기타', weight: 1 }
        ]
    },

    // Q7-2. 제품 선택 포인트 (Q6="yes"일 때만)
    {
        id: 'q7_2',
        section: 'behavior',
        question: '⭐ 이런 제품을 선택할 때 가장 중요한 포인트는 뭐라고 생각하시나요?',
        description: '해당되는 모든 것을 선택해주세요',
        type: 'multiple',
        category: 'product_priority',
        condition: { questionId: 'q6', value: 'yes' },
        options: [
            { value: 'cooling', label: '즉각적인 쿨링·진정', weight: 3 },
            { value: 'makeup', label: '메이크업 위에도 사용 가능', weight: 2 },
            { value: 'texture', label: '끈적임/유분감 없음', weight: 2 },
            { value: 'portable', label: '휴대성', weight: 1 },
            { value: 'ingredient', label: '성분·안정성', weight: 2 },
            { value: 'lasting', label: '지속력', weight: 2 },
            { value: 'price', label: '가격', weight: 1 }
        ]
    },

    // Q8. 안 하는 이유 (Q6="no"일 때만)
    {
        id: 'q8',
        section: 'behavior',
        question: '🤔 안 하는 이유는 무엇인가요?',
        description: '해당되는 모든 것을 선택해주세요',
        type: 'multiple',
        category: 'barrier',
        condition: { questionId: 'q6', value: 'no' },
        options: [
            { value: 'lazy', label: '귀찮아서', weight: 1 },
            { value: 'makeup', label: '메이크업 위에 바르기 어려워서', weight: 2 },
            { value: 'dont_know', label: '어떤 제품을 써야 할지 몰라서', weight: 2 },
            { value: 'sticky', label: '제품들이 끈적이거나 무거워서', weight: 2 },
            { value: 'no_effect', label: '써봤는데 효과를 잘 못 느껴서', weight: 1 },
            { value: 'no_need', label: '필요성을 못 느껴서', weight: 0 },
            { value: 'other', label: '기타', weight: 0 }
        ]
    },

    // ===== 섹션 3: 사용 맥락 (Occasion) =====

    // Q9. 평일 자외선 노출
    {
        id: 'q9',
        section: 'occasion',
        question: '☀️ 평일 기준, 생활 속 자외선 노출은 어느 정도인가요?',
        type: 'single',
        category: 'exposure',
        options: [
            { value: 'under_30', label: '30분 이하 (출퇴근·점심 이동 정도)', weight: 1 },
            { value: '30_to_60', label: '30분–1시간', weight: 2 },
            { value: 'over_60', label: '1시간 이상', weight: 3 },
            { value: 'none', label: '거의 없음', weight: 0 }
        ]
    },

    // Q10. 생활 환경
    {
        id: 'q10',
        section: 'occasion',
        question: '🏢 평소 어떤 환경에서 생활하시나요?',
        description: '해당되는 모든 것을 선택해주세요',
        type: 'multiple',
        category: 'environment',
        options: [
            { value: 'walk', label: '출퇴근 시 도보 이동이 많다', weight: 2 },
            { value: 'drive', label: '운전을 자주 하거나 운전 시간이 길다', weight: 2 },
            { value: 'indoor', label: '대부분 실내에서 생활한다 (사무직, 재택근무 등)', weight: 0 },
            { value: 'window', label: '실내지만 창가·유리벽 근처에서 일한다', weight: 1 },
            { value: 'cafe', label: '카페/테라스 활동을 자주 한다', weight: 2 },
            { value: 'lunch', label: '점심시간에 야외 이동이 잦다', weight: 1 },
            { value: 'outdoor', label: '야외 활동이 많은 편이다 (현장직, 체육 등)', weight: 3 }
        ]
    },

    // Q11. 주말 활동
    {
        id: 'q11',
        section: 'occasion',
        question: '🌴 주말이나 휴일은 보통 어떻게 보내시나요?',
        description: '해당되는 모든 것을 선택해주세요',
        type: 'multiple',
        category: 'weekend',
        options: [
            { value: 'terrace', label: '야외 카페/테라스 방문', weight: 2 },
            { value: 'picnic', label: '피크닉·공원 산책', weight: 2 },
            { value: 'hiking', label: '가벼운 하이킹·러닝', weight: 3 },
            { value: 'indoor', label: '쇼핑 등 실내 활동 위주', weight: 0 },
            { value: 'other', label: '기타', weight: 1 }
        ]
    },

    // Q12. 진정 필요 순간
    {
        id: 'q12',
        section: 'occasion',
        question: '🔥 햇빛 노출 후 \"아, 피부 진정이 필요하다\"라고 느끼는 순간은 언제인가요?',
        description: '해당되는 모든 것을 선택해주세요',
        type: 'multiple',
        category: 'need_moment',
        options: [
            { value: 'commute', label: '출근길/퇴근길 후', weight: 2 },
            { value: 'lunch', label: '점심 외출 후', weight: 2 },
            { value: 'drive', label: '운전 후', weight: 2 },
            { value: 'cafe', label: '야외 카페·테라스 이용 후', weight: 2 },
            { value: 'exercise', label: '운동·러닝 후', weight: 3 },
            { value: 'makeup', label: '메이크업이 들뜨거나 붉어졌을 때', weight: 3 },
            { value: 'none', label: '거의 없다', weight: 0 }
        ]
    },

    // ===== 섹션 4: 응답자 정보 (Basics) =====

    // Q13. 연령대
    {
        id: 'q13',
        section: 'demographics',
        question: '👤 연령대를 선택해주세요',
        type: 'single',
        category: 'age',
        options: [
            { value: 'teens', label: '10대', weight: 0 },
            { value: 'early_20s', label: '20대 초반', weight: 0 },
            { value: 'late_20s', label: '20대 후반', weight: 0 },
            { value: 'early_30s', label: '30대 초반', weight: 0 },
            { value: 'late_30s', label: '30대 후반', weight: 0 },
            { value: '40plus', label: '40대 이상', weight: 0 }
        ]
    },

    // Q14. 피부 타입
    {
        id: 'q14',
        section: 'demographics',
        question: '✨ 피부 타입을 선택해주세요',
        type: 'single',
        category: 'skin_type',
        options: [
            { value: 'dry', label: '건성', weight: 0 },
            { value: 'oily', label: '지성', weight: 0 },
            { value: 'combination', label: '복합성', weight: 0 },
            { value: 'sensitive', label: '민감성', weight: 0 },
            { value: 'acne', label: '여드름 피부', weight: 0 },
            { value: 'unknown', label: '잘 모르겠다', weight: 0 }
        ]
    }
];

// 전역 변수
let currentQuestionIndex = 0;
let answers = {};
let questionPath = [];  // 실제 보여진 질문 경로 저장

// 화면 전환
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// 설문 시작
function startSurvey() {
    showScreen('survey-screen');
    questionPath = [];
    renderQuestion();
}

// 현재 표시할 질문 가져오기 (조건부 분기 고려)
function getCurrentQuestion() {
    const question = surveyQuestions[currentQuestionIndex];

    // 조건부 질문인 경우 조건 체크
    if (question.condition) {
        const conditionQuestion = question.condition.questionId;
        const conditionValue = question.condition.value;
        const userAnswer = answers[conditionQuestion];

        // 조건 불만족 시 다음 질문으로 스킵
        if (userAnswer !== conditionValue) {
            return null;  // 스킵 신호
        }
    }

    return question;
}

// 다음 유효한 질문 인덱스 찾기
function getNextQuestionIndex(direction = 1) {
    let nextIndex = currentQuestionIndex + direction;

    while (nextIndex >= 0 && nextIndex < surveyQuestions.length) {
        const nextQuestion = surveyQuestions[nextIndex];

        // 조건부 질문 체크
        if (nextQuestion.condition) {
            const conditionQuestion = nextQuestion.condition.questionId;
            const conditionValue = nextQuestion.condition.value;
            const userAnswer = answers[conditionQuestion];

            if (userAnswer !== conditionValue) {
                // 조건 불만족 시 계속 탐색
                nextIndex += direction;
                continue;
            }
        }

        // 유효한 질문 찾음
        return nextIndex;
    }

    return nextIndex;  // 끝에 도달
}

// 질문 렌더링
function renderQuestion() {
    const question = getCurrentQuestion();

    // 스킵해야 하는 질문인 경우
    if (!question) {
        currentQuestionIndex = getNextQuestionIndex(1);
        if (currentQuestionIndex >= surveyQuestions.length) {
            submitSurvey();
            return;
        }
        renderQuestion();
        return;
    }

    const container = document.getElementById('question-container');

    // 진행률 업데이트 (전체 질문 수 기준)
    const totalQuestions = surveyQuestions.length;
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = totalQuestions;

    // 질문 HTML 생성
    let html = `
        <div class="question-card">
            <span class="question-number">질문 ${currentQuestionIndex + 1}</span>
            <h2>${question.question}</h2>
            ${question.description ? `<p class="question-description">${question.description}</p>` : ''}
            <div class="options">
    `;

    question.options.forEach((option, index) => {
        const inputType = question.type === 'multiple' ? 'checkbox' : 'radio';
        const isChecked = answers[question.id] &&
            (question.type === 'multiple'
                ? answers[question.id].includes(option.value)
                : answers[question.id] === option.value);

        html += `
            <div class="option ${isChecked ? 'selected' : ''}" onclick="selectOption(event, '${question.id}', '${option.value}', '${question.type}', this)">
                <input type="${inputType}"
                       id="${question.id}_${index}"
                       name="${question.id}"
                       value="${option.value}"
                       ${isChecked ? 'checked' : ''}>
                <label>${option.label}</label>
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    container.innerHTML = html;

    // 네비게이션 버튼 표시
    updateNavigation();

    // 질문 경로에 추가
    if (!questionPath.includes(currentQuestionIndex)) {
        questionPath.push(currentQuestionIndex);
    }
}

// 옵션 선택
function selectOption(event, questionId, value, type, element) {
    // 이벤트 전파 방지
    event.preventDefault();
    event.stopPropagation();

    if (type === 'multiple') {
        if (!answers[questionId]) {
            answers[questionId] = [];
        }

        const index = answers[questionId].indexOf(value);
        const checkbox = element.querySelector('input[type="checkbox"]');

        if (index > -1) {
            answers[questionId].splice(index, 1);
            element.classList.remove('selected');
            if (checkbox) checkbox.checked = false;
        } else {
            answers[questionId].push(value);
            element.classList.add('selected');
            if (checkbox) checkbox.checked = true;
        }
    } else {
        answers[questionId] = value;

        // 모든 옵션의 선택 해제
        element.parentElement.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
            const radio = opt.querySelector('input[type="radio"]');
            if (radio) radio.checked = false;
        });

        // 현재 옵션 선택
        element.classList.add('selected');
        const radio = element.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
    }

    updateNavigation();
}

// 네비게이션 업데이트 (통일된 방식 - 모두 "다음" 버튼)
function updateNavigation() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // 이전 버튼 - 첫 질문이 아니면 표시
    prevBtn.style.display = currentQuestionIndex > 0 ? 'block' : 'none';

    // 다음 버튼 - 항상 표시
    const currentQuestion = getCurrentQuestion();
    let hasAnswer = false;

    if (Array.isArray(answers[currentQuestion.id])) {
        // multiple: 배열이 비어있지 않은지 확인
        hasAnswer = answers[currentQuestion.id].length > 0;
    } else {
        // single: 값이 있는지 확인
        hasAnswer = !!answers[currentQuestion.id];
    }

    nextBtn.style.display = 'block';
    nextBtn.disabled = !hasAnswer;

    // 마지막 질문인지 확인
    const nextIndex = getNextQuestionIndex(1);
    if (nextIndex >= surveyQuestions.length) {
        nextBtn.textContent = '결과 보기';
    } else {
        nextBtn.textContent = '다음';
    }
}

// 이전 질문
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex = getNextQuestionIndex(-1);
        renderQuestion();
    }
}

// 다음 질문
function nextQuestion() {
    const nextIndex = getNextQuestionIndex(1);

    if (nextIndex < surveyQuestions.length) {
        currentQuestionIndex = nextIndex;
        renderQuestion();
    } else {
        submitSurvey();
    }
}

// 설문 제출
function submitSurvey() {
    showScreen('loading-screen');

    // 로딩 메시지 변경
    const messages = [
        '당신의 UV 케어 패턴을 분석하는 중... 📊',
        '피부 타입별 맞춤 솔루션 준비 중... ✨',
        '최적의 케어 루틴을 찾고 있습니다... 💡'
    ];

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
        document.getElementById('loading-message').textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
    }, 1500);

    // 타입 계산
    const result = calculateUVType();
    const { type, score } = result;

    // Google Sheets에 데이터 전송
    sendToGoogleSheets(answers, type, score).then(() => {
        clearInterval(messageInterval);

        // 결과 페이지로 이동 (2초 후)
        setTimeout(() => {
            window.location.href = `results.html?type=${type}&score=${score}`;
        }, 2000);
    }).catch(error => {
        console.error('데이터 전송 실패:', error);
        clearInterval(messageInterval);

        // 에러가 발생해도 결과 페이지로 이동
        setTimeout(() => {
            window.location.href = `results.html?type=${type}&score=${score}`;
        }, 2000);
    });
}

// UV 타입 계산 (새로운 6-8개 타입 시스템)
function calculateUVType() {
    // 점수 집계
    let scores = {
        sensitivity: 0,    // 피부 민감도 (Q1, Q2)
        knowledge: 0,      // 인지도 (Q3)
        prevention: 0,     // 예방 케어 (Q4, Q5)
        aftercare: 0,      // 진정 케어 (Q6, Q7-1, Q7-2)
        exposure: 0,       // 노출도 (Q9, Q10, Q11, Q12)
        barrier: 0         // 장벽 (Q8)
    };

    // 각 질문의 점수 계산
    surveyQuestions.forEach(question => {
        const answer = answers[question.id];
        if (!answer) return;

        // demographics는 제외
        if (question.category === 'age' || question.category === 'skin_type') return;

        if (question.type === 'multiple') {
            // 복수 선택의 경우
            answer.forEach(value => {
                const option = question.options.find(opt => opt.value === value);
                if (option) {
                    if (question.category === 'sensitivity') scores.sensitivity += option.weight;
                    else if (question.category === 'knowledge') scores.knowledge += option.weight;
                    else if (question.category === 'prevention') scores.prevention += option.weight;
                    else if (question.category === 'aftercare_method' || question.category === 'product_priority') {
                        scores.aftercare += option.weight;
                    }
                    else if (question.category === 'exposure' || question.category === 'environment' ||
                             question.category === 'weekend' || question.category === 'need_moment') {
                        scores.exposure += option.weight;
                    }
                    else if (question.category === 'barrier') scores.barrier += option.weight;
                }
            });
        } else if (question.type === 'single') {
            // 단일 선택의 경우
            const option = question.options.find(opt => opt.value === answer);
            if (option) {
                if (question.category === 'sensitivity') scores.sensitivity += option.weight;
                else if (question.category === 'knowledge') scores.knowledge += option.weight;
                else if (question.category === 'prevention') scores.prevention += option.weight;
                else if (question.category === 'aftercare') scores.aftercare += option.weight;
                else if (question.category === 'exposure') scores.exposure += option.weight;
            }
        }
    });

    // 타입 결정 로직 (3-Axis System)
    // 1. 피부 민감도 (고/중/저)
    let sensitivityLevel;
    if (scores.sensitivity >= 8) sensitivityLevel = 'high';
    else if (scores.sensitivity >= 4) sensitivityLevel = 'medium';
    else sensitivityLevel = 'low';

    // 2. 케어 성향 (예방형/진정형/무관심형)
    let careType;
    if (scores.prevention >= 5) careType = 'prevention';
    else if (scores.aftercare >= 3) careType = 'aftercare';
    else careType = 'unconcerned';

    // 3. 생활 노출도 (고/중/저)
    let exposureLevel;
    if (scores.exposure >= 10) exposureLevel = 'high';
    else if (scores.exposure >= 5) exposureLevel = 'medium';
    else exposureLevel = 'low';

    // 타입 매핑 (6개 주요 타입 + 2개 특수 타입)
    let type = 'beginner';  // 기본값

    if (sensitivityLevel === 'high') {
        if (careType === 'prevention') {
            type = exposureLevel === 'high' ? 'uv_conscious' : 'suncare_master';
        } else if (careType === 'aftercare') {
            type = exposureLevel === 'high' ? 'cooling_pro' : 'sensitive_carer';
        } else {
            type = 'sensitive_beginner';
        }
    } else if (sensitivityLevel === 'medium') {
        if (careType === 'prevention') {
            type = 'smart_carer';
        } else if (careType === 'aftercare') {
            type = 'active_guarder';
        } else {
            type = 'beginner';
        }
    } else {  // low sensitivity
        if (careType === 'unconcerned') {
            type = exposureLevel === 'high' ? 'free_spirit' : 'urban_life';
        } else if (careType === 'prevention') {
            type = 'active_guarder';
        } else {
            type = 'urban_life';
        }
    }

    // 점수 계산 (0-100)
    const totalScore = Math.round(
        (scores.sensitivity * 8 + scores.knowledge * 5 +
         scores.prevention * 10 + scores.aftercare * 7 +
         scores.exposure * 3) / 3.3
    );

    return { type, score: Math.min(100, Math.max(0, totalScore)), scores };
}

// Google Sheets에 데이터 전송
async function sendToGoogleSheets(answers, uvType, score) {
    if (!GOOGLE_SHEETS_URL) {
        console.warn('Google Sheets URL이 설정되지 않았습니다.');
        return;
    }

    const data = {
        timestamp: new Date().toISOString(),
        uvType: uvType,
        score: score,
        ...answers,
        userAgent: navigator.userAgent
    };

    try {
        const response = await fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        console.log('데이터 전송 완료', { uvType, score });
    } catch (error) {
        console.error('데이터 전송 중 오류:', error);
        throw error;
    }
}
