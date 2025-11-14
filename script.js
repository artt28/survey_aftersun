// 설문 데이터
const surveyQuestions = [
    {
        id: 'q1',
        question: '최근 1개월 내 피부가 자외선에 노출된 후 경험한 증상은?',
        description: '해당되는 모든 항목을 선택해주세요',
        type: 'multiple',
        category: 'sensitivity',
        options: [
            { value: 'heat', label: '피부가 달아오르거나 열감을 느낀다', weight: 2 },
            { value: 'dry', label: '피부가 당기고 건조해진다', weight: 2 },
            { value: 'red', label: '붉어지거나 따가움을 느낀다', weight: 3 },
            { value: 'none', label: '특별한 증상을 못 느낀다', weight: 0 },
            { value: 'spots', label: '기미/잡티가 진해지는 것 같다', weight: 2 }
        ]
    },
    {
        id: 'q2',
        question: '"광노화"라는 단어를 들어본 적이 있나요?',
        type: 'single',
        category: 'sensitivity',
        options: [
            { value: 'know_care', label: '잘 알고 있고, 적극적으로 케어 중이다', weight: 3 },
            { value: 'heard', label: '들어봤지만 구체적으로는 모른다', weight: 1 },
            { value: 'never', label: '처음 듣는다', weight: 0 },
            { value: 'know_no_care', label: '알지만 특별히 신경쓰지 않는다', weight: 1 }
        ]
    },
    {
        id: 'q3',
        question: '자외선이 피부 노화의 주요 원인이라는 사실을 알고 계셨나요?',
        type: 'single',
        category: 'sensitivity',
        options: [
            { value: 'yes_care', label: '알고 있었고, 그래서 선케어에 신경쓴다', weight: 3 },
            { value: 'yes_no_care', label: '알고는 있지만 특별히 대처하지 않는다', weight: 1 },
            { value: 'maybe', label: '어렴풋이 들어본 것 같다', weight: 1 },
            { value: 'no', label: '몰랐다', weight: 0 }
        ]
    },
    {
        id: 'q4',
        question: '평소 자외선 차단제를 바르는 빈도는?',
        type: 'single',
        category: 'approach',
        options: [
            { value: 'everyday', label: '매일 꼼꼼히 바른다 (실내에서도)', weight: 3 },
            { value: 'outside', label: '외출할 때만 바른다', weight: 2 },
            { value: 'long_activity', label: '야외활동이 길 때만 바른다', weight: 1 },
            { value: 'rarely', label: '거의 바르지 않는다', weight: 0 }
        ]
    },
    {
        id: 'q5',
        question: '햇빛 노출 후 피부 진정을 위해 하는 행동은?',
        description: '해당되는 모든 항목을 선택해주세요',
        type: 'multiple',
        category: 'approach',
        options: [
            { value: 'mask', label: '진정 마스크팩을 사용한다', weight: 2 },
            { value: 'cream', label: '수분크림을 듬뿍 바른다', weight: 2 },
            { value: 'mist', label: '미스트를 뿌린다', weight: 2 },
            { value: 'nothing', label: '특별히 하는 게 없다', weight: 0 },
            { value: 'aloe', label: '알로에 젤 등 진정 제품을 바른다', weight: 2 }
        ]
    },
    {
        id: 'q6',
        question: '외출 중 선크림을 덧바르는 것에 대해 어떻게 생각하시나요?',
        type: 'single',
        category: 'approach',
        options: [
            { value: 'makeup', label: '필요한데 메이크업이 무너져서 못한다', weight: 2 },
            { value: 'hassle', label: '필요한데 번거로워서 못한다', weight: 1 },
            { value: 'sometimes', label: '꼭 필요할 때만 덧바른다', weight: 2 },
            { value: 'no_need', label: '필요성을 못 느낀다', weight: 0 },
            { value: 'often', label: '이미 자주 덧바르고 있다', weight: 3 }
        ]
    },
    {
        id: 'q7',
        question: '평균 하루 야외 활동 시간은?',
        type: 'single',
        category: 'lifestyle',
        options: [
            { value: 'under_30', label: '30분 미만 (실내 위주 생활)', weight: 0 },
            { value: '30_to_60', label: '30분-1시간 (출퇴근 정도)', weight: 1 },
            { value: '1_to_3', label: '1-3시간 (산책, 운동 포함)', weight: 2 },
            { value: 'over_3', label: '3시간 이상 (야외 활동 많음)', weight: 3 }
        ]
    },
    {
        id: 'q8',
        question: '주말이나 휴일의 주요 활동은?',
        type: 'single',
        category: 'lifestyle',
        options: [
            { value: 'indoor', label: '실내 활동 (카페, 쇼핑몰, 집)', weight: 0 },
            { value: 'light_outdoor', label: '가벼운 야외 활동 (산책, 피크닉)', weight: 1 },
            { value: 'active_outdoor', label: '적극적 야외 활동 (등산, 스포츠)', weight: 3 },
            { value: 'depends', label: '계절/날씨에 따라 다름', weight: 1 }
        ]
    },
    {
        id: 'q9',
        question: '"자외선 손상 진정 미스트"라는 제품이 있다면?',
        type: 'single',
        category: 'level',
        options: [
            { value: 'very_need', label: '매우 필요하다, 바로 구매하고 싶다', weight: 3 },
            { value: 'interested', label: '흥미롭다, 더 알아보고 싶다', weight: 2 },
            { value: 'nice_to_have', label: '있으면 좋겠지만 필수는 아니다', weight: 1 },
            { value: 'not_need', label: '굳이 필요 없을 것 같다', weight: 0 }
        ]
    },
    {
        id: 'q10',
        question: '미스트 제품을 구매할 때 가장 중요한 요소는?',
        type: 'single',
        category: 'level',
        options: [
            { value: 'cooling', label: '즉각적인 쿨링/진정 효과', weight: 2 },
            { value: 'ingredients', label: '피부 손상 회복 성분', weight: 3 },
            { value: 'makeup', label: '메이크업 위 사용 가능 여부', weight: 2 },
            { value: 'portable', label: '휴대성과 편의성', weight: 1 },
            { value: 'price', label: '가격 대비 용량', weight: 1 }
        ]
    },
    {
        id: 'q11',
        question: '자외선 케어 제품에 월 평균 지출 의향 금액은?',
        type: 'single',
        category: 'level',
        options: [
            { value: 'under_10k', label: '1만원 미만', weight: 0 },
            { value: '10k_to_30k', label: '1-3만원', weight: 1 },
            { value: '30k_to_50k', label: '3-5만원', weight: 2 },
            { value: 'over_50k', label: '5만원 이상', weight: 3 }
        ]
    },
    {
        id: 'q12',
        question: '연령대를 선택해주세요',
        type: 'single',
        category: 'demographic',
        options: [
            { value: '20_24', label: '20-24세', weight: 0 },
            { value: '25_29', label: '25-29세', weight: 0 },
            { value: '30_34', label: '30-34세', weight: 0 },
            { value: '35_39', label: '35-39세', weight: 0 },
            { value: 'over_40', label: '40세 이상', weight: 0 }
        ]
    },
    {
        id: 'q13',
        question: '피부 타입을 선택해주세요',
        type: 'single',
        category: 'demographic',
        options: [
            { value: 'dry', label: '건성', weight: 0 },
            { value: 'oily', label: '지성', weight: 0 },
            { value: 'combination', label: '복합성', weight: 0 },
            { value: 'sensitive', label: '민감성', weight: 0 },
            { value: 'unknown', label: '잘 모르겠음', weight: 0 }
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
            <div class="option ${isChecked ? 'selected' : ''}" onclick="selectOption('${question.id}', '${option.value}', '${question.type}', this)">
                <input type="${inputType}"
                       id="${question.id}_${index}"
                       name="${question.id}"
                       value="${option.value}"
                       ${isChecked ? 'checked' : ''}>
                <label for="${question.id}_${index}">${option.label}</label>
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
}

// 옵션 선택
function selectOption(questionId, value, type, element) {
    if (type === 'multiple') {
        if (!answers[questionId]) {
            answers[questionId] = [];
        }

        const index = answers[questionId].indexOf(value);
        if (index > -1) {
            answers[questionId].splice(index, 1);
            element.classList.remove('selected');
        } else {
            answers[questionId].push(value);
            element.classList.add('selected');
        }
    } else {
        answers[questionId] = value;

        // 모든 옵션의 선택 해제
        element.parentElement.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });

        // 현재 옵션 선택
        element.classList.add('selected');
    }

    updateNavigation();
}

// 네비게이션 업데이트
function updateNavigation() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // 이전 버튼
    prevBtn.style.display = currentQuestionIndex > 0 ? 'block' : 'none';

    // 다음 버튼
    const currentQuestion = surveyQuestions[currentQuestionIndex];
    const hasAnswer = answers[currentQuestion.id] &&
        (Array.isArray(answers[currentQuestion.id])
            ? answers[currentQuestion.id].length > 0
            : true);

    nextBtn.style.display = 'block';
    nextBtn.disabled = !hasAnswer;

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
        '응답을 분석하고 있습니다...',
        'UV 케어 패턴을 파악하는 중...',
        '맞춤 추천을 준비하고 있습니다...'
    ];

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
        document.getElementById('loading-message').textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
    }, 1500);

    // 타입 계산
    const uvType = calculateUVType();

    // Google Sheets에 데이터 전송
    sendToGoogleSheets(answers, uvType).then(() => {
        clearInterval(messageInterval);

        // 결과 페이지로 이동 (2초 후)
        setTimeout(() => {
            window.location.href = `results.html?type=${uvType}`;
        }, 2000);
    }).catch(error => {
        console.error('데이터 전송 실패:', error);
        clearInterval(messageInterval);

        // 에러가 발생해도 결과 페이지로 이동
        setTimeout(() => {
            window.location.href = `results.html?type=${uvType}`;
        }, 2000);
    });
}

// UV 타입 계산
function calculateUVType() {
    let scores = {
        sensitivity: 0,    // S(Sensitive) vs R(Resistant)
        approach: 0,       // P(Prevent) vs C(Care)
        lifestyle: 0,      // D(Daily) vs A(Active)
        level: 0          // A(Advanced) vs I(Intermediate)
    };

    // 각 질문의 점수 계산
    surveyQuestions.forEach(question => {
        const answer = answers[question.id];
        if (!answer) return;

        if (question.type === 'multiple') {
            // 복수 선택의 경우
            answer.forEach(value => {
                const option = question.options.find(opt => opt.value === value);
                if (option && question.category !== 'demographic') {
                    scores[question.category] += option.weight;
                }
            });
        } else {
            // 단일 선택의 경우
            const option = question.options.find(opt => opt.value === answer);
            if (option && question.category !== 'demographic') {
                scores[question.category] += option.weight;
            }
        }
    });

    // 타입 결정
    let type = '';

    // S(Sensitive) vs R(Resistant) - Q1, Q2, Q3
    type += scores.sensitivity >= 5 ? 'S' : 'R';

    // P(Prevent) vs C(Care) - Q4, Q5, Q6
    type += scores.approach >= 6 ? 'P' : 'C';

    // D(Daily) vs A(Active) - Q7, Q8
    type += scores.lifestyle >= 3 ? 'A' : 'D';

    // A(Advanced) vs I(Intermediate) - Q9, Q10, Q11
    type += scores.level >= 5 ? 'A' : 'I';

    return type;
}

// Google Sheets에 데이터 전송
async function sendToGoogleSheets(answers, uvType) {
    if (!GOOGLE_SHEETS_URL) {
        console.warn('Google Sheets URL이 설정되지 않았습니다.');
        return;
    }

    const data = {
        timestamp: new Date().toISOString(),
        uvType: uvType,
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

        console.log('데이터 전송 완료');
    } catch (error) {
        console.error('데이터 전송 중 오류:', error);
        throw error;
    }
}
