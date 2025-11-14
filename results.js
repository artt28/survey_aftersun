// UV 케어 타입 데이터
const uvTypes = {
    'SPDA': {
        name: '완벽주의 UV 파이터',
        description: '자외선에 민감하고 예방적 케어를 중시하는 당신! 일상적인 UV 관리의 진정한 고수입니다.',
        characteristics: [
            '자외선 노출 후 피부 변화를 빠르게 감지합니다',
            '매일 꼼꼼하게 선크림을 바르는 습관이 있어요',
            '실내에서도 UV 케어를 소홀히 하지 않습니다',
            '피부 노화 예방에 대한 높은 인식을 가지고 있어요',
            '고기능성 스킨케어 제품에 관심이 많습니다'
        ],
        product: '프리미엄 애프터썬 진정 미스트',
        productDescription: '고농축 진정 성분과 피부 회복 성분이 담긴 프리미엄 제품을 추천합니다. 메이크업 위에서도 사용 가능하며, 즉각적인 쿨링 효과와 함께 광노화 케어까지 한 번에 해결할 수 있습니다.'
    },
    'SPDI': {
        name: '일상 케어 마스터',
        description: '자외선에 민감하지만 실용적인 케어를 선호하는 당신! 꾸준한 관리로 건강한 피부를 유지합니다.',
        characteristics: [
            '자외선 노출 후 피부 증상을 잘 인지합니다',
            '매일 선케어를 실천하고 있어요',
            '간편하면서도 효과적인 제품을 선호합니다',
            '실내 생활이 주를 이루는 라이프스타일이에요',
            '가성비 좋은 제품에 관심이 있습니다'
        ],
        product: '데일리 진정 미스트',
        productDescription: '일상에서 부담 없이 사용할 수 있는 데일리 진정 미스트를 추천합니다. 가볍게 뿌리는 것만으로도 즉각적인 진정 효과를 느낄 수 있으며, 휴대하기 편한 사이즈로 언제 어디서나 UV 케어가 가능합니다.'
    },
    'SPAA': {
        name: '액티브 선케어 프로',
        description: '활동적인 라이프스타일 속에서도 철저한 UV 케어를 실천하는 당신! 야외 활동과 피부 건강을 모두 지킵니다.',
        characteristics: [
            '활발한 야외 활동에도 선케어를 잊지 않아요',
            '자외선 손상에 대한 높은 경각심을 가지고 있습니다',
            '운동이나 야외 취미를 즐기는 스타일이에요',
            '빠른 흡수와 지속력을 중요하게 생각합니다',
            '프리미엄 기능성 제품을 선호합니다'
        ],
        product: '스포츠 애프터썬 쿨링 미스트',
        productDescription: '강력한 쿨링 효과와 빠른 흡수력을 갖춘 스포츠용 애프터썬 미스트를 추천합니다. 땀과 피지에도 흘러내리지 않으며, 운동 후 즉각적인 진정 효과로 피부를 보호합니다.'
    },
    'SPAI': {
        name: '액티브 라이프 케어러',
        description: '활동적이면서도 실용적인 케어를 추구하는 당신! 효율적으로 피부를 관리합니다.',
        characteristics: [
            '야외 활동을 즐기며 선케어의 중요성을 알고 있어요',
            '간편하면서도 효과적인 제품을 찾고 있습니다',
            '휴대성과 사용 편의성을 중요하게 생각해요',
            '활동적인 라이프스타일을 가지고 있습니다',
            '합리적인 가격대를 선호합니다'
        ],
        product: '휴대용 쿨링 미스트',
        productDescription: '어디서나 간편하게 사용할 수 있는 휴대용 쿨링 미스트를 추천합니다. 컴팩트한 사이즈로 가방에 넣고 다니기 좋으며, 즉각적인 쿨링과 진정 효과를 제공합니다.'
    },
    'SCDA': {
        name: '진정 케어 엑스퍼트',
        description: '자외선 손상 후 집중 케어에 능숙한 당신! 피부 회복에 진심입니다.',
        characteristics: [
            '자외선 노출 후 즉시 진정 케어를 실천해요',
            '피부 손상 회복 성분에 대한 이해도가 높습니다',
            '다양한 진정 제품을 사용해본 경험이 있어요',
            '일상적인 UV 관리보다 사후 케어를 선호합니다',
            '고기능성 진정 제품에 관심이 많습니다'
        ],
        product: '인텐시브 리페어 미스트',
        productDescription: '손상된 피부를 집중 케어하는 인텐시브 리페어 미스트를 추천합니다. 고농축 진정 성분과 피부 회복 성분이 자외선으로 지친 피부를 빠르게 회복시켜줍니다.'
    },
    'SCDI': {
        name: '느긋한 케어 입문자',
        description: '이제 막 자외선 케어에 눈뜬 당신! 꾸준한 관리로 더 나은 피부를 만들어갈 수 있어요.',
        characteristics: [
            '자외선 케어의 필요성을 인식하기 시작했어요',
            '간단한 진정 케어를 시도하고 있습니다',
            '실내 생활이 많아 UV 노출이 적은 편이에요',
            '부담 없이 시작할 수 있는 제품을 찾고 있습니다',
            '합리적인 가격과 간편함을 중요시합니다'
        ],
        product: '올인원 데일리 진정 미스트',
        productDescription: '처음 시작하기 좋은 올인원 데일리 진정 미스트를 추천합니다. 간편하게 뿌리는 것만으로도 즉각적인 진정 효과를 느낄 수 있으며, 부담 없는 가격으로 꾸준히 사용할 수 있습니다.'
    },
    'SCAA': {
        name: '주말 아웃도어 러버',
        description: '주말 야외 활동 후 집중 케어가 필요한 당신! 활동적인 라이프스타일과 피부 관리의 균형을 찾아갑니다.',
        characteristics: [
            '주말이나 휴가 때 야외 활동을 즐겨요',
            '활동 후 피부 진정의 필요성을 느낍니다',
            '즉각적인 쿨링 효과를 선호해요',
            '강력한 진정 효과를 원합니다',
            '야외 활동 시 휴대하기 편한 제품을 찾고 있어요'
        ],
        product: '강력 진정 애프터썬 미스트',
        productDescription: '강한 자외선 노출 후 빠른 진정이 필요한 당신을 위한 강력 진정 애프터썬 미스트를 추천합니다. 즉각적인 쿨링 효과와 집중 진정 성분으로 달아오른 피부를 빠르게 진정시킵니다.'
    },
    'SCAI': {
        name: '자유로운 케어 비기너',
        description: '자유롭고 활동적이지만 케어에는 아직 입문 단계인 당신! 간편한 제품으로 시작해보세요.',
        characteristics: [
            '야외 활동을 즐기지만 UV 케어는 선택적이에요',
            '간편하고 빠른 케어 방법을 선호합니다',
            '필요할 때 바로 사용할 수 있는 제품을 원해요',
            '휴대성과 사용 편의성을 중요시합니다',
            '합리적인 가격대를 선호합니다'
        ],
        product: '퀵 쿨링 미스트',
        productDescription: '언제 어디서나 간편하게 사용할 수 있는 퀵 쿨링 미스트를 추천합니다. 가방에 넣고 다니기 좋은 사이즈로, 필요할 때 바로 뿌려 즉각적인 쿨링과 진정 효과를 경험할 수 있습니다.'
    },
    'RPDA': {
        name: '프리벤션 마스터',
        description: '피부가 강하지만 예방적 케어를 실천하는 현명한 당신! 지금의 건강한 피부를 오래 유지할 수 있어요.',
        characteristics: [
            '자외선에 강한 피부 타입이에요',
            '하지만 예방적 케어를 소홀히 하지 않습니다',
            '매일 선크림을 바르는 습관이 있어요',
            '장기적인 피부 건강을 생각합니다',
            '프리미엄 기능성 제품에 투자를 아끼지 않아요'
        ],
        product: '프리벤션 케어 미스트',
        productDescription: '예방적 케어에 최적화된 프리벤션 케어 미스트를 추천합니다. 항산화 성분과 UV 차단 보조 성분이 함유되어 있어, 일상적인 UV 케어를 한층 강화할 수 있습니다.'
    },
    'RPDI': {
        name: '스마트 케어러',
        description: '피부가 강하고 일상적인 케어를 실천하는 당신! 현명한 관리로 건강한 피부를 유지합니다.',
        characteristics: [
            '자외선에 비교적 강한 피부를 가지고 있어요',
            '꾸준한 일상 케어를 실천하고 있습니다',
            '실용적이고 효과적인 제품을 선호해요',
            '실내 생활이 주를 이룹니다',
            '가성비를 중요하게 생각해요'
        ],
        product: '스마트 데일리 미스트',
        productDescription: '일상적인 UV 케어에 적합한 스마트 데일리 미스트를 추천합니다. 가볍게 사용하면서도 필요한 진정과 보습 효과를 제공하며, 합리적인 가격으로 꾸준히 사용할 수 있습니다.'
    },
    'RPAA': {
        name: '아웃도어 워리어',
        description: '강한 피부와 활동적인 라이프스타일을 가진 당신! 하지만 사전 케어를 통해 더 건강한 피부를 유지할 수 있어요.',
        characteristics: [
            '야외 활동을 즐기는 액티브한 스타일이에요',
            '피부가 비교적 강해 회복이 빠릅니다',
            '하지만 예방적 케어의 중요성을 알고 있어요',
            '기능성과 지속력을 중요하게 생각합니다',
            '활동성을 방해하지 않는 제품을 선호해요'
        ],
        product: '아웃도어 프로텍션 미스트',
        productDescription: '활동적인 당신을 위한 아웃도어 프로텍션 미스트를 추천합니다. 강력한 항산화 성분과 쿨링 효과로 야외 활동 전후 피부를 보호하며, 땀과 피지에도 밀리지 않는 지속력을 자랑합니다.'
    },
    'RPAI': {
        name: '프리스타일 액티브',
        description: '자유롭고 활동적인 당신! 간편한 케어로도 건강한 피부를 유지할 수 있어요.',
        characteristics: [
            '야외 활동을 즐기며 피부도 건강한 편이에요',
            '간편하고 실용적인 케어를 선호합니다',
            '휴대성과 사용 편의성을 중요시해요',
            '필요할 때 빠르게 사용할 수 있는 제품을 원합니다',
            '합리적인 가격대를 선호해요'
        ],
        product: '프리스타일 케어 미스트',
        productDescription: '자유로운 당신의 라이프스타일에 맞는 프리스타일 케어 미스트를 추천합니다. 가볍고 간편하게 사용하면서도 필요한 보호와 진정 효과를 제공하며, 언제 어디서나 부담 없이 사용할 수 있습니다.'
    },
    'RCDA': {
        name: '진정 케어 신봉자',
        description: '피부가 강하지만 진정 케어의 효과를 믿는 당신! 꾸준한 사후 관리로 피부 컨디션을 유지합니다.',
        characteristics: [
            '피부 증상은 적지만 진정 케어를 실천해요',
            '다양한 진정 제품을 사용해본 경험이 있습니다',
            '피부 회복과 진정 성분에 관심이 많아요',
            '일상적인 피부 관리를 중요하게 생각합니다',
            '고품질 제품에 투자를 아끼지 않아요'
        ],
        product: '수딩 케어 미스트',
        productDescription: '진정 케어를 중시하는 당신을 위한 수딩 케어 미스트를 추천합니다. 다양한 진정 성분과 보습 성분이 피부 컨디션을 최적으로 유지하며, 일상적인 사용으로 건강한 피부를 만들어갑니다.'
    },
    'RCDI': {
        name: '이지 케어러',
        description: '피부가 강하고 여유로운 당신! 간단한 케어로도 충분히 건강한 피부를 유지할 수 있어요.',
        characteristics: [
            '자외선에 강한 피부 타입이에요',
            '특별한 증상은 잘 느끼지 못합니다',
            '간단한 수준의 케어를 선호해요',
            '실내 생활이 많습니다',
            '부담 없는 가격과 간편함을 중요시해요'
        ],
        product: '심플 케어 미스트',
        productDescription: '간편한 케어를 선호하는 당신에게 심플 케어 미스트를 추천합니다. 복잡하지 않으면서도 필요한 보습과 진정 효과를 제공하며, 부담 없는 가격으로 일상에서 가볍게 사용할 수 있습니다.'
    },
    'RCAA': {
        name: '주말 워리어',
        description: '주말 야외 활동 후 케어를 실천하는 당신! 활동적인 라이프스타일 속에서도 피부 관리를 잊지 않습니다.',
        characteristics: [
            '주말에 야외 활동을 즐깁니다',
            '활동 후 간단한 진정 케어를 해요',
            '피부가 강해 회복이 빠른 편입니다',
            '즉각적인 효과를 선호해요',
            '휴대하기 편한 제품을 찾고 있습니다'
        ],
        product: '위크엔드 리커버리 미스트',
        productDescription: '주말 활동 후 빠른 회복을 위한 위크엔드 리커버리 미스트를 추천합니다. 즉각적인 쿨링과 진정 효과로 야외 활동 후 피부를 빠르게 회복시키며, 컴팩트한 사이즈로 휴대하기 좋습니다.'
    },
    'RCAI': {
        name: '캐주얼 케어러',
        description: '여유롭고 자유로운 당신! 필요할 때 간편하게 케어하는 스타일입니다.',
        characteristics: [
            '피부가 건강하고 회복력이 좋아요',
            '야외 활동을 즐기지만 특별한 증상은 적습니다',
            '필요할 때만 간단히 케어해요',
            '간편하고 빠른 제품을 선호합니다',
            '합리적인 가격대를 중요시해요'
        ],
        product: '캐주얼 쿨링 미스트',
        productDescription: '캐주얼한 케어를 선호하는 당신에게 캐주얼 쿨링 미스트를 추천합니다. 필요할 때 간편하게 사용할 수 있으며, 즉각적인 쿨링 효과와 함께 가벼운 보습을 제공합니다.'
    }
};

// 타입 분해 정보
const typeBreakdown = {
    'S': { meaning: '자외선 민감도', description: 'Sensitive - 민감함' },
    'R': { meaning: '자외선 민감도', description: 'Resistant - 강함' },
    'P': { meaning: '케어 접근법', description: 'Prevent - 예방' },
    'C': { meaning: '케어 접근법', description: 'Care - 진정' },
    'D': { meaning: '라이프스타일', description: 'Daily - 일상적' },
    'A': { meaning: '라이프스타일', description: 'Active - 활동적' },
    'I': { meaning: '케어 수준', description: 'Intermediate - 입문' }
};

// 페이지 로드 시 실행
window.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');

    if (!type || !uvTypes[type]) {
        // 타입이 없으면 메인으로
        window.location.href = 'index.html';
        return;
    }

    displayResults(type);
});

// 결과 표시
function displayResults(type) {
    const data = uvTypes[type];

    // 타입 코드
    document.getElementById('type-code').textContent = type;

    // 타입 이름
    document.getElementById('type-name').textContent = data.name;

    // 타입 설명
    document.getElementById('type-description').textContent = data.description;

    // 타입 분해
    const breakdownHtml = type.split('').map(letter => {
        const info = typeBreakdown[letter];
        return `
            <div class="breakdown-item">
                <div class="letter">${letter}</div>
                <div class="meaning">${info.meaning}</div>
                <div class="description">${info.description}</div>
            </div>
        `;
    }).join('');
    document.getElementById('type-breakdown').innerHTML = breakdownHtml;

    // 특징
    const characteristicsHtml = data.characteristics.map(char =>
        `<li>${char}</li>`
    ).join('');
    document.getElementById('characteristics-list').innerHTML = characteristicsHtml;

    // 추천 제품
    document.getElementById('product-name').textContent = data.product;
    document.getElementById('product-description').textContent = data.productDescription;

    // 메타 태그 업데이트 (공유 시)
    updateMetaTags(type, data);
}

// 메타 태그 업데이트
function updateMetaTags(type, data) {
    document.title = `${data.name} (${type}) - UV 케어 타입 테스트`;

    // Open Graph 태그
    const ogTitle = document.querySelector('meta[property="og:title"]') || createMetaTag('property', 'og:title');
    ogTitle.content = `나는 ${data.name} (${type})`;

    const ogDescription = document.querySelector('meta[property="og:description"]') || createMetaTag('property', 'og:description');
    ogDescription.content = data.description;

    const ogUrl = document.querySelector('meta[property="og:url"]') || createMetaTag('property', 'og:url');
    ogUrl.content = window.location.href;
}

function createMetaTag(attr, value) {
    const meta = document.createElement('meta');
    meta.setAttribute(attr, value);
    document.head.appendChild(meta);
    return meta;
}

// 공유 기능
function shareKakao() {
    const type = new URLSearchParams(window.location.search).get('type');
    const data = uvTypes[type];

    alert('카카오톡 공유 기능은 카카오 개발자 등록 후 사용 가능합니다.\n\n대신 링크 복사 기능을 이용해주세요!');
    copyLink();
}

function shareTwitter() {
    const type = new URLSearchParams(window.location.search).get('type');
    const data = uvTypes[type];
    const text = `나의 UV 케어 타입은 "${data.name}" (${type})!\n당신의 타입은?`;
    const url = window.location.origin + window.location.pathname.replace('results.html', 'index.html');

    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}

function shareFacebook() {
    const url = window.location.origin + window.location.pathname.replace('results.html', 'index.html');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}

function copyLink() {
    const url = window.location.origin + window.location.pathname.replace('results.html', 'index.html');

    navigator.clipboard.writeText(url).then(() => {
        alert('링크가 복사되었습니다!\n친구에게 공유해보세요.');
    }).catch(() => {
        // 폴백: 텍스트 영역 사용
        const textarea = document.createElement('textarea');
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('링크가 복사되었습니다!\n친구에게 공유해보세요.');
    });
}

// 결과 이미지 다운로드
function downloadResult() {
    alert('결과 이미지 다운로드 기능은 html2canvas 라이브러리를 추가하면 구현할 수 있습니다.\n\n현재는 스크린샷을 찍어 저장해주세요!');
}

// 이메일 구독
async function subscribeEmail() {
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value.trim();
    const message = document.getElementById('subscribe-message');

    if (!email) {
        message.textContent = '이메일을 입력해주세요.';
        message.style.color = '#e74c3c';
        return;
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        message.textContent = '올바른 이메일 형식이 아닙니다.';
        message.style.color = '#e74c3c';
        return;
    }

    // Google Sheets에 저장
    try {
        const type = new URLSearchParams(window.location.search).get('type');
        const subscribeData = {
            timestamp: new Date().toISOString(),
            email: email,
            uvType: type,
            action: 'subscribe'
        };

        if (GOOGLE_SHEETS_URL) {
            await fetch(GOOGLE_SHEETS_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(subscribeData)
            });
        }

        message.textContent = '✓ 알림 신청이 완료되었습니다!';
        message.style.color = '#27ae60';
        emailInput.value = '';
    } catch (error) {
        console.error('구독 실패:', error);
        message.textContent = '알림 신청 중 오류가 발생했습니다.';
        message.style.color = '#e74c3c';
    }
}
