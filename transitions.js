// Inline Info Cards for Questions
// Shows helpful facts/validation above certain questions

const questionInfoCards = {
    // Q2: After symptoms question
    'q2': {
        type: 'fact',
        icon: '💡',
        text: '자외선 화상은 6-48시간 후 나타납니다. 지금 괜찮다고 안심하면 안 돼요!'
    },

    // Q3: After recovery speed
    'q3': {
        type: 'validation',
        icon: '😊',
        text: '걱정되시죠? 90%의 사람들이 자외선 지식을 과대평가해요.'
    },

    // Q4: After knowledge
    'q4': {
        type: 'fact',
        icon: '🪟',
        text: 'UV-A는 유리창을 50% 통과합니다. 실내도 안전하지 않아요!'
    },

    // Q5: REMOVED (duplicate with Q11)

    // Q6: After prevention
    'q6': {
        type: 'fact',
        icon: '⏰',
        text: '선크림 효과는 2-3시간뿐! 아침 한 번으로는 충분하지 않아요.'
    },

    // Q7-1 or Q8: After aftercare question (conditional)
    'q7_1': {
        type: 'validation',
        icon: '👏',
        text: '애프터 케어 하시는군요! 상위 30%에 속해요.'
    },

    'q8': {
        type: 'validation',
        icon: '😅',
        text: '괜찮아요. 88%가 애프터 케어를 건너뛰어요.'
    },

    // Q9: Before exposure time
    'q9': {
        type: 'fact',
        icon: '🧊',
        text: '72시간 내 관리가 피부 회복을 좌우합니다. 즉시 쿨링이 핵심!'
    },

    // Q10: Before positioning concept
    'q10': {
        type: 'fact',
        icon: '☁️',
        text: 'UV는 구름을 80% 통과해요. 날씨 앱이 아니라 UV 지수를 보세요!'
    },

    // Q11: Before format combo
    'q11': {
        type: 'validation',
        icon: '🏖️',
        text: 'UV 노출과 비타민D 합성의 균형이 중요해요!'
    },

    // Q12: Before exposure context
    'q12': {
        type: 'value',
        icon: '💡',
        text: '활동 타입에 따라 최적 제형이 달라요!'
    },

    // Q13: Before demographics
    'q13': {
        type: 'value',
        icon: '✨',
        text: '거의 다 왔어요! 당신에게 꼭 맞는 추천을 위한 정보 몇 가지만요.'
    },

    // Q14: After gender
    'q14': {
        type: 'fact',
        icon: '👵',
        text: '노화의 80%는 자외선 때문! 지금 관리가 10년 후를 결정합니다.'
    },

    // Q15: After age
    'q15': {
        type: 'validation',
        icon: '🎉',
        text: '피부 타입별 UV 민감도는 최대 10배까지 차이나요!'
    },

    // Q16: After skin type
    'q16': {
        type: 'value',
        icon: '🎁',
        text: '곧 당신만의 UV 케어 가이드를 받게 됩니다!'
    },

    // Q17: Bonus question
    'q17': {
        type: 'bonus',
        icon: '🍍',
        text: '마지막 질문! 제품 개발에 도움을 주세요 (결과에 영향 없음)'
    }
};

// Get info card for a question
function getInfoCard(questionId) {
    return questionInfoCards[questionId] || null;
}
