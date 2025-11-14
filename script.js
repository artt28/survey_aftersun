// 설문 데이터 (재설계 버전)
const surveyQuestions = [
    // 피부 민감도
    {
        id: 'q1',
        question: '🌞 햇빛에 30분 이상 노출된 후, 당신의 피부는?',
        description: '해당되는 모든 증상을 선택해주세요',
        type: 'multiple',
        category: 'sensitivity',
        emoji: '🌡️',
        options: [
            { value: 'heat', label: '뜨겁게 달아오르거나 열감이 느껴진다', weight: 3 },
            { value: 'red', label: '붉어지거나 따갑다', weight: 3 },
            { value: 'dry', label: '피부가 당기고 건조해진다', weight: 2 },
            { value: 'spots', label: '기미/잡티가 진해지는 것 같다', weight: 2 },
            { value: 'none', label: '특별한 변화를 못 느낀다', weight: 0 }
        ]
    },

    // 지식 수준
    {
        id: 'q2',
        question: '💡 "광노화"가 무엇인지 알고 계신가요?',
        description: '광노화 = 자외선에 의한 피부 노화',
        type: 'single',
        category: 'knowledge',
        emoji: '🧠',
        options: [
            { value: 'know_act', label: '잘 알고 있고, 적극적으로 케어하고 있다', weight: 3 },
            { value: 'know', label: '알고 있지만 특별히 관리하지 않는다', weight: 1 },
            { value: 'heard', label: '들어본 적은 있지만 잘 모른다', weight: 0 },
            { value: 'never', label: '처음 듣는다', weight: 0 }
        ]
    },

    // 선크림 사용 빈도
    {
        id: 'q3',
        question: '🧴 평소 자외선 차단제를 얼마나 자주 바르시나요?',
        type: 'single',
        category: 'prevention',
        emoji: '🛡️',
        options: [
            { value: 'everyday', label: '매일 꼼꼼히 (실내에서도)', weight: 3 },
            { value: 'outside', label: '외출할 때만', weight: 2 },
            { value: 'sometimes', label: '야외 활동이 길 때만', weight: 1 },
            { value: 'rarely', label: '거의 바르지 않는다', weight: 0 }
        ]
    },

    // 선크림 덧바르기
    {
        id: 'q4',
        question: '⏰ 외출 중 선크림을 덧바르시나요?',
        description: '선크림 효과는 2-3시간만 지속됩니다',
        type: 'single',
        category: 'prevention',
        emoji: '🔄',
        options: [
            { value: 'often', label: '자주 덧바른다 (2-3시간마다)', weight: 3 },
            { value: 'sometimes', label: '가끔 덧바른다 (필요할 때만)', weight: 2 },
            { value: 'want_but_cant', label: '필요하다고 생각하지만 못한다', weight: 1 },
            { value: 'no', label: '덧바르지 않는다', weight: 0 }
        ]
    },

    // 사후 케어
    {
        id: 'q5',
        question: '🌙 햇빛 노출 후 피부 진정 케어를 하시나요?',
        description: '해당되는 모든 것을 선택해주세요',
        type: 'multiple',
        category: 'care',
        emoji: '💧',
        options: [
            { value: 'mask', label: '진정 마스크팩을 사용한다', weight: 2 },
            { value: 'aloe', label: '알로에 젤 등 진정 제품을 바른다', weight: 2 },
            { value: 'mist', label: '진정 미스트를 뿌린다', weight: 2 },
            { value: 'cream', label: '수분크림을 듬뿍 바른다', weight: 1 },
            { value: 'nothing', label: '특별히 하지 않는다', weight: 0 }
        ]
    },

    // 평일 야외 노출
    {
        id: 'q6',
        question: '🏢 평일 하루 평균 야외 노출 시간은?',
        description: '출퇴근, 점심 외출 등 모두 포함',
        type: 'single',
        category: 'lifestyle',
        emoji: '⏱️',
        options: [
            { value: 'under_30', label: '30분 미만 (거의 실내)', weight: 0 },
            { value: '30_to_60', label: '30분 ~ 1시간', weight: 1 },
            { value: '1_to_2', label: '1 ~ 2시간', weight: 2 },
            { value: 'over_2', label: '2시간 이상', weight: 3 }
        ]
    },

    // 주말 활동
    {
        id: 'q7',
        question: '🌴 주말이나 휴일에 주로 무엇을 하시나요?',
        type: 'single',
        category: 'lifestyle',
        emoji: '🎯',
        options: [
            { value: 'indoor', label: '실내 활동 (카페, 쇼핑, 집)', weight: 0 },
            { value: 'mixed', label: '실내외 반반', weight: 1 },
            { value: 'light_outdoor', label: '가벼운 야외 활동 (산책, 피크닉)', weight: 2 },
            { value: 'active_outdoor', label: '적극적 야외 활동 (등산, 스포츠, 해변)', weight: 3 }
        ]
    },

    // 직업/환경
    {
        id: 'q8',
        question: '💼 당신의 일상 환경은?',
        type: 'single',
        category: 'lifestyle',
        emoji: '🏠',
        options: [
            { value: 'full_indoor', label: '거의 실내 (사무직, 재택근무)', weight: 0 },
            { value: 'mixed', label: '실내외 반반', weight: 1 },
            { value: 'frequent_outdoor', label: '자주 외출 (영업, 배달 등)', weight: 2 },
            { value: 'full_outdoor', label: '주로 야외 (현장직, 체육 등)', weight: 3 }
        ]
    },

    // 현재 가장 큰 고민
    {
        id: 'q9',
        question: '😰 UV 케어에서 가장 큰 어려움은?',
        type: 'single',
        category: 'need',
        emoji: '❓',
        options: [
            { value: 'dont_know', label: '뭘 어떻게 해야 할지 모르겠다', weight: 1 },
            { value: 'hassle', label: '알지만 귀찮고 번거롭다', weight: 2 },
            { value: 'reapply', label: '선크림 덧바르기가 어렵다', weight: 3 },
            { value: 'after_care', label: '햇빛 노출 후 진정이 필요하다', weight: 4 },
            { value: 'no_problem', label: '특별한 어려움 없다', weight: 0 }
        ]
    },

    // 인구통계 (필수)
    {
        id: 'q10',
        question: '👤 연령대와 피부 타입을 알려주세요',
        description: '맞춤 추천을 위해 필요합니다',
        type: 'select_two',
        category: 'demographic',
        emoji: '📊',
        subQuestions: [
            {
                id: 'age',
                label: '연령대',
                options: [
                    { value: '20s', label: '20대' },
                    { value: '30s', label: '30대' },
                    { value: '40s', label: '40대' },
                    { value: '50plus', label: '50대 이상' }
                ]
            },
            {
                id: 'skin',
                label: '피부 타입',
                options: [
                    { value: 'sensitive', label: '민감성' },
                    { value: 'dry', label: '건성' },
                    { value: 'oily', label: '지성' },
                    { value: 'combination', label: '복합성' },
                    { value: 'normal', label: '보통' }
                ]
            }
        ]
    }
];

// 전역 변수
let currentQuestionIndex = 0;
let answers = {};

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
    renderQuestion();
}

// 질문 렌더링
function renderQuestion() {
    const question = surveyQuestions[currentQuestionIndex];
    const container = document.getElementById('question-container');

    // 진행률 업데이트
    const progress = ((currentQuestionIndex + 1) / surveyQuestions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = surveyQuestions.length;

    let html = '';

    // 특수 타입: select_two (Q10)
    if (question.type === 'select_two') {
        html = `
            <div class="question-card">
                <span class="question-number">질문 ${currentQuestionIndex + 1}</span>
                <h2>${question.question}</h2>
                ${question.description ? `<p class="question-description">${question.description}</p>` : ''}
                <div class="options">
        `;

        question.subQuestions.forEach((subQ, subIndex) => {
            html += `
                <div class="sub-question">
                    <h3 class="sub-question-title">${subQ.label}</h3>
                    <div class="sub-options">
            `;

            subQ.options.forEach((option, optIndex) => {
                const isChecked = answers[question.id] && answers[question.id][subQ.id] === option.value;
                html += `
                    <div class="option ${isChecked ? 'selected' : ''}"
                         onclick="selectSubOption(event, '${question.id}', '${subQ.id}', '${option.value}', this)">
                        <input type="radio"
                               id="${question.id}_${subQ.id}_${optIndex}"
                               name="${question.id}_${subQ.id}"
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
        });

        html += `
                </div>
            </div>
        `;
    } else {
        // 일반 질문 (single, multiple)
        html = `
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
    }

    container.innerHTML = html;

    // 네비게이션 버튼 표시
    updateNavigation();
}

// 옵션 선택
function selectOption(event, questionId, value, type, element) {
    // 이벤트 전파 방지 (label, input의 기본 동작과 충돌 방지)
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
        // Single selection (radio)
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

        // 단일 선택은 자동으로 다음 질문으로 (300ms 딜레이)
        setTimeout(() => {
            nextQuestion();
        }, 300);
    }

    updateNavigation();
}

// 서브 옵션 선택 (Q10용)
function selectSubOption(event, questionId, subId, value, element) {
    // 이벤트 전파 방지
    event.preventDefault();
    event.stopPropagation();

    if (!answers[questionId]) {
        answers[questionId] = {};
    }

    answers[questionId][subId] = value;

    // 같은 서브 질문의 다른 옵션 선택 해제
    const parent = element.closest('.sub-options');
    parent.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
        const radio = opt.querySelector('input[type="radio"]');
        if (radio) radio.checked = false;
    });

    // 현재 옵션 선택
    element.classList.add('selected');
    const radio = element.querySelector('input[type="radio"]');
    if (radio) radio.checked = true;

    updateNavigation();

    // Q10 (select_two)는 두 항목 모두 선택되면 자동으로 다음으로
    const currentQuestion = surveyQuestions[currentQuestionIndex];
    if (currentQuestion.type === 'select_two') {
        const allAnswered = currentQuestion.subQuestions.every(sq => answers[questionId][sq.id]);
        if (allAnswered) {
            setTimeout(() => {
                nextQuestion();
            }, 300);
        }
    }
}

// 네비게이션 업데이트
function updateNavigation() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // 이전 버튼 - 첫 질문이 아니면 항상 표시
    prevBtn.style.display = currentQuestionIndex > 0 ? 'block' : 'none';

    // 다음 버튼
    const currentQuestion = surveyQuestions[currentQuestionIndex];
    let hasAnswer = false;

    if (currentQuestion.type === 'select_two') {
        // select_two: 모든 서브 질문에 답변이 있는지 확인
        const answer = answers[currentQuestion.id];
        if (answer) {
            const allAnswered = currentQuestion.subQuestions.every(sq => answer[sq.id]);
            hasAnswer = allAnswered;
        }
    } else if (Array.isArray(answers[currentQuestion.id])) {
        // multiple: 배열이 비어있지 않은지 확인
        hasAnswer = answers[currentQuestion.id].length > 0;
    } else {
        // single: 값이 있는지 확인
        hasAnswer = !!answers[currentQuestion.id];
    }

    // 다중 선택과 select_two는 "다음" 버튼 표시
    // 단일 선택은 자동 진행되므로 버튼 숨김
    if (currentQuestion.type === 'multiple' || currentQuestion.type === 'select_two') {
        nextBtn.style.display = 'block';
        nextBtn.disabled = !hasAnswer;
    } else {
        // 단일 선택은 버튼 숨김 (자동 진행)
        nextBtn.style.display = 'none';
    }

    if (currentQuestionIndex === surveyQuestions.length - 1) {
        nextBtn.textContent = '결과 보기';
    } else {
        nextBtn.textContent = '다음';
    }
}

// 이전 질문
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

// 다음 질문
function nextQuestion() {
    if (currentQuestionIndex < surveyQuestions.length - 1) {
        currentQuestionIndex++;
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
        '피부 세포들에게 물어보는 중... 🔬',
        'UV 케어 패턴을 분석하는 중... 📊',
        '당신만의 맞춤 루틴을 준비하는 중... ✨'
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

// UV 타입 계산 (8개 타입 시스템)
function calculateUVType() {
    let scores = {
        sensitivity: 0,   // 피부 민감도 (Q1)
        knowledge: 0,     // 지식 수준 (Q2)
        prevention: 0,    // 예방 케어 (Q3, Q4)
        care: 0,          // 진정 케어 (Q5)
        lifestyle: 0      // 활동성 (Q6, Q7, Q8)
    };

    // 각 질문의 점수 계산
    surveyQuestions.forEach(question => {
        const answer = answers[question.id];
        if (!answer || question.category === 'demographic' || question.category === 'need') return;

        if (question.type === 'multiple') {
            // 복수 선택의 경우
            answer.forEach(value => {
                const option = question.options.find(opt => opt.value === value);
                if (option) {
                    scores[question.category] += option.weight;
                }
            });
        } else if (question.type === 'single') {
            // 단일 선택의 경우
            const option = question.options.find(opt => opt.value === answer);
            if (option) {
                scores[question.category] += option.weight;
            }
        }
    });

    // 타입 결정 로직
    // 1. 민감도 결정 (Q1 기반)
    const isSensitive = scores.sensitivity >= 5;

    // 2. 예방 vs 진정 결정 (Q3, Q4 vs Q5)
    const preventionScore = scores.prevention;
    const careScore = scores.care;
    const isPreventionFocused = preventionScore >= careScore;

    // 3. 라이프스타일 결정 (Q6, Q7, Q8 기반)
    const isActive = scores.lifestyle >= 4;

    // 4. 타입 매핑
    let type;

    if (isSensitive) {
        if (isPreventionFocused) {
            type = isActive ? 'master' : 'fighter';
        } else {
            type = isActive ? 'active' : 'calming';
        }
    } else {
        if (isPreventionFocused) {
            type = isActive ? 'weekend' : 'smart';
        } else {
            type = isActive ? 'sunny' : 'relaxed';
        }
    }

    // 점수도 함께 반환 (결과 페이지에서 활용)
    const totalScore = Math.round(
        (scores.sensitivity * 10 + scores.knowledge * 5 +
         scores.prevention * 8 + scores.care * 5 + scores.lifestyle * 3) / 3.1
    );

    // URL에 타입과 점수를 함께 전달
    return { type, score: Math.min(100, totalScore), scores };
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
