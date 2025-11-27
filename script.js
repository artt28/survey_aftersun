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

    // Q5. 제형 & 컨셉 선호 (리서치)
    {
        id: 'q5',
        section: 'behavior',
        question: '🌞 야외에서 30분 이상 있을 예정이라면, 당신의 선택은?',
        type: 'single',
        category: 'format_preference',
        options: [
            { value: 'mist_burden_relief', label: '가벼운 미스트로 선크림 부담 줄이기', weight: 2, research: { format: 'mist', concept: 'burden_relief' } },
            { value: 'stick_protection', label: '스틱으로 자외선 차단 덧바르기', weight: 3, research: { format: 'stick', concept: 'sun_protection' } },
            { value: 'gel_cooling', label: '쿨링 젤로 열 받은 피부 진정', weight: 1, research: { format: 'gel', concept: 'cooling' } },
            { value: 'nothing', label: '특별히 안 한다', weight: 0, research: { format: 'none', concept: 'none' } }
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

    // Q7-1. 사용 맥락 - 언제 (리서치)
    {
        id: 'q7_1',
        section: 'behavior',
        question: '💧 어떤 순간에 피부 진정이 가장 필요하다고 느끼시나요?',
        description: '해당되는 모든 순간을 선택해주세요',
        type: 'multiple',
        category: 'usage_context',
        condition: { questionId: 'q6', value: 'yes' },
        options: [
            { value: 'commute', label: '햇빛 쬔 출퇴근 직후', weight: 2, research: 'outdoor_commute' },
            { value: 'lunch', label: '점심 외출 후 사무실 복귀 시', weight: 2, research: 'midday_return' },
            { value: 'makeup_melt', label: '메이크업이 무너지고 열감이 느껴질 때', weight: 3, research: 'over_makeup' },
            { value: 'evening', label: '하루 끝 집에서 저녁 루틴으로', weight: 1, research: 'evening_routine' },
            { value: 'exercise', label: '운동·야외활동 직후', weight: 3, research: 'post_exercise' },
            { value: 'indoor_ac', label: '실내 에어컨·건조함 느껴질 때', weight: 1, research: 'indoor_dryness' }
        ]
    },

    // Q7-2. 사이즈/휴대성 (리서치)
    {
        id: 'q7_2',
        section: 'behavior',
        question: '🎒 가방에 넣어 다닐 진정 제품을 고른다면?',
        type: 'single',
        category: 'size_portability',
        condition: { questionId: 'q6', value: 'yes' },
        options: [
            { value: 'mini_50ml', label: '50ml 미니 사이즈 - 가볍고 휴대 편함 (1주일용)', weight: 2, research: { size: '50ml', priority: 'portability' } },
            { value: 'standard_100ml', label: '100ml 표준 사이즈 - 휴대성과 용량 균형 (2주용)', weight: 2, research: { size: '100ml', priority: 'balance' } },
            { value: 'large_150ml', label: '150ml+ 대용량 - 가성비 좋고 자주 안 사도 됨 (집에 두기)', weight: 1, research: { size: '150ml+', priority: 'value' } },
            { value: 'no_carry', label: '휴대 안 함 - 집에서만 사용', weight: 0, research: { size: 'home_only', priority: 'home_only' } }
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
            { value: 'other', label: '기타', weight: 0, hasTextInput: true }
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
            { value: 'none', label: '거의 없음', weight: 0 },
            { value: 'other', label: '기타', weight: 1, hasTextInput: true }
        ]
    },

    // Q10. 포지셔닝 컨셉 테스트 (리서치)
    {
        id: 'q10',
        section: 'occasion',
        question: '☀️ 한여름 야외 일정이 생겼을 때, 가장 걱정되는 것은?',
        description: '가장 걱정되는 것 하나만 선택해주세요',
        type: 'single',
        category: 'positioning_concept',
        options: [
            { value: 'sunscreen_heavy', label: '선크림이 덧발라질수록 무겁고 끈적여서 피부가 답답함', weight: 2, research: { concept: 'burden_relief', pain_point: 'heaviness' } },
            { value: 'protection_fade', label: '땀으로 자외선 차단이 지워져서 피부가 탈 것 같음', weight: 3, research: { concept: 'sun_protection', pain_point: 'fade' } },
            { value: 'heat_redness', label: '열 받아서 얼굴이 빨개지고 화끈거림', weight: 3, research: { concept: 'cooling', pain_point: 'heat' } },
            { value: 'makeup_break', label: '메이크업이 무너지고 들뜨는 것', weight: 2, research: { concept: 'makeup_fix', pain_point: 'makeup' } }
        ]
    },

    // Q11. 제형 + 베네핏 조합 (리서치)
    {
        id: 'q11',
        section: 'occasion',
        question: '🌴 햇빛 많이 쬔 날, 외출 중 바로 쓸 수 있다면?',
        description: '하나만 선택해주세요',
        type: 'single',
        category: 'format_concept_combo',
        options: [
            { value: 'mist_light', label: '미스트 - 메이크업 위에도 쓱, 선크림 부담 없이 가볍게', weight: 2, research: { format: 'mist', benefit: 'lightweight_over_makeup' } },
            { value: 'stick_protection', label: '스틱 - 손 안 더럽히고 빠르게, UV 차단 연장', weight: 3, research: { format: 'stick', benefit: 'quick_sun_protection' } },
            { value: 'gel_cooling', label: '젤 - 물처럼 시원하게, 열 받은 피부 즉시 진정', weight: 2, research: { format: 'gel', benefit: 'immediate_cooling' } },
            { value: 'sheet_intensive', label: '시트팩 - 5분 붙이기, 집중 진정 (휴대 불편해도 OK)', weight: 1, research: { format: 'sheet', benefit: 'intensive_home' } }
        ]
    },

    // Q12. 노출 맥락 - 어디서 (리서치)
    {
        id: 'q12',
        section: 'occasion',
        question: '📍 평소 어떤 상황에서 UV 노출이 많은가요?',
        description: '해당되는 모든 상황을 선택해주세요',
        type: 'multiple',
        category: 'exposure_context',
        options: [
            { value: 'commute_walk', label: '도보 출퇴근 (20분 이상)', weight: 2, research: 'daily_commute' },
            { value: 'driving', label: '운전 (30분 이상)', weight: 2, research: 'driving' },
            { value: 'outdoor_lunch', label: '점심시간 야외 이동', weight: 2, research: 'midday_outdoor' },
            { value: 'exercise', label: '야외 운동·러닝', weight: 3, research: 'exercise' },
            { value: 'weekend_outdoor', label: '주말 야외 활동 (카페·공원·등산)', weight: 2, research: 'leisure' },
            { value: 'window_seat', label: '창가 자리 장시간', weight: 1, research: 'indoor_window' },
            { value: 'minimal', label: '거의 없음 (실내 위주)', weight: 0, research: 'indoor_primary' }
        ]
    },

    // ===== 섹션 4: 응답자 정보 (Basics) =====

    // Q13. 성별
    {
        id: 'q13',
        section: 'demographics',
        question: '👤 성별을 선택해주세요',
        type: 'single',
        category: 'gender',
        options: [
            { value: 'female', label: '여성', weight: 0 },
            { value: 'male', label: '남성', weight: 0 },
            { value: 'other', label: '기타', weight: 0 },
            { value: 'prefer_not', label: '응답 안 함', weight: 0 }
        ]
    },

    // Q14. 연령대
    {
        id: 'q14',
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

    // Q15. 피부 타입
    {
        id: 'q15',
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
    },

    // Q16. 이메일 (선택사항)
    {
        id: 'q16',
        section: 'contact',
        question: '📧 결과를 이메일로 받고 싶으신가요?',
        description: '선택사항입니다. 나중에 맞춤형 UV 케어 팁을 보내드릴게요!',
        type: 'email',
        category: 'email',
        optional: true,
        placeholder: 'example@email.com'
    },

    // Q17. 파인애플 포지셔닝 테스트 (보너스 질문, 선택사항)
    {
        id: 'q17',
        section: 'bonus',
        question: '🍍 만약 \'파인애플 효소\' 함유 애프터썬 제품이 나온다면?',
        description: '🎁 마지막 질문 하나만 더! (결과에 영향 없음, 제품 개발 참고용)<br>당신이 가장 끌리는 컨셉 하나만 선택해주세요',
        type: 'single',
        category: 'pineapple_positioning',
        optional: true,
        options: [
            { value: 'tropical_cooling', label: '트로피컬 쿨링 - 상큼하고 시원한 쿨링감', weight: 0, research: 'sensory_fresh' },
            { value: 'enzyme_power', label: '효소 진정 - 빠르고 강력한 진정 효과', weight: 0, research: 'functional_powerful' },
            { value: 'natural_gentle', label: '자연 유래 - 천연 성분으로 순하게', weight: 0, research: 'natural_gentle' },
            { value: 'exfoliation', label: '각질케어 겸용 - 진정+각질 2in1', weight: 0, research: 'multi_benefit_exfoliation' },
            { value: 'effect_matters', label: '성분보다 효과가 중요', weight: 0, research: 'ingredient_agnostic' }
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

    // 인라인 정보 카드 가져오기
    const infoCard = typeof getInfoCard === 'function' ? getInfoCard(question.id) : null;

    // 질문 HTML 생성
    let html = `
        <div class="question-card">
            ${infoCard ? `
                <div class="info-card ${infoCard.type}">
                    <span class="info-icon">${infoCard.icon}</span>
                    <p class="info-text">${infoCard.text}</p>
                </div>
            ` : ''}
            <span class="question-number">질문 ${currentQuestionIndex + 1}</span>
            <h2>${question.question}</h2>
            ${question.description ? `<p class="question-description">${question.description}</p>` : ''}
            <div class="options">
    `;

    // 이메일 타입 질문
    if (question.type === 'email') {
        html += `
            <div style="text-align: center; padding: 20px 0;">
                <input type="email"
                       id="${question.id}_input"
                       placeholder="${question.placeholder || 'example@email.com'}"
                       value="${answers[question.id] || ''}"
                       style="width: 100%; max-width: 400px; padding: 15px; font-size: 1.1em; border: 2px solid #ddd; border-radius: 10px; text-align: center;"
                       oninput="handleEmailInput('${question.id}', this.value)">
                <p style="margin-top: 15px; color: #666; font-size: 0.9em;">
                    ${question.optional ? '선택사항입니다. 건너뛰려면 "다음" 버튼을 클릭하세요.' : ''}
                </p>
            </div>
        `;
    } else {
        // 기존 옵션 타입 질문
        question.options.forEach((option, index) => {
            const inputType = question.type === 'multiple' ? 'checkbox' : 'radio';

            // 체크 여부 확인
            let isChecked = false;
            if (answers[question.id]) {
                if (question.type === 'multiple') {
                    // 배열에서 "other" 또는 "other:텍스트" 찾기
                    isChecked = answers[question.id].includes(option.value) ||
                                (option.value === 'other' && answers[question.id].some(ans =>
                                    typeof ans === 'string' && ans.startsWith('other:')
                                ));
                } else {
                    // 단일 선택
                    isChecked = answers[question.id] === option.value ||
                                (option.value === 'other' && typeof answers[question.id] === 'string' &&
                                 answers[question.id].startsWith('other:'));
                }
            }

            html += `
                <div class="option ${isChecked ? 'selected' : ''}" onclick="selectOption(event, '${question.id}', '${option.value}', '${question.type}', this, ${option.hasTextInput || false})">
                    <input type="${inputType}"
                           id="${question.id}_${index}"
                           name="${question.id}"
                           value="${option.value}"
                           ${isChecked ? 'checked' : ''}>
                    <label>${option.label}</label>
                </div>
            `;

            // 텍스트 입력이 필요한 옵션인 경우
            if (option.hasTextInput) {
                let otherText = '';
                let showInput = false;

                if (question.type === 'multiple' && Array.isArray(answers[question.id])) {
                    // 배열에서 "other:텍스트" 찾기
                    const otherAnswer = answers[question.id].find(ans =>
                        typeof ans === 'string' && ans.startsWith('other:')
                    );
                    if (otherAnswer) {
                        otherText = otherAnswer.replace('other:', '');
                        showInput = true;
                    } else if (answers[question.id].includes('other')) {
                        showInput = true;
                    }
                } else if (typeof answers[question.id] === 'string') {
                    // 단일 선택
                    if (answers[question.id].startsWith('other:')) {
                        otherText = answers[question.id].replace('other:', '');
                        showInput = true;
                    } else if (answers[question.id] === 'other') {
                        showInput = true;
                    }
                }

                html += `
                    <div id="${question.id}_other_input" style="display: ${showInput ? 'block' : 'none'}; margin: 10px 0 20px 0; padding: 0 20px;">
                        <input type="text"
                               id="${question.id}_other_text"
                               placeholder="직접 입력해주세요"
                               value="${otherText}"
                               style="width: 100%; padding: 12px; font-size: 1em; border: 2px solid #ddd; border-radius: 8px;"
                               oninput="handleOtherInput('${question.id}', this.value)">
                    </div>
                `;
            }
        });
    }

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
function selectOption(event, questionId, value, type, element, hasTextInput = false) {
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

            // "기타" 체크 해제 시 텍스트 입력 숨김
            if (hasTextInput && value === 'other') {
                const otherInput = document.getElementById(`${questionId}_other_input`);
                if (otherInput) {
                    otherInput.style.display = 'none';
                }
                // "other:텍스트" 형태의 답변도 제거
                answers[questionId] = answers[questionId].filter(ans =>
                    typeof ans !== 'string' || !ans.startsWith('other:')
                );
            }
        } else {
            answers[questionId].push(value);
            element.classList.add('selected');
            if (checkbox) checkbox.checked = true;

            // "기타" 체크 시 텍스트 입력 표시
            if (hasTextInput && value === 'other') {
                const otherInput = document.getElementById(`${questionId}_other_input`);
                const otherText = document.getElementById(`${questionId}_other_text`);
                if (otherInput) {
                    otherInput.style.display = 'block';
                    if (otherText) otherText.focus();
                }
            }
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

        // 텍스트 입력 표시/숨김
        if (hasTextInput) {
            const otherInput = document.getElementById(`${questionId}_other_input`);
            const otherText = document.getElementById(`${questionId}_other_text`);
            if (otherInput) {
                otherInput.style.display = 'block';
                if (otherText) otherText.focus();
            }
        } else {
            // 다른 옵션 선택 시 텍스트 입력 숨김
            const otherInput = document.getElementById(`${questionId}_other_input`);
            if (otherInput) {
                otherInput.style.display = 'none';
            }
        }
    }

    updateNavigation();
}

// 이메일 입력 처리
function handleEmailInput(questionId, value) {
    answers[questionId] = value;
}

// 기타 옵션 텍스트 입력 처리
function handleOtherInput(questionId, value) {
    const currentAnswer = answers[questionId];

    // 배열인 경우 (multiple choice)
    if (Array.isArray(currentAnswer)) {
        // 기존 "other" 또는 "other:텍스트" 제거
        answers[questionId] = currentAnswer.filter(ans =>
            ans !== 'other' && (typeof ans !== 'string' || !ans.startsWith('other:'))
        );

        // 새로운 값 추가
        if (value.trim()) {
            answers[questionId].push('other:' + value);
        } else {
            answers[questionId].push('other');
        }
    } else {
        // 단일 선택인 경우
        if (value.trim()) {
            answers[questionId] = 'other:' + value;
        } else {
            answers[questionId] = 'other';
        }
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

    // 이메일 타입 질문은 선택사항이므로 항상 진행 가능
    if (currentQuestion.type === 'email' && currentQuestion.optional) {
        hasAnswer = true;
    } else if (Array.isArray(answers[currentQuestion.id])) {
        // multiple: 배열이 비어있지 않은지 확인
        hasAnswer = answers[currentQuestion.id].length > 0;
    } else {
        // single: 값이 있는지 확인
        const answer = answers[currentQuestion.id];
        hasAnswer = !!answer;

        // "other" 옵션인 경우, 텍스트 입력이 있어야 함
        if (answer === 'other') {
            hasAnswer = false;  // 텍스트 입력 없으면 진행 불가
        }
    }

    nextBtn.style.display = 'block';
    nextBtn.disabled = !hasAnswer;

    // 마지막 질문인지 확인
    const nextIndex = getNextQuestionIndex(1);
    if (nextIndex >= surveyQuestions.length) {
        nextBtn.textContent = '결과 보기 ▶';
    } else {
        nextBtn.textContent = '다음 ▶';
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

        // demographics 및 research-only 질문은 제외
        const excludedCategories = ['age', 'skin_type', 'gender', 'email', 'pineapple_positioning'];
        if (excludedCategories.includes(question.category)) return;

        if (question.type === 'multiple') {
            // 복수 선택의 경우
            answer.forEach(value => {
                const option = question.options.find(opt => opt.value === value);
                if (option) {
                    if (question.category === 'sensitivity') scores.sensitivity += option.weight;
                    else if (question.category === 'knowledge') scores.knowledge += option.weight;
                    else if (question.category === 'prevention') scores.prevention += option.weight;
                    else if (question.category === 'usage_context') {
                        // Q7-1: 사용 맥락은 애프터케어 점수에 반영
                        scores.aftercare += option.weight;
                    }
                    else if (question.category === 'exposure_context') {
                        // Q12: 노출 맥락은 노출도 점수에 반영
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
                else if (question.category === 'format_preference' || question.category === 'positioning_concept' || question.category === 'format_concept_combo') {
                    // Q5, Q10, Q11: 리서치 질문이지만 타입 계산에도 참여
                    // 사용자의 케어 성향을 간접적으로 반영
                    scores.prevention += option.weight;
                }
                else if (question.category === 'size_portability') {
                    // Q7-2: 사이즈 선호는 애프터케어 점수에 반영
                    scores.aftercare += option.weight;
                }
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

    // 타입 매핑 (9개 동물 캐릭터 타입)
    let type = 'baby_chick';  // 기본값: UV 새싹

    if (sensitivityLevel === 'high') {
        if (careType === 'prevention') {
            type = exposureLevel === 'high' ? 'desert_fox' : 'shadow_panda';
        } else if (careType === 'aftercare') {
            type = exposureLevel === 'high' ? 'cooling_dolphin' : 'glass_swan';
        } else {
            type = 'baby_chick';
        }
    } else if (sensitivityLevel === 'medium') {
        if (careType === 'prevention') {
            type = 'balance_raccoon';
        } else if (careType === 'aftercare') {
            type = 'action_cheetah';
        } else {
            type = 'baby_chick';
        }
    } else {  // low sensitivity
        if (careType === 'unconcerned') {
            type = exposureLevel === 'high' ? 'sun_eagle' : 'indoor_cat';
        } else if (careType === 'prevention') {
            type = 'action_cheetah';
        } else {
            type = 'indoor_cat';
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
